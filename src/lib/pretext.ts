/* Measured-text helpers built on @chenglou/pretext.
   pretext measures multiline text without triggering DOM reflow; we
   use it for two genuine measurement-driven features:
     1. useFitText  — a masthead that fills its container width exactly.
     2. measureLineWidth / useBentoSpans — content-aware bento sizing.
   Every pretext call is guarded: if the API shape differs the site
   still renders, falling back to CSS-only behaviour. */
import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import * as pretext from '@chenglou/pretext';

/* ---- low-level guarded primitives -------------------------------- */

type Prepared = ReturnType<typeof pretext.prepare>;

function prepare(text: string, font: string): Prepared | null {
  try {
    return pretext.prepare(text, font);
  } catch {
    return null;
  }
}

function layout(
  prepared: Prepared,
  maxWidth: number,
  lineHeight: number,
): { height: number; lineCount: number } | null {
  try {
    return pretext.layout(prepared, maxWidth, lineHeight);
  } catch {
    return null;
  }
}

/** Natural single-line width of `text` at `font` (CSS font shorthand).
    Uses pretext's `measureNaturalWidth` — no DOM, no reflow. */
export function measureLineWidth(text: string, font: string): number {
  try {
    const prepared = pretext.prepareWithSegments(text, font);
    return pretext.measureNaturalWidth(prepared);
  } catch {
    return text.length * 8; // crude fallback if pretext is unavailable
  }
}

/* ---- useElementWidth: track a container's width ------------------- */

export function useElementWidth<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return { ref, width };
}

/* ---- useFitText: size text to fill its container ------------------ */

interface FitTextOptions {
  text: string;
  /** Font family list, e.g. `"Fraunces, serif"`. */
  fontFamily: string;
  fontWeight?: number;
  maxLines?: number;
  minSize?: number;
  maxSize?: number;
  lineHeightRatio?: number;
}

export function useFitText<T extends HTMLElement>({
  text,
  fontFamily,
  fontWeight = 700,
  maxLines = 2,
  minSize = 18,
  maxSize = 220,
  lineHeightRatio = 1.04,
}: FitTextOptions) {
  const ref = useRef<T>(null);
  const [fontSize, setFontSize] = useState(minSize);

  const recompute = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const width = el.clientWidth;
    if (width <= 0) return;

    let lo = minSize;
    let hi = maxSize;
    let best = minSize;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      const prepared = prepare(text, `${fontWeight} ${mid}px ${fontFamily}`);
      if (!prepared) {
        best = mid; // pretext unavailable — let CSS clamp take over
        break;
      }
      const res = layout(prepared, width, mid * lineHeightRatio);
      if (res && res.lineCount <= maxLines) {
        best = mid;
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    setFontSize(best);
  }, [text, fontFamily, fontWeight, maxLines, minSize, maxSize, lineHeightRatio]);

  useLayoutEffect(() => {
    recompute();
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(recompute);
    ro.observe(el);
    if (typeof document !== 'undefined' && document.fonts?.ready) {
      document.fonts.ready.then(recompute).catch(() => {});
    }
    return () => ro.disconnect();
  }, [recompute]);

  return { ref, fontSize };
}

/* ---- useBentoSpans: content-aware column spans -------------------- */

export interface BentoSpanInput {
  /** Text whose length drives the cell's span. */
  text: string;
  /** Optional baseline weight from data — used as a floor. */
  floor?: number;
}

/** Given items + the bento's pixel width + total columns, returns a
    column span (1..maxSpan) per item, sized to its measured text so the
    grid packs tightly instead of leaving a big empty block. */
export function useBentoSpans(
  items: BentoSpanInput[],
  containerWidth: number,
  {
    columns = 12,
    font = '600 14px JetBrains Mono, monospace',
    minSpan = 2,
    maxSpan = 6,
    padding = 56,
  }: { columns?: number; font?: string; minSpan?: number; maxSpan?: number; padding?: number } = {},
): number[] {
  return items.map((item) => {
    if (containerWidth <= 0) return Math.max(minSpan, item.floor ?? minSpan);
    const colWidth = containerWidth / columns;
    const textWidth = measureLineWidth(item.text, font) + padding;
    const needed = Math.ceil(textWidth / colWidth);
    const span = Math.min(maxSpan, Math.max(minSpan, item.floor ?? 0, needed));
    return span;
  });
}

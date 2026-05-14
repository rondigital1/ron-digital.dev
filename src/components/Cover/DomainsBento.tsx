import { domains } from '../../data';
import { BentoCell } from '../common/BentoCell';
import { useBentoSpans, useElementWidth } from '../../lib/pretext';
import styles from './DomainsBento.module.css';

const ROW_SPAN: Record<string, number> = { sm: 1, md: 1, lg: 2 };
const FLOOR: Record<string, number> = { sm: 3, md: 4, lg: 5 };

/** Domains shown as a content-aware bento grid (neo-brutalist).
    `useElementWidth` tracks the container; `useBentoSpans` measures each
    label with pretext to assign a column span so cells pack tightly. */
export function DomainsBento() {
  const { ref, width } = useElementWidth<HTMLDivElement>();
  const cols = width < 420 ? 4 : width < 760 ? 8 : 12;

  const spans = useBentoSpans(
    domains.map((d) => ({ text: d.label, floor: FLOOR[d.weight] })),
    width,
    {
      columns: cols,
      font: '600 13px "JetBrains Mono", monospace',
      minSpan: cols <= 4 ? 2 : 3,
      maxSpan: cols,
      padding: 56,
    },
  );

  return (
    <div className={styles.wrap}>
      <span className={styles.label}>Domains</span>
      <div className={styles.bento} ref={ref} style={{ ['--cols' as string]: cols }}>
        {domains.map((domain, i) => (
          <BentoCell
            key={domain.label}
            tone={domain.tone}
            className={styles.cell}
            interactive
            style={{
              gridColumn: `span ${Math.min(spans[i], cols)}`,
              gridRow: `span ${ROW_SPAN[domain.weight]}`,
            }}
          >
            <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
            <span className={styles.nameGroup}>
              <span className={styles.name}>{domain.label}</span>
              <span className={styles.sub}>{domain.sub}</span>
            </span>
          </BentoCell>
        ))}
      </div>
    </div>
  );
}

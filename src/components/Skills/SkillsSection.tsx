import { skillGroups } from '../../data';
import { SectionHead } from '../common/SectionHead';
import { SkillBentoCard } from './SkillBentoCard';
import { LanguagesCard } from './LanguagesCard';
import { useElementWidth } from '../../lib/pretext';
import styles from './SkillsSection.module.css';

/* Deliberate column spans that tile cleanly to 12 per row:
   row 1 — languages(4) + backend(8)
   row 2 — ai(6) + cloud(6)
   row 3 — data(8) + frontend(4)  ← frontend is compact (2 items)
   row 4 — delivery(12)
   …then human languages spans the full width. */
const SPAN_12: Record<string, number> = {
  languages: 4,
  backend: 8,
  ai: 6,
  cloud: 6,
  data: 8,
  frontend: 4,
  delivery: 12,
};

/** Column span for a group at the active column count — always tiles
    cleanly so the bento lines up with no holes. */
function spanFor(id: string, cols: number): number {
  if (cols <= 4) return 4; // mobile — every card full width
  if (cols <= 8) return id === 'delivery' ? 8 : 4; // tablet — 2-up + full delivery
  return SPAN_12[id] ?? 6; // desktop 12-col
}

/** Skills as a clean, tightly-tiled bento grid. `useElementWidth` tracks
    the container so the column count adapts on resize. */
export function SkillsSection() {
  const { ref, width } = useElementWidth<HTMLDivElement>();
  const cols = width === 0 ? 12 : width < 520 ? 4 : width < 900 ? 8 : 12;

  return (
    <section className={styles.wrap} aria-label="Skills and capabilities">
      <SectionHead
        id="skills"
        num="03"
        title="The capabilities"
        titleEmphasis="index"
        kicker="7 disciplines · technical & human"
      />
      <div className={styles.bento} ref={ref} style={{ ['--cols' as string]: cols }}>
        {skillGroups.map((group) => (
          <SkillBentoCard
            key={group.id}
            group={group}
            style={{ gridColumn: `span ${spanFor(group.id, cols)}` }}
          />
        ))}
        <LanguagesCard style={{ gridColumn: '1 / -1' }} />
      </div>
    </section>
  );
}

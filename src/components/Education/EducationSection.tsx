import { education } from '../../data';
import { SectionHead } from '../common/SectionHead';
import { BentoCell } from '../common/BentoCell';
import styles from './EducationSection.module.css';

/** Education — two degrees, compact bento. */
export function EducationSection() {
  return (
    <section aria-label="Education">
      <SectionHead
        id="education"
        num="04"
        title="Education"
        titleEmphasis="& foundations"
        kicker="2 degrees · CS & Mathematics"
      />
      <div className={styles.grid}>
        {education.map((entry) => (
          <BentoCell key={entry.id} tone="beige" className={styles.card}>
            <div>
              <h3 className={styles.school}>{entry.school}</h3>
              <div className={styles.degree}>
                <em>{entry.degree}</em> {entry.field}
              </div>
            </div>
            <span className={styles.year}>{entry.year}</span>
          </BentoCell>
        ))}
      </div>
    </section>
  );
}

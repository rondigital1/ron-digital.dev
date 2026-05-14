import { education } from '../../data';
import { SectionHead } from '../common/SectionHead';
import { BentoCell } from '../common/BentoCell';
import styles from './EducationSection.module.css';

/** Education — two degrees, compact bento. The degree field is the
    emphasised element; cards shrink slightly on hover. */
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
            <div className={styles.top}>
              <span className={styles.degree}>{entry.degree}</span>
              <span className={styles.year}>{entry.year}</span>
            </div>
            <h3 className={styles.field}>{entry.field}</h3>
            <div className={styles.school}>{entry.school}</div>
          </BentoCell>
        ))}
      </div>
    </section>
  );
}

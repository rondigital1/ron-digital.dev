import { education } from '../../data';
import { BentoCell } from '../common/BentoCell';
import styles from './EducationSection.module.css';

/** Education — compact credential strip near the bottom of the page. */
export function EducationSection() {
  return (
    <section className={styles.section} id="education" aria-labelledby="education-title">
      <header className={styles.header}>
        <span className={styles.eyebrow}>Background</span>
        <h2 className={styles.title} id="education-title">
          Education
        </h2>
      </header>
      <div className={styles.grid}>
        {education.map((entry) => {
          const degreeLead = entry.degree.endsWith(entry.field)
            ? entry.degree.slice(0, -entry.field.length)
            : `${entry.degree} `;

          return (
            <BentoCell key={entry.id} as="article" tone="beige" className={styles.card}>
              <div className={styles.badge} aria-hidden>
                {entry.monogram}
              </div>
              <div className={styles.content}>
                <h3 className={styles.degree}>
                  {degreeLead}
                  <strong>{entry.field}</strong>
                </h3>
                <p className={styles.school}>{entry.school}</p>
                <div className={styles.meta}>
                  <span>{entry.year}</span>
                  <span>{entry.location}</span>
                </div>
              </div>
            </BentoCell>
          );
        })}
      </div>
    </section>
  );
}

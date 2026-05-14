import { experience } from '../../data';
import { SectionHead } from '../common/SectionHead';
import { RoleCard } from './RoleCard';
import styles from './ExperienceSection.module.css';

/** Professional experience — four roles, newest first. */
export function ExperienceSection() {
  return (
    <section aria-label="Professional experience">
      <SectionHead
        id="experience"
        num="02"
        title="Professional"
        titleEmphasis="experience"
        kicker="2017 — present · 4 roles"
      />
      <div className={styles.list}>
        {experience.map((role) => (
          <RoleCard key={role.id} role={role} />
        ))}
      </div>
    </section>
  );
}

import type { Role } from '../../data';
import { BentoCell } from '../common/BentoCell';
import { TechChip } from '../common/TechChip';
import { CompanyLogo } from './CompanyLogo';
import styles from './RoleCard.module.css';

/** A single experience entry — role head with logo + team banner,
    horizontal bullets, and a stack row. */
export function RoleCard({ role }: { role: Role }) {
  const roleHead = role.role.slice(0, role.role.lastIndexOf(role.roleEmphasis));
  const hasRoleEmphasis = role.roleEmphasis && roleHead !== role.role;

  // Pull the month off "Jul 2023" / "Present" for the line under each year.
  const monthStart = role.start.split(' ')[0];
  const monthEnd = role.end.toLowerCase() === 'present' ? 'now' : role.end.split(' ')[0];

  return (
    <BentoCell as="article" tone="beige" interactive className={styles.card}>
      <header className={styles.head}>
        <span className={styles.logoCell}>
          <CompanyLogo role={role} />
        </span>

        <span className={styles.year}>
          <span className={styles.yPart}>{role.yearStart}</span>
          <span className={styles.dash}>—</span>
          <span className={styles.yPart}>{role.yearEnd}</span>
          <span className={styles.mPart}>{monthStart}</span>
          <span className={styles.mDash} aria-hidden />
          <span className={styles.mPart}>{monthEnd}</span>
        </span>

        <div className={styles.info}>
          <h3 className={styles.role}>
            {role.url ? (
              <a
                className={styles.company}
                href={role.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {role.companyShort}
              </a>
            ) : (
              role.companyShort
            )}
            {' — '}
            {hasRoleEmphasis ? (
              <>
                {roleHead}
                <em>{role.roleEmphasis}</em>
              </>
            ) : (
              role.role
            )}
          </h3>
          <div className={styles.sub}>{role.meta}</div>
          <div className={styles.team}>
            <span className={styles.teamLabel}>{role.teamLabel}</span>
            {role.team}
          </div>
        </div>

        <div className={styles.tags}>
          {role.tags.map((tag) => (
            <span
              key={tag}
              className={`${styles.tag} ${role.current && tag === 'Current' ? styles.tagCurrent : ''}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <ul className={styles.bullets}>
        {role.bullets.map((bullet, i) => (
          <li className={styles.bullet} key={i}>
            {bullet}
          </li>
        ))}
      </ul>

      <div className={styles.stack}>
        <span className={styles.stackLabel}>Stack</span>
        {role.stack.map((tech) => (
          <TechChip key={tech} name={tech} on="beige" size="sm" />
        ))}
      </div>
    </BentoCell>
  );
}

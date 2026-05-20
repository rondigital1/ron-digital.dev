import type { ExperienceBullet, Role } from '../../data';
import { BentoCell } from '../common/BentoCell';
import { TechChip } from '../common/TechChip';
import { CompanyLogo } from './CompanyLogo';
import { RoleMetaLine } from './RoleMetaLine';
import styles from './RoleCard.module.css';

function renderBullet(bullet: ExperienceBullet) {
  return bullet.map((segment, index) =>
    segment.strong ? (
      <strong key={`${segment.text}-${index}`}>{segment.text}</strong>
    ) : (
      <span key={`${segment.text}-${index}`}>{segment.text}</span>
    ),
  );
}

/** A single experience entry — role head with logo + metadata line,
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
          <RoleMetaLine label={role.teamLabel} value={role.team} />
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
            {renderBullet(bullet)}
          </li>
        ))}
      </ul>

      {role.impactMetrics?.length ? (
        <div className={styles.metrics} aria-label={`${role.companyShort} impact metrics`}>
          {role.impactMetrics.map((metric) => (
            <div className={styles.metric} key={`${metric.value}-${metric.label}`}>
              <span className={styles.metricValue}>{metric.value}</span>
              <span className={styles.metricLabel}>{metric.label}</span>
              {metric.context ? (
                <span className={styles.metricContext}>{metric.context}</span>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}

      {role.proofChips?.length ? (
        <div className={styles.proofChips} aria-label={`${role.companyShort} proof points`}>
          {role.proofChips.map((chip) => (
            <span className={styles.proofChip} key={chip}>
              {chip}
            </span>
          ))}
        </div>
      ) : null}

      <div className={styles.stack}>
        <span className={styles.stackLabel}>Stack</span>
        {role.stack.map((tech) => (
          <TechChip key={tech} name={tech} on="beige" size="sm" />
        ))}
      </div>
    </BentoCell>
  );
}

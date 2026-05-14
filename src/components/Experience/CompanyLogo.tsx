import { useState } from 'react';
import type { Role } from '../../data';
import styles from './CompanyLogo.module.css';

/** A company logo tile that links to the company website, with a
    designed monogram fallback when the logo asset is missing. */
export function CompanyLogo({ role }: { role: Role }) {
  const [failed, setFailed] = useState(false);
  const showImg = role.logo && !failed;

  const inner = showImg ? (
    <img
      className={styles.img}
      src={role.logo}
      alt={`${role.companyShort} logo`}
      onError={() => setFailed(true)}
    />
  ) : (
    <span className={styles.monogram}>{role.monogram}</span>
  );

  if (role.url) {
    return (
      <a
        className={styles.tile}
        href={role.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${role.companyShort} website`}
      >
        {inner}
      </a>
    );
  }

  return (
    <span
      className={`${styles.tile} ${styles.independent}`}
      aria-label={`${role.companyShort} — independent practice`}
    >
      {inner}
    </span>
  );
}

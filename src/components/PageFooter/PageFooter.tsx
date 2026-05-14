import { profile } from '../../data';
import styles from './PageFooter.module.css';

const BAR_COUNT = 40;

/** Page footer — ink band with a pseudo-barcode and imprint. */
export function PageFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.barcode} aria-hidden>
          {Array.from({ length: BAR_COUNT }, (_, i) => (
            <i key={i} />
          ))}
        </div>
        <div className={styles.imprint}>
          {profile.firstName} <em>{profile.nickname}</em> {profile.lastName} — {profile.location}.
        </div>
        <div className={styles.meta}>
          © {year}
          <br />
          {profile.title}
        </div>
      </div>
    </footer>
  );
}

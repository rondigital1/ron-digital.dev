import { profile, contactLinks } from '../../data';
import styles from './Colophon.module.css';

/** Closing colophon — about, contact, typography. */
export function Colophon() {
  const email = contactLinks.find((l) => l.id === 'email');

  return (
    <section className={styles.colophon} aria-label="Colophon">
      <div className={styles.inner}>
        <div className={styles.block}>
          <h4>About</h4>
          <p>
            {profile.fullName} — senior software engineer, based in {profile.location}.
            <br />
            Open to senior SWE, backend, full-stack, and AI product engineering roles.
          </p>
        </div>
        <div className={styles.block}>
          <h4>Get in touch</h4>
          <p>
            {email && <a href={email.href}>{email.value}</a>}
          </p>
        </div>
        <div className={styles.block}>
          <h4>Typography</h4>
          <p>Set in Fraunces, Inter, and JetBrains Mono. Built with React &amp; TypeScript.</p>
        </div>
      </div>
    </section>
  );
}

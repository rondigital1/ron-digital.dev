import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiDownload } from 'react-icons/fi';
import type { IconType } from 'react-icons';
import { contactLinks, profile } from '../../data';
import type { ContactLink } from '../../data';
import styles from './ContactBar.module.css';

const ICONS: Record<ContactLink['id'], IconType> = {
  email: FiMail,
  linkedin: FiLinkedin,
  github: FiGithub,
  location: FiMapPin,
};

/** Compact, high-contrast contact buttons + a bordeaux résumé-download CTA. */
export function ContactBar() {
  return (
    <section className={styles.bar} id="contact" aria-label="Contact">
      <div className={styles.inner}>
        {contactLinks.map((link) => {
          const Icon = ICONS[link.id];
          const external = link.href.startsWith('http');
          return (
            <a
              key={link.id}
              className={`${styles.btn} ${styles.contact}`}
              href={link.href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <Icon className={styles.icon} aria-hidden />
              <span className={styles.label}>
                <span className={styles.kicker}>{link.label}</span>
                <span className={styles.value}>{link.value}</span>
              </span>
            </a>
          );
        })}

        <a
          className={`${styles.btn} ${styles.resume}`}
          href={profile.resumePdf}
          download="Ron_Mishiyev_Resume.pdf"
        >
          <FiDownload className={styles.icon} aria-hidden />
          <span className={styles.label}>
            <span className={styles.kicker}>PDF</span>
            <span className={styles.value}>Download résumé</span>
          </span>
        </a>
      </div>
    </section>
  );
}

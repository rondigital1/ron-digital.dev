import { profile } from '../../data';
import styles from './Ribbon.module.css';

const NAV = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: profile.resumePdf, label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

/** Sticky top navigation ribbon. */
export function Ribbon() {
  return (
    <header className={styles.ribbon}>
      <span className={styles.name}>{profile.fullName}</span>
      <nav className={styles.links}>
        {NAV.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <span className={styles.meta}>
        {profile.location} · {profile.title}
      </span>
    </header>
  );
}

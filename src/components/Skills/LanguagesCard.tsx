import type { CSSProperties } from 'react';
import { humanLanguages } from '../../data';
import { BentoCell } from '../common/BentoCell';
import styles from './LanguagesCard.module.css';

/** Human languages — a wide bento cell. */
export function LanguagesCard({ style }: { style?: CSSProperties }) {
  return (
    <BentoCell tone="beige" interactive className={styles.card} style={style}>
      <div className={styles.head}>
        <span className={styles.badge}>H</span>
        <h3 className={styles.title}>Human languages</h3>
        <span className={styles.count}>{humanLanguages.length} spoken</span>
      </div>

      <div className={styles.grid}>
        {humanLanguages.map((lang) => (
          <div
            className={styles.lang}
            key={lang.code}
            style={{ ['--flag' as string]: `url(${lang.flag})` }}
          >
            <span className={styles.code}>{lang.code}</span>
            <span className={styles.info}>
              <span className={styles.name}>{lang.name}</span>
              <span className={styles.level}>{lang.level}</span>
              <span className={styles.dots} aria-hidden>
                {Array.from({ length: 5 }, (_, i) => (
                  <i key={i} className={i < lang.dots ? styles.on : ''} />
                ))}
              </span>
            </span>
          </div>
        ))}
      </div>
    </BentoCell>
  );
}

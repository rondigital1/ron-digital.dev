import { nowItems } from '../../data';
import styles from './NowModule.module.css';

/** "Currently building" feed — the three active prototypes. */
export function NowModule() {
  return (
    <section className={styles.module} aria-label="Currently building">
      <div className={styles.head}>
        <span className={styles.live}>
          <span className={styles.dot} aria-hidden />
          Now
        </span>
        <span className={styles.sub}>Currently building</span>
      </div>

      <div className={styles.list}>
        {nowItems.map((item) => (
          <a key={item.num} className={styles.item} href={`#project-${item.projectId}`}>
            <span className={styles.num}>{item.num}</span>
            <span className={styles.body}>
              <span className={styles.itemTitle}>
                {item.name.replace(item.nameEmphasis, '')}
                <em>{item.nameEmphasis}</em>
              </span>
              <span className={styles.desc}>{item.description}</span>
            </span>
            <span className={styles.stamp}>{item.stamp}</span>
          </a>
        ))}
      </div>

      <div className={styles.foot}>
        <a href="#projects">All projects →</a>
      </div>
    </section>
  );
}

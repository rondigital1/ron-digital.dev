import type { PreviewKind } from '../../data';
import styles from './ProjectPreview.module.css';

/** Abstract, stylized previews — purely decorative skeletons that hint
    at each product without claiming a real screenshot. */
export function ProjectPreview({ kind }: { kind: PreviewKind }) {
  if (kind === 'atlas') {
    return (
      <div className={`${styles.preview} ${styles.atlas}`} aria-hidden>
        <span className={styles.badge}>itinerary workflow</span>
        <div className={styles.atlasFlow}>
          {[0, 1, 2, 3].map((i) => (
            <div className={styles.step} key={i}>
              <span className={styles.node} />
              <span className={styles.track} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (kind === 'vault') {
    return (
      <div className={`${styles.preview} ${styles.vault}`} aria-hidden>
        <div className={styles.vaultSide}>
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} />
          ))}
        </div>
        <div className={styles.vaultMain}>
          {[0, 1, 2, 3].map((i) => (
            <div className={styles.flashcard} key={i}>
              <span className={styles.h} />
              <span className={styles.l} />
              <span className={`${styles.l} ${styles.short}`} />
              <span className={styles.tag} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // pilot
  return (
    <div className={`${styles.preview} ${styles.pilot}`} aria-hidden>
      <div className={styles.pilotTop}>
        <span className={styles.dot} />
        <span className={styles.t}>session · planner</span>
        <span className={styles.cta}>Scope</span>
      </div>
      <div className={styles.pilotBody}>
        {[
          { stat: '12', short: false },
          { stat: '94%', short: true },
          { stat: '2.4h', short: false },
        ].map((col, i) => (
          <div className={styles.pilotCol} key={i}>
            <span className={styles.h} />
            <span className={styles.stat}>{col.stat}</span>
            <span className={styles.l} />
            <span className={`${styles.l} ${col.short ? styles.short : ''}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

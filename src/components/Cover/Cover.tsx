import { profile } from '../../data';
import { BentoCell } from '../common/BentoCell';
import { Masthead } from './Masthead';
import { NowModule } from './NowModule';
import { DomainsBento } from './DomainsBento';
import styles from './Cover.module.css';

/** Editorial hero — meta strip, fitted masthead, tagline, "now" feed
    on the left; years card + domains bento on the right. */
export function Cover() {
  return (
    <section className={styles.cover} aria-label="Introduction">
      <div className={styles.left}>
        <div className={styles.meta}>
          <span>{profile.title}</span>
          <span>Backend · Distributed · AI</span>
          <span>{profile.location}</span>
        </div>

        <Masthead />

        <p className={styles.tagline}>
          A <b>senior software engineer</b> building <em>backend infrastructure</em>,{' '}
          <em>distributed systems</em>, and <em>AI-native products</em>. Eight years in practice.
          Open to senior roles.
        </p>

        <NowModule />
      </div>

      <aside className={styles.right}>
        <BentoCell tone="ink" className={styles.yearsCard}>
          <span className={styles.yearsNum}>
            <em>{profile.yearsExperience}</em>+
          </span>
          <span className={styles.yearsText}>
            <span className={styles.yearsLabel}>Years in practice</span>
            <span className={styles.yearsDesc}>
              Shipping production software since {profile.since}.
            </span>
          </span>
        </BentoCell>

        <DomainsBento />
      </aside>
    </section>
  );
}

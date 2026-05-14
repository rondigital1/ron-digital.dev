import styles from './SectionHead.module.css';

interface SectionHeadProps {
  /** Index numeral, e.g. "01". */
  num: string;
  /** Title with optional <em>-emphasised fragment. */
  title: string;
  titleEmphasis: string;
  /** Trailing fragment after the emphasis (often a full stop). */
  titleTail?: string;
  kicker: string;
  id?: string;
}

/** Editorial section header used before Projects / Experience / Skills. */
export function SectionHead({ num, title, titleEmphasis, titleTail = '.', kicker, id }: SectionHeadProps) {
  return (
    <header className={styles.head} id={id}>
      <span className={styles.num}>{num}</span>
      <h2 className={styles.title}>
        {title} <em>{titleEmphasis}</em>
        {titleTail}
      </h2>
      <span className={styles.kicker}>{kicker}</span>
    </header>
  );
}

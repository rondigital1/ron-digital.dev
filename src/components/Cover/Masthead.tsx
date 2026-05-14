import { profile } from '../../data';
import { useFitText } from '../../lib/pretext';
import styles from './Masthead.module.css';

/** The name, sized by pretext to fill the column width exactly.
    pretext measures the full string without DOM reflow; on resize the
    font-size is re-solved so the masthead always fills its container. */
export function Masthead() {
  const { ref, fontSize } = useFitText<HTMLDivElement>({
    text: profile.fullName,
    fontFamily: '"Fraunces", serif',
    fontWeight: 700,
    maxLines: 2,
    minSize: 34,
    maxSize: 168,
    lineHeightRatio: 1.02,
  });

  return (
    <div className={styles.wrap} ref={ref}>
      <h1 className={styles.masthead} style={{ fontSize: `${fontSize}px` }}>
        {profile.firstName} <span className={styles.nick}>{profile.nickname}</span>{' '}
        {profile.lastName}
      </h1>
    </div>
  );
}

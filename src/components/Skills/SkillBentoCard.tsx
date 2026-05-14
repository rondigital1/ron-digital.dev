import type { CSSProperties } from 'react';
import type { SkillGroup } from '../../data';
import { BentoCell } from '../common/BentoCell';
import { getIcon } from '../../lib/icons';
import styles from './SkillBentoCard.module.css';

interface SkillBentoCardProps {
  group: SkillGroup;
  style?: CSSProperties;
}

/** One skill group rendered as a bento cell — badge, title, count and a
    container-query-responsive grid of icon tools. */
export function SkillBentoCard({ group, style }: SkillBentoCardProps) {
  return (
    <BentoCell
      tone={group.tone}
      interactive
      className={`${styles.card} ${styles[group.tone]}`}
      style={style}
    >
      <div className={styles.head}>
        <span className={styles.badge}>{group.badge}</span>
        <h3 className={styles.title}>{group.title}</h3>
        <span className={styles.count}>{group.countLabel}</span>
      </div>

      <div className={styles.tools}>
        {group.items.map((item) => {
          const Icon = getIcon(item.name);
          return (
            <div className={styles.tool} key={item.name}>
              <Icon className={styles.icon} aria-hidden />
              <span className={styles.toolInfo}>
                <span className={styles.toolName}>{item.name}</span>
                <span className={styles.toolLevel}>{item.level}</span>
              </span>
            </div>
          );
        })}
      </div>
    </BentoCell>
  );
}

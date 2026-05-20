import styles from './RoleMetaLine.module.css';

type RoleMetaLineProps = {
  label: string;
  value: string;
  className?: string;
};

export function RoleMetaLine({ label, value, className }: RoleMetaLineProps) {
  return (
    <div className={[styles.metaLine, className].filter(Boolean).join(' ')} aria-label={`${label}: ${value}`}>
      <span className={styles.label}>{label}</span>
      <strong className={styles.value}>{value}</strong>
    </div>
  );
}

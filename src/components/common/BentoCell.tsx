import type { CSSProperties, ReactNode } from 'react';
import styles from './BentoCell.module.css';

export type BentoTone = 'beige' | 'ink' | 'accent';

interface BentoCellProps {
  tone?: BentoTone;
  /** Render as an anchor (interactive) when href is provided. */
  href?: string;
  /** Render as <article> instead of <div> for semantic sections. */
  as?: 'div' | 'article' | 'li';
  interactive?: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  ariaLabel?: string;
}

/** The shared neo-brutalist surface used across the cover bento,
    skills bento, project cards and experience cards. */
export function BentoCell({
  tone = 'beige',
  href,
  as = 'div',
  interactive,
  className,
  style,
  children,
  ariaLabel,
}: BentoCellProps) {
  const isInteractive = interactive ?? Boolean(href);
  const cls = [styles.cell, styles[tone], isInteractive && styles.interactive, className]
    .filter(Boolean)
    .join(' ');

  if (href) {
    const external = href.startsWith('http');
    return (
      <a
        href={href}
        className={cls}
        style={style}
        aria-label={ariaLabel}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  const Tag = as;
  return (
    <Tag className={cls} style={style} aria-label={ariaLabel}>
      {children}
    </Tag>
  );
}

import { createElement } from 'react';
import { getIcon } from '../../lib/icons';
import styles from './TechChip.module.css';

type ChipTone = 'beige' | 'ink' | 'accent';

interface TechChipProps {
  name: string;
  /** Surface the chip sits on — drives contrast colours. */
  on?: ChipTone;
  size?: 'sm' | 'md';
}

const toneClass: Record<ChipTone, string> = {
  beige: styles.onBeige,
  ink: styles.onInk,
  accent: styles.onAccent,
};

/** A technology label with its real icon (Simple Icons / AWS / Tabler). */
export function TechChip({ name, on = 'beige', size = 'sm' }: TechChipProps) {
  const Icon = getIcon(name);
  return (
    <span className={`${styles.chip} ${styles[size]} ${toneClass[on]}`}>
      {createElement(Icon, { className: styles.icon, 'aria-hidden': true })}
      {name}
    </span>
  );
}

import type { HTMLAttributes, ReactNode } from 'react';

type Props = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  tone?: 'white' | 'mint' | 'dark' | 'paper';
};

export function Card({ children, tone = 'white', className = '', ...props }: Props) {
  return <article className={`surface-card surface-card--${tone} ${className}`} {...props}>{children}</article>;
}

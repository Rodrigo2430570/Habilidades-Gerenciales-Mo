export function Arrow({ direction = 'right' }: { direction?: 'left' | 'right' | 'up' }) {
  return <svg className={`arrow arrow--${direction}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>;
}

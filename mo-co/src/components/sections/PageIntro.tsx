import type { ReactNode } from 'react';
import { Arrow } from '../ui/Arrow';

type Props = {
  title: string;
  description: string;
  image?: string;
  alt?: string;
  visual?: ReactNode;
  headingId: string;
  theme?: 'navy' | 'mint' | 'paper';
  imageMode?: 'cover' | 'contain';
};

export function PageIntro({ title, description, image, alt, visual, headingId, theme = 'navy', imageMode = 'cover' }: Props) {
  return <header className={`page-intro page-intro--${theme} page-intro--${imageMode}`}>
    <div className="shell page-intro__grid">
      <div className="page-intro__copy">
        <a href="/#explora-title" className="page-intro__back"><Arrow direction="left" /> Todos los apartados</a>
        <h1 id={headingId}>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={`page-intro__visual${visual ? ' page-intro__visual--graphic' : ''}`}>{visual ?? (image ? <img src={image} alt={alt ?? ''} width="1536" height="1024" /> : null)}</div>
    </div>
  </header>;
}

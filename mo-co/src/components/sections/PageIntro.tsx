type Props = {
  title: string;
  description: string;
  image: string;
  alt: string;
  headingId: string;
  theme?: 'navy' | 'mint' | 'paper';
  imageMode?: 'cover' | 'contain';
};

export function PageIntro({ title, description, image, alt, headingId, theme = 'navy', imageMode = 'cover' }: Props) {
  return <header className={`page-intro page-intro--${theme} page-intro--${imageMode}`}>
    <div className="shell page-intro__grid">
      <div className="page-intro__copy">
        <a href="/" className="page-intro__back">← Inicio</a>
        <h1 id={headingId}>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="page-intro__visual"><img src={image} alt={alt} width="1536" height="1024" /></div>
    </div>
  </header>;
}

import './site-hero.css';

function SiteHero({ className, title = '' }) {
  return (
    <section className={'site-hero' + (className ? ` ${className}` : '')}>
      <div className="site-hero__container container">
        <h1 className="site-hero__title">{title}</h1>
      </div>
    </section>
  );
}

export { SiteHero };

import './site-hero.css';

function SiteHero({ title }) {
  return (
    <section className="site-hero">
      <div className="container site-hero__container">
        <h1 className="site-hero__title">{title}</h1>
      </div>
    </section>
  );
}

export { SiteHero };

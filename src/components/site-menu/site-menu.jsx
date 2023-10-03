import { setClassName } from '../../utilites';

import './site-menu.css';

function SiteMenu({ className, data }) {
  const items = data.map(({ id, text, href }) => (
    <li className="site-menu__item" key={id}>
      <a className="site-menu__link" href={href || '#'}>
        {text}
      </a>
    </li>
  ));

  return (
    <nav className={setClassName('site-menu', className)}>
      <ul className="site-menu__list">{items}</ul>
    </nav>
  );
}

export { SiteMenu };

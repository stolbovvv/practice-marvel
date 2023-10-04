import { Link } from 'react-router-dom';
import { setClassName } from '../../utilites';

import './site-menu.css';

function SiteMenu({ className, data }) {
  const items = data.map(({ id, text, href }) => (
    <li className="site-menu__item" key={id}>
      <Link className="site-menu__link" to={href}>
        {text}
      </Link>
    </li>
  ));

  return (
    <nav className={setClassName('site-menu', className)}>
      <ul className="site-menu__list">{items}</ul>
    </nav>
  );
}

export { SiteMenu };

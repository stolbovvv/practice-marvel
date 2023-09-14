import './site-menu.css';

function SiteMenu({ className }) {
  const menu = {
    items: [
      { id: 1, text: 'Home', href: '/' },
      { id: 2, text: 'Characters', href: '/characters' },
      { id: 3, text: 'Comics', href: '/comics' },
    ],
  };

  return (
    <nav className={'site-menu' + (className ? ` ${className}` : '')}>
      <ul className="site__menu-list">
        {menu.items.map(({ id, text, href }) => (
          <li key={id} className="site-menu__item">
            <a href={href} className="site-menu__link">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { SiteMenu };

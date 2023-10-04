import { SiteLogo } from '../site-logo/site-logo';
import { SiteMenu } from '../site-menu/site-menu';

import './site-header.css';

function SiteHeader() {
  const menuData = [
    { id: 1, text: 'Characters', href: '/characters' },
    { id: 2, text: 'Comics', href: '/comics' },
  ];

  return (
    <header className="site-header">
      <div className="container site-header__conteiner">
        <SiteLogo className={'site-header__logo'} />
        <SiteMenu className={'site-header__menu'} data={menuData} />
      </div>
    </header>
  );
}

export { SiteHeader };

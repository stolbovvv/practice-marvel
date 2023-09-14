import { SiteLogo } from '../site-logo/site-logo';
import { SiteMenu } from '../site-menu/site-menu';
import './site-header.css';

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__container container">
        <SiteLogo className={'site-header__logo'} />
        <SiteMenu className={'site-header__menu'} />
      </div>
    </header>
  );
}

export { SiteHeader };

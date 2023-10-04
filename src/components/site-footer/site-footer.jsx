import { SiteLogo } from '../site-logo/site-logo';
import { SiteMenu } from '../site-menu/site-menu';

import './site-footer.css';

function SiteFooter() {
  const menuData = [
    { id: 1, text: 'Home', href: '/' },
    { id: 2, text: 'Characters', href: '/characters' },
    { id: 3, text: 'Comics', href: '/comics' },
  ];

  return (
    <footer className="site-footer">
      <div className="container site-footer__container">
        <div className="site-footer__row">
          <SiteLogo className={'site-footer__logo'} />
          <SiteMenu className={'site-footer__menu'} data={menuData} />
        </div>
        <div className="site-footer__row">
          <p className="site-footer__text">
            Developer:{' '}
            <a href="https://github.com/stolbovvv" target="_blank" rel="noopener noreferrer">
              Stolbovvv
            </a>
          </p>
          <p className="site-footer__text">Marvel API | React | 2023</p>
        </div>
      </div>
    </footer>
  );
}

export { SiteFooter };

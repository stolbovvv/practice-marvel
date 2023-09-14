import { SiteLogo } from '../site-logo/site-logo';
import { SiteMenu } from '../site-menu/site-menu';
import './site-footer.css';

function SiteFooter() {
  return (
    <header className="site-footer">
      <div className="site-footer__container container">
        <div className="site-footer__body">
          <SiteLogo className={'site-footer__logo'} />
          <SiteMenu className={'site-footer__menu'} />
        </div>
        <div className="site-footer__foot">
          <p className="site-footer__name">
            Developer: <a href="https://github.com/stolbovvv">stolbovvv</a>
          </p>
          <p className="site-footer__tags">Marvel API | React | 2023</p>
        </div>
      </div>
    </header>
  );
}

export { SiteFooter };

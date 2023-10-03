import { setClassName } from '../../utilites';
import { iconMarvel } from '../../assets';

import './site-logo.css';

function SiteLogo({ className }) {
  return (
    <div className={setClassName('site-logo', className)}>
      <a className="site-logo__link" href="/practice-marvel-app/">
        <img className="site-logo__link-icon" src={iconMarvel} alt="Marvel logo image" />
      </a>
    </div>
  );
}

export { SiteLogo };

import { Link } from 'react-router-dom';
import { setClassName } from '../../utilites';
import { iconMarvel } from '../../assets';

import './site-logo.css';

function SiteLogo({ className }) {
  return (
    <div className={setClassName('site-logo', className)}>
      <Link className="site-logo__link" to={'/'}>
        <img className="site-logo__link-icon" src={iconMarvel} alt="Marvel logo image" />
      </Link>
    </div>
  );
}

export { SiteLogo };

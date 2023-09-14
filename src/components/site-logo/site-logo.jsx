import marvel from '../../assets/marvel.svg';
import './site-logo.css';

function SiteLogo({ className }) {
  return (
    <a className={'site-logo' + (className ? ` ${className}` : '')} href="/">
      <img className="site-logo__icon" src={marvel} alt="Marvel icon" />
    </a>
  );
}

export { SiteLogo };

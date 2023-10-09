import { setClassName } from '../../utilites';

import './error-message.css';

function ErrorMessage({ className, name, info, ...props }) {
  return (
    <div className={setClassName('error-message', className)} {...props}>
      <p className="error-message__name">{name || 'Error'}</p>
      <p className="error-message__info">{info || 'An unexpected error has occurred. Please try again later...'}</p>
    </div>
  );
}

export { ErrorMessage };

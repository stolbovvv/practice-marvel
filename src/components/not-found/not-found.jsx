import { Link } from 'react-router-dom';

import './not-found.css';

function NotFound() {
  return (
    <section className="section not-found">
      <div className="container not-found__container">
        <h2 className="not-found__title">404: Page not found</h2>
        <p className="not-found__message">The requested page was not found, go back or go to the main page.</p>
        <Link className="button button_red not-found__button" to={'/'} replace={false}>
          Go to home page
        </Link>
      </div>
    </section>
  );
}

export { NotFound };

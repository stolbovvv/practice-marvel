import './error-message.css';

function ErrorMessage({ className }) {
  return (
    <div className={['error-message', className].join(' ').trim()}>
      <p className="error-message__title">An error has occurred</p>
      <p className="error-message__descr">Please try again...</p>
    </div>
  );
}

export { ErrorMessage };

import { setClassName } from '../../utilites';
import './spinner-icon.css';

function SpinnerIcon({ className, size, stroke, strokeWidth }) {
  return (
    <svg
      className={setClassName('spinner-icon', className)}
      width={size || '1.5rem'}
      height={size || '1.5rem'}
      stroke={stroke || 'currentColor'}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="spinner-icon__body">
        <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth={strokeWidth || '3'}></circle>
      </g>
    </svg>
  );
}

export { SpinnerIcon };

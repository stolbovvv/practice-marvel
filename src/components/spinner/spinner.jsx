import { setClassName } from '../../utilites';

import './spinner.css';

function Spinner({ className, size = '1.5rem', stroke = 'currentColor', strokeWidth = '3' }) {
  return (
    <svg
      className={setClassName('spinner', className)}
      width={size}
      height={size}
      stroke={stroke}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="spinner__body">
        <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth={strokeWidth}></circle>
      </g>
    </svg>
  );
}

export { Spinner };

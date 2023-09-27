import './spinner.css';

function Spinner({ className, size = '24', weight = '3', color = 'currentColor' }) {
  return (
    <svg
      className={['spanner', className].join(' ').trim()}
      width={size}
      height={size}
      stroke={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="spinner__circle">
        <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth={weight}></circle>
      </g>
    </svg>
  );
}

export { Spinner };

import './styles/spinner.css';

export default function Spinner() {
  return (
    <div className="spinner-container">
      <svg viewBox="0 0 400 160">
        <text
          x="50%"
          y="50%"
          dy="0.32em"
          textAnchor="middle"
          className="text-body"
        >
          MediBuddy
        </text>
        <text
          x="50%"
          y="50%"
          dy="0.32em"
          dx="2.1em"
          textAnchor="middle"
          className="text-body"
        >
          .
        </text>
      </svg>
    </div>
  );
}

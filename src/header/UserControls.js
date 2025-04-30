export default function UserControls() {
  return (
    <div className="user-controls">
      <button className="btn-theme">
        <svg className="icon">
          <use href="./svg.svg#icon-sun"></use>
        </svg>
      </button>
      <button className="btn-account">
        <img src="./logo.png" alt="user profile"></img>
      </button>
    </div>
  );
}

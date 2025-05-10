export default function UserControls({ toggleTheme, theme }) {
  return (
    <div className="user-controls">
      <button className="btn-theme" onClick={toggleTheme}>
        {theme === 'dark' ? (
          <svg className="icon">
            <use href="./svg.svg#icon-sun"></use>
          </svg>
        ) : (
          <svg className="icon">
            <use href="./svg.svg#icon-moon"></use>
          </svg>
        )}
      </button>
      <button className="btn-account">
        <img src="./logo.png" alt="user profile"></img>
      </button>
    </div>
  );
}

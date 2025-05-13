export default function UserControls({ toggleTheme, theme, handleOpenForm }) {
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
      <button className="btn-account" onClick={handleOpenForm}>
        <svg className="icon">
          <use href="./svg.svg#icon-login"></use>
        </svg>
      </button>
    </div>
  );
}

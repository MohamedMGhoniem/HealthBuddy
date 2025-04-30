export default function Header() {
  return (
    <header className="header margin-bot-lrg">
      <img className="logo" src="./main-logo.png" alt="mediBuddy logo"></img>
      <nav className="nav">
        <ul className="list nav-list">
          <li>How to</li>
          <li>features</li>
          <li>Sanjo</li>
        </ul>

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
      </nav>
    </header>
  );
}

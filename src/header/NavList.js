export default function NavList() {
  const hadnleNavLinks = function (e) {
    if (e.target.tagName !== 'A') return;
    e.preventDefault();
    const targetId = e.target.getAttribute('href').slice(1);
    const section = document.getElementById(targetId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ul className="list nav-list" onClick={hadnleNavLinks}>
      <li>
        <a className="link" href="#how">
          How to
        </a>
      </li>
      <li>
        <a className="link" href="#features">
          features
        </a>
      </li>
      <li>
        <a className="link" href="#meet">
          Sanjo
        </a>
      </li>
      <li>
        <a className="link" href="#why">
          why
        </a>
      </li>
      <li>
        <a className="link" href="#newsletter">
          newsletter
        </a>
      </li>
    </ul>
  );
}

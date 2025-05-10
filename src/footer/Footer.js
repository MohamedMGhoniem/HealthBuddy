import Logo from '../Logo';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <Logo />
          <p className="paragraph">Powered by AI. Inspired by You.</p>
        </div>
        <figure className="image">
          <img src="./images/footer/sanjo-confidence.png" alt="" />
        </figure>
      </div>
      <p className="copywrite">
        © 2025 Medibuddy. Crafted with care and a lot of coffee by Mohamed
        Ghoniem & Aya Elagamy. All rights reserved.
      </p>
    </footer>
  );
}

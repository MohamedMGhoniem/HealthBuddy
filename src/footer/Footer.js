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
        © 2025 Medibuddy. Crafted with care and a lot of coffee by{' '}
        <a
          className="link"
          href="https://www.linkedin.com/in/mohamed-ghoniem-96b307285/"
        >
          Mohamed Ghoniem
        </a>{' '}
        &{' '}
        <a className="link" href="https://www.linkedin.com/in/aya-elagamy/">
          Aya Elagamy
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
}

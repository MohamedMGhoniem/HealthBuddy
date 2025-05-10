import Logo from '../Logo';
import Nav from './Nav';
import NavList from './NavList';
import UserControls from './UserControls';
import '../styles/header.css';

export default function Header({ toggleTheme, theme }) {
  return (
    <header className={'header margin-bot-lrg'}>
      <Logo />
      <Nav>
        <NavList />
        <UserControls toggleTheme={toggleTheme} theme={theme} />
      </Nav>
    </header>
  );
}

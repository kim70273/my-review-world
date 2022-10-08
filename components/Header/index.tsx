import Logo from './component/Logo';
import MyMenu from './component/MyMenu';
import NavBar from './component/NavBar';

const Header = () => {
  return (
    <div>
      <MyMenu />
      <Logo />
      <NavBar></NavBar>
    </div>
  );
};

export default Header;

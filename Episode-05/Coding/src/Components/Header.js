import { APP_LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="Header">
      <div className="logoContainer">
        <img className="main_Logo" src={APP_LOGO_URL}></img>
      </div>
      <nav className="navContainer">
        <ul className="navContainerUL">
          <li>Home</li>
          <li>About</li>
          <li>Contact US</li>
          <li>Cart</li>
          <li>Help</li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;

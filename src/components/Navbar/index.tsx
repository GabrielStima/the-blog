import logo from "../../assets/images/logo.png";
import navbarStyle from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <header className={navbarStyle.container}>
      <img src={logo} alt="Logo" className={navbarStyle.logo} />
      <nav className={navbarStyle.menu}>
        <ul>
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>About Us</li>
          </a>
          <a href="#">
            <li>Contact Us</li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

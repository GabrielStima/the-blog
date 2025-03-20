import { Link } from "react-router";
import logo from "../../assets/images/logo.png";
import navbarStyle from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <header className={navbarStyle.container}>
      <img src={logo} alt="Logo" className={navbarStyle.logo} />
      <nav className={navbarStyle.menu}>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about-us">
            <li>About Us</li>
          </Link>
          <Link to="/contact-us">
            <li>Contact Us</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

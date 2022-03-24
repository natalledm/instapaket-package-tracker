import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import "../../styles/layout/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <Link to="/">
        <img src={logo} alt="Kiki's logo" className="navbar-logo" />
      </Link>
    </nav>
  );
}

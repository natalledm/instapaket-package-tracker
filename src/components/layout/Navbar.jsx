import logo from "../../assets/logo.png";
import "../../styles/layout/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <img src={logo} alt="Kiki's logo" className="navbar-logo" />
    </nav>
  );
}

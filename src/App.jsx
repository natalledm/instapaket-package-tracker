// Packages
import React from "react";
import { Link } from "react-router-dom";

// Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// assets & styles
import seal from "./assets/kiki-seal-300.png";
import "./styles/base.css";
import "./styles/screens/intro-screen.css";

export default function App() {
  return (
    <div className="flex-column">
      <Navbar />
      <main className="intro-screen-container">
        <img src={seal} alt="Kiki's logo" className="intro-logo" />
        <h1 className="intro-title">Kiki’s Instapaket tracker</h1>
        <h3 className="intro-subtitle">Find your parcel with our help</h3>
        <Link to="/parcels" className="intro-link-button">
          Where is my parcel?
        </Link>
      </main>
      <Footer />
    </div>
  );
}

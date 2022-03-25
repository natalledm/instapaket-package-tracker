import React from "react";

// Components
import { ParcelsContext } from "../state/ParcelsProvider";
import ParcelCard from "../ParcelCard";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import "../../styles/screens/parcels-screen.css";

export default class ParcelsScreen extends React.Component {
  static contextType = ParcelsContext;
  render() {
    // create cards
    const card = this.context.map((item) => (
      <ParcelCard item={item} key={item.id} />
    ));

    return (
      <>
        <Navbar />
        <section className="parcels-screen-container">
          <h1 className="parcels-title">My parcels</h1>
          <div className="parcels-cards-container">{card}</div>
        </section>
        <Footer />
      </>
    );
  }
}

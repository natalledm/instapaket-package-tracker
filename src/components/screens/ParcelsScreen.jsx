import React from "react";

// Components
import { ParcelsContext } from "../state/ParcelsProvider";
import ParcelCard from "../ParcelCard";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import StatusError from "../StatusError";

import "../../styles/screens/parcels-screen.css";
import StatusLoading from "../StatusLoading";

export default class ParcelsScreen extends React.Component {
  static contextType = ParcelsContext;

  render() {
    const { parcels, loading, error, errorMessage } = this.context;

    if (loading === true) return <StatusLoading />;
    // create cards
    const card = parcels.map((item) => (
      <ParcelCard item={item} key={item.id} />
    ));

    return (
      <>
        <Navbar />
        <section className="parcels-screen-container">
          <h1 className="parcels-title">My parcels</h1>
          <div className="parcels-cards-container">
            {error ? <StatusError /> : card}
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

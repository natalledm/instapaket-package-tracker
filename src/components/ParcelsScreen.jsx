// Components
import ParcelCard from "./ParcelCard";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

// data
import FetchData from "../scripts/FetchData";

import "../styles/screens/parcels-screen.css";

export default function ParcelsScreen() {
  const retrievedData = FetchData();

  // create cards
  const card = retrievedData.map((item) => (
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

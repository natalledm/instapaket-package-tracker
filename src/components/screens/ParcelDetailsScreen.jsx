// import { useParams } from "react-router-dom";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import ParcelLocation from "../ParcelLocation";
import ParcelInfo from "../ParcelInfo";

import { useLocation } from "react-router-dom";

import "../../styles/screens/parcel-details-screen.css";

export default function ParcelDetailsScreen() {
  // use state from parent Link
  const location = useLocation();

  const data = location.state.item;

  const { sender, status } = data;

  return (
    <>
      <Navbar />
      <main>
        <h1>{sender}</h1>
        <div>
          <h3>{status}</h3>
          <div>
            <ParcelInfo data={data} />
            {/* <ParcelLocation data={data} /> */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

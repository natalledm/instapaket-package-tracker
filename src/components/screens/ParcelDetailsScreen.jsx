// import { useParams } from "react-router-dom";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import ParcelLocation from "../ParcelLocation";
import ParcelInfo from "../ParcelInfo";

import { useLocation, useNavigate } from "react-router-dom";

import "../../styles/screens/parcel-details-screen.css";

export default function ParcelDetailsScreen() {
  // use state from parent Link
  const navigate = useNavigate();
  const location = useLocation();

  const data = location.state.item;

  const { sender, status } = data;

  return (
    <>
      <Navbar />
      <main>
        <h1 className="parcel-sender">{sender}</h1>
        <div className="parcel-container">
          <h3 className="parcel-status">{status}</h3>
          <div className="parcel-details-container">
            <ParcelInfo data={data} />
            <ParcelLocation data={data} />
          </div>
          <button
            onClick={() => navigate(-1)}
            className="button-return-parcels"
          >
            Return
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

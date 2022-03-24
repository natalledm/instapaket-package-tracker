import { Link } from "react-router-dom";
import "../styles/components/parcel-card.css";

export default function ParcelCard(props) {
  const forwardIcon = require("../assets/icons/arrow-right.png");
  const item = props.item;

  const { parcel_id, sender, eta, status } = item;

  return (
    <Link to={`/parcels/${parcel_id}`}>
      <div className="parcel-card-container">
        <div className="parcel-card-info">
          <h3 className="parcel-card-sender">{sender}</h3>
          <p className="parcel-card-status">{status}</p>
          <p>{eta}</p>
        </div>
        <div className="parcel-card-arrow-container">
          <img src={forwardIcon} alt="icon of an arrow to the right" />
        </div>
      </div>
    </Link>
  );
}

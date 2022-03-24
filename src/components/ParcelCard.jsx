import { Link } from "react-router-dom";

export default function ParcelCard(props) {
  const forwardIcon = require("../assets/icons/arrow-right.png");
  const item = props.item;

  const { parcel_id, sender, eta, status } = item;

  return (
    <Link to={`/parcels/${parcel_id}`}>
      <div>
        <h2>{sender}</h2>
        <p>{status}</p>
        <p>{eta}</p>
        <img src={forwardIcon} alt="icon of an arrow to the right" />
      </div>
    </Link>
  );
}

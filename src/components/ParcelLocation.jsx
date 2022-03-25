import "../styles/components/parcel-location.css";

export default function ParcelLocation({ data }) {
  const {
    location_name,
    location_coordinate_latitude,
    location_coordinate_longitude,
  } = data;

  return (
    <section>
      <div>
        <h3>Deliver to:</h3>
        <p>{location_name}</p>
      </div>
      <div>
        <iframe
          src={`https://www.google.com/maps/search/?api=1&query=${location_coordinate_latitude},${location_coordinate_longitude}`}
          width="600"
          height="450"
          title="Map to parcel delivery"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

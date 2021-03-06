import "../styles/components/parcel-location.css";

export default function ParcelLocation({ data }) {
  const {
    id,
    location_name,
    location_coordinate_latitude,
    location_coordinate_longitude,
  } = data;

  const latStart = parseFloat(location_coordinate_latitude) - 0.1;
  const latEnd = parseFloat(location_coordinate_latitude) + 0.1;
  const lonStart = parseFloat(location_coordinate_longitude) + 0.1;
  const lonEnd = parseFloat(location_coordinate_longitude) - 0.1;

  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lonStart}%2C${latStart}%2C${lonEnd}%2C${latEnd}&layer=mapnik&marker=${location_coordinate_latitude}%2C${location_coordinate_longitude}`;

  return (
    <section className="location-container">
      <div>
        <h3>Deliver to:</h3>
        <p>{location_name}</p>
      </div>
      <div className="map-container">
        <iframe
          scrolling="no"
          className="map"
          src={mapSrc}
          title={`map-${id}`}
        ></iframe>
        <small>
          <a
            href="https://www.openstreetmap.org/#map=12/29.8335/108.7482"
            target="_blank"
            rel="noreferrer"
          >
            Open map in a new tab
          </a>
        </small>
      </div>
    </section>
  );
}

export default function Parcel(props) {
  const item = props.item;

  const { id, eta, last_updated, user_name, location_name } = item;

  return (
    <div>
      <div>
        <h2>Pacote:</h2>
        <p>{id}</p>
        <p> {user_name}</p>
        <p>{location_name}</p>
        <p>{eta}</p>
        <p>{last_updated}</p>
      </div>
    </div>
  );
}

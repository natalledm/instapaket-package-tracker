import Parcel from "./components/Parcel";
import FetchData from "./scripts/FetchData";

export default function App() {
  const retrievedData = FetchData();

  // console.log(JSON.stringify(data, null, 6));

  const parcel = retrievedData.map((item, index) => (
    <Parcel item={item} key={index} />
  ));

  return <div className="App">{parcel}</div>;
}

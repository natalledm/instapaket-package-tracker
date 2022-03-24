// Components
import ParcelCard from "./ParcelCard";
import FetchData from "../scripts/FetchData";

export default function ParcelsScreen() {
  const retrievedData = FetchData();

  // create cards
  const card = retrievedData.map((item) => (
    <ParcelCard item={item} key={item.id} />
  ));

  return <section>{card}</section>;
}

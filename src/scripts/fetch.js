const apiUrl = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

async function fetchParcels() {
  const response = await fetch(apiUrl).catch((error) => console.log(error));
  const parcels = await response.json().catch((error) => console.log(error));
  return parcels;
}

export default fetchParcels;

const apiUrl = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

async function fetchParcels() {
  const response = await fetch(apiUrl);
  const parcels = await response.json();
  return parcels;
}

export default fetchParcels;

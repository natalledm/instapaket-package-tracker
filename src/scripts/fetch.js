const apiUrl = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840aa";

async function fetchParcels() {
  const response = await fetch(apiUrl);
  const parcels = await response.json();
  if (!response.ok) {
    throw new Error("Wrong url!");
  }
  return parcels;
}

export default fetchParcels;

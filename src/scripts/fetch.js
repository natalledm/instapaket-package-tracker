const apiUrl = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

async function fetchParcels() {
  const response = await fetch(apiUrl);
  const parcels = await response.json();
  if (!response.ok) {
    throw new Error("wrong url! You don't have access to this user account!");
  }
  return parcels;
}

export default fetchParcels;

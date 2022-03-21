import { useEffect, useState } from "react";

export default function FetchData() {
  const [data, setData] = useState([]);

  //properties
  const apiUrl = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

  //method
  useEffect(() => loadData(apiUrl, setData), []);

  //save the data
  async function loadData(url, setState) {
    const response = await fetch(url);
    const json = await response.json();

    setState(json);
  }

  return data;
}

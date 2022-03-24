import { useEffect, useState } from "react";

export default function FetchData() {
  // const [status, setStatus] = useState(0); // 0 = loading; 1 = success; 2 = failure
  const [data, setData] = useState([]);

  //properties
  const apiUrl = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

  //method
  useEffect(() => loadData(apiUrl, setData), []);

  //save the data
  async function loadData(url, setState) {
    const response = await fetch(url).catch((error) => console.log(error));
    const json = await response.json().catch((error) => console.log(error));

    setState(json);
  }

  return data;
}

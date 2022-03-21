import { useEffect, useState } from "react";

export default function App() {

  const [task, setTask] = useState({});

  useEffect(() => {
    fetch('https://my.api.mockaroo.com/insta-orders.json?key=e49e6840')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setTask(json);
      });
  }, []);

  const file = JSON.stringify(task, null, 4)
  console.log(file)

  return (
    <div className="App">
    </div>
  );
};

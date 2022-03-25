export default function formatString(string) {
  //  "eta": "2021-09-21T17:45:03Z",
  let newStringArray = string.split(/[A-Z]/);
  return {
    date: newStringArray[0],
    time: newStringArray[1],
  };
}

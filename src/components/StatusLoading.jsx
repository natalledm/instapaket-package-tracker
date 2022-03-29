import kiki from "../assets/kiki-loading-by-7014-G.gif";

export default function StatusLoading() {
  return (
    <div>
      <img src={kiki} alt="Kiki flying in a broom to retrieve your package" />
      <p>Retrieving your packages...</p>
    </div>
  );
}

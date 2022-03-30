import kiki from "../assets/kiki-loading-by-7014-G.gif";
import "../styles/components/status-loading.css";

export default function StatusLoading() {
  return (
    <div className="loading-container">
      <img src={kiki} alt="Kiki flying in a broom to retrieve your package" />
      <p>Retrieving your packages...</p>
    </div>
  );
}

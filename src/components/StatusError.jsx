import "../styles/components/status-error.css";

export default function StatusError(props) {
  return (
    <div className="error-container">
      <p>Ops! It seems that we couldn't find the page you requested.</p>
      <p>
        The specific error was:
        <span className="error-message"> {props.errorMessage}</span>
      </p>
      <p>Please refresh the page or go back to the starting page! =)</p>
    </div>
  );
}

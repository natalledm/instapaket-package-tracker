import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import App from "./App";
import ParcelsScreen from "./components/ParcelsScreen";
import ParcelDetailsScreen from "./components/ParcelDetailsScreen";

const rootElement = document.getElementById("root");
render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="parcels" element={<ParcelsScreen />} />
      <Route path="parcels/:id" element={<ParcelDetailsScreen />} />
      <Route path="/*" element={<Navigate replace to="/" />} />
    </Routes>
  </Router>,
  rootElement,
);

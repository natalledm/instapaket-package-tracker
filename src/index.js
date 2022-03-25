import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import OverviewScreen from "./components/OverviewScreen";
import ParcelDetailsScreen from "./components/ParcelDetailsScreen";

const rootElement = document.getElementById("root");
render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="parcels" element={<OverviewScreen />} />
      <Route path="parcels/:id" element={<ParcelDetailsScreen />} />
    </Routes>
  </Router>,
  rootElement,
);

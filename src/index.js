import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import App from "./App";
import ParcelsScreen from "./components/screens/ParcelsScreen";
import ParcelDetailsScreen from "./components/screens/ParcelDetailsScreen";
import { ParcelsProvider } from "./components/state/ParcelsProvider";

const rootElement = document.getElementById("root");
render(
  <ParcelsProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
        <Route path="parcels" element={<ParcelsScreen />} />
        <Route path="parcels/:id" element={<ParcelDetailsScreen />} />
      </Routes>
    </Router>
  </ParcelsProvider>,
  rootElement,
);

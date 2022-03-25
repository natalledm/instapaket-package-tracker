import { createContext, useEffect, useState } from "react";
import fetchParcels from "../../scripts/fetch";

export const ParcelsContext = createContext([]);

export function ParcelsProvider({ children }) {
  const [parcels, setParcels] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const parcels = await fetchParcels();
      setParcels(parcels);
    }
    fetchData();
  }, []);

  const values = parcels;
  return (
    <ParcelsContext.Provider value={values}>{children}</ParcelsContext.Provider>
  );
}

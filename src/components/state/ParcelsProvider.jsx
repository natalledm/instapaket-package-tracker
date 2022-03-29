import { createContext, useEffect, useState } from "react";
import fetchParcels from "../../scripts/fetch";
import backup from "../../backup/backup.json";

export const ParcelsContext = createContext([]);

export function ParcelsProvider({ children }) {
  const [parcels, setParcels] = useState([]);
  const [status, setStatus] = useState({
    error: false,
    errorMessage: "",
    loading: false,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        setStatus({ error: false, errorMessage: "", loading: true });
        const parcels = await fetchParcels();
        setParcels(parcels);
        setStatus({ error: false, errorMessage: "", loading: false });
      } catch (error) {
        console.log("entra aqui?");
        console.log("error", error);
        setStatus({ error: true, errorMessage: error, loading: false });
        setParcels(backup);
      }
    }
    fetchData();
  }, []);

  const values = { parcels, ...status };
  return (
    <ParcelsContext.Provider value={values}>{children}</ParcelsContext.Provider>
  );
}

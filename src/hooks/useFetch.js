import { useState, useEffect } from "react";
import axios from "axios";

// Hook reutilizable: maneja los 3 estados de UI -> loading, data, error
export default function useFetch(fetcher) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        setLoading(true);
        setError(null);
        const result = await fetcher(controller.signal);
        setData(result);
      } catch (err) {
        if (axios.isCancel(err)) return; // petición cancelada: no es un error real
        setError(err.message || "Error desconocido");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    load();

    // Cleanup: cancela la petición si el componente se desmonta
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error };
}

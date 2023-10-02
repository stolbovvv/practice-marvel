import { useCallback, useState } from 'react';

export function useFetch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (url, { method = 'GET', body = null, headers = { 'Content-Type': 'application/json' } } = {}) => {
      setError(null);
      setLoading(true);

      try {
        const response = await fetch(url, { method: method, headers: headers, body: body });

        if (!response.ok) throw new Error(`Could not frtch ${url}, status: ${response.status}`);

        const json = await response.json();

        setLoading(false);

        return json;
      } catch (error) {
        setError(error.message);
        setLoading(false);
        throw error;
      }
    },
    [],
  );

  return { fetchData, loading, error };
}

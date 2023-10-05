import { useCallback, useState } from 'react';

function useHttp() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const BODY = null;
  const METHOD = 'GET';
  const HEADERS = { 'Content-Type': 'application/json; charset=utf-8' };

  const request = useCallback(async (url, { method = METHOD, headers = HEADERS, body = BODY } = {}) => {
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(url, { method, headers, body });

      if (!response.ok) {
        throw new Error(`Failed to retrieve data from URL: ${url}, status: ${response.status}`);
      }

      const json = await response.json();

      setLoading(false);

      return json;
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }, []);

  return { error, loading, request };
}

export { useHttp };

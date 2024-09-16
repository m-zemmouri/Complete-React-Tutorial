import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    async function fetchData() {
      try {
        const res = await axios(url, { signal: abortCont.signal });
        setIsPending(false);
        setData(res.data);
        setError(null);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        }
      }
    }
    fetchData();
    // abort the fetch
    return () => {
      abortCont.abort();
    };
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;

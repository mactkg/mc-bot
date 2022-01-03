import { useCallback, useState } from "react";
import { sendGetCloudFunction } from "../fetch";

export const useGetServerInfo = (token: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [info, setInfo] = useState("");

  const getInfo = useCallback(async () => {
    if (!token || loading) return;

    setLoading(true);
    setError(false);

    // const url = "http://localhost:8000/"
    const url = "https://us-central1-kawarahouse.cloudfunctions.net/info";
    const res = await sendGetCloudFunction(url, token);

    setLoading(false);
    if (res.ok) {
      const text = await res.text();
      setInfo(text);
    } else {
      setError(true);
    }
  }, [token, loading]);

  return { getInfo, info, loading, error };
};

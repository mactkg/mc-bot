import { useCallback, useState } from "react";
import { sendPostCloudFunction } from "../fetch";

export const useOperateServer = (token: string) => {
  const [operating, setOperating] = useState<"" | "start" | "stop">("");
  const [error, setError] = useState(false);

  const startServer = useCallback(async () => {
    if (!token || operating) return;

    setOperating("start");
    setError(false);

    const url = "https://us-central1-kawarahouse.cloudfunctions.net/start-mc";
    const res = await sendPostCloudFunction(url, token);

    setOperating("");
    if (res.ok) {
      const text = await res.text();
      setError(text !== "ok");
    } else {
      setError(true);
    }
  }, [token, operating]);

  const stopServer = useCallback(async () => {
    if (!token || operating) return;

    setOperating("stop");
    setError(false);

    const url = "https://us-central1-kawarahouse.cloudfunctions.net/stop-mc";
    const res = await sendPostCloudFunction(url, token);

    setOperating("");
    if (res.ok) {
      const text = await res.text();
      setError(text !== "ok");
    } else {
      setError(true);
    }
  }, [token, operating]);

  return { startServer, stopServer, operating, error };
};

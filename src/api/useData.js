import { useEffect } from "react";
import { useFetch } from "./useFetch.js";
import { mainUrls } from "./dataRoutes.js";

export const useJson = (url = mainUrls.jsonUrl) => {
  const [json, setUrl] = useFetch(url);
  useEffect(() => {
    setUrl(url);
  }, [url]);
  return json === undefined ? "Loading..." : json;
};


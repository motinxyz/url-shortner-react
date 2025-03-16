import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import RedirectionLoader from "./RedirectionLoader";

const ShortenUrlPage = () => {
  const { url } = useParams();

  useEffect(() => {
    if (url) {
      window.location.href = import.meta.env.VITE_BACKEND_URL + `/${url}`;
    }
  }, [url]);
  return <RedirectionLoader />;
};

export default ShortenUrlPage;

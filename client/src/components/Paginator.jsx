import React, { useEffect, useRef, useState } from "react";
import { useObserver } from "../hooks/useObserver";
import { useLocation } from "react-router-dom";

export default function Paginator({ fetchCallback }) {
  const scroller = useRef();
  const [page, setPage] = useState(1);
  const [allowFetch, setAllowFetch] = useState(false);
  const { key } = useLocation();

  async function doFetch(...args) {
    try {
      setAllowFetch(false);
      await fetchCallback(...args);
      setAllowFetch(true);
    } catch (e) {
      setAllowFetch(false);
    }
  }

  useEffect(() => {
    setPage(1);
    setAllowFetch(true);
  }, [key]);

  useEffect(() => {
    doFetch(page);
  }, [page, key]);

  useObserver(scroller, () => setPage(page + 1), allowFetch);

  return <div ref={scroller}></div>;
}

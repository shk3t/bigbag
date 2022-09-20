import React, { useEffect, useRef, useState } from "react";
import { useObserver } from "../hooks/useObserver";
import { useSearchParams } from "react-router-dom";

export default function Paginator({ fetchCallback }) {
  const [searchParams] = useSearchParams();
  const scroller = useRef();
  const [page, setPage] = useState(0);
  const [allowFetch, setAllowFetch] = useState(false);

  useEffect(() => {
    setPage(1);
    setAllowFetch(true);
  }, [searchParams]);

  useEffect(() => {
    async function doFetch(...args) {
      try {
        setAllowFetch(false);
        await fetchCallback(...args);
        setAllowFetch(true);
      } catch (e) {
        setAllowFetch(false);
      }
    }
    if (page !== 0) doFetch(page);
  }, [page]);

  useObserver(scroller, () => setPage(page + 1), allowFetch);

  return <div ref={scroller}></div>;
}

import React, { useEffect, useRef, useState } from "react";
import { useObserver } from "../hooks/useObserver";

export default function Paginator({ fetchCallback }) {
  const scroller = useRef();
  const [page, setPage] = useState(1);
  const [allowFetch, setAllowFetch] = useState(false);

  useEffect(() => {
    async function doFetch(...args) {
      try {
        setAllowFetch(false);
        await fetchCallback(...args);
        setAllowFetch(true);
      } catch {
        setAllowFetch(false);
      }
    }

    doFetch(page);
  }, [page]);

  useObserver(scroller, () => setPage(page + 1), allowFetch);

  return <div ref={scroller}></div>;
}

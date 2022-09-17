import { useEffect, useRef } from "react";

export function useObserver(ref, callback, allowed) {
  const observer = useRef();

  useEffect(() => {
    if (!allowed) return;
    if (observer.current) observer.current.disconnect();

    function observerCallback(entries) {
      if (entries[0].isIntersecting) {
        callback();
      }
    }

    observer.current = new IntersectionObserver(observerCallback);
    observer.current.observe(ref.current);
  }, [allowed]);
}

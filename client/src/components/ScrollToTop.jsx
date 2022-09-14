import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

// export default function ScrollToTop(child) {
//   const { children } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [children]);

//   return null;
// }

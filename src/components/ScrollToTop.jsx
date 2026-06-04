import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
<<<<<<< HEAD
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
=======
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace("#", "");
      // Delay slightly to allow the DOM/components to finish loading
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo(0, 0);
        }
      }, 200);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
>>>>>>> VOORA-Rakshana

  return null;
};

export default ScrollToTop;
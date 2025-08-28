import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top with smooth behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    // Also ensure the body scrolls to top for better compatibility
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [pathname]);

  return null;
}

export default ScrollToTop;

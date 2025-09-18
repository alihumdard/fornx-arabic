import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollDetection = (threshold = 10) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // THIS IS THE KEY LOG: It will print every time the window scrolls
      console.log(
        `[Scroll Hook] Event detected on path: ${pathname}. Scroll position: ${window.scrollY}`
      );

      if (window.scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    console.log(`[Scroll Hook] Setting up listener for path: ${pathname}`);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Run a check when the page loads
    handleScroll();

    return () => {
      console.log(`[Scroll Hook] Cleaning up listener for path: ${pathname}`);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, threshold]);

  return isScrolled;
};

export default useScrollDetection;
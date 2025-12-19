import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This is the magic line that fixes your issue
    window.scrollTo(0, 0);
  }, [pathname]); // Runs every time the URL path changes

  return null; // This component doesn't render anything visual
}
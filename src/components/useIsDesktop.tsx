import { useEffect, useState } from "react";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    function handleChange() {
      setIsDesktop(mediaQuery.matches);
    }

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return isDesktop;
}

export default useIsDesktop;
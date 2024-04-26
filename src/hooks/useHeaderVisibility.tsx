import { useEffect, useState } from "react";

export const useHeaderVisibility = () => {
  const [prevPosition, setPrevPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setVisible(prevPosition > currentPosition || currentPosition < 10);
      setPrevPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevPosition, visible]);
};

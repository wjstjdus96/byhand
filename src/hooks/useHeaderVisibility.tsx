import { useEffect, useMemo, useRef, useState } from "react";
import { useThrottle } from "./useThrottle";

export const useHeaderVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollY = useRef(0);
  const throttle = useThrottle();

  const handleScroll = useMemo(
    () =>
      throttle(() => {
        const curScrollY = window.scrollY;
        if (prevScrollY.current < curScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        prevScrollY.current = curScrollY;
      }, 100),
    [prevScrollY]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return { isVisible };
};

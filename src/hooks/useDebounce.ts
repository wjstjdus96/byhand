import { useCallback } from "react";

export const useDebounce = (func: any, wait: number) => {
  let timeout: NodeJS.Timeout | null;

  return useCallback((...args: any) => {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  }, []);
};

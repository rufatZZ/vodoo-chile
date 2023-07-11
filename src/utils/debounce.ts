import { useEffect, useMemo, useRef } from "react";

export const debounce = (callback: Function, wait: number) => {
  let timeoutId: number;
  return (...args: []) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
};

export const useDebounce = (callback: Function) => {
  const ref = useRef<Function | null>();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return debounce(func, 500);
  }, []);

  return debouncedCallback;
};

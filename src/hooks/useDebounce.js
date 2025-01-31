import { useCallback } from 'react';

const useDebounce = () => {
  const debounce = useCallback((callback, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  }, []);

  return debounce;
};

export default useDebounce;

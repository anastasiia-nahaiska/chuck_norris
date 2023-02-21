import { useState, useEffect } from 'react';

export function useStorage<T>(
  initialValue: T,
  key: string
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const getValue = () => {
    const storage = localStorage.getItem(key);

    if (storage) {
      return JSON.parse(storage);
    }

    return initialValue;
  };

  const [ value, setValue ] = useState<T>(getValue());

  useEffect(() => {
    if (!value) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value]);

  return [ value, setValue ];
}
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type Response<Theme> = [Theme, Dispatch<SetStateAction<Theme>>];

export function usePersistedState<Theme>(
  key: string,
  initialState: Theme
): Response<Theme> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

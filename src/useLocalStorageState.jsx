import { useState, useEffect } from "react";
export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    // whenever initial of use state depends on computation,
    //always pass a function that React execute on initial render.
    // not call a function inside the useState
    // only PURE function.
    const storedList = localStorage.getItem(key);
    return storedList ? JSON.parse(storedList) : initialState;
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key] // as soon as watched changes it effects.
  );
  return [value, setValue];
}

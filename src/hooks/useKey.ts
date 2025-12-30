import { useEffect } from "react";

export default function useKey(key: string, action: () => void) {


  useEffect(() => {
  const controller= new AbortController()
  function downHandler(event: KeyboardEvent) {
    if (event.key === key) action();
  }

    document.addEventListener("keydown", downHandler,{signal:controller.signal});
    return () => {
      controller.abort()
    };
  }, [key, action]);
}

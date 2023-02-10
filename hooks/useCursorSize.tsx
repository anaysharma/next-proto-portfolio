import { useEffect, useState } from "react";

export default function useCursorSize() {
  const [size, setSize] = useState(20);

  useEffect(() => {
    const shrink = () => setSize(10);
    const reset = () => setSize(20);
    document.addEventListener("mousedown", shrink);
    document.addEventListener("mouseup", reset);

    return () => {
      document.removeEventListener("mousedown", shrink);
      document.removeEventListener("mouseup", reset);
    };
  }, []);

  return size;
}

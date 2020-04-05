import { useState, useEffect } from "react";

const useMousePostion = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMoveEvent = e => {
    setPosition({
      x: e.pageX,
      y: e.pageY
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMoveEvent);

    return () => {
      document.removeEventListener(handleMouseMoveEvent);
    };
  }, []);

  return position;
};

export { useMousePostion as default };

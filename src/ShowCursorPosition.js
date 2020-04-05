import React from "react";
import useMousePostion from "./hooks/useMousePostion";

const ShowCursorPostion = () => {
  const position = useMousePostion();
  return (
    <p>
      Mouse Position is : {position.x} , {position.y}
    </p>
  );
};

export { ShowCursorPostion as default };

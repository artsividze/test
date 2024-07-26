import React, { useRef } from "react";
import { ButtonInfo } from "../../Types/type";

function Button({ handleButtonClick, text }: ButtonInfo) {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  return (
    <button
      className="border border-solid border-[black] border-1px my-1"
      ref={btnRef}
      // key={key}
      onClick={() => {
        handleButtonClick(btnRef);
      }}
    >
      {text}
    </button>
  );
}

export default Button;

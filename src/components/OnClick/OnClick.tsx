import React from "react";
import { OnClickProps } from "../../Types/type";
export default function Onclick(props: OnClickProps) {
  if (!props.added) {
    return null;
  } else {
    return (
      <>
        <div>
          <button
            className="border border-solid border-[red] "
            style={{
              marginLeft: "20px",
              marginTop: `${props.coords}px`,
            }}
          >
            {props.text}
          </button>
        </div>
      </>
    );
  }
}

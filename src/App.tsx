import React, { useState, useCallback } from "react";
import "./App.css";
import { InfoParams } from "./Types/type";
import Button from "./components/Button/Button";
import Onclick from "./components/OnClick/OnClick";

function App() {
  const [info, setInfo] = useState<InfoParams>({
    buttonName: "",
    added: false,
    coords: 0,
  });

  const btnNames: string[] = ["Home", "Contacts", "About", "Schedule"];

  const handleButtonClick = useCallback(
    (btn: React.RefObject<HTMLButtonElement | null>) => {
      const top = btn.current?.getBoundingClientRect().top;
      const btnname = btn.current?.textContent;
      setInfo(() => ({
        added: true,
        coords: top || 0,
        buttonName: btnname || "",
      }));
    },
    []
  );
  return (
    <>
      <div className="w-100px flex flex-row">
        <div className="flex flex-col w-[100px] mt-10">
          {btnNames.map((btnName, btnIndex) => (
            <Button
              key={btnIndex}
              text={btnName}
              handleButtonClick={handleButtonClick}
            />
          ))}
        </div>
        <Onclick
          text={info.buttonName}
          coords={info.coords}
          added={info.added}
        />
      </div>
    </>
  );
}

export default App;

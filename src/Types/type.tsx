// import React from "react";

export type SetInfoState = (info: InfoParams) => void;

export type InfoParams = {
  buttonName: string;
  added: boolean;
  coords: number | undefined;
};

export type OnClickProps = {
  text: string;
  coords: number | undefined;
  added: boolean;
};

type HandleButtonClick = (
  btn: React.RefObject<HTMLButtonElement | null>
) => void;
export interface ButtonInfo {
  key: number;
  handleButtonClick: HandleButtonClick;
  text: string;
}

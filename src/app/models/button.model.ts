export interface StypeButton {
  background: string;
  color: string;
  border?: string;
  borderRadius?: string;
  with?: string;
  height?: string;
  minWidth?: string;
  padding?: string;
}

export interface TypeButton {
  primary?: StypeButton;
  secondary?: StypeButton;
  tertiary?: StypeButton;
  quaternary?: StypeButton;
  quinary?: StypeButton;
  senary?: StypeButton;
  septenary?: StypeButton;
  octonary?: StypeButton;
  nonary?: StypeButton;
  denary?: StypeButton;
  outline?: StypeButton;
  danger?: StypeButton;
  dashed?: StypeButton;
  close?: StypeButton;
  exit?: StypeButton;
}

export interface ButtonSatte {
  component?: string;
  disabled: boolean;
}

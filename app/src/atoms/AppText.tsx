import styled, { css } from "styled-components/native";

import defaultStyle from "../../../styled";

const AppText = styled.Text<{
  flex?: number;
  color?: string;
  fontSize?: number;
  fw?: string;
  capital?: boolean;
  mh?: number;
  mv?: number;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  pv?: number;
  ph?: number;
}>`
  ${defaultStyle.text}
  font-size: ${({ fontSize }) => fontSize || 18}px;
  font-weight: ${({ fw }) => fw || "normal"};
  text-transform: ${({ capital }) => (capital ? "uppercase" : "none")};
  color: ${({ color }) =>
    defaultStyle.colors[
      color === "primary"
        ? "primary"
        : color === "secondary"
        ? "secondary"
        : color === "black"
        ? "black"
        : color === "medium"
        ? "medium"
        : color === "dark"
        ? "dark"
        : "white"
    ]};

  ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `}

  ${({ mt }) =>
    mt &&
    css`
      margin-top: ${mt}px;
    `}
  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb}px;
    `}
              ${({ mr }) =>
    mr &&
    css`
      margin-right: ${mr}px;
    `}
              ${({ ml }) =>
    ml &&
    css`
      margin-left: ${ml}px;
    `}
       ${({ mh }) =>
    mh &&
    css`
      margin-horizontal: ${mh}px;
    `}

         ${({ mv }) =>
    mv &&
    css`
      margin-vertical: ${mv}px;
    `}
       ${({ pv }) =>
    pv &&
    css`
      padding-vertical: ${pv}px;
    `}
         ${({ ph }) =>
    ph &&
    css`
      padding-vertical: ${ph}px;
    `}
`;

export default AppText;

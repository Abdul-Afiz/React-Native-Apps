import styled, { css } from "styled-components/native";
import { Platform } from "react-native";

import colors from "../../config/colors";

const AppText = styled.Text<{
  color?: string;
  fontSize?: number;
  fw?: string;
  capital?: boolean;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  pv?: number;
}>`
  font-family: ${Platform.OS === "android" ? "Roboto" : "Avenir"};
  font-size: ${({ fontSize }) => fontSize || 18}px;
  font-weight: ${({ fw }) => fw || "normal"};
  text-transform: ${({ capital }) => (capital ? "uppercase" : "none")};
  color: ${({ color }) =>
    colors[
      color === "primary"
        ? "primary"
        : color === "secondary"
        ? "secondary"
        : color === "black"
        ? "black"
        : "white"
    ]};

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
                ${({ pv }) =>
    pv &&
    css`
      padding-vertical: ${pv}px;
    `}
`;

export default AppText;

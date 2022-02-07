import styled, { css } from "styled-components/native";
import colors from "../../config/colors";

const Box = styled.View<{
  height?: string;
  width?: string;
  justify?: string;
  items?: string;
  fd?: string;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  pt?: number;
  pb?: number;
  pr?: number;
  pl?: number;
  ph?: number;
  pv?: number;
  mh?: number;
  mv?: number;
  flex?: number;
  br?: number;
  flow?: string;
  bgColor?: string;
  overflow?: boolean;
}>`
  background-color: ${({ bgColor }) =>
    colors[
      bgColor === "primary"
        ? "primary"
        : bgColor === "secondary"
        ? "secondary"
        : bgColor === "black"
        ? "black"
        : bgColor === "white"
        ? "white"
        : bgColor === "medium"
        ? "medium"
        : bgColor === "light"
        ? "light"
        : bgColor === "danger"
        ? "danger"
        : "transparent"
    ]};

  flex-direction: ${({ fd }) => (fd ? "row" : "column")};
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ items }) => items || "flex-start"};

  ${({ overflow }) =>
    overflow &&
    css`
      overflow: hidden;
    `}

  ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `}
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
      ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}

     ${({ ph }) =>
    ph &&
    css`
      padding-horizontal: ${ph}px;
    `}

         ${({ pv }) =>
    pv &&
    css`
      padding-vertical: ${pv}px;
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

     ${({ br }) =>
    br &&
    css`
      border-radius: ${br}px;
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

        ${({ pt }) =>
    pt &&
    css`
      padding-top: ${pt}px;
    `}
          ${({ pb }) =>
    pb &&
    css`
      padding-bottom: ${pb}px;
    `}
              ${({ pr }) =>
    pr &&
    css`
      padding-right: ${pr}px;
    `}
              ${({ pl }) =>
    pl &&
    css`
      padding-left: ${pl}px;
    `}
`;

export default Box;

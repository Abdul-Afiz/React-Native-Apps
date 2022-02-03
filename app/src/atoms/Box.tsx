import styled, { css } from "styled-components/native";

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
  flex?: number;
}>`
  flex-direction: ${({ fd }) => (fd ? "row" : "column")};
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ items }) => items || "flex-start"};

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

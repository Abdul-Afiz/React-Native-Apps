import styled, { css } from "styled-components/native";

export const AppImgBg = styled.ImageBackground<{
  imgheight?: string;
  imgwidth?: string;
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
  ${({ imgheight }) =>
    imgheight &&
    css`
      height: ${imgheight};
    `}
      ${({ imgwidth }) =>
    imgwidth &&
    css`
      width: ${imgwidth};
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

export const AppImg = styled.Image<{
  aself?: string;
  imgheight?: string;
  imgwidth?: string;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  pt?: number;
  pb?: number;
  pr?: number;
  pl?: number;
  br?: number;
}>`
  ${({ aself }) =>
    aself &&
    css`
      align-self: ${aself};
    `}

  ${({ imgheight }) =>
    imgheight &&
    css`
      height: ${imgheight};
    `}
  ${({ imgwidth }) =>
    imgwidth &&
    css`
      width: ${imgwidth};
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
       ${({ br }) =>
    br &&
    css`
      border-radius: ${br}px;
    `}
`;

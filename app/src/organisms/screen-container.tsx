import styled, { css } from "styled-components/native";
import Constants from "expo-constants";
import colors from "../../config/colors";

const Container = styled.SafeAreaView<{
  flex?: number;
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
  bgColor?: string;
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
  padding-top: ${Constants.statusBarHeight}px
    ${({ flex }) =>
      flex &&
      css`
        flex: ${flex};
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
      `};
`;

type screenProps = {
  bg?: string;
  flex?: number;
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
  children?: React.ReactNode;
};

const ScreenContainer = ({
  flex,
  mt,
  mb,
  mr,
  ml,
  pt,
  pb,
  pr,
  pl,
  ph,
  pv,
  mh,
  mv,
  bg,
  children,
}: screenProps) => {
  return (
    <Container
      flex={flex}
      mt={mt}
      mb={mb}
      mr={mr}
      ml={ml}
      pt={pt}
      pb={pb}
      pr={pr}
      pl={pl}
      ph={ph}
      pv={pv}
      mh={mh}
      mv={mv}
      bgColor={bg}
    >
      {children}
    </Container>
  );
};

export default ScreenContainer;

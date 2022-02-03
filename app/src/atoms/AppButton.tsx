import styled, { css } from "styled-components/native";

import colors from "../../config/colors";
import AppText from "./AppText";

const Button = styled.TouchableOpacity<{
  bg?: string;
  pd?: number;
  mg?: number;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  pt?: number;
  pb?: number;
  pr?: number;
  pl?: number;
}>`
  background-color: ${({ bg }) =>
    colors[
      bg === "white"
        ? "white"
        : bg === "secondary"
        ? "secondary"
        : bg === "black"
        ? "black"
        : "primary"
    ]};
  justify-content: center;
  align-items: center;
  padding: ${({ pd }) => pd || 15}px;
  margin: ${({ mg }) => mg || 0}px;
  width: 100%;
  border-radius: 25px;
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

type btnProps = {
  title?: string;
  onPress?: () => void;
  bg?: string;
  textColor?: string;
  padding?: number;
  margin?: number;
  mg?: number;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  pt?: number;
  pb?: number;
  pr?: number;
  pl?: number;
};

const AppButton = ({
  title,
  onPress,
  bg,
  textColor = "white",
  padding,
  margin,
  mg,
  mt,
  mb,
  mr,
  ml,
  pt,
  pb,
  pr,
  pl,
}: btnProps) => {
  return (
    <Button
      onPress={onPress}
      bg={bg}
      pd={padding}
      mg={margin}
      mt={mt}
      mb={mb}
      mr={mr}
      ml={ml}
      pt={pt}
      pb={pb}
      pr={pr}
      pl={pl}
    >
      <AppText color={textColor} capital fw="bold">
        {title}
      </AppText>
    </Button>
  );
};

export default AppButton;

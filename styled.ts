import styled from "styled-components/native";
import { Platform } from "react-native";
import colors from "./app/config/colors";

export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};

export const View = styled.View``;

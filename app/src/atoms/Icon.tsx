import { View, Text } from "react-native";
import React from "react";
import Box from "./Box";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { materialIconProps } from "../utils/types";

type iconProps = {
  iconName?: materialIconProps;
  size?: number;
  bg?: string;
  iconColor?: string;
};

const Icon = ({
  iconName,
  bg = "black",
  iconColor = "white",
  size = 40,
}: iconProps) => {
  return (
    <Box
      style={{ backgroundColor: bg }}
      width={`${size ? size : 0}px`}
      height={`${size ? size : 0}px`}
      br={size ? size / 2 : 0}
      justify="center"
      items="center"
    >
      <MaterialCommunityIcons
        name={iconName}
        color={iconColor}
        size={size ? size * 0.5 : 0}
      />
    </Box>
  );
};

export default Icon;

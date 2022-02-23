import React from "react";
import { TouchableOpacity } from "react-native";
import AppText from "../atoms/AppText";
import Box from "../atoms/Box";

type PickerProps = {
  label?: string;
  onPress?: () => void;
};

const PickerItem = ({ label, onPress }: PickerProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box ph={20}>
        <AppText color="dark" pv={20}>
          {label}
        </AppText>
      </Box>
    </TouchableOpacity>
  );
};

export default PickerItem;

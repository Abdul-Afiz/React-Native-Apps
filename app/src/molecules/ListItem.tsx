import { View, Text, ImageSourcePropType } from "react-native";
import React from "react";
import Box from "../atoms/Box";
import { AppImg } from "../atoms/ImgBg";
import AppText from "../atoms/AppText";

type listItemProps = {
  img?: any;
  title?: string;
  subTitle?: string;
};

const ListItem = ({ img, title, subTitle }: listItemProps) => {
  return (
    <Box fd="row">
      <AppImg source={img} imgheight="70px" imgwidth="70px" br={35} mr={10} />
      <Box>
        <AppText color="black" fw="500">
          {title}
        </AppText>
        <AppText color="medium">{subTitle}</AppText>
      </Box>
    </Box>
  );
};

export default ListItem;

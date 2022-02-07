import { View, Text } from "react-native";
import React from "react";
import Box from "../atoms/Box";
import { AppImg } from "../atoms/ImgBg";
import AppText from "../atoms/AppText";

type cardProps = {
  img?: any;
  title?: string;
  price?: string;
};

const Card = ({ img, title, price }: cardProps) => {
  return (
    <Box br={15} overflow>
      <AppImg source={img} imgwidth="100%" imgheight="200px" />
      <Box pv={20} ph={20}>
        <AppText color="black" mb={7}>
          {title}
        </AppText>
        <AppText color="secondary" fw="bold">
          ${price}
        </AppText>
      </Box>
    </Box>
  );
};

export default Card;

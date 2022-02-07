import { View, Text } from "react-native";
import React from "react";
import Box from "../atoms/Box";
import { AppImg } from "../atoms/ImgBg";
import AppText from "../atoms/AppText";
import ListItem from "../molecules/ListItem";

const ListingDetailsScreen = () => {
  return (
    <Box>
      <AppImg
        source={require("../../assets/jacket.jpg")}
        imgwidth="100%"
        imgheight="300px"
      />

      <Box pv={20} ph={20}>
        <AppText fontSize={24} color="black">
          Red Jacket for sale
        </AppText>
        <AppText color="secondary" fontSize={20} fw="bold" mv={10}>
          $100
        </AppText>
        <Box mv={40}>
          <ListItem
            img={require("../../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ListingDetailsScreen;

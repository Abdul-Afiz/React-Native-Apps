import React from "react";
import ScreenContainer from "../organisms/screen-container";
import AppText from "../atoms/AppText";
import ListItem from "../molecules/ListItem";
import Box from "../atoms/Box";
import { FlatList } from "react-native";
import colors from "../../config/colors";
import Icon from "../atoms/Icon";

import { materialIconProps } from "../utils/types";
import Seperator from "../atoms/seperator";

const menuItems: Array<{
  title: string;
  icon: {
    name: materialIconProps;
    bgColor: string;
  };
}> = [
  {
    title: "My Listing",
    icon: {
      name: "email",
      bgColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      bgColor: colors.secondary,
    },
  },
];

const AccountScreen = () => {
  return (
    <ScreenContainer bg="light" flex={1}>
      <Box bgColor="white" mv={20}>
        <ListItem
          title="Mosh Baba"
          subTitle="mosh@programming.com"
          img={require("../../assets/mosh.jpg")}
        />
      </Box>

      <Box mv={20} bgColor="white">
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              logo={<Icon iconName={item.icon.name} bg={item.icon.bgColor} />}
            />
          )}
          ItemSeparatorComponent={() => <Seperator />}
        />
      </Box>
      <Box bgColor="white">
        <ListItem
          title="Log Out"
          logo={<Icon iconName="logout" bg="#ffe66d" />}
        />
      </Box>
    </ScreenContainer>
  );
};

export default AccountScreen;

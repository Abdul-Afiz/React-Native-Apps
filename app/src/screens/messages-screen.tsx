import React from "react";
import { FlatList } from "react-native";
import ListItemDeleteAction from "../atoms/list-item-delete-action";
import Seperator from "../atoms/seperator";
import ListItem from "../molecules/ListItem";
import ScreenContainer from "../organisms/screen-container";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    img: require("../../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    img: require("../../assets/mosh.jpg"),
  },
];

const MessagesScreen = () => {
  return (
    <ScreenContainer>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            img={item.img}
            renderRightAction={ListItemDeleteAction}
            onPress={() => console.log("selected")}
          />
        )}
        ItemSeparatorComponent={() => <Seperator />}
      />
    </ScreenContainer>
  );
};

export default MessagesScreen;

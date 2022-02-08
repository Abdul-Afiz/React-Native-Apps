import React, { useState } from "react";
import { View } from "react-native";
import { FlatList } from "react-native";
import Box from "../atoms/Box";
import ListItemDeleteAction from "../atoms/list-item-delete-action";
import Seperator from "../atoms/seperator";
import ListItem from "../molecules/ListItem";
import ScreenContainer from "../organisms/screen-container";

const initialMessages = [
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
type deleteProp = {
  id?: number;
  title?: string;
  description?: string;
  img?: any;
};

const MessagesScreen = () => {
  const [messages, setMessages] = useState<any>(initialMessages);
  const [refresh, setRefresh] = useState(false);

  const deleteMessage = (message: deleteProp) =>
    setMessages(messages.filter((m: deleteProp) => m.id !== message.id));

  return (
    <ScreenContainer flex={1}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            img={item.img}
            onPress={() => console.log("select")}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => deleteMessage(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <Seperator />}
        refreshing={refresh}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              img: require("../../assets/mosh.jpg"),
            },
          ])
        }
      />
    </ScreenContainer>
  );
};

export default MessagesScreen;

import React from "react";
import { FlatList } from "react-native";
import Box from "../atoms/Box";
import Card from "../molecules/Card";
import ScreenContainer from "../organisms/screen-container";

const listings = [
  {
    id: 1,
    title: "Red Jacket for sale",
    price: 100,
    img: require("../../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 200,
    img: require("../../assets/couch.jpg"),
  },
];

const ListingsScreen = () => {
  return (
    <ScreenContainer ph={20} bg="light" flex={1}>
      <FlatList
        data={listings}
        keyExtractor={(key) => key.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            price={item.price.toString()}
            img={item.img}
          />
        )}
      />
    </ScreenContainer>
  );
};

export default ListingsScreen;

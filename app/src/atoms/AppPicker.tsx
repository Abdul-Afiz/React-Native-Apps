import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { materialIconProps } from "../utils/types";
import defaultStyle from "../../../styled";
import AppText from "./AppText";
import {
  Button,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { SetStateAction, useState } from "react";
import PickerItem from "../molecules/PickerItem";

const InputWrapper = styled.View`
  background-color: ${defaultStyle.colors.light};
  width: 100%;
  border-radius: 25px;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  margin: 10px 0;
`;
const Input = styled.TextInput`
  ${defaultStyle.text}
  margin-left: 10px;
`;

type textInputProps = {
  icon?: materialIconProps;
  placeholder?: string;
  items?: Array<{ label: string; value: number }>;
  selectedItem?: { label: string; value: number };
  onSelectItem: React.Dispatch<
    SetStateAction<{
      label: string;
      value: number;
    }>
  >;
};

const AppPicker = ({
  icon,
  placeholder,
  items,
  selectedItem,
  onSelectItem,
}: textInputProps) => {
  const [modalVisible, setModalViible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalViible(true)}>
        <InputWrapper>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyle.colors.dark}
            />
          )}
          <AppText color="dark" ml={10} flex={1}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name={"chevron-down"}
            size={20}
            color={defaultStyle.colors.dark}
          />
        </InputWrapper>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalViible(false)} />
        <FlatList
          data={items}
          keyExtractor={(key) => key.value.toString()}
          renderItem={({ item }) => (
            <PickerItem
              label={item.label}
              onPress={() => {
                onSelectItem(item);
                setModalViible(false);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
};

export default AppPicker;

import Box from "./Box";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";

type deleteProps = {
  onPress?: () => void;
};

const ListItemDeleteAction = ({ onPress }: deleteProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Box width="70px" bgColor="danger" justify="center" items="center">
        <MaterialCommunityIcons name="trash-can" size={35} color="white" />
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default ListItemDeleteAction;

import Box from "./Box";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItemDeleteAction = () => {
  return (
    <Box width="70px" bgColor="danger">
      <MaterialCommunityIcons name="trash-can" size={35} color="white" />
    </Box>
  );
};

export default ListItemDeleteAction;

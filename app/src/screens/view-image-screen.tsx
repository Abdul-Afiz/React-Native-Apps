import Box from "../atoms/Box";

import { AppImg } from "../atoms/ImgBg";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewImageScreen = () => {
  return (
    <Box flex={1} bgColor="black" pt={40}>
      <Box fd="row" justify="space-between" ph={30} width="100%">
        <MaterialCommunityIcons name="close" color="white" size={35} />
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </Box>
      <AppImg
        source={require("../../assets/chair.jpg")}
        imgheight="100%"
        imgwidth="100%"
        resizeMode="contain"
      />
    </Box>
  );
};

export default ViewImageScreen;

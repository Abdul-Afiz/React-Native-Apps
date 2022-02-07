import { Image, ImageBackground, View, Text, StyleSheet } from "react-native";
import AppButton from "../atoms/AppButton";
import AppText from "../atoms/AppText";
import { AppImg, AppImgBg } from "../atoms/ImgBg";
import Box from "../atoms/Box";

const WelcomeScreen = () => {
  return (
    <AppImgBg
      source={require("../../assets/background.jpg")}
      blurRadius={10}
      flex={1}
      items="center"
      justify="space-between"
    >
      <Box items="center" pt={70}>
        <AppImg
          source={require("../../assets/logo-red.png")}
          imgheight="100px"
          imgwidth="100px"
        />
        <AppText color="black" fontSize={25} fw="600" pv={20}>
          Sell What You Dont Need
        </AppText>
      </Box>

      <Box width="100%" pr={20} pl={20}>
        <AppButton title="login" mb={10} />
        <AppButton title="register" bg="secondary" mb={10} />
      </Box>
    </AppImgBg>
  );
};

export default WelcomeScreen;

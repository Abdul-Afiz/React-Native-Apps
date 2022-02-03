import { Image, ImageBackground, View, Text, StyleSheet } from "react-native";
import AppButton from "../atoms/AppButton";
import AppText from "../atoms/AppText";
import Box from "../atoms/Box";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      blurRadius={10}
      style={styles.bg}
    >
      <Box items="center" pt={70}>
        <Image
          source={require("../../assets/logo-red.png")}
          style={styles.logo}
        />
        <AppText color="black" fontSize={25} fw="600" pv={20}>
          Sell What You Dont Need
        </AppText>
      </Box>

      <Box width="100%" pr={20} pl={20}>
        <AppButton title="login" mb={10} />
        <AppButton title="register" bg="secondary" mb={10} />
      </Box>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "space-between",
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default WelcomeScreen;

import { Image, ImageBackground, View, Text, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.bg}
    >
      <View style={styles.headerLogo}>
        <Image
          source={require("../../assets/logo-red.png")}
          style={styles.logo}
        />
        <Text>Sell What You Dont Need</Text>
      </View>

      <View>
        <View style={[styles.btn, styles.login]}></View>
        <View style={[styles.btn, styles.signUp]}></View>
      </View>
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
  headerLogo: {
    alignItems: "center",
    paddingTop: 70,
  },
  btn: {
    width: "100%",
    height: 70,
  },
  login: {
    backgroundColor: "#fc5c65",
  },
  signUp: {
    backgroundColor: "#4ecdc4",
  },
});

export default WelcomeScreen;

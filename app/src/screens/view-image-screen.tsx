import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import colors from "../../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={[styles.btn, styles.close]}></View>
        <View style={[styles.btn, styles.delete]}></View>
      </View>
      <Image
        source={require("../../assets/chair.jpg")}
        style={styles.viewImage}
      />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: 40,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 30,
    paddingLeft: 30,
  },
  btn: {
    width: 50,
    height: 50,
  },
  close: {
    backgroundColor: colors.primary,
  },
  delete: {
    backgroundColor: colors.secondary,
  },
  viewImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

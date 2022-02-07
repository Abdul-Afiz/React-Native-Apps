import { View, StatusBar, Platform } from "react-native";
import AppButton from "./app/src/atoms/AppButton";
import WelcomeScreen from "./app/src/screens/welcome-screen";
import Card from "./app/src/molecules/Card";
import ListingDetailsScreen from "./app/src/screens/listing-details-screen";
import ViewImageScreen from "./app/src/screens/view-image-screen";
const App = () => {
  return (
    <View
      style={{
        // paddingHorizontal: 20,
        flex: 1,
        // justifyContent: "center",
        // backgroundColor: "dodgerblue",
        // alignItems: "center",
      }}
    >
      <ViewImageScreen />
    </View>
  );
};

export default App;

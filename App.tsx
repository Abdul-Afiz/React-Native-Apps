import { View, StatusBar, Platform } from "react-native";
import AppButton from "./app/src/atoms/AppButton";
import WelcomeScreen from "./app/src/screens/welcome-screen";

const App = () => {
  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
      }}
    >
      <WelcomeScreen />
    </View>
  );
};

export default App;

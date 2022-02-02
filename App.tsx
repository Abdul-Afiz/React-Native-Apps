import { View, Text, StatusBar, Platform } from "react-native";
import ViewImageScreen from "./app/src/screens/view-image-screen";

const App = () => {
  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
      }}
    >
      <ViewImageScreen />
    </View>
  );
};

export default App;

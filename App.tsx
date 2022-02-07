import { View, StatusBar, Platform } from "react-native";
import AppButton from "./app/src/atoms/AppButton";
import WelcomeScreen from "./app/src/screens/welcome-screen";
import Card from "./app/src/molecules/Card";
import ListingDetailsScreen from "./app/src/screens/listing-details-screen";
import ViewImageScreen from "./app/src/screens/view-image-screen";
import MessagesScreen from "./app/src/screens/messages-screen";
import ScreenContainer from "./app/src/organisms/screen-container";
const App = () => {
  return <MessagesScreen />;
};

export default App;

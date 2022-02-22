import AppButton from "./app/src/atoms/AppButton";
import WelcomeScreen from "./app/src/screens/welcome-screen";
import Card from "./app/src/molecules/Card";
import ListingDetailsScreen from "./app/src/screens/listing-details-screen";
import ViewImageScreen from "./app/src/screens/view-image-screen";
import MessagesScreen from "./app/src/screens/messages-screen";
import ScreenContainer from "./app/src/organisms/screen-container";
import Icon from "./app/src/atoms/Icon";
import ListItem from "./app/src/molecules/ListItem";
import AccountScreen from "./app/src/screens/AccountScreen";
import ListingsScreen from "./app/src/screens/ListingsScreen";
import AppTextInput from "./app/src/atoms/AppTextInput";

const App = () => {
  return (
    <ScreenContainer flex={1}>
      <AppTextInput placeholder="Username" icon="email" />
    </ScreenContainer>
  );
};

export default App;

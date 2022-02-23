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
import AppPicker from "./app/src/atoms/AppPicker";
import { SetStateAction, useState } from "react";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];
const App = () => {
  const [category, setCategory] = useState<{ label: string; value: number }>(
    categories[0]
  );

  return (
    <ScreenContainer flex={1}>
      <AppPicker
        placeholder="Category"
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
      />
      <AppTextInput placeholder="Username" icon="email" />
    </ScreenContainer>
  );
};

export default App;

import { ImageRequireSource, ImageURISource } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { AppImg } from "../atoms/ImgBg";
export type ImageSourcePropType =
  | ImageURISource
  | ImageURISource[]
  | ImageRequireSource;

export type materialIconProps = React.ComponentProps<
  typeof MaterialCommunityIcons
>["name"];

export type cardProps = {
  img?: React.ComponentProps<typeof AppImg>["source"];
  title?: string;
  price?: string;
};

export type inputProps = {
  icon?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  placeholder?: React.ComponentProps<typeof TextInput>["placeholder"];
  autoCapitalize?: React.ComponentProps<typeof TextInput>["autoCapitalize"];
  autoCorrect?: React.ComponentProps<typeof TextInput>["autoCorrect"];
  keyboardType?: React.ComponentProps<typeof TextInput>["keyboardType"];
  textContentType?: React.ComponentProps<typeof TextInput>["textContentType"];
  secureTextEntry?: React.ComponentProps<typeof TextInput>["secureTextEntry"];
  onChangeText?: React.ComponentProps<typeof TextInput>["onChangeText"];
};

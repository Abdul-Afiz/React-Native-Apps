import { ImageRequireSource, ImageURISource } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
export type ImageSourcePropType =
  | ImageURISource
  | ImageURISource[]
  | ImageRequireSource;

export type materialIconProps = React.ComponentProps<
  typeof MaterialCommunityIcons
>["name"];

export type inputProps = React.ComponentProps<typeof TextInput>["placeholder"];

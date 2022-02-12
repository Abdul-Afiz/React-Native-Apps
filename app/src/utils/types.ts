import { ImageRequireSource, ImageURISource } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export type ImageSourcePropType =
  | ImageURISource
  | ImageURISource[]
  | ImageRequireSource;

export type materialIconProps = React.ComponentProps<
  typeof MaterialCommunityIcons
>["name"];

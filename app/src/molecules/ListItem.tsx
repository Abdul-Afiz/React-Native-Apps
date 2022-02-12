import React from "react";

import { TouchableHighlight } from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";

import Box from "../atoms/Box";
import { AppImg } from "../atoms/ImgBg";
import AppText from "../atoms/AppText";

import colors from "../../config/colors";

type listItemProps = {
  img?: any;
  logo?: React.ReactNode;
  title?: string;
  subTitle?: string;
  renderRightActions?: any;
  onPress?: () => void;
};

const ListItem = ({
  img,
  logo,
  title,
  subTitle,
  renderRightActions,
  onPress,
}: listItemProps) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <Box fd="row" pv={15} ph={15} items="center">
            {logo && logo}
            {img && (
              <AppImg source={img} imgheight="70px" imgwidth="70px" br={35} />
            )}
            <Box ml={10} width="100%">
              <AppText color="black" fw="500">
                {title}
              </AppText>
              {subTitle && <AppText color="medium">{subTitle}</AppText>}
            </Box>
          </Box>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default ListItem;

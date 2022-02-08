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
  title?: string;
  subTitle?: string;
  renderRightActions?: any;
  onPress?: () => void;
};

const ListItem = ({
  img,
  title,
  subTitle,
  renderRightActions,
  onPress,
}: listItemProps) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <Box fd="row" pv={15} ph={15}>
            <AppImg
              source={img}
              imgheight="70px"
              imgwidth="70px"
              br={35}
              mr={10}
            />
            <Box>
              <AppText color="black" fw="500">
                {title}
              </AppText>
              <AppText color="medium">{subTitle}</AppText>
            </Box>
          </Box>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default ListItem;

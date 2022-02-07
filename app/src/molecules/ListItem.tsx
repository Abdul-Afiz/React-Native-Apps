import { TouchableHighlight } from "react-native";
import Box from "../atoms/Box";
import { AppImg } from "../atoms/ImgBg";
import AppText from "../atoms/AppText";

import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../../config/colors";

type listItemProps = {
  img?: any;
  title?: string;
  subTitle?: string;
  onPress?: () => void;
  renderRightAction?: any;
};

const ListItem = ({
  img,
  title,
  subTitle,
  onPress,
  renderRightAction,
}: listItemProps) => {
  return (
    <Swipeable renderRightActions={renderRightAction}>
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
  );
};

export default ListItem;

import Box from "../atoms/Box";
import { AppImg } from "../atoms/ImgBg";
import AppText from "../atoms/AppText";
import { cardProps } from "../utils/types";

const Card = ({ img, title, price }: cardProps) => {
  return (
    <Box br={15} overflow bgColor="white" mv={20}>
      <AppImg source={img} imgwidth="100%" imgheight="200px" />
      <Box pv={20} ph={20}>
        <AppText color="black" mb={7}>
          {title}
        </AppText>
        <AppText color="secondary" fw="bold">
          ${price}
        </AppText>
      </Box>
    </Box>
  );
};

export default Card;

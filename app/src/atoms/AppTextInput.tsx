import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { inputProps } from "../utils/types";
import defaultStyle from "../../../styled";

const InputWrapper = styled.View`
  background-color: ${defaultStyle.colors.light};
  width: 100%;
  border-radius: 25px;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  margin: 10px 0;
`;
const Input = styled.TextInput`
  ${defaultStyle.text}
  margin-left: 10px;
  flex: 1;
`;

const AppTextInput = ({ icon, ...otherProps }: inputProps) => {
  return (
    <InputWrapper>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyle.colors.dark}
        />
      )}
      <Input {...otherProps} />
    </InputWrapper>
  );
};

export default AppTextInput;

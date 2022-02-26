import React from "react";
import ScreenContainer from "../organisms/screen-container";
import { AppImg } from "../atoms/ImgBg";
import AppTextInput from "../atoms/AppTextInput";
import AppButton from "../atoms/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../molecules/erro-message";

const validation = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <ScreenContainer flex={1} ph={15} pv={10}>
      <AppImg
        source={require("../../assets/logo-red.png")}
        imgheight="80px"
        imgwidth="80px"
        aself="center"
        mt={50}
        mb={20}
      />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validation}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              placeholder="Email"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
            />
            <ErrorMessage error={errors.email} />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange("password")}
              placeholder="Password"
              textContentType="password"
              secureTextEntry
            />
            <ErrorMessage error={errors.password} />

            <AppButton title="Login" onPress={handleSubmit} mt={15} />
          </>
        )}
      </Formik>
    </ScreenContainer>
  );
};

export default LoginScreen;

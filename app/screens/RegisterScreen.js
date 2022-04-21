import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import AppTextInput from "../reusableComponents/AppTextInput";
import AppButton from "../reusableComponents/AppButton";
import AppErrors from "../reusableComponents/AppErrors";

let schema = yup.object().shape({
  name: yup.string().required().min(6).label("Name"),
  email: yup.string().email().label("Email"),
  password: yup.string().min(4).required().label("Password"),
});

function RegisterScreen() {
  return (
    <View style={styles.registerContainer}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={schema}
      >
        {({ handleChange, handleSubmit, touched, setFieldTouched, errors }) => {
          return (
            <>
              <AppTextInput
                icon="face-woman"
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete={false}
                placeholder="Name"
                onChangeText={handleChange("name")}
                onBlur={() => setFieldTouched("name")}
              />
              {touched.name && <AppErrors>{errors.name}</AppErrors>}
              <AppTextInput
                icon="email"
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete={false}
                placeholder="Email"
                textContentType="emailAddress"
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
              />
              {touched.email && <AppErrors>{errors.email}</AppErrors>}
              <AppTextInput
                icon="account-lock"
                placeholder="Password"
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
              />
              {touched.password && <AppErrors>{errors.password}</AppErrors>}
              <AppButton
                name="login"
                color="secondaryColor"
                onPress={handleSubmit}
              />
            </>
          );
        }}
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  registerContainer: {
    padding: 10,
    marginTop: 30,
  },
});

export default RegisterScreen;

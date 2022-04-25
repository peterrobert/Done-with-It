import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import AppFormField from "../reusableComponents/AppFormField";
import SubmitButton from "../reusableComponents/SubmitButton";

let schema = yup.object().shape({
  name: yup.string().required().min(6).label("Name"),
  email: yup.string().email().required().label("Email"),
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
        {({}) => {
          return (
            <>
              <AppFormField
                icon="face-woman"
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete={false}
                placeholder="Name"
                name="name"
              />
              <AppFormField
                icon="email"
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete={false}
                placeholder="Email"
                textContentType="emailAddress"
                name="email"
              />
              <AppFormField
                icon="account-lock"
                placeholder="Password"
                secureTextEntry={true}
                textContentType="password"
                name="password"
              />
              <SubmitButton name="register" />
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

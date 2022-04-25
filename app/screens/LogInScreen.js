import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Formik } from "formik";
// === Form validation using yup == Import it first ===
import * as yup from "yup";

import AppFormField from "../reusableComponents/AppFormField";
import SubmitButton from "../reusableComponents/SubmitButton";
// === Define yup validation schema out side of the component to avoid re-render

let schema = yup.object().shape({
  email: yup.string().email().required().label("Email"),
  password: yup.string().min(4).required().label("Password"),
});

function LogInScreen() {
  return (
    <View>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={schema}
      >
        {({ handleSubmit }) => {
          return (
            <>
              <AppFormField
                name="email"
                icon="email"
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete={false}
                placeholder="Email"
                textContentType="emailAddress"
              />
              <AppFormField
                name="password"
                icon="account-lock"
                placeholder="Password"
                secureTextEntry={true}
                textContentType="password"
              />
              <SubmitButton name="login" handleSubmit={handleSubmit} />
            </>
          );
        }}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LogInScreen;

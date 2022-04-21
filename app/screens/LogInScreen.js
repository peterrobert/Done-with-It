import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Formik } from "formik";

import AppTextInput from "../reusableComponents/AppTextInput";
import AppButton from "../reusableComponents/AppButton";

function LogInScreen() {
  return (
    <View>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => {
          return (
            <>
              <AppTextInput
                icon="email"
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete={false}
                placeholder="Email"
                textContentType="emailAddress"
                onChangeText={handleChange("email")}
              />
              <AppTextInput
                icon="account-lock"
                placeholder="Password"
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("password")}
              />
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
  logo: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LogInScreen;

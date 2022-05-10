import React, { useState, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import AppFormField from "../reusableComponents/AppFormField";
import SubmitButton from "../reusableComponents/SubmitButton";
import { signUp } from "../api/auth";
import AppErrors from "../reusableComponents/AppErrors";
import { AuthContext } from "../auth/context";

let schema = yup.object().shape({
  name: yup.string().required().min(6).label("Name"),
  email: yup.string().email().required().label("Email"),
  password: yup.string().min(4).required().label("Password"),
});

function RegisterScreen() {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const authContext = useContext(AuthContext);

  const handleRegistration = async ({ name, email, password }) => {
    const response = await signUp(name, email, password);

    if (!response.ok) {
      setIsError(true);
      setErrorMessage(response.data.error);
      return;
    }

    const user = {
      id: response.data.id,
      name: response.data.name,
      email: response.data.email,
    };

    authContext.setCurrentUser(user);
  };

  return (
    <View style={styles.registerContainer}>
      {isError && (
        <AppErrors>
          <Text>{errorMessage}</Text>
        </AppErrors>
      )}
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(value) => handleRegistration(value)}
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

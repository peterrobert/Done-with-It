import React, { useState, useContext } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import jwt_decode from "jwt-decode";
// === Form validation using yup == Import it first ===
import * as yup from "yup";

import AppFormField from "../reusableComponents/AppFormField";
import SubmitButton from "../reusableComponents/SubmitButton";
import { logIn } from "../api/auth";
import AppErrors from "../reusableComponents/AppErrors";
import { AuthContext } from "../auth/context";
import { saveToken } from "../api/storage";

// === Define yup validation schema out side of the component to avoid re-render

let schema = yup.object().shape({
  email: yup.string().email().required().label("Email"),
  password: yup.string().min(4).required().label("Password"),
});

function LogInScreen() {
  const [error, setError] = useState(false);
  const authContext = useContext(AuthContext);

  const userLogin = async ({ email, password }) => {
    const response = await logIn(email, password);
    if (!response.ok) return setError(true);

    setError(false);
    const user = jwt_decode(response.data);
    authContext.setCurrentUser(user);
    saveToken(response.data);
  };

  return (
    <View>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      {error && (
        <AppErrors>
          <Text>Invalid email or password</Text>
        </AppErrors>
      )}
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => userLogin(values)}
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

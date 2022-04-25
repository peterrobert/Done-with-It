import { useFormikContext } from "formik";
import React from "react";
import AppPicker from "../reusableComponents/AppPicker";
import AppErrors from "./AppErrors";

function AppFormPicker({ name, ...otherProps }) {
  const { touched, errors } = useFormikContext();
  return (
    <>
      <AppPicker placeholder={name} {...otherProps} />
      {touched[name] && <AppErrors>{errors[name]}</AppErrors>}
    </>
  );
}

export default AppFormPicker;

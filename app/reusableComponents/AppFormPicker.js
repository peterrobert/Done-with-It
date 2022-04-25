import { useFormikContext } from "formik";
import React from "react";
import AppPicker from "../reusableComponents/AppPicker";
import AppErrors from "./AppErrors";

function AppFormPicker({ name }) {
  const { touched, errors } = useFormikContext();
  return (
    <>
      <AppPicker placeholder={name} />
      {touched[name] && <AppErrors>{errors[name]}</AppErrors>}
    </>
  );
}

export default AppFormPicker;

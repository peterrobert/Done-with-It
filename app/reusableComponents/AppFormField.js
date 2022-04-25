import { useFormikContext } from "formik";
import React from "react";
import AppErrors from "./AppErrors";
import AppTextInput from "./AppTextInput";

function AppFormField({ name, ...otherProps }) {
  const { handleChange, setFieldTouched, touched, errors } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      {touched[name] && <AppErrors>{errors[name]}</AppErrors>}
    </>
  );
}

export default AppFormField;

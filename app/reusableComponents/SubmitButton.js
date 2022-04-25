import { useFormikContext } from "formik";
import React from "react";
import AppButton from "./AppButton";

function SubmitButton({ name }) {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton name={name} color="secondaryColor" onPress={handleSubmit} />
  );
}

export default SubmitButton;

import { Formik } from "formik";
import React from "react";
import AppFormField from "../reusableComponents/AppFormField";
import * as yup from "yup";
import SubmitButton from "../reusableComponents/SubmitButton";
import AppFormPicker from "../reusableComponents/AppFormPicker";

const schema = yup.object().shape({
  title: yup.string().required().min(6).label("Title"),
  price: yup.string().required().label("Price"),
  category: yup.string().min(4).required().label("Category"),
  description: yup.string().min(4).required().label("Description"),
});

function ListEditScreen() {
  return (
    <Formik
      initialValues={{ title: "", price: "", category: "", description: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={schema}
    >
      {() => {
        return (
          <>
            <AppFormField
              name="title"
              autoCapitalize="none"
              autoCorrect
              autoComplete
              placeholder="Title"
            />
            <AppFormField
              name="price"
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete={false}
              placeholder="Price"
            />

            <AppFormPicker name="category" />

            <AppFormField
              name="description"
              autoCapitalize="none"
              autoCorrect
              autoComplete
              placeholder="description"
            />

            <SubmitButton name="submit" />
          </>
        );
      }}
    </Formik>
  );
}

export default ListEditScreen;

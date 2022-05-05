import { Formik } from "formik";
import React, { useState } from "react";
import AppFormField from "../reusableComponents/AppFormField";
import * as yup from "yup";
import SubmitButton from "../reusableComponents/SubmitButton";
import AppFormPicker from "../reusableComponents/AppFormPicker";
import Screen from "../reusableComponents/Screen";

const schema = yup.object().shape({
  title: yup.string().required().min(6).label("Title"),
  price: yup.number().required().min(1).max(1000).label("Price"),
  category: yup.string().required().nullable().label("Category"),
  description: yup.string().min(4).label("Description"),
});

const data = [
  {
    id: 1,
    category: "test category",
  },
  {
    id: 2,
    category: "test category again",
  },
];

function ListEditScreen() {
  const [category, setCategory] = useState("Category");
  return (
    <Screen>
      <Formik
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
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

              <AppFormPicker
                name="category"
                items={data}
                setCategory={setCategory}
                placeholder={category}
              />

              <AppFormField
                name="description"
                autoCapitalize="none"
                autoCorrect
                autoComplete
                placeholder="description"
                multiline
                numberOfLines={3}
              />

              <SubmitButton name="submit" />
            </>
          );
        }}
      </Formik>
    </Screen>
  );
}

export default ListEditScreen;

import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useId } from "react";

export default function ContactForm() {
  const nameId = useId();
  const telId = useId();

  const validator = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
    tel: Yup.number()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
  });

  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={validator}
      >
        <Form className={css["form"]}>
          <div className={css["form-container"]}>
            <div className={css["input-container"]}>
              <label htmlFor="nameId" className={css["form-label"]}>
                Name
              </label>
              <Field
                name="name"
                type="text"
                id={nameId}
                className={css["input-form"]}
              />
            </div>

            <div className={css["input-container"]}>
              <label htmlFor="telId" className={css["form-label"]}>
                Number
              </label>
              <Field
                name="tel"
                type="tel"
                id={telId}
                className={css["input-form"]}
              />
            </div>
          </div>
          <button type="submit" className={css["button-form"]}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const SignupSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("fild Required!"),
  number: yup
    .string()
    .trim()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("fild Required!"),
});

function ContactForm() {
  const values = {
    name: "",
    number: "",
  };

  const dispatch = useDispatch();

  function submit(data, actions) {
    dispatch(addContact(data));
    data = values;
    actions.resetForm();
  }

  return (
    <div className={css.formWrapper}>
      <Formik
        initialValues={values}
        onSubmit={submit}
        validationSchema={SignupSchema}
      >
        <Form className={css.form}>
          <div className={css.inputBlock}>
            <label htmlFor="name" className={css.label}>
              Name
            </label>
            <Field
              className={css.input}
              id="name"
              name="name"
              placeholder="Please enter a name"
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>

          <div className={css.inputBlock}>
            <label htmlFor="number" className={css.label}>
              Number
            </label>
            <Field
              className={css.input}
              id="number"
              name="number"
              placeholder="Please enter a phone number"
              type="text"
            />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>

          <button type="submit" className={css.btn}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;

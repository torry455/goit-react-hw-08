import { Formik, Form, Field, ErrorMessage } from "formik";

const RegistrationForm = () => {
  const handleSubmit = async (values) => {
    try {
      const response = await RegistrationForm(values);
      console.log("User registered successfully:", response);
      // додаткові дії після успішної реєстрації
    } catch (error) {
      console.error("Error registering user:", error);
      // обробка помилок під час реєстрації
    }
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;

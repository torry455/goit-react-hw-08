import { Field, Form, Formik, ErrorMessage } from "formik";
import { NavLink } from "react-router-dom";
import css from "./MainForm.module.css";
import Logo from "../../components/Logo/Logo";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

function MainForm({ title, onSubmit, initialValues, validationSchema }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={css.formWrapper}>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form className={css.MainForm}>
          <div className={css.logo}>
            <Logo />
          </div>
          {title === "Register" && (
            <label htmlFor="name" className={css.label}>
              <p className={css.labelText}>Name</p>

              <Field
                id="name"
                className={css.field}
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <ErrorMessage
                className={css.error}
                name="name"
                component="span"
                ErrorMessage="Enter your name"
              />
            </label>
          )}

          <label htmlFor="email" className={css.label}>
            <p className={css.labelText}>Email</p>

            <Field
              className={css.field}
              id="email"
              type="text"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage className={css.error} name="email" component="span" />
          </label>

          <label htmlFor="password" className={css.label}>
            <p className={css.labelText}>Password</p>

            <div className={css.inputWrapper}>
              <Field
                className={css.field}
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                type="button"
                className={css.iconBtn}
              >
                {showPassword ? (
                  <AiFillEye className={css.icon} width="50" />
                ) : (
                  <AiFillEyeInvisible className={css.icon} />
                )}
              </button>
              <ErrorMessage
                className={css.error}
                name="password"
                component="span"
              />
            </div>
          </label>

          <div className={css.wrapper}>
            <button className={css.btn} type="submit">
              {title}
            </button>
            {title === "Register" ? (
              <span className={css.span}>
                <p>Dont have an account yet?</p>
                <NavLink to="/login">Sign in</NavLink>
              </span>
            ) : (
              <span className={css.span}>
                <div className={css.spanLink}>
                  <p>You dont have an account yet?</p>
                  <NavLink className={css.link} to="/register">
                    Create an account
                  </NavLink>
                </div>
              </span>
            )}
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default MainForm;

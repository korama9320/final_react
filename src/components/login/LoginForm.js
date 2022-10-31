import React from "react";
import { useFormik } from "formik";
import abanob from "./LoginForm.module.css";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
// import ProductList from '../ProductList/ProductList'

function LoginForm() {
  const NavigateTo = useNavigate();

  const register = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(4, "Must be 4 characters or more")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Password cannot be less than 8 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      localStorage.setItem("token", "abc");
      NavigateTo("/productlist");
    },
  });

  const login = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Password cannot be less than 8 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      localStorage.setItem("token", "abc");
      NavigateTo("/login");
    },
  });

  function toLogin() {
    const container = document.getElementById(abanob.container);
    container.classList.remove(abanob["right-panel-active"]);
  }

  function toSignUp() {
    const container = document.getElementById(abanob.container);
    container.classList.add(abanob["right-panel-active"]);
  }

  return (
    <section className={abanob.body}>
      <div>
        <h2 className={abanob.Welcome}>
          {" "}
          <pre>GMS -&gt; Start your sport journey</pre>{" "}
        </h2>
        <div className={abanob.container} id={abanob.container}>
          <div
            className={`${abanob["form-container"]} ${abanob["sign-up-container"]}`}
          >
            <form onSubmit={register.handleSubmit} className={abanob.form}>
              <h1>Create Account</h1>
              <div className={abanob["social-container"]}>
                <a href="#" className={abanob.social}>
                  <i className={`${abanob.fab} ${abanob["fa-facebook-f"]}`} />
                </a>
                <a href="#" className={abanob.social}>
                  <i
                    className={`${abanob.fab} ${abanob["fa-google-plus-g"]}`}
                  />
                </a>
                <a href="#" className={abanob.social}>
                  <i className={`${abanob.fab} ${abanob["fa-linkedin-in"]}`} />
                </a>
              </div>
              <span>or use your email for registration</span>
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                onChange={register.handleChange}
                value={register.values.firstName}
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={register.handleChange}
                value={register.values.email}
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={register.handleChange}
                value={register.values.password}
              />
              <button type="submit">Sign Up</button>
            </form>
          </div>
          <div
            className={`${abanob["form-container"]} ${abanob["sign-in-container"]}`}
          >
            <form onSubmit={login.handleSubmit} className={abanob.form}>
              <h1>Sign in</h1>
              <div className="social-container">
                <a href="#" className={abanob.social}>
                  <i className={`${abanob.fab} ${abanob["fa-facebook-f"]}`} />
                </a>
                <a href="#" className={abanob.social}>
                  <i
                    className={`${abanob.fab} ${abanob["fa-google-plus-g"]}`}
                  />
                </a>
                <a href="#" className={abanob.social}>
                  <i className={`${abanob.fab} ${abanob["fa-linkedin-in"]}`} />
                </a>
              </div>
              <span>or use your account</span>
              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={login.handleChange}
                value={login.values.email}
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={login.handleChange}
                value={login.values.password}
              />
              <a href="#">Forgot your password?</a>
              <button type="submit">Sign In</button>
            </form>
          </div>
          <div className={abanob["overlay-container"]}>
            <div className={abanob.overlay}>
              <div
                className={`${abanob["overlay-panel"]} ${abanob["overlay-left"]}`}
              >
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  onClick={toLogin}
                  className={`${abanob.ghost} ${abanob.button}`}
                  id={abanob.signIn}
                >
                  Sign In
                </button>
              </div>
              <div
                className={`${abanob["overlay-panel"]} ${abanob["overlay-right"]}`}
              >
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button
                  onClick={toSignUp}
                  className={`${abanob.ghost} ${abanob.button}`}
                  id={abanob.signUp}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <footer className={abanob.footer}>
          <p>
            Created with <i className={`${abanob.fa} ${abanob["fa-heart"]}`} />{" "}
            by
            <a target="_blank" href="#">
              {" "}
              GMS{" "}
            </a>
            - Copy rights are reserved - Gym Managment System
            <a
              target="_blank"
              href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/"
            >
              here
            </a>
            .
          </p>
        </footer> */}
      </div>
    </section>
  );
}

export default LoginForm;

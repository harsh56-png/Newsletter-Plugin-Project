import React from "react";
import { Formik } from "formik";
import "./stylenewlogin.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Newlogin = () => {
  const navigate = useNavigate();
  const userSubmit = async (formdata) => {
    console.log(formdata);

    const res = await fetch("http://localhost:5000/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200) {
      console.log("success");
      Swal.fire({
        icon: "success",
        title: "Wellcome!!👌",
        text: "Enter a new World!!",
      });
      navigate("/home");
      const data = await res.json();
      sessionStorage.setItem("user", JSON.stringify(data));
    } else {
      console.log("Login error ");
      Swal.fire({
        icon: "error",
        title: "Try Again!!😒",
        text: "Check your email and password!!",
      });
    }
  };
  return (
    <div>
      <div class="login-box">
        <h2>Login</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={userSubmit}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div class="user-box">
                <input
                  value={values.email}
                  onChange={handleChange}
                  type="email"
                  id="email"
                  required=""
                  placeholder="Enter a valid email address"
                />
                <label>Email</label>
              </div>
              <div class="user-box">
                <input
                  value={values.password}
                  onChange={handleChange}
                  type="password"
                  id="password"
                  required=""
                  placeholder="Enter password"
                />
                <label>Password</label>
              </div>
              <button type="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Newlogin;

import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./Newregister.css";

const Newregister = () => {
  const navigate = useNavigate();

  const userSubmit = async (formdata) => {
    console.log(formdata);

    const response = await fetch("http://localhost:5000/user/add", {
      method: "POST",
      body: JSON.stringify(formdata), //converting JS to JSON
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      console.log("Success");
      Swal.fire({
        title: "Success",
        text: "User added successfully😁👍",
        icon: "success",
      });
      navigate("/login");
    } else {
      console.log("Something went wrong");
      Swal.fire({
        title: "Error",
        text: "Something went wrong😔",
        icon: "error",
      });
    }
  };

  const SignupSchema = Yup.object().shape({
    lname: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
  return (
    <div>
      <section class="form">
        <div class="center">
          <h1>
            REGISTER WITH US <b>NOW</b> AND GET YOUR NEWSLETTER READY
          </h1>
          <hr width="20%" style={{ border: "1px solid #daa800" }} />
          <br />

          <Formik
            initialValues={{
              fname: "",
              lname: "",
              email: "",
              password: "",
            }}
            onSubmit={userSubmit}
            validationSchema={SignupSchema}
          >
            {({ values, handleChange, handleSubmit, errors }) => (
              <form onSubmit={handleSubmit}>
                <input
                  value={values.fname}
                  onChange={handleChange}
                  helperText={errors.fname}
                  error={errors.fname ? true : false}
                  type="text"
                  id="fname"
                  class="form-control active"
                  placeholder="First Name"
                />
                <input
                  value={values.lname}
                  onChange={handleChange}
                  helperText={errors.lname}
                  error={errors.lname ? true : false}
                  type="text"
                  placeholder="Last Name"
                  id="lname"
                  class="form-control active"
                />
                <input
                  type="email"
                  id="email"
                  class="form-control active"
                  autocompleted=""
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
                <input
                  type="password"
                  class="form-control active"
                  autocompleted=""
                  value={values.password}
                  onChange={handleChange}
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <p>
                  By joining, you agree to our{" "}
                  <a href="terms_of_service.php">Terms of Service</a>
                </p>
                <button>JOIN</button>
                <p>
                  Already have an account? <a href="#">Login Here</a>
                </p>
              </form>
            )}
          </Formik>
        </div>
      </section>

      <footer>
        <div class="footer_container">
          <p class="bottom_text">
            Company Name™ - Copyright © 2018 All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Newregister;

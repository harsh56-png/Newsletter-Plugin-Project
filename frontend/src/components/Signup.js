import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Signup = () => {
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
    <div className="container mt-3">
      <h1 className="text-center">Register with Us</h1>
      <h3 className="text-center">
        Please enter your details to create an account.
      </h3>

      <div id="preview" class="preview">
        <div style={{ display: "none" }}></div>
        <div>
          <div
            data-draggable="true"
            class=""
            style={{ position: "relative" }}
            draggable="false"
          >
            <section
              draggable="false"
              class="container pt-5"
              data-v-271253ee=""
            >
              <section class="mb-10 text-center text-lg-start">
                <div
                  class="px-4 py-5 px-md-5"
                  style={{ backgroundColor: "black" }}
                >
                  <div class="row gx-lg-5 align-items-center">
                    <div class="col-lg-6 mb-5 mb-lg-0">
                      <h2 class="my-5 display-5 fw-bold ls-tight">
                        <span>Amazing Newsletters</span> <br />
                        <span class="text-primary">for your websites</span>
                      </h2>
                      <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                        Get the best newsletter templates and manage your
                        subscribers all at one place. Register with us and leave
                        it all at us!
                      </p>
                    </div>
                    <div class="col-lg-6 mb-5 mb-lg-0">
                      <div class="card">
                        <div class="card-body py-5 px-md-5">
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
                            {({
                              values,
                              handleChange,
                              handleSubmit,
                              errors,
                            }) => (
                              <form onSubmit={handleSubmit}>
                                <div class="row mb-4">
                                  <div class="col">
                                    <div class="form-outline">
                                      <input
                                        value={values.fname}
                                        onChange={handleChange}
                                        helperText={errors.fname}
                                        error={errors.fname ? true : false}
                                        type="text"
                                        id="fname"
                                        class="form-control"
                                      />
                                      <label
                                        class="form-label"
                                        style={{ "marginLeft": "0px" }}
                                      >
                                        First name
                                      </label>
                                      <div class="form-notch">
                                        <div
                                          class="form-notch-leading"
                                          style={{ width: "9px" }}
                                        ></div>
                                        <div
                                          class="form-notch-middle"
                                          style={{ width: "76.8px" }}
                                        ></div>
                                        <div class="form-notch-trailing"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col">
                                    <div class="form-outline">
                                      <input
                                        value={values.lname}
                                        onChange={handleChange}
                                        helperText={errors.lname}
                                        error={errors.lname ? true : false}
                                        type="text"
                                        id="lname"
                                        class="form-control"
                                      />
                                      <label
                                        class="form-label"
                                        
                                        style={{ "marginLeft": "0px" }}
                                      >
                                        Last name
                                      </label>
                                      <div class="form-notch">
                                        <div
                                          class="form-notch-leading"
                                          style={{ width: "9px" }}
                                        ></div>
                                        <div
                                          class="form-notch-middle"
                                          style={{ width: "68px" }}
                                        ></div>
                                        <div class="form-notch-trailing"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="form-outline mb-4">
                                  <input
                                    type="email"
                                    id="email"
                                    class="form-control active"
                                    autocompleted=""
                                    value={values.email}
                                    onChange={handleChange}
                                  />
                                  <label
                                    class="form-label"
                                    
                                    style={{ "marginLeft": "0px" }}
                                  >
                                    Email address
                                  </label>
                                  <div class="form-notch">
                                    <div
                                      class="form-notch-leading"
                                      style={{ width: "9px" }}
                                    ></div>
                                    <div
                                      class="form-notch-middle"
                                      style={{ width: "88.8px" }}
                                    ></div>
                                    <div class="form-notch-trailing"></div>
                                  </div>
                                </div>

                                <div class="form-outline mb-4">
                                  <input
                                    type="password"
                                    class="form-control active"
                                    autocompleted=""
                                    value={values.password}
                                    onChange={handleChange}
                                    id="password"
                                  />
                                  <label
                                    class="form-label"
                              
                                    style={{ "marginLeft": "0px" }}
                                  >
                                    Password
                                  </label>
                                  <div class="form-notch">
                                    <div
                                      class="form-notch-leading"
                                      style={{ width: "9px" }}
                                    ></div>
                                    <div
                                      class="form-notch-middle"
                                      style={{ width: "64.8px" }}
                                    ></div>
                                    <div class="form-notch-trailing"></div>
                                  </div>
                                </div>

                                <button
                                  type="submit"
                                  class="btn btn-primary btn-block mb-4"
                                  aria-controls="#picker-editor"
                                >
                                  Sign up
                                </button>

                            

                                <div class="text-center">
                                  <p>or sign up with:</p>
                                  <button
                                    type="button"
                                    class="btn btn-link btn-floating mx-1"
                                  >
                                    <i
                                      class="fab fa-facebook-f"
                                      aria-controls="#picker-editor"
                                    ></i>
                                  </button>
                                  <button
                                    type="button"
                                    class="btn btn-link btn-floating mx-1"
                                  >
                                    <i
                                      class="fab fa-google"
                                      aria-controls="#picker-editor"
                                    ></i>
                                  </button>
                                  <button
                                    type="button"
                                    class="btn btn-link btn-floating mx-1"
                                  >
                                    <i
                                      class="fab fa-twitter"
                                      aria-controls="#picker-editor"
                                    ></i>
                                  </button>
                                  <button
                                    type="button"
                                    class="btn btn-link btn-floating mx-1"
                                  >
                                    <i
                                      class="fab fa-github"
                                      aria-controls="#picker-editor"
                                    ></i>
                                  </button>
                                </div>
                              </form>
                            )}
                          </Formik>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

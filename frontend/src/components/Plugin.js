import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import './Plugin.css';  


const Plugin = ({ ownerKey }) => {
  // console.log(ownerKey);
  const newsletterSubmit = async (formdata) => {
    console.log(formdata);

    const response = await fetch("http://localhost:5000/newsubscriber/add", {
      method: "POST",
      body: JSON.stringify(formdata), //converting JS to JSON
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response.status);
  };

  const NewslettersignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <div>
      <h1 className="">Newsletter Plugin here</h1>

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
              <section class="mb-10 text-center text-md-start">
                <div
                  class="p-5 bg-image custom2"
                  aria-controls="#picker-editor"
                ></div>

                <div class="card mx-4 mx-md-5 shadow-5-strong custom1">
                  <div class="card-body py-5 px-md-5">
                    <div class="row d-flex justify-content-center">
                      <div class="col-lg-10">
                        <div class="row gx-lg-4 align-items-center">
                          <div class="col-lg-6 mb-4 mb-lg-0">
                            <h2 class="fw-bold mb-lg-0">
                              <span>Do not miss any updates.</span> <br />
                              <span class="text-primary">
                                Subscribe to the newsletter
                              </span>
                            </h2>
                          </div>

                          <Formik
                            initialValues={{
                              email: "",
                              name: "",
                              owner: ownerKey,
                              createdAt: new Date(),
                            }}
                            onSubmit={newsletterSubmit}
                            validationSchema={NewslettersignupSchema}
                          >
                            {({
                              values,
                              handleChange,
                              handleSubmit,
                              errors,
                            }) => (
                             
                                <div class="col-lg-6">
                                <form action="" onSubmit={handleSubmit}>
                                  <div class="d-md-flex flex-row">
                                    <div class="form-outline flex-fill me-1 mb-4 mb-md-0">
                                      <input
                                        value={values.name}
                                        onChange={handleChange}
                                        id="name"
                                        type="text"
                                        class="form-control form-control-lg"
                                      />
                                      <label
                                        class="form-label"
                                        for="formControlEmail0"
                                        style={{ marginLeft: "0px" }}
                                      >
                                        Enter your name
                                      </label>
                                      <div class="form-notch">
                                        <div
                                          class="form-notch-leading"
                                          style={{ width: "9px" }}
                                        ></div>
                                        <div
                                          class="form-notch-middle"
                                          style={{ width: "100px" }}
                                        ></div>
                                        <div class="form-notch-trailing"></div>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="d-md-flex flex-row mt-2">
                                    <div class="form-outline flex-fill me-1 mb-4 mb-md-0">
                                      <input
                                        value={values.email}
                                        onChange={handleChange}
                                        id="email"
                                        type="email"
                                        class="form-control form-control-lg"
                                      />
                                      <label
                                        class="form-label"
                                        style={{ marginLeft: "0px" }}
                                      >
                                        Enter your email ID
                                      </label>
                                      <div class="form-notch">
                                        <div
                                          class="form-notch-leading"
                                          style={{ width: "9px" }}
                                        ></div>
                                        <div
                                          class="form-notch-middle"
                                          style={{ width: "100px" }}
                                        ></div>
                                        <div class="form-notch-trailing"></div>
                                      </div>
                                    </div>

                                    <button
                                      type="submit"
                                      class="btn btn-primary btn-lg ms-md-2"
                                      aria-controls="#picker-editor"
                                    >
                                      Subscribe
                                    </button>
                                  </div>
                                  </form>
                                </div>
                             
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

export default Plugin;

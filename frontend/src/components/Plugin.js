import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Swal from "sweetalert2";

const Plugin = ({ownerKey}) => {
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
      <h1 className="">Newsletter Plugin</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Sign Up for Newsletter</h5>
          <Formik
            initialValues={{
              email: "",
              name: "",
              owner: ownerKey,
    createdAt : new Date()
            }}
            onSubmit={newsletterSubmit}
            validationSchema={NewslettersignupSchema}
          >
            {({ values, handleChange, handleSubmit, errors }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  value={values.name}
                  onChange={handleChange}
                  id="name"
                  className="mt-5"
                  fullWidth
                  label="Full Name"
                ></TextField>
                <TextField
                  value={values.email}
                  onChange={handleChange}
                  id="email"
                  className="mt-5"
                  fullWidth
                  label="Email"
                ></TextField>

                <Button type="submit" className="mt-2">
                  Sign Up
                </Button>
              </form>

            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Plugin;

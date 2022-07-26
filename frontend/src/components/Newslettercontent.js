import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Newslettercontent = () => {

    const navigate = useNavigate();

  const userSubmit = async (formdata) => {
    console.log(formdata);

    const response = await fetch("http://localhost:5000/newslettercontent/add", {
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

  const NewslettercontentSchema = Yup.object().shape({
  });

  return (
    <div>
            <div id="preview" class="preview">
      <div style={{ display: "none" }}></div>
      <div>
        <div
          data-draggable="true"
          class=""
          draggable="false"
          style={{ position: "relative" }}
        >
   
          <section draggable="false" class="container pt-5" data-v-271253ee="">
            <section class="mb-10">
              <div class="row" >
                <div class="col-md-6 mb-4 mb-md-0">
                  <h2 class="fw-bold mb-4">
                    Send frequent reminder to your Subscribers
                  </h2>
                  <p class="text-muted mb-4">
                    Send frequent reminders/emails to your subscribers in just
                    one click. Fill in the form and you are done!
                  </p>
                  <p class="text-muted mb-2">India</p>
                  <p class="text-muted mb-2">newsletterpluginfree@gmail.com</p>
                  <p class="text-muted mb-2"></p>
                </div>
                <div class="col-md-6 mb-4 mb-md-0">
                    <Formik
                    initialValues={{
                        title: "",
                        schedule: "",
                        content: "",
                    }}
                    onSubmit={userSubmit}
                    validationSchema={NewslettercontentSchema}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                            errors,
                        }) =>(
                            <form onSubmit={handleSubmit}>
                            <div class="form-outline mb-4">
                              <input type="text" id="title" class="form-control" 
                              value={values.title}
                              onChange={handleChange}
                              />
                              <label
                                class="form-label"
                                style={{"marginLeft" : "0px"}}
                              >
                                Title
                              </label>
                              <div class="form-notch">
                                <div class="form-notch-leading" style={{width: "9px"}}></div>
                                <div class="form-notch-middle" style={{width: "40.8px"}}></div>
                                <div class="form-notch-trailing"></div>
                              </div>
                            </div>
                    
                            <div class="form-outline mb-4">
                              <input type="number" id="schedule" class="form-control"
                              value={values.schedule}
                              onChange={handleChange}
                               />
                              <label
                                class="form-label"
                         
                                style={{marginLeft: "0px"}}
                              >
                                Schedule
                              </label>
                              <div class="form-notch">
                                <div class="form-notch-leading" style={{width: "9px"}}></div>
                                <div class="form-notch-middle" style={{width: "88.8px"}}></div>
                                <div class="form-notch-trailing"></div>
                              </div>
                            </div>
                    
                            <div class="form-outline mb-4">
                              <textarea class="form-control" id="content" rows="4" value={values.content}
                                        onChange={handleChange}></textarea>
                              <label
                                class="form-label"
                            
                                style={{marginLeft: "0px"}}
                              >
                                Content
                              </label>
                              <div class="form-notch">
                                <div class="form-notch-leading" style={{width: "9px"}}></div>
                                <div class="form-notch-middle" style={{width: "60px"}}></div>
                                <div class="form-notch-trailing"></div>
                              </div>
                            </div>
                    
                            <button
                              type="submit"
                              class="btn btn-primary btn-block mb-4"
                              aria-controls="#picker-editor"
                            >
                              Send
                            </button>
                          </form>
                        )}
                    </Formik>
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

export default Newslettercontent;

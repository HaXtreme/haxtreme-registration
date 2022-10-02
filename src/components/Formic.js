// import { render } from '@testing-library/react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { boolean } from "yup/lib/locale";
import { Redirect } from "react-dom";

import { motion } from "framer-motion";

import * as Yup from "yup";

// import  UserData  from './api';
// import Loading from "./loading";
import NotFound from "./notFound";
import Success from "./Success";
import ServerLoader from "./serverLoader";
//

const Formic = () => {
  const [sub, setSub] = useState(false);
  const [submit, handleSubmit] = useState(true);
  const [error, errorHandler] = useState(false);
  const [server, serverHandler] = useState(false);
  const [teamCount, setTeamCount] = useState(0);

  const onChange = (e) => {
    setTeamCount(Number(e.target.value));
    console.log(e.target.value);
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <div>
        {server == true && <Success />}
        {error == true && <NotFound />}
        {server == false && submit == false && <ServerLoader />}
        {server == false && submit == true && (
          <Formik
            initialValues={{
              teamMemberCount: 2,
              faculty: "",
              indexNo: "",
              teamName: "",
              teamLeader: "",
              teamMembers: {
                member_1: "",
                member_2: "",
                member_3: "",
                member_4: "",
              },
              teamMembersPhone: {
                member_1: "",
                member_2: "",
                member_3: "",
                member_4: "",
              },
              email: {
                member_1: "",
                member_2: "",
                member_3: "",
                member_4: "",
              },
              preferedLanguage: "",
              participation: "",
            }}
            // validationSchema={Yup.object({
            //   teamName: Yup.string()
            //     .max(255, "Must be 15 characters or less")
            //     .required("This field is requried"),
            //   teamLeader: Yup.string()
            //     .max(255, "Must be 15 characters or less")
            //     .required("This field is requried"),
            //   faculty: Yup.string()
            //     .max(255, "Must be 15 characters or less")
            //     .required("This field is requried"),
            //   // email: Yup.string()
            //   //   .email("Invalid email address")
            //   //   .required("This field is requried"),
            //   // address: Yup.string()
            //   //   .max(255, "Must be 15 characters or less")
            //   //   .required(),
            //   // phone: Yup.string()
            //   //   .min(10, "Invalid number")
            //   //   .max(10, "Must be exactly 10 digits")
            //   //   .required("This field is requried"),
            //   // whatsApp: Yup.string()
            //   //   .min(10, "Invalid number")
            //   //   .max(10, "Must be exactly 10 digits")
            //   //   .required("This field is requried"),
            //   // alIndex: Yup.string()
            //   //   .max(12, "invalid A/L Index No")
            //   //   .required("This field is requried"),
            //   // validation tika methana kara gain mama firest eke withrai karala thiyanne
            // })}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              console.log(values);
              // alert(JSON.stringify(values, null, 2));
              setSub(true);
              handleSubmit(false);
              const response = await fetch(
                `https://haxreg.herokuapp.com/api/v1/users/reg`,
                //`http://localhost:3000/api/v1/quiz/questions`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },

                  body: JSON.stringify(values, null, 2),
                }
              );
              if (response.ok == false) {
                errorHandler(true);
                console.log(data);
              }
              const data = await response.json();
              handleSubmit(true);
              serverHandler(true);
              console.log("data", data);
            }}
          >
            <div className="d-lg-flex half">
              {/* <div
          className="bg order-1 order-md-2 half-2"
          // style={{ backgroundImage: `url(/hackdoze01/hackdoze/Bubble-Background.svg)` }}
          style={{ backgroundImage: `url(/bg_1.jpg)` }}
        ></div> */}
              <div className="contents order-2 order-md-1">
                <div className="container">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 py-5">
                      <h3
                        className="text-center mb-5"
                        style={{ fontSize: "45px", color: "rgb(255, 195, 0)" }}
                      >
                        HaXtreme 1.0v Hackathon Registration
                      </h3>
                      <Form>
                        <div class="row">
                          <div class="form-group mb-3">
                            <label htmlFor="teamName">Team Name</label>
                            <Field
                              id="teamName"
                              // required="required"
                              name="teamName"
                              placeholder="Team_Name"
                              class="form-control"
                            />
                            {/* error msg display */}

                            <div className="text-danger small">
                              <ErrorMessage name="teamName" />
                            </div>
                          </div>
                          <div class="form-group mb-3">
                            <label htmlFor="teamLeader">Team Leader Name</label>
                            <Field
                              id="teamLeader"
                              name="teamLeader"
                              placeholder="team_Leader_Name"
                              class="form-control"
                            />
                            {/* error msg display */}

                            <div className="text-danger small">
                              <ErrorMessage name="teamLeader" />
                            </div>
                          </div>
                          <div class="col-lg-12 mb-3">
                            <div id="gender-group">Team Members</div>
                            <div
                              role="group"
                              aria-labelledby="gender-group"
                              className="form-group"
                            >
                              <Field
                                type="radio"
                                name="teamMemberCount"
                                value="2"
                                id="male"
                                className="form-check-input"
                                onClick={onChange}
                              />
                              <label class="form-check-label ms-1" for="2">
                                2
                              </label>
                              <Field
                                type="radio"
                                name="teamMemberCount"
                                value="3"
                                id="female"
                                className="form-check-input ms-3"
                                onClick={onChange}
                              />
                              <label class="form-check-label  ms-1" for="3">
                                3
                              </label>
                              <Field
                                type="radio"
                                name="teamMemberCount"
                                value="4"
                                id="female"
                                className="form-check-input ms-3"
                                onClick={onChange}
                              />
                              <label class="form-check-label  ms-1" for="4">
                                4
                              </label>
                            </div>
                            <div className="text-danger small">
                              <ErrorMessage name="teamMemberCount" />
                            </div>
                          </div>
                        </div>
                        <div className="team-details">
                          {teamCount === 2 && (
                            <div class="mt-5 mb-5">
                              {" "}
                              <h2> Team Details</h2>
                              <div class="row">
                                <div class="col-md-6 mb-3">
                                  <div class="form-group first">
                                    <label htmlFor="teamMembers.member_1">
                                      Member 1 Name
                                    </label>
                                    <Field
                                      id="teamMembers.member_1"
                                      name="teamMembers.member_1"
                                      placeholder="Mr. Jane"
                                      type={"text"}
                                      class="form-control"
                                    />
                                  </div>
                                  <div className="text-danger small">
                                    <ErrorMessage name="teamName" />
                                  </div>
                                </div>
                                <div class="form-group col-lg-6 mb-3">
                                  <label htmlFor="email.member_1">
                                    Member 1 Email
                                  </label>
                                  <Field
                                    id="email"
                                    name="email.member_1"
                                    placeholder="sample@gmail.com"
                                    type="email"
                                    class="form-control"
                                  />
                                  <div className="text-danger small">
                                    <ErrorMessage name="email" />
                                  </div>
                                </div>
                                <div class=" mb-3">
                                  <div class="form-group first">
                                    <label htmlFor="phone">
                                      Member 1 whatsApp Number
                                    </label>
                                    <Field
                                      id="phone"
                                      name="teamMembersPhone.member_1"
                                      placeholder="0770000000"
                                      type={"text"}
                                      class="form-control"
                                    />
                                  </div>
                                  <div className="text-danger small">
                                    <ErrorMessage name="phone" />
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-6 mb-3">
                                  <div class="form-group first">
                                    <label htmlFor="teamMembers.member_2">
                                      Member 2 Name
                                    </label>
                                    <Field
                                      id="teamMembers.member_2"
                                      name="teamMembers.member_2"
                                      placeholder="Mr. Jane"
                                      type={"text"}
                                      class="form-control"
                                    />
                                  </div>
                                  <div className="text-danger small">
                                    <ErrorMessage name="teamName" />
                                  </div>
                                </div>
                                <div class="form-group col-lg-6 mb-3">
                                  <label htmlFor="email.member_2">
                                    Member 2 Email
                                  </label>
                                  <Field
                                    id="email"
                                    name="email.member_2"
                                    placeholder="sample@gmail.com"
                                    type={"text"}
                                    class="form-control"
                                  />
                                  <div className="text-danger small">
                                    <ErrorMessage name="email" />
                                  </div>
                                </div>
                                <div class=" mb-3">
                                  <div class="form-group first">
                                    <label htmlFor="phone">
                                      Member 2 whatsApp Number
                                    </label>
                                    <Field
                                      id="phone"
                                      name="teamMembersPhone.member_2"
                                      placeholder="0770000000"
                                      type={"text"}
                                      class="form-control"
                                    />
                                  </div>
                                  <div className="text-danger small">
                                    <ErrorMessage name="phone" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          {teamCount === 3 && (
                            <div class="mt-5 mb-5">
                              {" "}
                              <h2> Team Details</h2>
                              <div class="row">
                                <div class="col-md-6 mb-3">
                                  <div class="form-group first">
                                    <label htmlFor="teamMembers.member_1">
                                      Member 1 Name
                                    </label>
                                    <Field
                                      id="teamMembers.member_1"
                                      name="teamMembers.member_1"
                                      placeholder="Mr. Jane"
                                      type={"text"}
                                      class="form-control"
                                    />
                                  </div>
                                  <div className="text-danger small">
                                    <ErrorMessage name="teamName" />
                                  </div>
                                </div>
                                <div class="form-group col-lg-6 mb-3">
                                  <label htmlFor="email.member_1">
                                    Member 1 Email
                                  </label>
                                  <Field
                                    id="email"
                                    name="email.member_1"
                                    placeholder="sample@gmail.com"
                                    type={"text"}
                                    class="form-control"
                                  />
                                  <div className="text-danger small">
                                    <ErrorMessage name="email" />
                                  </div>
                                </div>
                                <div class=" mb-3">
                                  <div class="form-group first">
                                    <label htmlFor="phone">
                                      Member 1 whatsApp Number
                                    </label>
                                    <Field
                                      id="phone"
                                      name="teamMembersPhone.member_1"
                                      placeholder="0770000000"
                                      type={"text"}
                                      class="form-control"
                                    />
                                  </div>
                                  <div className="text-danger small">
                                    <ErrorMessage name="phone" />
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-6 mb-3">
                                  <div class="form-group first">
                                    <label htmlFor="teamMembers.member_2">
                                      Member 2 Name
                                    </label>
                                    <Field
                                      id="teamMembers.member_2"
                                      name="teamMembers.member_2"
                                      placeholder="Mr. Jane"
                                      type={"text"}
                                      class="form-control"
                                    />
                                  </div>
                                  <div className="text-danger small">
                                    <ErrorMessage name="teamName" />
                                  </div>
                                </div>
                                <div class="form-group col-lg-6 mb-3">
                                  <label htmlFor="email.member_2">
                                    Member 2 Email
                                  </label>
                                  <Field
                                    id="email"
                                    name="email.member_2"
                                    placeholder="sample@gmail.com"
                                    type={"text"}
                                    class="form-control"
                                  />
                                  <div className="text-danger small">
                                    <ErrorMessage name="email" />
                                  </div>
                                </div>
                                <div class=" mb-3">
                                  <div class="form-group first">
                                    <label htmlFor="phone">
                                      Member 2 whatsApp Number
                                    </label>
                                    <Field
                                      id="phone"
                                      name="teamMembersPhone.member_2"
                                      placeholder="0770000000"
                                      type={"text"}
                                      class="form-control"
                                    />
                                  </div>
                                  <div className="text-danger small">
                                    <ErrorMessage name="phone" />
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-6 mb-3">
                                  <div class="form-group first">
                                    <label htmlFor="teamMembers.member_3">
                                      Member 3 Name
                                    </label>
                                    <Field
                                      id="teamMembers.member_3"
                                      name="teamMembers.member_3"
                                      placeholder="Mr. Jane"
                                      type={"text"}
                                      class="form-control"
                                    />
                                  </div>
                                  <div className="text-danger small">
                                    <ErrorMessage name="teamName" />
                                  </div>
                                </div>
                                <div class="form-group col-lg-6 mb-3">
                                  <label htmlFor="email.member_3">
                                    Member 3 Email
                                  </label>
                                  <Field
                                    id="email"
                                    name="email.member_3"
                                    placeholder="sample@gmail.com"
                                    type={"text"}
                                    class="form-control"
                                  />
                                  <div className="text-danger small">
                                    <ErrorMessage name="email" />
                                  </div>
                                </div>
                                <div class=" mb-3">
                                  <div class="form-group first">
                                    <label htmlFor="phone">
                                      Member 3 whatsApp Number
                                    </label>
                                    <Field
                                      id="phone"
                                      name="teamMembersPhone.member_3"
                                      placeholder="0770000000"
                                      type={"text"}
                                      class="form-control"
                                    />
                                  </div>
                                  <div className="text-danger small">
                                    <ErrorMessage name="phone" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          {teamCount === 4 && (
                            <div class="mt-5 mb-5">
                              {" "}
                              <h2> Team Details</h2>
                              <div class="row">
                                <div class="col-md-6 mb-3">
                                  <div class="form-group first">
                                    <label htmlFor="teamMembers.member_1">
                                      Member 1 Name
                                    </label>
                                    <Field
                                      id="teamMembers.member_1"
                                      name="teamMembers.member_1"
                                      placeholder="Mr. Jane"
                                      type={"text"}
                                      class="form-control"
                                    />
                                  </div>
                                  <div className="text-danger small">
                                    <ErrorMessage name="teamName" />
                                  </div>
                                </div>
                                <div class="form-group col-lg-6 mb-3">
                                  <label htmlFor="email.member_1">
                                    Member 1 Email
                                  </label>
                                  <Field
                                    id="email"
                                    name="email.member_1"
                                    placeholder="sample@gmail.com"
                                    type={"text"}
                                    class="form-control"
                                  />
                                  <div className="text-danger small">
                                    <ErrorMessage name="email" />
                                  </div>
                                </div>
                                <div class=" mb-3">
                                  <div class="form-group first">
                                    <label htmlFor="phone">
                                      Member 1 whatsApp Number
                                    </label>
                                    <Field
                                      id="phone"
                                      name="teamMembersPhone.member_1"
                                      placeholder="0770000000"
                                      type={"text"}
                                      class="form-control"
                                    />
                                  </div>
                                  <div className="text-danger small">
                                    <ErrorMessage name="phone" />
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-6 mb-3">
                                  <div class="form-group first">
                                    <label htmlFor="teamMembers.member_2">
                                      Member 2 Name
                                    </label>
                                    <Field
                                      id="teamMembers.member_2"
                                      name="teamMembers.member_2"
                                      placeholder="Mr. Jane"
                                      type={"text"}
                                      class="form-control"
                                    />
                                  </div>
                                  <div className="text-danger small">
                                    <ErrorMessage name="teamName" />
                                  </div>
                                </div>
                                <div class="form-group col-lg-6 mb-3">
                                  <label htmlFor="email.member_2">
                                    Member 2 Email
                                  </label>
                                  <Field
                                    id="email"
                                    name="email.member_2"
                                    placeholder="sample@gmail.com"
                                    type={"text"}
                                    class="form-control"
                                  />
                                  <div className="text-danger small">
                                    <ErrorMessage name="email" />
                                  </div>
                                </div>
                                <div class=" mb-3">
                                  <div class="form-group first">
                                    <label htmlFor="phone">
                                      Member 2 whatsApp Number
                                    </label>
                                    <Field
                                      id="phone"
                                      name="teamMembersPhone.member_2"
                                      placeholder="0770000000"
                                      type={"text"}
                                      class="form-control"
                                    />
                                  </div>
                                  <div className="text-danger small">
                                    <ErrorMessage name="phone" />
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-6 mb-3">
                                  <div class="form-group first">
                                    <label htmlFor="teamMembers.member_3">
                                      Member 3 Name
                                    </label>
                                    <Field
                                      id="teamMembers.member_3"
                                      name="teamMembers.member_3"
                                      placeholder="Mr. Jane"
                                      type={"text"}
                                      class="form-control"
                                    />
                                  </div>
                                  <div className="text-danger small">
                                    <ErrorMessage name="phone" />
                                  </div>
                                </div>
                                <div class="form-group col-lg-6 mb-3">
                                  <label htmlFor="email.member_3">
                                    Member 3 Email
                                  </label>
                                  <Field
                                    id="email"
                                    name="email.member_3"
                                    placeholder="sample@gmail.com"
                                    type={"text"}
                                    class="form-control"
                                  />
                                  <div className="text-danger small">
                                    <ErrorMessage name="teamName" />
                                  </div>
                                </div>
                                <div class=" mb-3">
                                  <div class="form-group first">
                                    <label htmlFor="phone">
                                      Member 3 whatsApp Number
                                    </label>
                                    <Field
                                      id="phone"
                                      name="teamMembersPhone.member_3"
                                      placeholder="0770000000"
                                      type={"text"}
                                      class="form-control"
                                    />
                                  </div>
                                  <div className="text-danger small">
                                    <ErrorMessage name="phone" />
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-6 mb-3">
                                  <div class="form-group first">
                                    <label htmlFor="teamMembers.member_4">
                                      Member 4 Name
                                    </label>
                                    <Field
                                      id="teamMembers.member_4"
                                      name="teamMembers.member_4"
                                      placeholder="Mr. Jane"
                                      type={"text"}
                                      class="form-control"
                                    />
                                  </div>
                                  <div className="text-danger small">
                                    <ErrorMessage name="teamName" />
                                  </div>
                                </div>
                                <div class="form-group col-lg-6 mb-3">
                                  <label htmlFor="email.member_4">
                                    Member 4 Email
                                  </label>
                                  <Field
                                    id="email"
                                    name="email.member_4"
                                    placeholder="sample@gmail.com"
                                    type={"text"}
                                    class="form-control"
                                  />
                                  <div className="text-danger small">
                                    <ErrorMessage name="email" />
                                  </div>
                                </div>
                                <div class=" mb-3">
                                  <div class="form-group first">
                                    <label htmlFor="phone">
                                      Member 4 whatsApp Number
                                    </label>
                                    <Field
                                      id="phone"
                                      name="teamMembersPhone.member_4"
                                      placeholder="0770000000"
                                      type={"text"}
                                      class="form-control"
                                    />
                                  </div>
                                  <div className="text-danger small">
                                    <ErrorMessage name="phone" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        <div class="row">
                          <div class="form-group mb-3">
                            <label htmlFor="faculty">Faculty</label>
                            <Field
                              name="faculty"
                              as="select"
                              id="faculty"
                              class="form-control"
                            >
                              <option selected>Faculty</option>
                              <option value="Engineering">
                                Faculty of Engineering
                              </option>
                              <option value="Science">
                                Faculty of Science
                              </option>
                              <option value="Technology">
                                Faculty of Technology
                              </option>
                            </Field>
                          </div>
                        </div>
                        {/* <div class="form-group mb-3">
                          <label htmlFor="address">Index Number</label>
                          <Field
                            id="indexNo"
                            name="indexNo"
                            placeholder="##/####/####... "
                            class="form-control"
                          />
                          <div className="text-danger small">
                            <ErrorMessage name="indexN0" />
                          </div>
                        </div> */}
                        <div class="form-group mb-3">
                          <label htmlFor="participate">
                            Did you participate for Workshops?
                          </label>
                          <Field
                            name="participation"
                            as="select"
                            id="participation"
                            class="form-control"
                          >
                            <option selected></option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </Field>
                        </div>
                        <div class="form-group">
                          <label htmlFor="preferedLanguage">
                            Prefered Programming Language
                          </label>
                          <Field
                            id="preferedLanguage"
                            name="preferedLanguage"
                            placeholder="Ex - Python"
                            class="form-control"
                          />
                        </div>
                        <div className="d-grid">
                          <button
                            type="submit"
                            disabled={submit == false}
                            className="btn btn-warning mt-4"
                          >
                            Submit
                          </button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Formik>
        )}
        {/* {submit == false && <Loading/>} */}
      </div>
    </motion.div>
  );
};

export default Formic;

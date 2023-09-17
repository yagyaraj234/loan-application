import React from "react";
import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import TextField from "../components/TextField";
import * as Yup from "yup";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const SignupForm = () => {
  const baseURI = process.env.REACT_APP_URI;
  const url = `${baseURI}/signup`;
  const navigate = useNavigate();

  const validate = Yup.object().shape({
    name: Yup.string()
      .max(20, "Maximum 20 character")
      .required("Name is Required"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Minimum 8 character")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password does not match")
      .required("Confirm password is required"),
  });

  const initialValue = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(url, values);
      toast.success(response.data.message);
      navigate("/login");
      console.log(response);
    } catch (error) {
      toast.error(error.data.message);
      console.log(error); 
    }
  };
  return (
    <>
      <Toaster />
      <Formik
        initialValues={initialValue}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <div className="flex flex-col items-center  justify-center ">
            {/* <Toaster /> */}
            <h1 className="text-3xl text-center font-bold my-5  ">
              Signup Here
            </h1>
            <Form>
              <TextField label="Name" name="name" type="text" />
              <TextField label="Email" name="email" type="email" />
              <TextField label="Password" name="password" type="password" />
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
              />
              <div className="flex flex-col my-5 mb-20">
                <button
                  className={`bg-green-500 text-white font-semibold  shadow-sm rounded-lg p-2  transition `}
                >
                  Signup
                </button>
                <Link
                  to="/login"
                  className="border-2 my-2 rounded-lg p-2   text-black text-bold  hover:border-black delay-75 transition"
                >
                  Already Have Account? Login Here
                </Link>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default SignupForm;

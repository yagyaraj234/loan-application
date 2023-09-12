import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../components/TextField";
import { useUserId } from "../components/TokenContext";

const Login = () => {
  const { setUserId } = useUserId();

  const baseURI = process.env.REACT_APP_URI;
  const url = `${baseURI}/login`;

  const validate = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
  });
  const initialValue = {
    email: "test@gmail.com",
    password: "test@gmail.com",
  };

  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(url, values);
      toast.success(response.data.message);
      navigate("/loans");
      const userId = response.data.user._id;
      setUserId(userId);
      localStorage.setItem("userId", userId);
    } catch (error) {
      toast.error(error);
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
          <div className="flex flex-col  mt-10 justify-center items-center">
            <h1 className="text-3xl text-center font-bold my-5  ">
              Login Here
            </h1>
            <Form>
              <TextField label="Email" type="text" name="email" />
              <TextField label="Password" type="password" name="password" />

              <div className="flex flex-col my-5 ">
                <button
                  className={`bg-green-500  shadow-sm rounded-lg p-2 text-white font-semibold  transition `}
                >
                  Login
                </button>
                <Link
                  to="/signup"
                  className="border-2 my-2 rounded-lg p-2  text-md text-black text-bold  hover:border-black delay-75 transition"
                >
                  Don't Have Account? Signup Here
                </Link>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Login;

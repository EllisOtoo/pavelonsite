import { EditSharp } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import ResponsiveNav from "../../components/ResponsiveNav/ResponsiveNav";
import FooterSection from "../../components/FooterSection/FooterSection";
import { HomeHeroBanner } from "../../components";
import { Input, Button } from "@mui/material";

const client = axios.create({
  // baseURL: "https://pavelon-server.herokuapp.com/",
  baseURL: "http://localhost:8000/",
});

/* 
const validate = (values) => {
  let errors = {};

  if (!values.name) errors.name = "Required";
  else if (values.name.length < 10) errors.name = "Less than 5 characters";

  if (!values.email) errors.email = "Required";
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    errors.email = "Invalid Email Address";

  return errors;
}; */

export default function Contact_form() {
  const [showSuccess, setShowSuccess] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      business_Name: "",
    },
    validationSchema: Yup.object({
      business_Name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Business name Required"),
      name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Name Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),

    onSubmit: (values, { resetForm }) => {
      // send post data with axios!
      client.post("", values).then(() => {
        resetForm({
          values: {
            email: "",
            name: "",
            business_Name: "",
          },
        });
        setShowSuccess(true);
      });
      // const testServer = async () => {
      //   console.log("fetch started!");
      //   const response = await fetch("https://pavelon-server.herokuapp.com/");
      //   const data = await response.json();
      //   console.log(data);
      // };
      // testServer();
      // console.log(formik.values.name);
    },
  });

  return (
    <>
      <ResponsiveNav makeMenuDark />
      <HomeHeroBanner
        showButtons={false}
        showImage={false}
        headerGradientClass={"gradient__bg__blue"}
      />
      <div className="flex flex-col md:flex-row w-8/12 items-center justify-around m-auto min-h-screen">
        <div className="w-full md:w-6/12">
          <Typography variant="h2">Contact Us </Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            quisquam necessitatibus maiores earum, suscipit quasi nemo
            aspernatur accusamus, magni porro repudiandae. Asperiores odio
            laboriosam impedit maxime doloribus. Nostrum, maxime animi!{" "}
          </Typography>
        </div>
        <div className="w-full md:w-4/12 p-3">
          <form className="flex flex-col" onSubmit={formik.handleSubmit}>
            <Input
              name="name"
              type="text"
              placeholder="Enter Client Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-900">{formik.errors.name}</div>
            ) : null}
            <Input
              name="email"
              type="text"
              placeholder="Enter Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-900">{formik.errors.email}</div>
            ) : null}
            <Input
              name="business_Name"
              type="text"
              placeholder="Business Name"
              value={formik.values.business_Name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.business_Name && formik.errors.business_Name ? (
              <div className="text-red-900">{formik.errors.business_Name}</div>
            ) : null}

            <Button type="submit">Submit</Button>
            {showSuccess && <p className="text-green-400">Message Sent!</p>}
          </form>
        </div>
      </div>

      <FooterSection />
    </>
  );
}

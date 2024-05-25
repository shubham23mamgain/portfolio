"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 9027288483",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "shubhammamgain614@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Dehradun, Uttarakhand",
  },
];

import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as yup from "yup";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

yup.addMethod(yup.string, "email", function validateEmail(message) {
  return this.matches(emailRegex, {
    message,
    name: "email",
    excludeEmptyString: true,
  });
});

const schema = yup.object().shape({
  firstname: yup.string().required("First Name is required"),
  lastname: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email!").required("Email is missing"),
  phone: yup.string().required("Phone is required").min(10).max(10),
});

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      phone: "",
      email: "",
      firstname: "",
      lastname: "",
    },

    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission
    onSubmit: async ({ firsname, email, lastname, phone }) => {
      // Make a request to your backend to store the data
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Hello from Shubham Mamgain");
  // };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/*form*/}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Let's Work Together</h3>
              <p className="text-white/60">
                I can convert your ideas into projects using latest technologies
                and tools like React, React Native, NodeJs and Flutter.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  name="firstname"
                  id="firstname"
                  placeholder="Firstname"
                  value={values.firstname}
                  onChange={handleChange}
                />
                {errors.firstname && touched.firstname && (
                  <span>{errors.firstname}</span>
                )}
                <Input
                  name="lastname"
                  id="lastname"
                  type="lastname"
                  placeholder="Lastname"
                  value={values.lastname}
                  onChange={handleChange}
                />
                {errors.lastname && touched.lastname && (
                  <span>{errors.lastname}</span>
                )}
                <Input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email && <span>{errors.email}</span>}
                <Input
                  name="phone"
                  id="phone"
                  type="phone"
                  placeholder="Phone"
                  value={values.phone}
                  onChange={handleChange}
                />
                {errors.phone && touched.phone && <span>{errors.phone}</span>}
              </div>

              <Select>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Select a Service"></SelectValue>
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">
                      Full Stack Web Development
                    </SelectItem>
                    <SelectItem value="cst">
                      Full Stack Mobile App Development
                    </SelectItem>
                    <SelectItem value="mst">Backend Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[200px]"
                placeholder="Type your Message Here."
              />

              <Button size="md" className="max-w-40" type="submit">
                Send Message
              </Button>
            </form>
          </div>
          {/*info*/}

          <div className="flex-1 flex items-center xl:justify-end xl:order-none order-1 mb:8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>

                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

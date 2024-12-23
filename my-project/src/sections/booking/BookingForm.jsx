import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const BookingForm = ({ submitForm }) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    guests: 1,
    date: "",
    time: "",
    occasion: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    guests: Yup.number()
      .typeError("Number of Guests must be a valid number")
      .integer("Number of Guests must be an integer")
      .min(1, "Number of Guests must be at least 1")
      .max(10, "Number of Guests can be maximum 10")
      .required("Number of Guests is required"),
    date: Yup.date().required("Date is required"),
    time: Yup.string().required("Time is required"),
    occasion: Yup.string().required("Occasion is required"),
  });

  const handleSubmit = (values) => {
    submitForm(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-2">
            First Name
          </label>
          <Field
            type="text"
            id="firstName"
            name="firstName"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <ErrorMessage
            name="firstName"
            component="div"
            className="text-red-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-2">
            Last Name
          </label>
          <Field
            type="text"
            id="lastName"
            name="lastName"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <ErrorMessage
            name="lastName"
            component="div"
            className="text-red-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <Field
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <ErrorMessage name="email" component="div" className="text-red-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="guests" className="block mb-2">
            Number of Guests
          </label>
          <Field
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="10"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <ErrorMessage
            name="guests"
            component="div"
            className="text-red-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block mb-2">
            Choose Date
          </label>
          <Field
            type="date"
            id="date"
            name="date"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <ErrorMessage name="date" component="div" className="text-red-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="time" className="block mb-2">
            Choose Time
          </label>
          <Field
            as="select"
            id="time"
            name="time"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          >
            <option value="">Select Time</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
          </Field>
          <ErrorMessage name="time" component="div" className="text-red-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="occasion" className="block mb-2">
            Occasion
          </label>
          <Field
            as="select"
            id="occasion"
            name="occasion"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          >
            <option value="">Select Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </Field>
          <ErrorMessage
            name="occasion"
            component="div"
            className="text-red-500"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 my-4 hover:scale-105 duration-200 bg-black text-white rounded-lg"
          >
            Make Your Reservation
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default BookingForm;

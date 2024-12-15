"use client";
import { useFormik } from "formik";

export const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      quantity: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log("values", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <select
        name="quantity"
        value={formik.values.quantity}
        onChange={formik.handleChange}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

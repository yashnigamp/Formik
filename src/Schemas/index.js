import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  phno: Yup.string().matches(new RegExp('[0-9]{10}'),'Enter a valid Mobile').required("Please Enter a Mobile Number"),
  confirm_password: Yup.string().required().oneOf([Yup.ref("password"), null], "Password must match"),
  dob: Yup.date().required("Please select Date Of Birth"),
  file: Yup.mixed().required('File is required')
});

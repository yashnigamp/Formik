import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import { signUpSchema } from "../Schemas";
import "../styles.css";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  phno: "",
  dob: "",
  file: "",
};

const Registration = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  console.log(errors);

  return (
    <Container>
      <h1>Registration Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label  class="required">Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter your Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (
            <p className="form-error">{errors.name}</p>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label  class="required">Phone Number</Form.Label>
          <Form.Control
            name="phno"
            type="text"
            placeholder="+91-....."
            value={values.phno}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.phno && touched.phno ? (
            <p className="form-error">{errors.phno}</p>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label  class="required">Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="name@example.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label  class="required">Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Enter Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="form-error">{errors.password}</p>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label  class="required">Confirm Password</Form.Label>
          <Form.Control
            name="confirm_password"
            type="password"
            placeholder="Enter Again.. "
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirm_password && touched.confirm_password ? (
            <p className="form-error">{errors.confirm_password}</p>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label  class="required">Date Of Birth</Form.Label>
          <Form.Control
            name="dob"
            type="date"
            placeholder="DD--MM--YYYY"
            value={values.dob}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.dob && touched.dob ? (
            <p className="form-error">{errors.dob}</p>
          ) : null}
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label  class="required">Default file input example</Form.Label>
          <Form.Control
            name="file"
            type="file"
            value={values.file}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.file && touched.file ? (
            <p className="form-error">{errors.file}</p>
          ) : null}
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Registration;

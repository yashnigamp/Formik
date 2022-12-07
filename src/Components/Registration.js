import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import { signUpSchema } from "../Schemas";
import "../styles.css"
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
        console.log(
          values
        );
        action.resetForm();
      },
    });
  console.log(
    
    errors
  );

  return (
    <Container>
      <h1>Registration Form</h1>
      <Form  onSubmit={handleSubmit}> 
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter your Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}
                </p>
                    ) : null}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            name="phno"
            type="number"
            placeholder="+91-....."
            value={values.phno}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="name@example.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Enter Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            name="confirm_password"
            type="password"
            placeholder="Enter Again.. "
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date Of Birth</Form.Label>
          <Form.Control
            name="dob"
            type="date"
            placeholder="DD--MM--YYYY"
            value={values.dob}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Default file input example</Form.Label>
          <Form.Control
            name="file"
            type="file"
            value={values.file}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Registration;

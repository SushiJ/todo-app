import 'react-app-polyfill/ie11';
import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
    firstName: string;
    lastName: string;
    email: string;
  }
const Login = () => {
  return (

  <div>
<h1>Signup</h1>
<Formik
  initialValues={{
    firstName: '',
    lastName: '',
    email: '',
  }}
//   onSubmit={(
//     values: Values,
//     { setSubmitting }: FormikHelpers<Values>
//   ) => {
    
//   }}
>
  <Form>
    <label htmlFor="firstName">First Name</label>
    <Field id="firstName" name="firstName" placeholder="John" />

    <label htmlFor="lastName">Last Name</label>
    <Field id="lastName" name="lastName" placeholder="Doe" />

    <label htmlFor="email">Email</label>
    <Field
      id="email"
      name="email"
      placeholder="john@acme.com"
      type="email"
    />

    <button type="submit">Submit</button>
  </Form>
</Formik>
</div>

  );
};

export default Login;

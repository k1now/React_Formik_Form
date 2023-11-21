import React from "react";
// TODO: import useFormik from formik library
import { Form, useFormik } from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues:{
      email: '',
      password: ''
    },
    onSubmit: values => {
      alert("Login Successful");
    },
    validate: values => {
      let errors = {};
      if (!values.email) {errors.email = 'Field required'} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Username should be an email';};
      if (!values.password) errors.password = 'Field required'

      return errors;
    }

  });

  return (
    <div>
      <form onSubmit = {formik.handleSubmit}>
        <div>Email</div>
        <input name="email" type="text" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div>: null}
        <div>Password</div>
        <input name="password" type="text" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div>: null}
        <div>
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;

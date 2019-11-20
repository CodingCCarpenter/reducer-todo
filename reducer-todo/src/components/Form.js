import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const TodoForm = () => {
  return (
    <Form>
      <Field type="text" name="item" placeholder="e.g. Fold Laundry" />
      <button>Submit</button>
    </Form>
  );
};

//higher order component that passes down props and form handlers  into the component
// **Dive Deeper https://jaredpalmer.com/formik/docs/api/withFormik 
const FormikTodoForm = withFormik({
  mapPropsToValues({ item }) {
    return {
        //return item or empty string
      item: item || ""
    };
  },
  //YUP validation schema validating data shape and requiring a string input
//   https://medium.com/@rossbulat/introduction-to-yup-object-validation-in-react-9863af93dc0e used as resource
  validationSchema: Yup.object().shape({
    item: Yup.string().required("Required")
  }),

  handleSubmit(values, { props, resetForm }) {
    props.dispatch({
      type: "SUBMIT",
      //add new item to list with default completed of 'false' and the id set as the current timestamp
      payload: { ...values, completed: false, id: Date.now() }
    });
    resetForm();
  }
})(TodoForm);

export default FormikTodoForm;
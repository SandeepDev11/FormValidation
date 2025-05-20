import { useFormik } from "formik";
import InputType from "./components/Inputs/InputType";
import { signUpSchmema } from "./schemas";

const App = () => {
  const inputData = [
    {
      type: "text",
      name: "name",
      id: "name",
      autoComplete: "off",
      label: "Your Name",
      iconsName: "person-outline"
    },
    {
      type: "email",
      name: "email",
      id: "email",
      autoComplete: "off",
      label: "Your Email",
      iconsName: "mail-outline"
    },
    {
      type: "password",
      name: "password",
      id: "password",
      autoComplete: "off",
      label: "Your password",
      iconsName: "lock-closed-outline"
    },
    {
      type: "password",
      name: "confirmPassword",
      id: "confirmPassword",
      autoComplete: "off",
      label: "Your confirm Password",
      iconsName: "lock-closed-outline"
    },
  ]

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const { errors, handleBlur, handleChange, handleSubmit, touched, values } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchmema,
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <section>
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={handleSubmit}>
            <div>
              {inputData.map((items, index) => (
                <div key={index}>
                  <InputType inputData={items} value={values[items.name]} onChange={handleChange} onBlur={handleBlur} />
                  <p style={{ color: "red" }} className="error">
                    {touched[items.name] && errors[items.name] ? errors[items.name] : ""}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default App;

import { useFormik } from "formik";
import { signUpSchmema } from "./schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const App = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchmema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(errors)


  return (
    <>
      <section>
        <div className="form-box">
          <div className="form-value">
            <form onSubmit={handleSubmit}>
              <div className="inputbox">
                <ion-icon name="person-outline"></ion-icon>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name ? <small style={{ color: 'red' }}>{errors.name}</small> : null}
                <label htmlFor="name">Username</label>
              </div>
              <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email ? <small style={{ color: 'red' }}>{errors.email}</small> : null}

                <label htmlFor="email">Email</label>
              </div>
              <div className="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password ? <small style={{ color: 'red' }}>{errors.password}</small> : null}

                <label htmlFor="password">Password</label>
              </div>
              <div className="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirm_password}
                />
                {errors.confirm_password && touched.confirm_password ? <small style={{ color: 'red' }}>{errors.confirm_password}</small> : null}

                <label htmlFor="confirm_password">Confirm Password</label>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;

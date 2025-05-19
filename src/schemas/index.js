import * as Yup from 'yup';

export const signUpSchmema = Yup.object({
    name:Yup.string().min(2).max(25).required("Please Enter Your Name"),
    email:Yup.string().email().required("Please Enter Your Email Address"),
    password:Yup.string().min(6).required("Please Enter Your Password"),
    confirm_password:Yup.string().required().oneOf([Yup.ref("password"), null, "Password must match"]),
})
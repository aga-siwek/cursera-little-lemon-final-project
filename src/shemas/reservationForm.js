import * as yup from "yup";

export const basicSchema = yup.object().shape({
    bookDate: yup.date().required("Required"),
    time: yup.string().required("Required"),
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    phone: yup.string().required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
});
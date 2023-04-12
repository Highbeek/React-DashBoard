import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  useColorScheme,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../../firebase";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  contact: "",
  address1: "",
  addPhotoUrl: "",
  excelCsvFile: null,
  excelFile: null,
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("Invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
  excelCsvFile: yup.mixed(),
  excelFile: yup.mixed(),
});
const Form = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const newUser = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account Created");
    } catch (err) {
      alert(err);
    }
  };
  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
       alert("You are Signed In");
      navigate("/dashboard");
    } catch (error) {
      alert(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) => {
    console.log(values);
    const [file, setFile] = useState(null);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create New User Profile" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleSubmit,
          handleChange,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4,minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="first Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{
                  gridColumn: "span 2",
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{
                  gridColumn: "span 2",
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="email"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{
                  gridColumn: "span 2",
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{
                  gridColumn: "span 2",
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="phone"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{
                  gridColumn: "span 4",
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{
                  gridColumn: "span 2",
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="url"
                label="Photo URL"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.photoUrl}
                name="photoUrl"
                error={!!touched.photoUrl && !!errors.photoUrl}
                helperText={touched.photoUrl && errors.photoUrl}
                sx={{
                  gridColumn: "span 2",
                }}
              />
            </Box>
            <Box display="flex" alignItems="center">
              <Box mr={2} flexGrow={1}>
                <Typography variant="subtitle2" color="textSecondary">
                  Upload a CSV file:
                </Typography>
                <input
                  type="file"
                  accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                  onChange={(event) => {
                    const file = event.target.files[0];
                    // handle the uploaded file here
                  }}
                  autoComplete="autoComplete"
                />
              </Box>
              <Box>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    signIn(values.email, values.password);
                  }}
                >
                  Login
                </Button>
              </Box>
              <Box ml={2}>
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  onClick={() => {
                    newUser(
                      values.email,
                      values.password,
                      values.addPhotoUrl,
                      values.excelCsvFile,
                      values.excelFile
                    );
                  }}
                >
                  Create New User
                </Button>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt={2}
            >
              {/* <Button
                type="submit"
                color="secondary"
                variant="contained"
                onClick={() => {
                  signInWithGoogle;
                }}
              >
                Sign Up with Google
              </Button> */}
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;

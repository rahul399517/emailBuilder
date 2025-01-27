"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Typography,
  Avatar,
  Paper,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignupForm from "@/component/auth/signup-form";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6a11cb", // Purple for branding
    },
    secondary: {
      main: "#2575fc", // Blue gradient complement
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
  },
});

function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required.";
    if (!formData.email) formErrors.email = "Email is required.";
    if (!formData.password) formErrors.password = "Password is required.";
    if (formData.password !== formData.confirmPassword)
      formErrors.confirmPassword = "Passwords do not match.";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Signup Data:", formData);
      // Backend integration for user signup can be added here
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: "100vh",
          background: "linear-gradient(to right, #6a11cb, #2575fc)", // Vibrant gradient
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2, // Padding for small screens
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" }, // Stack on small screens
              justifyContent: "space-between",
              alignItems: "center",
              gap: { xs: 4, md: 0 }, // Add spacing for small screens
            }}
          >
            {/* Left Section */}
            <Box
              sx={{
                flex: 1,
                textAlign: { xs: "center", md: "left" }, // Center-align on small screens
                paddingRight: { xs: 0, md: 4 }, // Remove padding on small screens
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: "#ffffff",
                  marginBottom: 2,
                  fontSize: { xs: "1.8rem", md: "3rem" }, // Adjust font size for small screens
                }}
              >
                Welcome to AppGenesis
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#ffffff",
                  opacity: 0.9,
                  marginBottom: 4,
                  fontSize: { xs: "1rem", md: "1.25rem" }, // Adjust font size for small screens
                }}
              >
                Build your dream application effortlessly.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  fontSize: "1rem",
                  padding: "10px 20px",
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                }}
              >
                Get Started
              </Button>
            </Box>

            {/* Right Section */}
            <Paper
              elevation={6}
              sx={{
                flex: 1,
                padding: { xs: 2, sm: 4 }, // Adjust padding for smaller screens
                borderRadius: 4,
                backgroundColor: "#fff",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ bgcolor: "primary.main", mb: 2 }}>
                  <LockOutlined />
                </Avatar>
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{
                    mb: 3,
                    fontSize: { xs: "1.5rem", sm: "1.75rem" }, // Responsive font size
                  }}
                >
                  Create an Account
                </Typography>
                <SignupForm
                  formData={formData}
                  setFormData={setFormData}
                  handleSubmit={handleSubmit}
                  errors={errors}
                />
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default SignupPage;

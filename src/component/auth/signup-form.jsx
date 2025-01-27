"use client";
import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Grid,
  Link,
  Avatar,
  FormHelperText,
} from "@mui/material";
// import { Facebook, Google, Twitter, LockOutlined } from "@mui/icons-material";
// import { useFormState } from "react-dom"; // depreciated
import { useRouter } from "next/navigation";
import { signup } from "@/action/auth";
import { useEffect } from "react";
import SubmitButton from "../buttons/submit-button";
import ToastNotification from "../toast/success-toast";
const SignupForm = () => {
  const router = useRouter();
  const [formState, action] = React.useActionState(signup, {
    message: "",
    errors: {},
  });
  console.log("here is the code ", )
  useEffect(() => {
    if (formState?.status) {
      const timeout = setTimeout(() => {
        router.push(`/`);
      }, 3000); 
      return () => clearTimeout(timeout);
    }
  }, [formState, router]);

  return (
    <>
     <Box
              
                sx={{ mt: 3, width: "100%" }}
              >
                   <form action={action}>

                   <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  placeholder="Enter your full name"
                //   value={formData.name}
                //   onChange={handleChange}
                  
                  
                />
                  {!!formState?.errors?.name&& (
                            <FormHelperText error>{formState?.errors?.name}</FormHelperText>
                          )}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                //   value={formData.email}
                //   onChange={handleChange}
                 
                />
                  {!!formState?.errors?.email && (
                            <FormHelperText error>{formState?.errors?.email}</FormHelperText>
                          )}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  placeholder="Create a password"
                //   value={formData.password}
                //   onChange={handleChange}
              
                />
                {!!formState?.errors?.password && (
                            <FormHelperText error>{formState?.errors?.password}</FormHelperText>
                          )}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  placeholder="Confirm your password"
                //   value={formData.confirmPassword}
                //   onChange={handleChange}
                 
                />
                {!!formState?.errors?.confirmPassword && (
                            <FormHelperText error>{formState?.errors?.confirmPassword}</FormHelperText>
                          )}
            <Box sx={{ position: "relative", marginBottom: "30px" }}>
                       <SubmitButton variant="contained" size="medium">
                       Sign up
                       </SubmitButton>
                     </Box>

                   </form>
              
                <Grid container justifyContent="center">
                  <Grid item>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                      Already have an account?{" "}
                      <Link href="/login" variant="body2">
                        Login
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              {formState.status && (
      <ToastNotification
        message="🎉 User registered succesfully!"

      />)}
    </>
  );
};
export default SignupForm;

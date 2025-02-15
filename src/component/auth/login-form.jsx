"use client";
import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Grid,
  Button,
  Link,
  Avatar,
  FormHelperText,
} from "@mui/material";
import { Facebook, Google, Twitter, LockOutlined } from "@mui/icons-material";
// import { useFormState } from "react-dom"; // depreciated
import { useRouter } from "next/navigation";
import { login } from "@/action/auth";
import { useEffect } from "react";
import SubmitButton from "../buttons/submit-button";
import ToastNotification from "../toast/success-toast";
const LoginForm = () => {
  const router = useRouter();
  const [formState, action] = React.useActionState(login, {
    message: "",
    errors: {},
  });
  useEffect(() => {
    if (formState?.message === "Login success.") {
      const timeout = setTimeout(() => {
        router.push(`/dashboard`);
      }, 1000); 
      return () => clearTimeout(timeout);
    }
  }, [formState, router]);

  return (
    <>
      <Box noValidate sx={{ mt: 3, width: "100%" }}>
        <form action={action}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="email"
            name="email"
            autoComplete="email"
            error={!!formState?.errors?.email}
            autoFocus
            placeholder="Type your username"
            //   value={email}
            //   onChange={(e) => setEmail(e.target.value)}
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
            autoComplete="current-password"
            error={!!formState?.errors?.password}
            placeholder="Type your password"
          />
          {!!formState?.errors?.password && (
            <FormHelperText error>{formState?.errors?.password}</FormHelperText>
          )}

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
          <Box sx={{ position: "relative", marginBottom: "20px" }}>
            <SubmitButton variant="contained" size="medium">
              Log in
            </SubmitButton>
          </Box>
        </form>
        <Typography
          variant="body2"
          sx={{ color: "#6c757d", margin: "16px 0", textAlign: "center" }}
        >
          OR
        </Typography>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<Google />}
          sx={{
            borderColor: "#db4437",
            color: "#db4437",
            "&:hover": {
              backgroundColor: "#fdecea",
              borderColor: "#db4437",
            },
          }}
        >
          Sign in with Google
        </Button>
        <Grid container sx={{ marginTop: 2 }}>
          {/* <Grid item xs>
                  <Link href="#" variant="body2" sx={{ color: "primary.main" }}>
                    Forgot password?
                  </Link>
                </Grid> */}
          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="body2" sx={{ color: "gray" }}>
                Don't have an account?{" "}
                <Link href="/signup" variant="body2">
                  Sign up
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {formState?.message === "Login success." && (
      <ToastNotification
        message="🎉 Loged in succesfully!"

      />)}
    </>
  );
};
export default LoginForm;

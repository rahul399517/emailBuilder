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
import { Facebook, Google, Twitter, LockOutlined } from "@mui/icons-material";
// import { useFormState } from "react-dom"; // depreciated
import { useRouter } from "next/navigation";
import { login } from "@/action/auth";
import { useEffect } from "react";
import SubmitButton from "../buttons/submit-button";
const LoginForm = () => {
  const router = useRouter();
  const [formState, action] = React.useActionState(login, {
    message: "",
    errors: {},
  });
  useEffect(() => {
    if (formState?.message === "Login success.") {
      router.push(`/signup`);
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
          <Box sx={{ position: "relative", marginBottom: "30px" }}>
            <SubmitButton variant="contained" size="medium">
              Log in
            </SubmitButton>
          </Box>
        </form>

        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 2, fontWeight: "bold", color: "gray" }}
        >
          Or Sign Up Using
        </Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 1 }}>
          <Grid item>
            <Avatar sx={{ bgcolor: "#4267B2", cursor: "pointer" }}>
              <Facebook />
            </Avatar>
          </Grid>
          <Grid item>
            <Avatar sx={{ bgcolor: "#1DA1F2", cursor: "pointer" }}>
              <Twitter />
            </Avatar>
          </Grid>
          <Grid item>
            <Avatar sx={{ bgcolor: "#DB4437", cursor: "pointer" }}>
              <Google />
            </Avatar>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 3, color: "gray" }}
        >
          Or Sign Up Using
        </Typography>
        <Link
          href="/signup"
          variant="body2"
          align="center"
          sx={{ display: "block", mt: 1 }}
        >
          SIGN UP
        </Link>
      </Box>
    </>
  );
};
export default LoginForm;

"use client";
import {CircularProgress } from "@mui/material";
import React from "react";
import { useFormStatus } from "react-dom";
import {
    Button,
  } from "@mui/material";
export default function SubmitButton({ children, variant, className, size }) {
  const { pending } = useFormStatus();
  return (
    <Button
    type="submit"
      variant={variant}
    //   className={className}
      size={size}
      disabled={pending}
    sx={{
      mt: 3,
      mb: 2,
      width: "28vw",

      background: "linear-gradient(to right, #6a11cb, #2575fc)",
      color: "white",
      fontWeight: "bold",
      "&:hover": {
        background: "linear-gradient(to right, #2575fc, #6a11cb)",
      },
    }}
  >
   {pending ? <CircularProgress size="25px" /> : children}
  </Button>
  );
}

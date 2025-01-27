"use client";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastNotification = ({ message, options = {} }) => {
  const defaultOptions = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Flip,
  };

  const showToast = () => {
    toast(message || "🦄 Default Toast Message!", {
      ...defaultOptions,
      ...options, // Merge user-defined options with defaults
    });
  };
useEffect(()=>{
    showToast()
},[])
  return (
    <>
      <ToastContainer />

    </>
  );
};

export default ToastNotification;

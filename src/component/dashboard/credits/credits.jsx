"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Container,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const creditPlans = [
  {
    credits: 100,
    price: 99,
    description: "Ideal for beginners. Start your creative journey.",
  },
  {
    credits: 250,
    price: 199,
    description: "For frequent creators. More credits for more creativity.",
  },
  {
    credits: 500,
    price: 349,
    description: "Best value pack. Unlock premium features and extra credits.",
  },
];

export default function BuyCredits() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handlePurchase = (plan) => {
    // Replace the simulated logic with your payment integration.
    setMessage(
      `Successfully purchased ${plan.credits} credits for ₹${plan.price}!`
    );
    setSnackbarOpen(true);
    // Optionally update the user's credit balance here.
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

  return (
    <Container
      sx={{
        py: 6,
        minHeight: "100vh",
        background: "linear-gradient(to right, #6a11cb, #2575fc)",
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        color="#fff"
        gutterBottom
      >
        Buy Credits
      </Typography>
      <Typography variant="h6" textAlign="center" color="#ddd" mb={4}>
        Choose a plan that suits your creative needs.
      </Typography>
      <Grid container spacing={4}>
        {creditPlans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: "#fff",
                borderRadius: 3,
                boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
                textAlign: "center",
                p: 2,
                position: "relative",
                height: "350px",
                overflow: "visible", // Ensure the icon is not clipped
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: -30,
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "#ff9800",
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                }}
              >
                <MonetizationOnIcon sx={{ color: "#fff", fontSize: 32 }} />
              </Box>
              <CardContent sx={{ mt: 4 }}>
                <Typography variant="h5" fontWeight="bold" color="#1a237e">
                  {plan.credits} Credits
                </Typography>
                <Typography variant="h6" color="primary" sx={{ my: 1 }}>
                  ₹{plan.price}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {plan.description}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => handlePurchase(plan)}
                  sx={{
                    backgroundColor: "#1a237e",
                    "&:hover": { backgroundColor: "#0d47a1" },
                  }}
                >
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity="success"
        >
          {message}
        </MuiAlert>
      </Snackbar>
    </Container>
  );
}

"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const deployedApplications = [
  {
    name: "E-Commerce App",
    description: "A fully functional e-commerce platform deployed on AWS.",
    price: 499,
    image: "https://www.figma.com/community/resource/bd329fe1-6222-4a5e-8922-3656ed078c9f/thumbnail",
  },
  {
    name: "Portfolio Website",
    description: "A personal portfolio website deployed on Netlify.",
    price: 299,
    image: "https://www.sstechsystem.com/wp-content/uploads/2022/05/The-Best-User-UI-Kits-for-Mobile-App-Design-002.jpg",
  },
  {
    name: "Real Estate Platform",
    description: "A property listing platform deployed on Azure.",
    price: 599,
    image: "https://market-resized.envatousercontent.com/previews/files/370517652/03_Preview.png?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=b161378331db3eb7c485921ffbf1bfd36952ca578a721c415b7448eb0f383aeb",
  },
  {
    name: "Landing Page",
    description: "A high-converting landing page for marketing campaigns.",
    price: 199,
    image: "https://www.visily.ai/wp-content/uploads/2024/06/Top-10-Web-App-Templates-for-Stunning-UI-Design-in-2024-scaled.jpg",
  },
  {
    name: "Blog Website",
    description: "A responsive blog website for content creators.",
    price: 399,
    image: "https://i.pinimg.com/736x/5d/6e/c4/5d6ec48614abfa9fe6cd2f0da5b2953b.jpg",
  },
  {
    name: "Portfolio with CMS",
    description: "A personal portfolio website with content management.",
    price: 349,
    image: "https://thumbs.dreamstime.com/b/smartphone-ui-app-phone-screens-shop-application-mobile-interface-account-login-cart-shopping-screenshots-responsive-307305252.jpg",
  },
];

export default function WebAppsProduct() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApplications = deployedApplications.filter(
    (app) =>
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ py: 6, px: 3, backgroundColor: "#F4F6F8" }}>
      {/* Header */}
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: "bold",
          color: "#222",
          textAlign: "center",
        }}
      >
        Premium Website Applications
      </Typography>

      {/* Search Bar */}
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <TextField
          placeholder="Search applications..."
          variant="outlined"
          size="medium"
          fullWidth
          sx={{
            maxWidth: "600px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Box>

      {/* Cards */}
      <Grid container spacing={3} justifyContent="center">
        {filteredApplications.map((app, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
                background: "linear-gradient(135deg, #ffffff, #f9f9f9)",
                transition: "transform 0.3s, box-shadow 0.3s",
                height: "350px",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={app.image}
                alt={app.name}
                sx={{
                  width: "100%",
                  height: 180,
                  objectFit: "cover",
                }}
              />
              <CardContent sx={{ textAlign: "center", p: 3 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#333", mb: 1 }}
                >
                  {app.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {app.description}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: "#FF5722",
                    mb: 2,
                  }}
                >
                  ₹{app.price}
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<ShoppingCartIcon />}
                  sx={{
                    backgroundColor: "#000",
                    color: "#fff",
                    fontWeight: "bold",
                    textTransform: "none",
                    fontSize: "1rem",
                    px: 3,
                    py: 1,
                    "&:hover": {
                      backgroundColor: "#333",
                    },
                  }}
                  onClick={() => alert(`Proceeding to buy ${app.name}`)}
                >
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
        {/* No Results Message */}
        {filteredApplications.length === 0 && (
          <Typography
            variant="h6"
            sx={{ textAlign: "center", color: "#888", mt: 4 }}
          >
            No applications found.
          </Typography>
        )}
      </Grid>
    </Box>
  );
}

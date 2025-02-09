"use client";
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Tooltip,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaidIcon from "@mui/icons-material/Paid";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const completedProjects = [
  {
    title: "E-Commerce Website",
    subtitle: "Fully Completed",
    price: 399,
    paid: true,
    previewImage: "https://xdfile.com/wp-content/uploads/2021/01/Free-E-Commerce-App-XD-UI-Design-1024x715.jpg",
  },
  {
    title: "Portfolio Website",
    subtitle: "Fully Completed",
    price: 399,
    paid: false,
    previewImage: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/70b290e955b05e07a037149d731fcedb9232ee68",
  },
  {
    title: "Landing Page Design",
    subtitle: "High Conversion Rate",
    price: 299,
    paid: false,
    previewImage: "https://blog.tubikstudio.com/wp-content/uploads/2023/07/posters-application-ecommerce-design-tubik.jpg",
  },
  {
    title: "Blog Website",
    subtitle: "Fully Responsive Design",
    price: 349,
    paid: true,
    previewImage: "https://uizard.io/static/shoutout-image-a-b7da030efb79ca33e0f1791d0bd8c2f8.png",
  },
  {
    title: "Personal Portfolio",
    subtitle: "Modern & Minimalist",
    price: 399,
    paid: false,
    previewImage: "https://i.pinimg.com/736x/14/f4/a9/14f4a95b64665f63adb8713f96b5cf41.jpg",
  },
  {
    title: "Real Estate Website",
    subtitle: "Search Optimized",
    price: 499,
    paid: false,
    previewImage: "https://framerusercontent.com/images/PjbS2VqB7vVkjQVGi7h0hium3HY.png",
  },
];

export default function CompletedProjects() {
  return (
    <Box>
      <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: "bold", color: "#333" }}>
        Completed Website Projects
      </Typography>
      <Grid container spacing={3}>
        {completedProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                backgroundColor: project.paid ? "#DFF5E4" : "#FFF2E0",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardMedia
                component="img"
                image={project.previewImage}
                alt={project.title}
                sx={{
                  width: "100%",
                  height: 140,
                  objectFit: "cover",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
              />
              <CardContent>
                {/* Title and Subtitle */}
                <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.subtitle}
                </Typography>

                {/* Special Offer for Unpaid Projects */}
                {!project.paid && (
                  <Chip
                    icon={<LocalOfferIcon />}
                    label="Limited Offer"
                    color="warning"
                    size="small"
                    sx={{ mt: 1, fontWeight: "bold" }}
                  />
                )}

                {/* Payment or Download Button */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  {project.paid ? (
                    <Button
                      variant="contained"
                      startIcon={<DownloadIcon />}
                      sx={{
                        backgroundColor: "#1976d2",
                        color: "#fff",
                        fontSize: "0.8rem",
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "#1565c0",
                        },
                      }}
                    >
                      Download
                    </Button>
                  ) : (
                    <Tooltip title={`Buy this project for ₹${project.price}`} arrow>
                      <Button
                        variant="outlined"
                        startIcon={<ShoppingCartIcon />}
                        sx={{
                          borderColor: "#FF5722",
                          color: "#FF5722",
                          fontWeight: "bold",
                          textTransform: "none",
                          fontSize: "0.8rem",
                          "&:hover": {
                            borderColor: "#E64A19",
                            color: "#E64A19",
                          },
                        }}
                        onClick={() => alert(`Redirecting to payment for ${project.title}`)}
                      >
                        Buy Now
                      </Button>
                    </Tooltip>
                  )}
                  <Chip
                    icon={<PaidIcon />}
                    label={project.paid ? "Paid" : "Unpaid"}
                    color={project.paid ? "success" : "error"}
                    size="small"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

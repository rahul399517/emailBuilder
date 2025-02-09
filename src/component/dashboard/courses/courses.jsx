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
  Tooltip,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

const allCourses = [
  {
    title: "React for Beginners",
    description: "Learn the basics of React and build your first app.",
    enrolled: true, // User has bought this course
    price: 499,
    image: "https://courses.xzect.com/wp-content/uploads/2023/08/ui-ux-design.jpg",
  },
  {
    title: "Web Development Bootcamp",
    description: "A complete course to become a full-stack web developer.",
    enrolled: true, // User has bought this course
    price: 999,
    image: "https://i.ytimg.com/vi/X6saBZFgj1M/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBGDn8kZVrfuxxM5zAqQs-KFaOJOA",
  },
  {
    title: "Advanced JavaScript",
    description: "Master the intricacies of JavaScript programming.",
    enrolled: false, // User has not bought this course
    price: 699,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMiIll93VAVK76-TZuBLvG3QTJUuUYW-NWWg&s",
  },
  {
    title: "UI/UX Design Fundamentals",
    description: "Learn the principles of design for modern interfaces.",
    enrolled: false, // User has not bought this course
    price: 399,
    image: "https://media.licdn.com/dms/image/v2/D4D12AQG_Q-OQ8Qqisg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1680181974410?e=2147483647&v=beta&t=TMXqJDFZorHs9XsK882PXpH58nK6mvtYBGD5kxJT2DI",
  },
  {
    title: "Python for Data Science",
    description: "Kickstart your career in Data Science with Python.",
    enrolled: false, // User has not bought this course
    price: 799,
    image: "https://static.vecteezy.com/system/resources/previews/007/933/203/non_2x/learning-course-dashboard-design-ui-kit-vector.jpg",
  },
  {
    title: "Machine Learning Basics",
    description: "Understand the fundamentals of machine learning.",
    enrolled: false, // User has not bought this course
    price: 899,
    image: "https://www.thinknexttraining.com/images/ui-ux-design-course-banner.jpg",
  },
];

export default function AllCourses() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter courses that the user has NOT bought
  const filteredCourses = allCourses
    .filter((course) => !course.enrolled) // Only show unenrolled courses
    .filter(
      (course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <Box sx={{ py: 6, px: 3, backgroundColor: "#F4F6F8" }}>
      {/* Header */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#222",
          textAlign: "center",
          mb: 4,
        }}
      >
        Available Courses
      </Typography>

      {/* Search Bar */}
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <TextField
          placeholder="Search for courses..."
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

      {/* Courses Grid */}
      <Grid container spacing={3} justifyContent="center">
        {filteredCourses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                height: "400px", // Uniform card size
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={course.image}
                alt={course.title}
                sx={{
                  width: "100%",
                  height: "160px",
                  objectFit: "cover",
                }}
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: 2,
                  textAlign: "center",
                }}
              >
                {/* Title and Description */}
                <Box>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    sx={{ mb: 1, color: "#333" }}
                  >
                    {course.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {course.description}
                  </Typography>
                </Box>

                {/* Buy Now Button */}
                <Box>
                  <Tooltip title={`Buy this course for ₹${course.price}`} arrow>
                    <Button
                      variant="outlined"
                      startIcon={<ShoppingCartIcon />}
                      sx={{
                        borderColor: "#FF5722",
                        color: "#FF5722",
                        fontWeight: "bold",
                        fontSize: "0.9rem",
                        textTransform: "none",
                        "&:hover": {
                          borderColor: "#E64A19",
                          color: "#E64A19",
                        },
                      }}
                      onClick={() => alert(`Redirecting to payment for ${course.title}`)}
                    >
                      Buy Now
                    </Button>
                  </Tooltip>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
        {/* No Results Found */}
        {filteredCourses.length === 0 && (
          <Typography
            variant="h6"
            sx={{ textAlign: "center", color: "#888", mt: 4 }}
          >
            No courses found.
          </Typography>
        )}
      </Grid>
    </Box>
  );
}

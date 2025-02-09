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
  LinearProgress,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const courses = [
  {
    title: "React for Beginners",
    description: "Learn the basics of React and build your first app.",
    progress: 50,
    enrolled: true,
    image: "https://a.storyblok.com/f/117250/3840x2160/9cf36f5540/cover_boring.png",
  },
  {
    title: "Web Development Bootcamp",
    description: "A complete course to become a full-stack web developer.",
    progress: 80,
    enrolled: true,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/4/300866030/HS/TT/PF/112368319/whatsapp-image-2023-04-16-at-1-15-21-pm.jpeg",
  },
  {
    title: "Advanced JavaScript",
    description: "Master the intricacies of JavaScript programming.",
    progress: 20,
    enrolled: true,
    image: "https://4achievers.com/storage/course_banner/best-ui-ux-training-in-noida_1713615326.png",
  },
];

export default function MyCourses() {
  return (
    <Box sx={{ py: 6, px: 3, backgroundColor: "#F9FAFB" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#222",
          textAlign: "center",
          mb: 4,
        }}
      >
        My Courses
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                height: "380px",
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

                {/* Progress Bar */}
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Progress: {course.progress}%
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={course.progress}
                    sx={{ height: 10, borderRadius: 5 }}
                    color={course.progress === 100 ? "success" : "primary"}
                  />
                </Box>

                {/* Continue Button */}
                <Box>
                  <Button
                    variant="contained"
                    startIcon={<PlayArrowIcon />}
                    sx={{
                      backgroundColor: "#4CAF50",
                      color: "#fff",
                      fontSize: "0.9rem",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#388E3C",
                      },
                    }}
                    onClick={() => alert(`Continuing ${course.title}`)}
                  >
                    Continue
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

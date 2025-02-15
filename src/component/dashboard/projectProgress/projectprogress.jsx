"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LinearProgress from "@mui/material/LinearProgress";
import BuildIcon from "@mui/icons-material/Build";

const projectProgressData = [
  // Example project data (currently commented out)
  // {
  //   title: "E-Commerce Website Progress",
  //   completed: 80,
  //   remaining: 20,
  //   builderLink: "/builder/ecommerce",
  //   previewImage:
  //     "https://xdfile.com/wp-content/uploads/2021/01/Free-E-Commerce-App-XD-UI-Design-1024x715.jpg",
  // },
  // {
  //   title: "Portfolio Website Progress",
  //   completed: 60,
  //   remaining: 40,
  //   builderLink: "/builder/portfolio",
  //   previewImage:
  //     "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/70b290e955b05e07a037149d731fcedb9232ee68",
  // },
];

export default function ProjectProgress() {
  const router = useRouter();

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{ mt: 4, mb: 3, fontWeight: "bold", color: "#333" }}
      >
        Project Progress
      </Typography>
      <Grid container spacing={3}>
        {/* Create New Project Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              borderRadius: 4,
              backgroundColor: "#F9F9F9",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              height: "320px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <AddCircleOutlineIcon
                sx={{ fontSize: 50, color: "#FF9800", mb: 1 }}
              />
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                Create New Project
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 3 }}
              >
                Start building your next amazing project.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FF9800",
                  color: "#fff",
                  fontWeight: "bold",
                  textTransform: "none",
                  borderRadius: 3,
                  px: 3,
                  "&:hover": {
                    backgroundColor: "#E68900",
                  },
                }}
                onClick={() => router.push("/generateVideo")}
              >
                Create Project
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Existing Project Progress Cards */}
        {projectProgressData.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 4,
                backgroundColor: "#F0F8FF",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                height: "320px",
              }}
            >
              <CardMedia
                component="img"
                image={project.previewImage}
                alt={project.title}
                sx={{
                  width: "100%",
                  height: "140px",
                  objectFit: "cover",
                  borderTopLeftRadius: "16px",
                  borderTopRightRadius: "16px",
                }}
              />
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  sx={{ mb: 2, color: "#333" }}
                >
                  {project.title}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" sx={{ color: "#666", mb: 1 }}>
                    Completed: {project.completed}%
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={project.completed}
                    color="success"
                    sx={{ height: 10, borderRadius: 5 }}
                  />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: "#666", mb: 1 }}>
                    Remaining: {project.remaining}%
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={project.remaining}
                    color="warning"
                    sx={{ height: 10, borderRadius: 5 }}
                  />
                </Box>
                <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
                  <Button
                    variant="contained"
                    startIcon={<BuildIcon />}
                    sx={{
                      backgroundColor: "#4CAF50",
                      color: "#fff",
                      fontWeight: "bold",
                      textTransform: "none",
                      px: 3,
                      "&:hover": {
                        backgroundColor: "#388E3C",
                      },
                    }}
                    onClick={() =>
                      alert(`Navigating to ${project.builderLink}`)
                    }
                  >
                    Continue Building
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

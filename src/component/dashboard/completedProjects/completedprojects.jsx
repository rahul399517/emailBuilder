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
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

const userProjects = [
  {
    title: "Epic Battle Scene",
    subtitle: "Generated using AI",
    status: "Completed",
    previewImage: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/06/collage-maker-24-jun-2023-06-47-pm-6371.jpg",
  },
  {
    title: "Fantasy World",
    subtitle: "Work in Progress",
    status: "In Progress",
    previewImage: "https://i.ytimg.com/vi/k86vMdE3gws/maxresdefault.jpg",
  },
  {
    title: "Cyberpunk City",
    subtitle: "Created with AI Animation",
    status: "Completed",
    previewImage: "https://staticg.sportskeeda.com/editor/2024/12/6f3a4-17343509578885-1920.jpg",
  },
];

export default function UserProjects() {
  return (
    <Box>
      <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: "bold", color: "#333" }}>
        Your Anime AI Projects
      </Typography>
      <Grid container spacing={3}>
        {userProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                backgroundColor: project.status === "Completed" ? "#DFF5E4" : "#FFF2E0",
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
                <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.subtitle}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  {project.status === "Completed" ? (
                    <Button
                      variant="contained"
                      startIcon={<PlayCircleOutlineIcon />}
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
                      Play Video
                    </Button>
                  ) : (
                    <Tooltip title="Continue Editing" arrow>
                      <Button
                        variant="outlined"
                        startIcon={<EditIcon />}
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
                      >
                        Edit
                      </Button>
                    </Tooltip>
                  )}
                  <Chip
                    icon={<VisibilityIcon />}
                    label={project.status}
                    color={project.status === "Completed" ? "success" : "warning"}
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
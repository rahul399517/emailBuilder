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
  Container,
} from "@mui/material";
import { useRouter } from "next/navigation";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function HomePage() {
  const router = useRouter();

  const myVideos = [
    {
      title: "Epic Battle Scene",
      description: "A high-action anime battle created with AI.",
      progress: 100,
      thumbnail: "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/65b128e0380372761ea58524_9kiRnv7mDkNscY9SYYoEYgQu-Heje26VHI1LKFEOvpYtpQu46BCjBbSaKAK8rrXcMMfkM57m9OTp6VytYsCLoejWSRH3mE5dkZx1Tg8F-feTnR3z_wukR0Cb7TdGinJIrAP30eLQWbh8KxL4NI2ae4Q.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      title: "Fantasy World",
      description: "An enchanting journey through an AI-generated fantasy world.",
      progress: 80,
      thumbnail: "https://xdfile.com/wp-content/uploads/2021/01/Free-E-Commerce-App-XD-UI-Design-1024x715.jpg",
      videoUrl: ""
    },
    {
      title: "Cyberpunk City",
      description: "A futuristic neon-lit cyberpunk cityscape in motion.",
      progress: 95,
      thumbnail: "https://blog.tubikstudio.com/wp-content/uploads/2023/07/posters-application-ecommerce-design-tubik.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Container sx={{ my: 6 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
          My Created Videos
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {myVideos.map((video, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ borderRadius: 4, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)", height: "380px", display: "flex", flexDirection: "column" }}>
                <CardMedia component="img" image={video.thumbnail} alt={video.title} sx={{ width: "100%", height: "160px", objectFit: "cover" }} />
                <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", p: 2, textAlign: "center" }}>
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1, color: "#333" }}>{video.title}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{video.description}</Typography>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ mb: 1 }}>Completion: {video.progress}%</Typography>
                    <LinearProgress variant="determinate" value={video.progress} sx={{ height: 10, borderRadius: 5 }} color={video.progress === 100 ? "success" : "primary"} />
                  </Box>
                  <Box>
                    {video.videoUrl ? (
                      <Button variant="contained" startIcon={<PlayArrowIcon />} sx={{ backgroundColor: "#4CAF50", color: "#fff", fontSize: "0.9rem", textTransform: "none", "&:hover": { backgroundColor: "#388E3C" } }} onClick={() => window.open(video.videoUrl, "_blank") }>
                        Watch Video
                      </Button>
                    ) : (
                      <Button variant="outlined" disabled sx={{ borderColor: "#FF5722", color: "#FF5722", fontWeight: "bold", textTransform: "none", fontSize: "0.9rem" }}>
                        Processing...
                      </Button>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
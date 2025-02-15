"use client";
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Container,
} from "@mui/material";
import { useRouter } from "next/navigation";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import EditIcon from "@mui/icons-material/Edit";
import PaletteIcon from "@mui/icons-material/Palette";

//
// A helper component that shows a clickable thumbnail for a video.
// When clicked, the video (YouTube or local) starts playing.
//
function FeaturedVideoPlayer({ videoUrl }) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const isYouTube =
    videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");

  const handlePlay = () => {
    setIsPlaying(true);
  };

  if (!isPlaying) {
    // Not playing yet – show a thumbnail with a play button.
    let thumbnailUrl;
    if (isYouTube) {
      let videoId;
      try {
        const url = new URL(videoUrl);
        if (url.hostname === "youtu.be") {
          videoId = url.pathname.substring(1);
        } else {
          videoId = url.searchParams.get("v");
        }
      } catch (e) {
        console.error("Invalid URL", e);
      }
      if (videoId) {
        thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      }
    } else {
      // For local videos, use a provided poster image or a fallback image.
      thumbnailUrl = "/images/video-placeholder.jpg"; // Place your placeholder image in the public folder.
    }
    return (
      <Box
        onClick={handlePlay}
        sx={{
          position: "relative",
          paddingBottom: "56.25%", // 16:9 aspect ratio
          backgroundImage: `url(${thumbnailUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <PlayCircleOutlineIcon sx={{ color: "#64b5f6", fontSize: 64 }} />
        </Box>
      </Box>
    );
  }

  // If playing, render the video.
  if (isYouTube) {
    let videoId;
    try {
      const url = new URL(videoUrl);
      if (url.hostname === "youtu.be") {
        videoId = url.pathname.substring(1);
      } else {
        videoId = url.searchParams.get("v");
      }
    } catch (e) {
      console.error("Invalid URL", e);
    }
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;
    return (
      <Box
        sx={{
          position: "relative",
          paddingBottom: "56.25%", // Maintain 16:9 aspect ratio
        }}
      >
        <Box
          component="iframe"
          src={embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
          }}
        />
      </Box>
    );
  }

  // For local video files:
  return (
    <video
      autoPlay
      controls
      loop
      muted
      playsInline
      style={{
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
      }}
    >
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default function HomePage() {
  const router = useRouter();

  // Sample featured videos (mix of YouTube links and local videos).
  const featuredVideos = [
    {
      title: "The Awakening",
      creator: "SakuraDream",
      videoUrl: "https://www.youtube.com/watch?v=pcC-w-0Znsg",
    },
    {
      title: "Journey Through Neon Nights",
      creator: "TokyoLights",
      videoUrl: "https://www.youtube.com/watch?v=aVkNUAG8ErI",
    },
    {
      title: "Mystic Blade",
      creator: "RoninArts",
      videoUrl: "https://www.youtube.com/watch?v=zBEotIMuWuc",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#fafafa", minHeight: "100vh", color: "#212121" }}>
      {/* Hero Section with YouTube Video Background */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "80vh" },
          overflow: "hidden",
        }}
      >
        {/* Responsive YouTube Embed for Hero */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
        <Box
  component="iframe"
  src="https://www.youtube.com/embed/CeItO4-ARfk?autoplay=1&mute=1&loop=1&playlist=CeItO4-ARfk&vq=hd720&modestbranding=1&rel=0"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  sx={{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "240%", sm: "170%", md: "170%" },
    height: { xs: "240%", sm: "170%", md: "170%" },
  }}
/>
</Box>
        {/* Hero Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: 2,
            textAlign: "center",
            color: "white",
          }}
        >
          <Typography variant="h3" fontWeight="bold" mb={2}>
            Bring Your Anime Vision to Life with AI
          </Typography>
          <Typography variant="h6" mb={4}>
            Create stunning, AI-generated anime shorts and watch inspiring examples.
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<MovieCreationIcon />}
            sx={{
              backgroundColor: "#64b5f6",
              color: "#fff",
              textTransform: "none",
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#42a5f5",
              },
            }}
            onClick={() => {
              document.getElementById("featured").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            See Inspirations
          </Button>
        </Box>
      </Box>

      {/* Featured Anime Shorts Section */}
      <Container id="featured" sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={6}>
          Featured AI-Generated Anime Shorts
        </Typography>
        <Grid container spacing={4}>
          {featuredVideos.map((video, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: 3,
                  backgroundColor: "#fff",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.03)",
                  },
                }}
              >
                {/* Video Preview */}
                <Box sx={{ position: "relative" }}>
                  <FeaturedVideoPlayer videoUrl={video.videoUrl} />
                </Box>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold" mb={0.5}>
                    {video.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    By {video.creator}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* How It Works Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={6}>
          How It Works
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: "center", px: 3 }}>
              <EditIcon sx={{ fontSize: 60, color: "#64b5f6", mb: 2 }} />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Share Your Idea
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Input your creative concept and let our AI understand your vision.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: "center", px: 3 }}>
              <PaletteIcon sx={{ fontSize: 60, color: "#64b5f6", mb: 2 }} />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Customize Your Style
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Choose from various anime styles and tweak settings to match your taste.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: "center", px: 3 }}>
              <PlayCircleOutlineIcon sx={{ fontSize: 60, color: "#64b5f6", mb: 2 }} />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Generate Your Short
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Watch as our AI brings your story to life with a stunning anime short.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Call-to-Action Section */}
      <Box
        sx={{
          backgroundColor: "#fff3e0",
          color: "#212121",
          py: 8,
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="h4" fontWeight="bold" mb={3}>
            Ready to Create Your Own Masterpiece?
          </Typography>
          <Typography variant="body1" mb={4}>
            Unlock the power of AI and start making your anime short for just{" "}
            <strong>99 credits</strong>.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#64b5f6",
              color: "#fff",
              textTransform: "none",
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#42a5f5",
              },
            }}
            onClick={() => router.push("/buy-credits")}
          >
            Buy Credits
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

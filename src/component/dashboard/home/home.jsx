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
  Container,
} from "@mui/material";
import { useRouter } from "next/navigation";
import SchoolIcon from "@mui/icons-material/School";
import WebIcon from "@mui/icons-material/Web";
import BuildIcon from "@mui/icons-material/Build";
import StarIcon from "@mui/icons-material/Star";

export default function HomePage() {
  const router = useRouter();

  return (
    <Box sx={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage:
            "url(https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          textAlign: "center",
          py: 10,
          px: 2,
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Welcome to App Genesis
        </Typography>
        <Typography variant="h6">
          Build, Buy, and Explore High-Quality Applications, Courses, and Web Apps.
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "#FF5722",
            "&:hover": { backgroundColor: "#E64A19" },
          }}
          onClick={() => router.push("/allCourses")}
        >
          Explore Courses
        </Button>
      </Box>

   {/* Explore Categories Section */}
<Container sx={{ my: 6 }}>
  <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
    Explore Categories
  </Typography>
  <Grid container spacing={3} justifyContent="center">
    {[
      { title: "My Projects", icon: <BuildIcon fontSize="large" />, path: "/myProject" },
      { title: "My Courses", icon: <SchoolIcon fontSize="large" />, path: "/myCourses" },
      { title: "Website Collection", icon: <WebIcon fontSize="large" />, path: "/websiteCollection" },
    ].map((category, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card
          sx={{
            borderRadius: "16px",
            textAlign: "center",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.07)",
              boxShadow: "0px 12px 40px rgba(0, 0, 0, 0.2)",
              background:
                "linear-gradient(135deg, rgba(106,17,203,0.8), rgba(37,117,252,0.8))",
              color: "#fff",
            },
          }}
          onClick={() => router.push(category.path)}
        >
          <CardContent>
            <Box
              sx={{
                fontSize: "3.5rem",
                color: "#FF5722",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              {category.icon}
            </Box>
            <Typography
              variant="h6"
              fontWeight="bold"
              mt={2}
              sx={{ transition: "color 0.3s ease", "&:hover": { color: "#fff" } }}
            >
              {category.title}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</Container>

      {/* Featured Section */}
      <Container sx={{ my: 6 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
          Best-Selling Courses & Projects
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            {
              title: "React for Beginners",
              price: "₹499",
              image:
                "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/65b128e0380372761ea58524_9kiRnv7mDkNscY9SYYoEYgQu-Heje26VHI1LKFEOvpYtpQu46BCjBbSaKAK8rrXcMMfkM57m9OTp6VytYsCLoejWSRH3mE5dkZx1Tg8F-feTnR3z_wukR0Cb7TdGinJIrAP30eLQWbh8KxL4NI2ae4Q.png",
            },
            {
              title: "E-Commerce Website",
              price: "₹899",
              image:
                "https://xdfile.com/wp-content/uploads/2021/01/Free-E-Commerce-App-XD-UI-Design-1024x715.jpg",
            },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.1)",
                  "&:hover": { transform: "scale(1.05)", transition: "0.3s" },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.price}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ mt: 2, backgroundColor: "#FF5722" }}
                    onClick={() => router.push("/allCourses")}
                  >
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ backgroundColor: "#fff", py: 6 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
          What Our Users Say
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            {
              name: "John Doe",
              review: "Amazing courses! The best learning experience I've had.",
            },
            {
              name: "Sarah Lee",
              review:
                "The pre-built web apps are fantastic! Saved me so much time.",
            },
          ].map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ borderRadius: 4, p: 2 }}>
                <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                  "{testimonial.review}"
                </Typography>
                <Box display="flex" alignItems="center" mt={2}>
                  <StarIcon sx={{ color: "#FFD700" }} />
                  <StarIcon sx={{ color: "#FFD700" }} />
                  <StarIcon sx={{ color: "#FFD700" }} />
                  <StarIcon sx={{ color: "#FFD700" }} />
                  <StarIcon sx={{ color: "#FFD700" }} />
                </Box>
                <Typography variant="subtitle2" mt={1} fontWeight="bold">
                  - {testimonial.name}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
 {/* 🚀 🎥 YouTube Video Section */}
 <Container sx={{ my: 6 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
          Watch Our Video Tutorial
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "12px", maxWidth: "900px" }}
          ></iframe>
        </Box>
      </Container>
      {/* Call to Action */}
      <Box sx={{ textAlign: "center", py: 6 }}>
        <Typography variant="h4" fontWeight="bold">
          Start Your Journey Today!
        </Typography>
        <Typography variant="body1" color="text.secondary" mt={1}>
          Join thousands of learners and developers who trust App Genesis.
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 3, backgroundColor: "#FF5722" }}
          onClick={() => router.push("/allCourses")}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
}

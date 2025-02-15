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
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";

const publicCreations = [
  {
    title: "Epic Battle Scene",
    creator: "AnimeMasterX",
    status: "Completed",
    previewImage: "https://i.pinimg.com/736x/56/ea/13/56ea137f0f574a5e33f6b80169c3cc7c.jpg",
  },
  {
    title: "Fantasy World",
    creator: "DreamWeaver",
    status: "In Progress",
    previewImage: "https://dslv9ilpbe7p1.cloudfront.net/FlTp42jQb0OntYxwcs6S3A_store_banner_image.jpeg",
  },
  {
    title: "Cyberpunk City",
    creator: "TechNomad",
    status: "Completed",
    previewImage: "https://comicbook.com/wp-content/uploads/sites/4/2025/02/These-10-Anime-Turn-20-in-2025.jpeg",
  },
];

export default function PublicCreations() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCreations = publicCreations.filter(
    (creation) =>
      creation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creation.creator.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box>
      <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: "bold", color: "#333" }}>
        Public Anime AI Creations
      </Typography>

      <Box sx={{ mb: 4, textAlign: "center" }}>
        <TextField
          placeholder="Search creations..."
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

      <Grid container spacing={3}>
        {filteredCreations.map((creation, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                backgroundColor: creation.status === "Completed" ? "#DFF5E4" : "#FFF2E0",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardMedia
                component="img"
                image={creation.previewImage}
                alt={creation.title}
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
                  {creation.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Created by {creation.creator}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  {creation.status === "Completed" ? (
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
                      Watch
                    </Button>
                  ) : (
                    <Tooltip title="In Progress" arrow>
                      <Button
                        variant="outlined"
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
                        Coming Soon
                      </Button>
                    </Tooltip>
                  )}
                  <Typography variant="caption" sx={{ color: "#555" }}>
                    {creation.status}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {filteredCreations.length === 0 && (
        <Typography variant="h6" sx={{ textAlign: "center", color: "#888", mt: 4 }}>
          No creations found.
        </Typography>
      )}
    </Box>
  );
}

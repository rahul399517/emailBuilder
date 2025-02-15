"use client";
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import InsightsIcon from "@mui/icons-material/Insights";

const insightsData = [
  { title: "User Engagement", description: "Tracks user engagement trends over the past month." },
  { title: "Sales Performance", description: "Shows sales trends for completed projects." },
  { title: "Project Popularity", description: "Highlights the most popular project types." },
];

export default function Insights() {
  return (
    <Box>
      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        Insights
      </Typography>
      <Grid container spacing={2}>
        {insightsData.map((insight, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 3, backgroundColor: "#F5F5F5" }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <InsightsIcon fontSize="large" sx={{ color: "#1976d2", mr: 2 }} />
                  <Typography variant="subtitle1" fontWeight="bold">
                    {insight.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {insight.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}



"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Avatar,
  IconButton,
  Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import LockIcon from "@mui/icons-material/Lock";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import LogoutIcon from "@mui/icons-material/Logout";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [avatar, setAvatar] = useState("https://randomuser.me/api/portraits/men/40.jpg");

  // Toggle Handlers
  const handleDarkModeToggle = () => setDarkMode(!darkMode);
  const handleNotificationsToggle = () => setNotifications(!notifications);

  return (
    <Container sx={{ mt: 6 }}>
      {/* 🔧 Settings Header */}
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
        ⚙️ Settings
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Profile Card */}
        <Grid item xs={12} md={5}>
          <Card
            sx={{
              borderRadius: "16px",
              textAlign: "center",
              p: 3,
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.2))",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <CardContent>
              <Box display="flex" flexDirection="column" alignItems="center">
                {/* Avatar Upload */}
                <Avatar src={avatar} sx={{ width: 90, height: 90, mb: 2, border: "4px solid #fff" }} />
                <IconButton component="label" sx={{ mb: 2 }}>
                  <CloudUploadIcon />
                  <input type="file" hidden onChange={(e) => setAvatar(URL.createObjectURL(e.target.files[0]))} />
                </IconButton>

                {/* Name & Email Fields */}
                <TextField fullWidth label="Full Name" variant="outlined" sx={{ mb: 2 }} />
                <TextField fullWidth label="Email Address" variant="outlined" sx={{ mb: 2 }} />

                <Button variant="contained" sx={{ backgroundColor: "#1976D2", mt: 2 }} fullWidth>
                  Save Profile
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Preferences Card */}
        <Grid item xs={12} md={5}>
          <Card
            sx={{
              borderRadius: "16px",
              p: 3,
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            <CardContent>
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Preferences
              </Typography>

              {/* Notification Toggle */}
              <FormControlLabel
                control={<Switch checked={notifications} onChange={handleNotificationsToggle} />}
                label="Enable Notifications"
                sx={{ display: "flex", alignItems: "center", mb: 2 }}
              />

              {/* Dark Mode Toggle */}
              <FormControlLabel
                control={<Switch checked={darkMode} onChange={handleDarkModeToggle} />}
                label="Dark Mode"
                sx={{ display: "flex", alignItems: "center", mb: 2 }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* 🔒 Security Section */}
      <Box mt={4} display="flex" justifyContent="center">
        <Card
          sx={{
            borderRadius: "16px",
            p: 3,
            width: "80%",
            textAlign: "center",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
            background: "rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <CardContent>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Security Settings
            </Typography>

            <Button
              startIcon={<LockIcon />}
              variant="outlined"
              sx={{ mb: 2, borderColor: "#F44336", color: "#F44336" }}
              fullWidth
            >
              Enable Two-Factor Authentication
            </Button>

            <Divider sx={{ my: 2 }} />

            <Button
              startIcon={<LogoutIcon />}
              variant="contained"
              sx={{ backgroundColor: "#F44336", color: "#fff" }}
              fullWidth
            >
              Logout
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

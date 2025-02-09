"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Container,
  Chip,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InfoIcon from "@mui/icons-material/Info";

const initialNotifications = [
  {
    id: 1,
    type: "success",
    message: "Your purchase was successful!",
    time: "5 minutes ago",
  },
  {
    id: 2,
    type: "warning",
    message: "Your subscription is about to expire.",
    time: "2 hours ago",
  },
  {
    id: 3,
    type: "error",
    message: "Payment failed. Please try again.",
    time: "1 day ago",
  },
  {
    id: 4,
    type: "info",
    message: "New course added to the platform!",
    time: "3 days ago",
  },
];

export default function AlertsNotifications() {
  const [notifications, setNotifications] = useState(initialNotifications);

  // Function to remove a notification
  const handleDismiss = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  // Mapping notification types to icons and colors
  const getNotificationDetails = (type) => {
    switch (type) {
      case "success":
        return { icon: <CheckCircleIcon sx={{ color: "#4CAF50" }} />, color: "#E8F5E9" };
      case "warning":
        return { icon: <WarningAmberIcon sx={{ color: "#FF9800" }} />, color: "#FFF3E0" };
      case "error":
        return { icon: <ErrorOutlineIcon sx={{ color: "#F44336" }} />, color: "#FFEBEE" };
      case "info":
      default:
        return { icon: <InfoIcon sx={{ color: "#2196F3" }} />, color: "#E3F2FD" };
    }
  };

  return (
    <Container sx={{ mt: 6 }}>
      {/* Header */}
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3}>
        Alerts & Notifications
      </Typography>

      {/* Notifications List */}
      {notifications.length > 0 ? (
        <List>
          {notifications.map((notification, index) => {
            const { icon, color } = getNotificationDetails(notification.type);

            return (
              <React.Fragment key={notification.id}>
                <ListItem sx={{ backgroundColor: color, borderRadius: 2, mb: 2 }}>
                  {icon}
                  <ListItemText
                    primary={<Typography fontWeight="bold">{notification.message}</Typography>}
                    secondary={<Typography variant="body2">{notification.time}</Typography>}
                    sx={{ ml: 2 }}
                  />
                  {/* Dismiss Button */}
                  <IconButton onClick={() => handleDismiss(notification.id)}>
                    <CloseIcon />
                  </IconButton>
                </ListItem>
                {index !== notifications.length - 1 && <Divider />}
              </React.Fragment>
            );
          })}
        </List>
      ) : (
        <Box textAlign="center" mt={4}>
          <NotificationsActiveIcon sx={{ fontSize: 64, color: "#9E9E9E" }} />
          <Typography variant="h6" color="text.secondary">
            No new notifications
          </Typography>
        </Box>
      )}
    </Container>
  );
}

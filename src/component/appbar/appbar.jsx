import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box
} from '@mui/material';

// MUI Icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function MyAppBar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: '#ffffff',
        color: '#000000',
        borderBottom: '1px solid #e0e0e0', // optional subtle bottom border
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left side: Title and Date */}
        <Box>
          {/* "Today's Plan" with dropdown arrow */}
          {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ mr: 1 }}>
              Today’s Plan
            </Typography>
            <ArrowDropDownIcon />
          </Box> */}

          {/* Date */}
          {/* <Typography variant="body2" color="text.secondary">
            March 27th, 2023
          </Typography> */}
        </Box>

        {/* Right side: Notification + User Info */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Notification icon */}
          <IconButton sx={{ mr: 2 }}>
            <NotificationsNoneIcon />
          </IconButton>

          {/* User name / role + Avatar */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ textAlign: 'right', mr: 2 }}>
              <Typography variant="subtitle1">Mykola Ledenov</Typography>
              <Typography variant="caption" color="text.secondary">
                CEO/Nied
              </Typography>
            </Box>
            <Avatar
              alt="Mykola Ledenov"
              src="https://via.placeholder.com/40"
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

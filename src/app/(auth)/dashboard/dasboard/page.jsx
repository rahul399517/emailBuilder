'use client';
import React from 'react';
import { Box, CssBaseline, Toolbar, useMediaQuery, useTheme } from '@mui/material';
// import SideNav, { drawerWidth } from '@/app/components/sidebar/sidebar
import ResponsiveSideNav , {drawerWidth} from '@/component/sidebar/sidebar';
// import AdminStatsCards from './swap/page';
import AdminStatsCards from '../swap/page' 
import MyAppBar from '@/component/appbar/appbar';

function AdminDash() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box sx={{ display: 'flex', backgroundColor: 'white', minHeight: '100vh' }}>
      <CssBaseline />

      {/* Side Navigation */}
      <ResponsiveSideNav />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          // Only add left margin on medium screens (md) and up
          ml: { xs: 0, md: `${drawerWidth}px` },
        }}
      >
        {/* Top bar */}
        <MyAppBar />

        {/* Optionally keep a <Toolbar /> spacer if your AppBar is fixed height */}
        <Toolbar />

        {/* The cards (e.g., Total Admins, Active Admins, etc.) */}
        <AdminStatsCards />
      </Box>
    </Box>
  );
}

export default AdminDash;

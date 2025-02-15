import React from 'react';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import CollectionsIcon from '@mui/icons-material/Collections';
import SchoolIcon from '@mui/icons-material/School';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Image from 'next/image';
// import { useRouter } from 'next/router';
import logo from "../../../public/image/logo.png";
import { useRouter } from 'next/navigation';
const drawerWidth = 240;

export default function ResponsiveSideNav() {
  const theme = useTheme();
  const router = useRouter(); // Hook for navigation

  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const handleNavigation = (path) => {
    router.push(path);
    if (!isMdUp) {
      setMobileOpen(false); // Close drawer on mobile after navigation
    }
  };

  const drawerContent = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#ffffff',
        color: '#000',
      }}
    >
      {/* Logo */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Image
          src={logo}
          width={120}
          height={120}
          alt="App Logo"
          priority
          style={{ borderRadius: '50%' }}
        />
      </Box>

      {/* Navigation links */}
      <Box sx={{ flexGrow: 1, overflow: 'auto', mt: 2 }}>
        <List>
          {/* <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleNavigation('/home')}
              sx={{
                '&:hover': {
                  background: "linear-gradient(to right, #6a11cb, #2575fc)",
                  color: '#fff',
                  '& .MuiListItemIcon-root': { color: '#fff' },
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem> */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleNavigation('/dashboard')}
              sx={{
                '&:hover': {
                  background: "linear-gradient(to right, #6a11cb, #2575fc)",
                  color: '#fff',
                  '& .MuiListItemIcon-root': { color: '#fff' },
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>

          {/* <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleNavigation('/myProject')}
              sx={{
                '&:hover': {
                  background: "linear-gradient(to right, #6a11cb, #2575fc)",
                  color: '#fff',
                  '& .MuiListItemIcon-root': { color: '#fff' },
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>
                <AccountTreeIcon />
              </ListItemIcon>
              <ListItemText primary="My projects" />
            </ListItemButton>
          </ListItem> */}

          {/* <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleNavigation('/websiteCollection')}
              sx={{
                '&:hover': {
                  background: "linear-gradient(to right, #6a11cb, #2575fc)",
                  color: '#fff',
                  '& .MuiListItemIcon-root': { color: '#fff' },
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>
                <CollectionsIcon />
              </ListItemIcon>
              <ListItemText primary="Website collections" />
            </ListItemButton>
          </ListItem> */}

          {/* <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleNavigation('/myCourses')}
              sx={{
                '&:hover': {
                  background: "linear-gradient(to right, #6a11cb, #2575fc)",
                  color: '#fff',
                  '& .MuiListItemIcon-root': { color: '#fff' },
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary="My Courses" />
            </ListItemButton>
          </ListItem> */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleNavigation('/allCourses')}
              sx={{
                '&:hover': {
                  background: "linear-gradient(to right, #6a11cb, #2575fc)",
                  color: '#fff',
                  '& .MuiListItemIcon-root': { color: '#fff' },
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>
                <WorkHistoryIcon />
              </ListItemIcon>
              <ListItemText primary="Public Creations" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleNavigation('/alert')}
              sx={{
                '&:hover': {
                  background: "linear-gradient(to right, #6a11cb, #2575fc)",
                  color: '#fff',
                  '& .MuiListItemIcon-root': { color: '#fff' },
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>
                <MarkUnreadChatAltIcon />
              </ListItemIcon>
              <ListItemText primary="alerts" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleNavigation('/setting')}
              sx={{
                '&:hover': {
                  background: "linear-gradient(to right, #6a11cb, #2575fc)",
                  color: '#fff',
                  '& .MuiListItemIcon-root': { color: '#fff' },
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      <Divider />
      {/* Logout button at bottom */}
      <Button
        variant="contained"
        fullWidth
        startIcon={<LogoutIcon />}
        sx={{
          background: 'white',
          color: 'black',
          '&:hover': {
            background: "linear-gradient(to right, #6a11cb, #2575fc)",
            color: 'white',
          },
        }}
        onClick={() => handleNavigation('/login')}
      >
        Logout
      </Button>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', position: 'relative' }}>
      {!isMdUp && (
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            position: 'absolute',
            top: '1rem',
            left: '0.5rem',
            zIndex: 2000,
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        variant="temporary"
        open={!isMdUp && mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: drawerWidth },
        }}
      >
        {drawerContent}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': { width: drawerWidth },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}
export { drawerWidth };

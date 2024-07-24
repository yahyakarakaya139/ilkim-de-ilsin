import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableChartIcon from '@mui/icons-material/TableChart';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const Sidebar = () => {
  return (
    <Box sx={{ width: 250, backgroundColor: '#1e1e2f', color: 'white', height: '100vh', padding: 2 }}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <TableChartIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Tables" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ReceiptIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Billing" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LoginIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Sign In" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AppRegistrationIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Sign Up" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;

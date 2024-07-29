import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableChartIcon from '@mui/icons-material/TableChart';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { fetchSidebarItems } from '../utils/dataFetcher';

const iconMap = {
  DashboardIcon,
  TableChartIcon,
  ReceiptIcon,
  AccountCircleIcon,
  LoginIcon,
  AppRegistrationIcon,
};

const Sidebar = ({ isOpen }) => {
  const sidebarItems = fetchSidebarItems();

  return (
    <Box sx={{ 
      width: 250, 
      backgroundColor: '#1e1e2f', 
      color: 'white', 
      height: '100vh', 
      padding: 2, 
      display: { xs: isOpen ? 'block' : 'none', sm: 'block' } 
    }}>
      <List>
        {sidebarItems.map((item, index) => {
          const IconComponent = iconMap[item.icon];
          if (!IconComponent) {
            console.error(`Icon component ${item.icon} not found.`);
            return null; // Or provide a fallback UI
          }
          return (
            <ListItem button key={index}>
              <ListItemIcon>
                <IconComponent style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Sidebar;

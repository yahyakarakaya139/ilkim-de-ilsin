import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { fetchDashboardStats } from '../utils/dataFetcher';

const Dashboard = () => {
  const dashboardStats = fetchDashboardStats();

  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={3}>
        {dashboardStats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper sx={{ padding: 2, backgroundColor: '#28293e', color: 'white', minHeight: 150 }}>
              <Typography variant="h6">{stat.title}</Typography>
              <Typography variant="h4">{stat.value}</Typography>
              <Typography variant="body2" color={stat.change.startsWith('+') ? 'success.main' : 'error.main'}>
                {stat.change}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;

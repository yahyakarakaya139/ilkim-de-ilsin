import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ padding: 2, backgroundColor: '#28293e', color: 'white' }}>
            <Typography variant="h6">Today's Money</Typography>
            <Typography variant="h4">$53,000</Typography>
            <Typography variant="body2" color="success.main">+55%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ padding: 2, backgroundColor: '#28293e', color: 'white' }}>
            <Typography variant="h6">Today's Users</Typography>
            <Typography variant="h4">2,300</Typography>
            <Typography variant="body2" color="success.main">+3%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ padding: 2, backgroundColor: '#28293e', color: 'white' }}>
            <Typography variant="h6">New Clients</Typography>
            <Typography variant="h4">+3,462</Typography>
            <Typography variant="body2" color="error.main">-2%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ padding: 2, backgroundColor: '#28293e', color: 'white' }}>
            <Typography variant="h6">Total Sales</Typography>
            <Typography variant="h4">$103,430</Typography>
            <Typography variant="body2" color="success.main">+5%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, backgroundColor: '#28293e', color: 'white' }}>
            <Typography variant="h6">Satisfaction Rate</Typography>
            <Typography variant="h4">95%</Typography>
            <Typography variant="body2">Based on likes</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, backgroundColor: '#28293e', color: 'white' }}>
            <Typography variant="h6">Referral Tracking</Typography>
            <Typography variant="h4">9.3</Typography>
            <Typography variant="body2">Safety Score</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;

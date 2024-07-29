import Head from 'next/head';
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import { Box } from '@mui/material';

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard Application" />
      </Head>
      <Sidebar isOpen={isSidebarOpen} />
      <Box sx={{ flexGrow: 1 }}>
        <Header toggleSidebar={toggleSidebar} />
        <Dashboard />
      </Box>
    </Box>
  );
}

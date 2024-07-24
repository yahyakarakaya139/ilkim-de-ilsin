import Head from 'next/head';
import Sidebar from '../components/sidebar';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard Application" />
      </Head>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <Dashboard />
      </Box>
    </Box>
  );
}

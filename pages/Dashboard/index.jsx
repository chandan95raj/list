import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Grid, Typography } from '@mui/material';
import {  LogoutOutlined } from '@mui/icons-material';

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = Cookies.get('user');
    if (user) {
      setUsername(user);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
      <Grid container alignItems='center'>        
        <Grid item xs={12} md={6}>
          <img src="/dashboard.png" width='100%' alt="dashboard" />
        </Grid>
        <Grid item xs={12} md={6} className='text-center'>
          <Typography variant="h3">Dashboard</Typography>
          <Box className="my-3">
            {username ? (
              <Typography variant="h5" className='text-secondary text-capitalize'>Welcome, {username}!</Typography>
            ) : (
              <Typography variant="body2">Loading...</Typography>
            )}
          </Box>
          <Link to="/logout">
            <Button type="submit" variant="contained" color="error"
              startIcon={<LogoutOutlined />}>
              Logout
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;


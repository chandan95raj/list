import { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Paper, Typography, FormControl, TextField, Button } from "@mui/material"
import { LoginOutlined } from '@mui/icons-material';
function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    Cookies.set('user', username);
    navigate('/dashboard');
  };

  return (
    <>
      <Box >
        <Grid container  alignItems="center" justifyContent='center' mt={{ xs: 0, sm: 4 }}>
          <Grid item xs={12} md={6}>
            <img src="/login.png" width='100%' alt="login" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h3" className='text-center'>Login</Typography>
              <hr />
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextField
                      required
                      id="outlined-required"
                      label="Username"
                      placeholder="Enter name"
                      variant="standard"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <Button type="submit" variant="contained" color="success" onClick={handleLogin}
                      startIcon={<LoginOutlined />}>
                      Login
                    </Button>
                  </Box>
                  <hr />
                  <Box  className='text-center'>
                    <Typography variant='body2'>Note: Any name or text enter in username field to access the dashboard</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );

}

export { Login };

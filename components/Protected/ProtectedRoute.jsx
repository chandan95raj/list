import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Button, Box, Typography } from '@mui/material';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const user = Cookies.get('user');
  const navigate = useNavigate();

  if (!user) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="h2" color="error" display={{ xs: 'none', md: 'block' }}>
          Please login to access this page!
        </Typography>
        <Typography variant="h6" color="error" display={{ xs: 'block', md: 'none' }}>
          Please login to access this page!
        </Typography>
        <Button variant="contained" className='mt-4' onClick={() => navigate("/login")}>
          Go To Login
        </Button>
      </Box>
    );
  }

  return children;
};

export default ProtectedRoute;

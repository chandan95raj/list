import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Button, Box } from '@mui/material';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const user = Cookies.get('user');
  const navigate = useNavigate();

  if (!user) {
    return (
      <Box textAlign="center" mt={4}>
        <p>Please login to access this page.</p>
        <Button variant="contained" onClick={() => navigate("/login")}>
          Go To Login
        </Button>
      </Box>
    );
  }

  return children;
};

export default ProtectedRoute;

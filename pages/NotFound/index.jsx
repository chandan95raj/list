import { HomeOutlined } from "@mui/icons-material";
import { Box, Typography, Stack, Button } from "@mui/material"
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <>
      <Stack sx={{height:"80vh"}} spacing={1} justifyContent='center' alignItems="center">
        <img src="/not-found.gif" width="300px" height='300px' alt="" />
        <Typography variant="h1" color="error" display={{xs:'none',md:'block'}}>
            Page Not Found | 404
        </Typography>
        <Typography variant="h6" color="error"  display={{xs:'block',md:'none'}}>
            Page Not Found | 404
        </Typography>
        <Box>
            <Link to="/" >
                <Button
                variant="outlined"
                color="secondary"
                sx={{py: 1, px: 2, bgcolor: 'white'}}
                >
                <Stack direction='row' spacing={1} justifyContent='center' alignItems='center'>
                    <HomeOutlined />
                    <Typography>
                        Go back to home
                    </Typography>                    
                </Stack>                
                </Button>
            </Link>
        </Box>
    </Stack>
    </>
  )
}

export default NotFound
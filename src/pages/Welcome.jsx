import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Button,
  Grid,
  AppBar,
  Toolbar,
  IconButton
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const Welcome = () => {
  const navigate = useNavigate();

  const handleBorrowCup = () => {
    navigate('/borrow-cup');
  };

  const handleCleanCup = () => {
    navigate('/clean-cup');
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1, height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Reusable Cups System
          </Typography>
          <IconButton 
            color="inherit" 
            onClick={handleLogout}
            aria-label="logout"
          >
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <Container 
        maxWidth="sm" 
        sx={{ 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          py: 4 
        }}
      >
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            width: '100%',
            borderRadius: 2,
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Welcome!
          </Typography>
          
          <Typography variant="body1" paragraph align="center" sx={{ mb: 4 }}>
            What would you like to do today?
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                onClick={handleBorrowCup}
                sx={{ py: 2 }}
              >
                Borrow a Cup
              </Button>
            </Grid>
            
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                size="large"
                onClick={handleCleanCup}
                sx={{ py: 2 }}
              >
                Clean a Cup
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Welcome;

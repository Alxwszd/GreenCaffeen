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

  const handleReturnCup = () => {
    navigate('/return-cup');
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Box sx={{
      flexGrow: 1,
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      <AppBar position="static" elevation={1}>
        <Toolbar sx={{ minHeight: { xs: '56px', sm: '64px' } }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: { xs: '1.1rem', sm: '1.25rem' }
            }}
          >
            Green Caffeen System
          </Typography>
          <IconButton
            color="inherit"
            onClick={handleLogout}
            aria-label="logout"
            edge="end"
            sx={{ ml: 1 }}
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
          py: { xs: 3, sm: 4 },
          px: { xs: 2, sm: 3 }
        }}
        className="content-container"
      >
        <Paper
          elevation={2}
          sx={{
            p: { xs: 3, sm: 4 },
            width: '100%',
            maxWidth: '450px',
            borderRadius: { xs: 1.5, sm: 2 },
            mx: 'auto'
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            align="center"
            sx={{ fontSize: { xs: '1.75rem', sm: '2.125rem' } }}
          >
            Welcome to Green Caffeen!
          </Typography>

          <Typography
            variant="body1"
            paragraph
            align="center"
            sx={{
              mb: { xs: 3, sm: 4 },
              fontSize: { xs: '1rem', sm: '1.1rem' }
            }}
          >
            What would you like to do today?
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                onClick={handleBorrowCup}
                sx={{
                  py: { xs: 1.5, sm: 2 },
                  borderRadius: 1.5,
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 500
                }}
                disableElevation
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
                onClick={handleReturnCup}
                sx={{
                  py: { xs: 1.5, sm: 2 },
                  borderRadius: 1.5,
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 500
                }}
                disableElevation
              >
                Return a Cup
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Welcome;

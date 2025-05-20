import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Container,
  Paper,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Alert,
  Collapse
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MapIcon from '@mui/icons-material/Map';
import MapView from '../components/MapView';

const locations = [
  'Fisher Library',
  'Sci-Tech Building',
  'Wentworth Building'
];

const ReturnCup = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [mapDialogOpen, setMapDialogOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowInstructions(true);
  };

  const handleComplete = () => {
    // In a real app, this would send data to a backend
    setFormSubmitted(true);

    // Show success message and then redirect after a delay
    setTimeout(() => {
      navigate('/welcome');
    }, 2000);
  };

  const handleBack = () => {
    navigate('/welcome');
  };

  const handleOpenMap = () => {
    setMapDialogOpen(true);
  };

  const handleCloseMap = () => {
    setMapDialogOpen(false);
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
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="back"
            sx={{ mr: 1 }}
            onClick={handleBack}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: { xs: '1.1rem', sm: '1.25rem' }
            }}
          >
            Return a Cup
          </Typography>
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
          {formSubmitted ? (
            <Box sx={{ textAlign: 'center', py: 2 }}>
              <Typography
                variant="h5"
                gutterBottom
                color="primary"
                sx={{ fontSize: { xs: '1.3rem', sm: '1.5rem' } }}
              >
                Success!
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}
              >
                Your cup has been returned successfully. Redirecting...
              </Typography>
            </Box>
          ) : (
            <>
              <Box
                component="form"
                onSubmit={handleSubmit}
                className="mobile-form-container"
              >
                <Typography
                  variant="h5"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '1.3rem', sm: '1.5rem' },
                    mb: 2
                  }}
                >
                  Return a Cup
                </Typography>

                <Grid container spacing={2}>
                  <Grid item xs={12} sx={{ mb: 1 }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="primary"
                      startIcon={<MapIcon />}
                      onClick={handleOpenMap}
                      sx={{
                        py: 1.2,
                        borderRadius: 1.5,
                        textTransform: 'none',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        mb: 1
                      }}
                    >
                      View Nearby Stations
                    </Button>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl fullWidth required sx={{ mb: 2 }}>
                      <InputLabel id="location-label">Return Location</InputLabel>
                      <Select
                        labelId="location-label"
                        id="location"
                        value={location}
                        label="Return Location"
                        onChange={(e) => setLocation(e.target.value)}
                        sx={{
                          borderRadius: 1.5,
                          minWidth: '100%'
                        }}
                        MenuProps={{
                          PaperProps: {
                            sx: {
                              maxHeight: '40vh',
                              width: 'auto',
                              minWidth: '200px'
                            }
                          }
                        }}
                      >
                        {locations.map((loc) => (
                          <MenuItem key={loc} value={loc}>{loc}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{
                        mt: 1,
                        py: { xs: 1.5, sm: 1.75 },
                        borderRadius: 1.5,
                        textTransform: 'none',
                        fontSize: '1rem',
                        fontWeight: 500
                      }}
                      disabled={!location}
                      disableElevation
                    >
                      Continue
                    </Button>
                  </Grid>
                </Grid>
              </Box>

              <Collapse in={showInstructions}>
                <Box sx={{ mt: 3, mb: 2 }}>
                  <Alert
                    severity="info"
                    sx={{
                      mb: 2,
                      '& .MuiAlert-message': {
                        fontSize: '0.95rem'
                      }
                    }}
                  >
                    Please place your cup in the return slot at the station.
                  </Alert>

                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      fontSize: '0.95rem'
                    }}
                  >
                    Once you have placed the cup in the return slot, click the button below to complete the return process.
                  </Typography>

                  <Button
                    fullWidth
                    variant="contained"
                    color="success"
                    size="large"
                    onClick={handleComplete}
                    sx={{
                      py: { xs: 1.5, sm: 1.75 },
                      borderRadius: 1.5,
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 500
                    }}
                    disableElevation
                  >
                    Complete Return
                  </Button>
                </Box>
              </Collapse>
            </>
          )}
        </Paper>
      </Container>

      {/* Map Dialog */}
      <MapView open={mapDialogOpen} onClose={handleCloseMap} />
    </Box>
  );
};

export default ReturnCup;

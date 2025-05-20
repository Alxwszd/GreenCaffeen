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
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  AppBar,
  Toolbar,
  IconButton,
  Grid
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const locations = [
  'Fisher Library',
  'Sci-Tech Building',
  'Wentworth Building'
];

const cleaningModes = [
  { value: 'wash', label: 'Wash Only' },
  { value: 'wash_sanitize', label: 'Wash + Sanitize' },
  { value: 'wash_sanitize_dry', label: 'Wash + Sanitize + Dry' }
];

const CleanCup = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [cleaningMode, setCleaningMode] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
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
            Clean a Cup
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
                Your cup cleaning request has been submitted. Redirecting...
              </Typography>
            </Box>
          ) : (
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
                Clean a Cup
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl fullWidth required sx={{ mb: 3 }}>
                    <InputLabel id="location-label">Cleaning Location</InputLabel>
                    <Select
                      labelId="location-label"
                      id="location"
                      value={location}
                      label="Cleaning Location"
                      onChange={(e) => setLocation(e.target.value)}
                      sx={{ borderRadius: 1.5 }}
                      MenuProps={{
                        PaperProps: {
                          sx: { maxHeight: '40vh' }
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
                  <FormControl component="fieldset" required sx={{ mb: 2, width: '100%' }}>
                    <FormLabel
                      component="legend"
                      sx={{ mb: 1, fontSize: '1rem' }}
                    >
                      Cleaning Mode
                    </FormLabel>
                    <RadioGroup
                      aria-label="cleaning-mode"
                      name="cleaning-mode"
                      value={cleaningMode}
                      onChange={(e) => setCleaningMode(e.target.value)}
                      sx={{ width: '100%' }}
                    >
                      {cleaningModes.map((mode) => (
                        <FormControlLabel
                          key={mode.value}
                          value={mode.value}
                          control={
                            <Radio
                              sx={{
                                '& .MuiSvgIcon-root': {
                                  fontSize: 20
                                }
                              }}
                            />
                          }
                          label={
                            <Typography sx={{ fontSize: '0.95rem' }}>
                              {mode.label}
                            </Typography>
                          }
                          sx={{
                            mb: 0.5,
                            ml: 0,
                            mr: 0
                          }}
                        />
                      ))}
                    </RadioGroup>
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
                    disabled={!location || !cleaningMode}
                    disableElevation
                  >
                    Start Cleaning
                  </Button>
                </Grid>
              </Grid>
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default CleanCup;

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
    <Box sx={{ flexGrow: 1, height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="back"
            sx={{ mr: 2 }}
            onClick={handleBack}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
          {formSubmitted ? (
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom color="primary">
                Success!
              </Typography>
              <Typography variant="body1">
                Your cup cleaning request has been submitted. Redirecting...
              </Typography>
            </Box>
          ) : (
            <Box component="form" onSubmit={handleSubmit}>
              <Typography variant="h5" component="h1" gutterBottom>
                Clean a Cup
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormControl fullWidth required>
                    <InputLabel id="location-label">Cleaning Location</InputLabel>
                    <Select
                      labelId="location-label"
                      id="location"
                      value={location}
                      label="Cleaning Location"
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      {locations.map((loc) => (
                        <MenuItem key={loc} value={loc}>{loc}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                
                <Grid item xs={12}>
                  <FormControl component="fieldset" required>
                    <FormLabel component="legend">Cleaning Mode</FormLabel>
                    <RadioGroup
                      aria-label="cleaning-mode"
                      name="cleaning-mode"
                      value={cleaningMode}
                      onChange={(e) => setCleaningMode(e.target.value)}
                    >
                      {cleaningModes.map((mode) => (
                        <FormControlLabel 
                          key={mode.value} 
                          value={mode.value} 
                          control={<Radio />} 
                          label={mode.label} 
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
                    sx={{ mt: 2, py: 1.5 }}
                    disabled={!location || !cleaningMode}
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

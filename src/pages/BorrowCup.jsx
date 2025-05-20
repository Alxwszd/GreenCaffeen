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
  FormControlLabel,
  Switch,
  AppBar,
  Toolbar,
  IconButton,
  Grid
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const locations = [
  'Fisher Library',
  'Sci-Tech Building',
  'Wentworth Building'
];

const BorrowCup = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [returnTime, setReturnTime] = useState(dayjs().add(1, 'hour'));
  const [reminder, setReminder] = useState(false);
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
            Borrow a Cup
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
                Your cup has been borrowed successfully. Redirecting...
              </Typography>
            </Box>
          ) : (
            <Box component="form" onSubmit={handleSubmit}>
              <Typography variant="h5" component="h1" gutterBottom>
                Borrow a Cup
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormControl fullWidth required>
                    <InputLabel id="location-label">Borrow Location</InputLabel>
                    <Select
                      labelId="location-label"
                      id="location"
                      value={location}
                      label="Borrow Location"
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      {locations.map((loc) => (
                        <MenuItem key={loc} value={loc}>{loc}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      label="Return Time"
                      value={returnTime}
                      onChange={(newValue) => setReturnTime(newValue)}
                      slotProps={{ textField: { fullWidth: true, required: true } }}
                      views={['year', 'month', 'day', 'hours']}
                      format="YYYY-MM-DD HH:00"
                      ampm={false}
                    />
                  </LocalizationProvider>
                </Grid>
                
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Switch 
                        checked={reminder} 
                        onChange={(e) => setReminder(e.target.checked)} 
                        color="primary"
                      />
                    }
                    label="Enable Return Reminder"
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 2, py: 1.5 }}
                    disabled={!location || !returnTime}
                  >
                    Confirm Borrowing
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

export default BorrowCup;

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
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MapIcon from '@mui/icons-material/Map';
import MapView from '../components/MapView';

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
  const [reminderDialogOpen, setReminderDialogOpen] = useState(false);
  const [mapDialogOpen, setMapDialogOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // If reminder is enabled, show the dialog first
    if (reminder) {
      setReminderDialogOpen(true);
    } else {
      completeSubmission();
    }
  };

  const completeSubmission = () => {
    // In a real app, this would send data to a backend
    setFormSubmitted(true);

    // Show success message and then redirect after a delay
    setTimeout(() => {
      navigate('/welcome');
    }, 2000);
  };

  const handleReminderDialogClose = () => {
    setReminderDialogOpen(false);
    completeSubmission();
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
                Your cup has been borrowed successfully. Redirecting...
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
                Borrow a Cup
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
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      label="Return Time"
                      value={returnTime}
                      onChange={(newValue) => setReturnTime(newValue)}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          required: true,
                          sx: { mb: 2 },
                          InputProps: {
                            sx: { borderRadius: 1.5 }
                          }
                        }
                      }}
                      views={['year', 'month', 'day', 'hours']}
                      format="YYYY-MM-DD HH:00"
                      ampm={false}
                    />
                  </LocalizationProvider>
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth required sx={{ mb: 2 }}>
                    <InputLabel id="location-label">Borrow Location</InputLabel>
                    <Select
                      labelId="location-label"
                      id="location"
                      value={location}
                      label="Borrow Location"
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
                  <FormControlLabel
                    control={
                      <Switch
                        checked={reminder}
                        onChange={(e) => setReminder(e.target.checked)}
                        color="primary"
                      />
                    }
                    label="Enable Return Reminder"
                    sx={{ mb: 1 }}
                  />
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
                    disabled={!location || !returnTime}
                    disableElevation
                  >
                    Confirm Borrowing
                  </Button>
                </Grid>
              </Grid>
            </Box>
          )}
        </Paper>
      </Container>

      {/* Reminder Dialog */}
      <Dialog
        open={reminderDialogOpen}
        onClose={handleReminderDialogClose}
        aria-labelledby="reminder-dialog-title"
        aria-describedby="reminder-dialog-description"
      >
        <DialogTitle id="reminder-dialog-title">
          Reminder Set Successfully
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="reminder-dialog-description">
            You will receive a reminder 1 hour before your scheduled return time.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleReminderDialogClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>

      {/* Map Dialog */}
      <MapView open={mapDialogOpen} onClose={handleCloseMap} />
    </Box>
  );
};

export default BorrowCup;

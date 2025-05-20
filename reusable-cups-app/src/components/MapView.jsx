import { useState } from 'react';
import { 
  Box, 
  Dialog, 
  DialogContent, 
  IconButton, 
  AppBar, 
  Toolbar, 
  Typography 
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import mapImage from '../map.png';

const MapView = ({ open, onClose }) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          backgroundColor: '#f5f5f5'
        }
      }}
    >
      <AppBar position="static" elevation={1} color="primary">
        <Toolbar sx={{ minHeight: { xs: '56px', sm: '64px' } }}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
            sx={{ mr: 2 }}
          >
            <CloseIcon />
          </IconButton>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1,
              fontSize: { xs: '1.1rem', sm: '1.25rem' }
            }}
          >
            Nearby Stations
          </Typography>
        </Toolbar>
      </AppBar>
      <DialogContent sx={{ p: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Box 
          component="img" 
          src={mapImage} 
          alt="Map of nearby stations"
          sx={{ 
            width: '100%',
            height: 'auto',
            maxWidth: '100%',
            objectFit: 'contain'
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default MapView;

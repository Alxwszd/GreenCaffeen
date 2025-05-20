import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Alert
} from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials as specified
    if (username === 'jzha0012' && password === '123456') {
      // Successful login
      navigate('/welcome');
    } else {
      // Failed login
      setError('Invalid username or password');
    }
  };

  return (
    <Container maxWidth="sm" sx={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      px: { xs: 2, sm: 3 }
    }}>
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, sm: 4 },
          width: '100%',
          maxWidth: '450px',
          borderRadius: { xs: 1, sm: 2 },
        }}
      >
        <Box sx={{ mb: 3, textAlign: 'center' }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            align="center"
            sx={{ fontSize: { xs: '1.75rem', sm: '2.125rem' } }}
          >
            Green Caffeen System
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            align="center"
            sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
          >
            Login
          </Typography>
        </Box>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{
            mt: 2,
            '& .MuiTextField-root': { mb: 2 }
          }}
          className="mobile-form-container"
        >
          <TextField
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            InputProps={{
              sx: { borderRadius: 1.5 }
            }}
          />

          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              sx: { borderRadius: 1.5 }
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              py: { xs: 1.5, sm: 1.75 },
              borderRadius: 1.5,
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 500
            }}
            disableElevation
          >
            Sign In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import './App.css'

// Import pages
import Login from './pages/Login.jsx'
import Welcome from './pages/Welcome.jsx'
import BorrowCup from './pages/BorrowCup.jsx'
import ReturnCup from './pages/ReturnCup.jsx'

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
    success: {
      main: '#2e7d32',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/borrow-cup" element={<BorrowCup />} />
            <Route path="/return-cup" element={<ReturnCup />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default App

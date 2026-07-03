import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Features from './pages/Features';
import D2C from './pages/D2C';
import Hospitality from './pages/Hospitality';
import HealthCare from './pages/HealthCare';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/industries/d2c" element={<D2C />} />
            <Route path="/industries/hospitality" element={<Hospitality />} />
            <Route path="/industries/health-care" element={<HealthCare />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;

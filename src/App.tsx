import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Features from './pages/Features';
import UnifiedInbox from './pages/features/UnifiedInbox';
import AiAgents from './pages/features/AiAgents';
import Campaigns from './pages/features/Campaigns';
import CRM from './pages/features/CRM';
import SocialMediaPost from './pages/features/SocialMediaPost';
import AdsManagement from './pages/features/AdsManagement';
import SmartScheduling from './pages/features/SmartScheduling';
import Integrations from './pages/features/Integrations';
import D2C from './pages/D2C';
import Hospitality from './pages/Hospitality';
import Health from './pages/industries/HealthCare';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
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
            <Route path="/features/unified-inbox" element={<UnifiedInbox />} />
            <Route path="/features/ai-agents" element={<AiAgents />} />
            <Route path="/features/campaigns" element={<Campaigns />} />
            <Route path="/features/crm" element={<CRM />} />
            <Route path="/features/social-media-post" element={<SocialMediaPost />} />
            <Route path="/features/ads-management" element={<AdsManagement />} />
            <Route path="/features/smart-scheduling" element={<SmartScheduling />} />
            <Route path="/features/integrations" element={<Integrations />} />
            <Route path="/industries/d2c" element={<D2C />} />
            <Route path="/industries/hospitality" element={<Hospitality />} />
            <Route path="/industries/health" element={<Health />} />
            <Route path="/industries/health-care" element={<Health />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;

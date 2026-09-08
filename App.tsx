import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import Home from './pages/public/Home';
import Destinations from './pages/public/Destinations';
import DestinationDetail from './pages/public/DestinationDetail';
import ExperienceDetail from './pages/public/ExperienceDetail';
import Events from './pages/public/Events';
import EventDetail from './pages/public/EventDetail';
import Services from './pages/public/Services';
import ServiceDetail from './pages/public/ServiceDetail';
import About from './pages/public/About';
import Portfolio from './pages/public/Portfolio';
import PortfolioDetail from './pages/public/PortfolioDetail';
import Community from './pages/public/Community';
import CommunityDetail from './pages/public/CommunityDetail';
import Contact from './pages/public/Contact';
import Booking from './pages/public/Booking';
import Privacy from './pages/public/Privacy';
import Terms from './pages/public/Terms';
import NotFound from './pages/public/NotFound';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="destinations/:slug" element={<DestinationDetail />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="experiences" element={<Navigate replace to="/events" />} />
          <Route path="experiences/:slug" element={<ExperienceDetail />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:slug" element={<EventDetail />} />
          <Route path="community" element={<Community />} /> 
          <Route path="community/:slug" element={<CommunityDetail />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:slug" element={<PortfolioDetail />} />
          <Route path="booking" element={<Booking />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
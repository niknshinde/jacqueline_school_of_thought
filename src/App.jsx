import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookPage from './pages/BookPage';
import ExperiencesOverview from './components/ExperiencesOverview';
import LakesidePage from './pages/LakesidePage';
import HilltopPage from './pages/HilltopPage';
import SafariPage from './pages/SafariPage';
import CampsitePage from './pages/CampsitePage';
import AdventureSection from './components/AdventureSection';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/experiences" element={<ExperiencesOverview />} />
        <Route path="/lakeside" element={<LakesidePage />} />
        <Route path="/hilltop" element={<HilltopPage />} />
        <Route path="/safari" element={<SafariPage />} />
        <Route path="/campsite" element={<CampsitePage />} />
        <Route path="/adventures" element={<AdventureSection/>} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
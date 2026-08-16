
import { Routes, Route, useLocation } from 'react-router-dom';
import './css/App.css';
import styles from './css/App.module.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import { CursorProvider } from './cursor/CursorContext.jsx';
import CursorLayer from './cursor/CursorLayer.jsx';
import CursorSelector from './cursor/CursorSelector.jsx';
import { LanguageProvider } from './i18n/LanguageContext.jsx';
import { useLanguage } from './i18n/languageStore.js';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Certificates from './pages/Certificates.jsx';
import NotFound from './pages/NotFound.jsx';
import SelfServiceProductChange from './pages/SelfServiceProductChange.jsx';
import Tillganglighet from './pages/Tillganglighet.jsx';
import UXWayOfWorking from './pages/UXWayOfWorking.jsx';
import ClimateAPI from './pages/ClimateAPI.jsx';
import PasswordValidator from './pages/PasswordValidator.jsx';
import IdleGame from './pages/IdleGame.jsx';
import PartyWithMe from './pages/PartyWithMe.jsx';
import IdleGameAgentic from './pages/IdleGameAgentic.jsx';
import VaultSync from './pages/VaultSync.jsx';
import HomelabDashboard from './pages/HomelabDashboard.jsx';

function SkipLink() {
  const { t } = useLanguage();
  return <a href="#main" className="skip-link">{t('skip.toContent')}</a>;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <main id="main" key={location.pathname} className={styles.pageTransition}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/projects/self-service-product-change" element={<SelfServiceProductChange />} />
        <Route path="/projects/tillganglighet" element={<Tillganglighet />} />
        <Route path="/projects/ux-way-of-working" element={<UXWayOfWorking />} />
        <Route path="/projects/climate-api" element={<ClimateAPI />} />
        <Route path="/projects/password-validator" element={<PasswordValidator />} />
        <Route path="/projects/idle-game" element={<IdleGame />} />
        <Route path="/projects/party-with-me" element={<PartyWithMe />} />
        <Route path="/projects/idle-game-agentic" element={<IdleGameAgentic />} />
        <Route path="/projects/vault-sync" element={<VaultSync />} />
        <Route path="/projects/homelab-dashboard" element={<HomelabDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

function App() {
  return (
    <LanguageProvider>
      <CursorProvider>
        <ScrollToTop />
        <SkipLink />
        <Header />
        <AnimatedRoutes />
        <Footer />
        <CursorLayer />
        <CursorSelector />
      </CursorProvider>
    </LanguageProvider>
  );
}

export default App;

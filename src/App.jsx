
import { lazy, Suspense } from 'react';
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

const About = lazy(() => import('./pages/About.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Certificates = lazy(() => import('./pages/Certificates.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));
const SelfServiceProductChange = lazy(() => import('./pages/SelfServiceProductChange.jsx'));
const Tillganglighet = lazy(() => import('./pages/Tillganglighet.jsx'));
const UXWayOfWorking = lazy(() => import('./pages/UXWayOfWorking.jsx'));
const ClimateAPI = lazy(() => import('./pages/ClimateAPI.jsx'));
const PasswordValidator = lazy(() => import('./pages/PasswordValidator.jsx'));
const IdleGame = lazy(() => import('./pages/IdleGame.jsx'));
const PartyWithMe = lazy(() => import('./pages/PartyWithMe.jsx'));
const IdleGameAgentic = lazy(() => import('./pages/IdleGameAgentic.jsx'));
const VaultSync = lazy(() => import('./pages/VaultSync.jsx'));
const HomelabDashboard = lazy(() => import('./pages/HomelabDashboard.jsx'));
const LocalizationQA = lazy(() => import('./pages/LocalizationQA.jsx'));

function SkipLink() {
  const { t } = useLanguage();
  return <a href="#main" className="skip-link">{t('skip.toContent')}</a>;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <main id="main" key={location.pathname} className={styles.pageTransition}>
      <Suspense fallback={null}>
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
          <Route path="/projects/localization-qa" element={<LocalizationQA />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
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

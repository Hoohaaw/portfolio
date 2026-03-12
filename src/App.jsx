
import { Routes, Route, useLocation } from 'react-router-dom';
import './css/App.css';
import styles from './css/App.module.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ScrollToTop from './ScrollToTop.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import SelfServiceProductChange from './pages/SelfServiceProductChange.jsx';
import Tillganglighet from './pages/Tillganglighet.jsx';
import UXWayOfWorking from './pages/UXWayOfWorking.jsx';
import ClimateAPI from './pages/ClimateAPI.jsx';
import PasswordValidator from './pages/PasswordValidator.jsx';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <main key={location.pathname} className={styles.pageTransition}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/self-service-product-change" element={<SelfServiceProductChange />} />
        <Route path="/projects/tillganglighet" element={<Tillganglighet />} />
        <Route path="/projects/ux-way-of-working" element={<UXWayOfWorking />} />
        <Route path="/projects/climate-api" element={<ClimateAPI />} />
        <Route path="/projects/password-validator" element={<PasswordValidator />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <AnimatedRoutes />
      <Footer />
    </>
  );
}

export default App;

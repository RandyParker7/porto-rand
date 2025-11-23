
import { useState, useEffect } from 'react';
import './App.css'
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from "./components/Navbar";
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Fitzone } from './components/detail-projects/fitzone';
import { Wensteinstore } from './components/detail-projects/wensteinstore';
import { Dompt } from './components/detail-projects/dompt';
import Particles from './components/Particles';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import "./index.css";


function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <ScrollToSection />
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>

        <div className="fixed top-0 left-0 w-full h-full z-0">
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        <Routes>

          {/* Halaman utama */}
          <Route
            path="/"
            element={
              <div className="relative z-10">
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Home/>
                <About/>
                <Projects/>
                <Contact/>
              </div>
            }
          />

          {/* Halaman FitZone */}
          <Route path="/fitzone" element={<Fitzone />} />
          <Route path="/wensteinstore" element={<Wensteinstore />} />
          <Route path="/dompt" element={<Dompt />} />

        </Routes>

      </div>
    </Router>
  );
};

export default App

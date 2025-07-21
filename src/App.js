import React, { useState, useEffect, useCallback } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronUp, FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import MyStory from './components/MyStory';
import Services from './components/Services';
import Footer from './components/Footer';

const lightTheme = {
  primary: '#6366f1',
  secondary: '#8b5cf6',
  accent: '#f59e0b',
  background: '#ffffff',
  surface: '#f8fafc',
  text: '#1e293b',
  textSecondary: '#64748b',
  border: '#e2e8f0',
  shadow: 'rgba(0, 0, 0, 0.1)',
  glass: 'rgba(255, 255, 255, 0.8)',
  glassBorder: 'rgba(255, 255, 255, 0.2)',
};

const darkTheme = {
  primary: '#6366f1',
  secondary: '#8b5cf6',
  accent: '#f59e0b',
  background: '#0a0a0a',
  surface: '#1a1a1a',
  text: '#ffffff',
  textSecondary: '#94a3b8',
  border: '#374151',
  shadow: 'rgba(0, 0, 0, 0.3)',
  glass: 'rgba(10, 10, 10, 0.8)',
  glassBorder: 'rgba(99, 102, 241, 0.2)',
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 100px;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    overflow-x: hidden;
    transition: all 0.3s ease;
  }

  code {
    font-family: 'JetBrains Mono', source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ::selection {
    background: rgba(99, 102, 241, 0.3);
    color: ${props => props.theme.text};
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.primary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.secondary};
  }

  /* Custom cursor */
  .custom-cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    background: ${props => props.theme.primary};
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
    transition: transform 0.1s ease;
  }

  .custom-cursor.hover {
    transform: scale(2);
    background: ${props => props.theme.accent};
  }

  /* Loading animation */
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .gradient-text {
    background: linear-gradient(-45deg, #6366f1, #8b5cf6, #f59e0b, #f59e0b);
    background-size: 400% 400%;
    animation: gradient 3s ease infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Glitch effect */
  @keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
    100% { transform: translate(0); }
  }

  .glitch {
    animation: glitch 0.3s ease-in-out infinite;
  }

  /* Floating animation */
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  .float {
    animation: float 3s ease-in-out infinite;
  }

  /* Pulse animation */
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  .pulse {
    animation: pulse 2s ease-in-out infinite;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  transition: all 0.3s ease;
`;

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${props => props.progress}%;
  height: 3px;
  background: linear-gradient(90deg, ${props => props.theme.primary}, ${props => props.theme.secondary}, ${props => props.theme.accent});
  z-index: 1000;
  transition: width 0.3s ease;
  box-shadow: 0 0 10px ${props => props.theme.primary};
`;

const Navigation = styled.nav`
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10000;
  display: flex;
  gap: 20px;
  padding: 15px 30px;
  background: ${props => props.theme.glass};
  backdrop-filter: blur(20px);
  border: 1px solid ${props => props.theme.glassBorder};
  border-radius: 50px;
  box-shadow: 0 8px 32px ${props => props.theme.shadow};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    box-shadow: 0 12px 40px ${props => props.theme.shadow};
    transform: translateX(-50%) translateY(-2px);
  }
`;

const NavLink = styled.a`
  color: ${props => props.theme.text};
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 25px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: rgba(99, 102, 241, 0.2);
    color: ${props => props.theme.primary};
    transform: translateY(-2px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &.active {
    background: rgba(99, 102, 241, 0.2);
    color: ${props => props.theme.primary};
  }
`;

const ControlPanel = styled.div`
  position: fixed;
  top: 30px;
  right: 20px;
  z-index: 10001;
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 768px) {
    top: 30px;
    right: 80px;
  }
`;

const ControlButton = styled.button`
  background: ${props => props.theme.glass};
  border: 1px solid ${props => props.theme.glassBorder};
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.text};
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);

  &:hover {
    background: rgba(99, 102, 241, 0.2);
    color: ${props => props.theme.primary};
    transform: scale(1.1);
    box-shadow: 0 5px 15px ${props => props.theme.shadow};
  }

  &.active {
    background: rgba(99, 102, 241, 0.3);
    color: ${props => props.theme.primary};
  }
`;

const MobileMenuButton = styled.button`
  position: fixed;
  top: 30px;
  right: 20px;
  z-index: 10001;
  background: ${props => props.theme.glass};
  border: 1px solid ${props => props.theme.glassBorder};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.text};
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);

  &:hover {
    background: rgba(99, 102, 241, 0.2);
    color: ${props => props.theme.primary};
    transform: scale(1.1);
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background: ${props => props.theme.glass};
  backdrop-filter: blur(20px);
  border-left: 1px solid ${props => props.theme.glassBorder};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 80px 20px 20px;
  gap: 20px;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLink = styled.a`
  color: ${props => props.theme.text};
  text-decoration: none;
  font-weight: 500;
  padding: 15px 20px;
  border-radius: 10px;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    background: rgba(99, 102, 241, 0.2);
    border-color: rgba(99, 102, 241, 0.3);
    color: ${props => props.theme.primary};
    transform: translateX(5px);
  }
`;

const ScrollToTop = styled(motion.button)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 55px;
  height: 55px;
  background: ${props => props.theme.glass};
  border: 1px solid ${props => props.theme.glassBorder};
  border-radius: 50%;
  color: ${props => props.theme.primary};
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);
  z-index: 999;

  &:hover {
    background: rgba(99, 102, 241, 0.3);
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 25px ${props => props.theme.shadow};
  }
`;

const LoadingScreen = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;

const LoadingText = styled.div`
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(-45deg, #6366f1, #8b5cf6, #f59e0b, #f59e0b);
  background-size: 400% 400%;
  animation: gradient 2s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const navItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'mystory', label: 'My Story', path: '/my-story' },
  { id: 'services', label: 'Services', path: '/services' },
  { id: 'contact', label: 'Contact', path: '/contact' }
];

const NavigationWithLocation = ({ theme, currentTheme, activeSection, setActiveSection }) => {
  const location = useLocation();
  
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setActiveSection('home');
    } else if (path === '/my-story') {
      setActiveSection('mystory');
    } else if (path === '/services') {
      setActiveSection('services');
    } else if (path === '/contact') {
      setActiveSection('contact');
    }
  }, [location.pathname, setActiveSection]);

  return (
    <Navigation theme={currentTheme}>
      {navItems.map(item => (
        <NavLink 
          key={item.id} 
          as={Link}
          to={item.path}
          className={activeSection === item.id ? 'active' : ''}
          theme={currentTheme}
        >
          {item.label}
        </NavLink>
      ))}
    </Navigation>
  );
};

const MobileMenuWithLocation = ({ theme, currentTheme, activeSection, setActiveSection, mobileMenuOpen, setMobileMenuOpen }) => {
  const location = useLocation();
  
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setActiveSection('home');
    } else if (path === '/my-story') {
      setActiveSection('mystory');
    } else if (path === '/services') {
      setActiveSection('services');
    } else if (path === '/contact') {
      setActiveSection('contact');
    }
  }, [location.pathname, setActiveSection]);

  return (
    <AnimatePresence>
      {mobileMenuOpen && (
        <MobileMenu
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          exit={{ x: 300 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          theme={currentTheme}
        >
          {navItems.map(item => (
            <MobileNavLink 
              key={item.id} 
              as={Link}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={activeSection === item.id ? 'active' : ''}
              theme={currentTheme}
            >
              {item.label}
            </MobileNavLink>
          ))}
        </MobileMenu>
      )}
    </AnimatePresence>
  );
};

const AppContent = ({ theme, currentTheme, activeSection, setActiveSection, mobileMenuOpen, setMobileMenuOpen, ...props }) => {
  return (
    <AppContainer>
      {/* Custom Cursor */}
      <div 
        className="custom-cursor"
        style={{
          left: props.cursorPosition.x - 10,
          top: props.cursorPosition.y - 10,
        }}
      />
      
      <ProgressBar progress={props.scrollProgress} theme={currentTheme} />
      
      <NavigationWithLocation 
        theme={theme} 
        currentTheme={currentTheme} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />

      <ControlPanel>
        <ControlButton 
          onClick={props.toggleTheme}
          className={theme === 'light' ? 'active' : ''}
          theme={currentTheme}
        >
          {theme === 'dark' ? <FiSun /> : <FiMoon />}
        </ControlButton>
      </ControlPanel>

      <MobileMenuButton 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        theme={currentTheme}
      >
        {mobileMenuOpen ? <FiX /> : <FiMenu />}
      </MobileMenuButton>

      <MobileMenuWithLocation 
        theme={theme} 
        currentTheme={currentTheme} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <ParticlesBackground />
      
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <section id="home">
                <Hero theme={currentTheme} />
              </section>
              <section id="about">
                <About theme={currentTheme} />
              </section>
              <section id="skills">
                <Skills theme={currentTheme} />
              </section>
              <section id="experience">
                <Experience theme={currentTheme} />
              </section>
              <section id="projects">
                <Projects theme={currentTheme} />
              </section>
            </>
          } />
          <Route path="/my-story" element={<MyStory theme={currentTheme} />} />
          <Route path="/services" element={<Services theme={currentTheme} />} />
          <Route path="/contact" element={<Contact theme={currentTheme} />} />
        </Routes>
      </main>

      <Footer theme={currentTheme} />

      <AnimatePresence>
        {props.showScrollToTop && (
          <ScrollToTop
            onClick={props.scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            theme={currentTheme}
          >
            <FiChevronUp />
          </ScrollToTop>
        )}
      </AnimatePresence>
    </AppContainer>
  );
};

const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  useEffect(() => {
    // Add error handling for debugging
    const handleError = (error) => {
      console.error('Global error caught:', error);
    };

    const handleUnhandledRejection = (event) => {
      console.error('Unhandled promise rejection:', event.reason);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      try {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
        setShowScrollToTop(window.scrollY > 500);
      } catch (error) {
        console.error('Error in scroll handler:', error);
      }
    };

    const handleMouseMove = (e) => {
      try {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      } catch (error) {
        console.error('Error in mouse move handler:', error);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error scrolling to top:', error);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }, []);

  if (isLoading) {
    return (
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <LoadingScreen
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LoadingText>Loading Portfolio...</LoadingText>
        </LoadingScreen>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Router>
        <AppContent 
          theme={theme}
          currentTheme={currentTheme}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          scrollProgress={scrollProgress}
          showScrollToTop={showScrollToTop}
          scrollToTop={scrollToTop}
          toggleTheme={toggleTheme}
          cursorPosition={cursorPosition}
        />
      </Router>
    </ThemeProvider>
  );
};

export default App; 
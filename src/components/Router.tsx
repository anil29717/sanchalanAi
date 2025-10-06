import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { FeaturesPage } from '../pages/FeaturesPage';
import { IndustriesPage } from '../pages/IndustriesPage';
import { IMCPage } from '../pages/IMCPage';
import { ContactPage } from '../pages/ContactPage';

// Custom navigation function
export function navigateTo(path: string) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function Router() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Set page title based on route
  useEffect(() => {
    const titles = {
      '/': 'Sanchalan.AI - Steering the Future of Trust',
      '/about': 'About - Sanchalan.AI',
      '/features': 'Features - Sanchalan.AI',
      '/industries': 'Industries - Sanchalan.AI',
      '/imc-2025': 'IMC 2025 - Sanchalan.AI',
      '/contact': 'Contact - Sanchalan.AI'
    };
    
    document.title = titles[currentPath as keyof typeof titles] || titles['/'];
  }, [currentPath]);

  const pageVariants = {
    initial: { 
      opacity: 0,
      x: 50,
      scale: 0.95
    },
    animate: { 
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: { 
      opacity: 0,
      x: -50,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const renderPage = () => {
    const PageComponent = (() => {
      switch (currentPath) {
        case '/':
          return HomePage;
        case '/about':
          return AboutPage;
        case '/features':
          return FeaturesPage;
        case '/industries':
          return IndustriesPage;
        case '/imc-2025':
          return IMCPage;
        case '/contact':
          return ContactPage;
        default:
          return HomePage;
      }
    })();

    return (
      <motion.div
        key={currentPath}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full"
      >
        <PageComponent />
      </motion.div>
    );
  };

  return renderPage();
}
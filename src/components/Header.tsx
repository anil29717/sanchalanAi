import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { navigateTo } from "./Router";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigateToPage = (path: string) => {
    navigateTo(path);
    setIsMenuOpen(false);
  };

  // Listen for route changes
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    // Also listen for programmatic navigation
    const originalPushState = window.history.pushState;
    window.history.pushState = function(...args) {
      originalPushState.apply(window.history, args);
      setCurrentPath(window.location.pathname);
    };

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.history.pushState = originalPushState;
    };
  }, []);

  const isActivePage = (path: string) => {
    return currentPath === path;
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <motion.button 
              onClick={() => navigateToPage('/')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-8 h-8 bg-gradient-to-br from-red-600 to-gray-800 rounded-lg flex items-center justify-center"
              >
                <span className="text-white font-bold text-sm">S</span>
              </motion.div>
              <span className="text-xl font-semibold text-gray-900">
                Sanchalan<span className="text-red-600">.AI</span>
              </span>
            </motion.button>
          </div>

          {/* Desktop Navigation */}
          <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            {[
              { path: '/about', label: 'About' },
              { path: '/features', label: 'Features' },
              { path: '/industries', label: 'Industries' },
              { path: '/imc-2025', label: 'IMC 2025' },
              { path: '/contact', label: 'Contact' }
            ].map((item, index) => (
              <motion.button
                key={item.path}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                onClick={() => navigateToPage(item.path)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`transition-colors relative ${
                  isActivePage(item.path) 
                    ? 'text-red-600 font-medium' 
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                {item.label}
                {isActivePage(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.nav>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="hidden md:flex"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => navigateToPage('/contact')}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Get Started
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:hidden"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="px-2 pt-2 pb-3 space-y-1"
            >
              {[
                { path: '/about', label: 'About' },
                { path: '/features', label: 'Features' },
                { path: '/industries', label: 'Industries' },
                { path: '/imc-2025', label: 'IMC 2025' },
                { path: '/contact', label: 'Contact' }
              ].map((item, index) => (
                <motion.button
                  key={item.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  onClick={() => navigateToPage(item.path)}
                  whileHover={{ x: 5, backgroundColor: 'rgba(239, 68, 68, 0.05)' }}
                  whileTap={{ scale: 0.95 }}
                  className="block px-3 py-2 text-gray-700 hover:text-red-600 w-full text-left rounded-lg transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.35 }}
                className="px-3 py-2"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    onClick={() => navigateToPage('/contact')}
                    className="bg-red-600 hover:bg-red-700 text-white w-full"
                  >
                    Get Started
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top after a slight delay, to ensure it's applied on route change
    const scrollTimeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0); 

    return () => {
      clearTimeout(scrollTimeout); // Cleanup timeout when component unmounts
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
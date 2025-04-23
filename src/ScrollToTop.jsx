import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Wait for content to render before scrolling
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null; // This component doesn't render anything
}

export default ScrollToTop;

import { useEffect, useState } from 'react';

const ReadingProgressBar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollPos = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setWidth((currentScrollPos / scrollHeight) * 100);
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-gray-200">
      <div 
        className="h-full bg-news-red transition-all duration-100 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default ReadingProgressBar;

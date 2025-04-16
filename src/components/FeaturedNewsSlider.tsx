
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NewsItem } from './NewsCard';
import { Link } from 'react-router-dom';

interface FeaturedNewsSliderProps {
  news: NewsItem[];
}

const FeaturedNewsSlider = ({ news }: FeaturedNewsSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = news.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slidesCount - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slidesCount - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-md">
      {news.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="relative w-full h-full">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10"></div>
            <div className="absolute left-0 bottom-0 p-6 md:p-10 text-white max-w-3xl">
              <span className="inline-block px-3 py-1 bg-news-red text-white text-xs font-bold rounded mb-3 uppercase tracking-wider">
                {item.category}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
                <Link to={`/article/${item.slug}`} className="hover:underline">
                  {item.title}
                </Link>
              </h2>
              <p className="text-gray-200 text-base md:text-lg mb-4 line-clamp-3">{item.excerpt}</p>
              <div className="flex items-center text-sm text-white/70">
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute z-10 inset-0 flex items-center justify-between px-4">
        <Button 
          onClick={prevSlide} 
          variant="ghost" 
          size="icon" 
          className="text-white bg-black/30 hover:bg-black/50 rounded-full h-10 w-10"
        >
          <ChevronLeft size={24} />
        </Button>
        <Button 
          onClick={nextSlide} 
          variant="ghost" 
          size="icon" 
          className="text-white bg-black/30 hover:bg-black/50 rounded-full h-10 w-10"
        >
          <ChevronRight size={24} />
        </Button>
      </div>

      {/* Dots Navigation */}
      <div className="absolute z-10 bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {news.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedNewsSlider;

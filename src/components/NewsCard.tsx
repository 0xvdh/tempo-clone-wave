
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  slug: string;
}

interface NewsCardProps {
  news: NewsItem;
  variant?: 'default' | 'featured' | 'compact' | 'horizontal';
  className?: string;
}

const NewsCard = ({ news, variant = 'default', className }: NewsCardProps) => {
  if (variant === 'featured') {
    return (
      <div className={cn("group relative h-full", className)}>
        <div className="relative w-full h-96 overflow-hidden rounded-md">
          <img 
            src={news.image} 
            alt={news.title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute left-0 bottom-0 p-6 text-white">
            <span className="inline-block px-3 py-1 bg-news-red text-white text-xs font-bold rounded mb-3 uppercase">
              {news.category}
            </span>
            <h2 className="text-3xl font-bold mb-3 font-display">
              <Link to={`/article/${news.slug}`} className="hover:underline">
                {news.title}
              </Link>
            </h2>
            <p className="text-white/80 mb-4">{news.excerpt}</p>
            <div className="flex items-center text-sm text-white/70">
              <Calendar size={14} className="mr-1" />
              <span>{news.date}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={cn("group flex gap-3", className)}>
        <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
          <img 
            src={news.image} 
            alt={news.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="font-bold text-sm leading-tight mb-1">
            <Link to={`/article/${news.slug}`} className="hover:text-news-blue">
              {news.title}
            </Link>
          </h3>
          <span className="text-xs text-gray-500">{news.date}</span>
        </div>
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={cn("group flex md:flex-row flex-col gap-4 md:gap-8", className)}>
        <div className="md:w-2/5 w-full rounded-md overflow-hidden">
          <img 
            src={news.image} 
            alt={news.title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="md:w-3/5 w-full flex flex-col justify-center">
          <span className="inline-block px-2 py-1 bg-news-blue/10 text-news-blue text-xs font-medium rounded mb-2">
            {news.category}
          </span>
          <h3 className="font-bold text-xl md:text-2xl mb-2 font-display">
            <Link to={`/article/${news.slug}`} className="hover:text-news-blue">
              {news.title}
            </Link>
          </h3>
          <p className="text-gray-600 text-sm mb-3">{news.excerpt}</p>
          <div className="flex items-center text-xs text-gray-500">
            <Calendar size={14} className="mr-1" />
            <span>{news.date}</span>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={cn("group overflow-hidden", className)}>
      <div className="relative w-full h-48 rounded-md overflow-hidden mb-3">
        <img 
          src={news.image} 
          alt={news.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-2 left-2 inline-block px-2 py-1 bg-news-blue text-white text-xs font-medium rounded">
          {news.category}
        </span>
      </div>
      <h3 className="font-bold text-lg mb-2">
        <Link to={`/article/${news.slug}`} className="hover:text-news-blue">
          {news.title}
        </Link>
      </h3>
      <p className="text-gray-600 text-sm mb-2 line-clamp-2">{news.excerpt}</p>
      <div className="flex items-center text-xs text-gray-500">
        <Calendar size={14} className="mr-1" />
        <span>{news.date}</span>
      </div>
    </div>
  );
};

export default NewsCard;

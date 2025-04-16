
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import NewsCard, { NewsItem } from './NewsCard';

interface CategorySectionProps {
  title: string;
  news: NewsItem[];
  categorySlug?: string;
  layout?: 'grid' | 'list';
}

const CategorySection = ({ 
  title, 
  news, 
  categorySlug, 
  layout = 'grid' 
}: CategorySectionProps) => {
  if (layout === 'list') {
    return (
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold font-display">{title}</h2>
          {categorySlug && (
            <Link 
              to={`/category/${categorySlug}`} 
              className="flex items-center text-sm font-medium text-news-blue hover:underline"
            >
              View All <ChevronRight size={16} />
            </Link>
          )}
        </div>
        <div className="space-y-6">
          {news.map((item) => (
            <NewsCard key={item.id} news={item} variant="horizontal" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold font-display">{title}</h2>
        {categorySlug && (
          <Link 
            to={`/category/${categorySlug}`} 
            className="flex items-center text-sm font-medium text-news-blue hover:underline"
          >
            View All <ChevronRight size={16} />
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {news.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;

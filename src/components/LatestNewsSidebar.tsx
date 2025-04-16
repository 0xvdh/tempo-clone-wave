
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import NewsCard, { NewsItem } from './NewsCard';

interface LatestNewsSidebarProps {
  news: NewsItem[];
}

const LatestNewsSidebar = ({ news }: LatestNewsSidebarProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold font-display">Latest News</h2>
        <Link 
          to="/latest" 
          className="flex items-center text-sm font-medium text-news-blue hover:underline"
        >
          View All <ChevronRight size={16} />
        </Link>
      </div>
      <div className="space-y-5">
        {news.map((item) => (
          <NewsCard key={item.id} news={item} variant="compact" />
        ))}
      </div>
    </div>
  );
};

export default LatestNewsSidebar;

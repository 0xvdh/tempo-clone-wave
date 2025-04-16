
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsCard, { NewsItem } from '@/components/NewsCard';
import LatestNewsSidebar from '@/components/LatestNewsSidebar';
import { 
  politicsNews, 
  businessNews, 
  technologyNews,
  sportsNews,
  entertainmentNews,
  healthNews,
  latestNews,
} from '@/data/mockNews';

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const [categoryTitle, setCategoryTitle] = useState('');
  const [categoryNews, setCategoryNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryData = () => {
      setIsLoading(true);
      let title = '';
      let news: NewsItem[] = [];

      // Map slug to category data
      switch (slug) {
        case 'politics':
          title = 'Politics';
          news = politicsNews;
          break;
        case 'business':
          title = 'Business';
          news = businessNews;
          break;
        case 'tech':
          title = 'Technology';
          news = technologyNews;
          break;
        case 'sports':
          title = 'Sports';
          news = sportsNews;
          break;
        case 'entertainment':
          title = 'Entertainment';
          news = entertainmentNews;
          break;
        case 'health':
          title = 'Health';
          news = healthNews;
          break;
        default:
          title = 'Category';
          news = [];
      }

      setCategoryTitle(title);
      setCategoryNews(news);

      // Simulate loading delay
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    fetchCategoryData();
    window.scrollTo(0, 0);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-news-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-news-blue font-medium">Loading category...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Category Header */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4 font-display">{categoryTitle}</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The latest news and updates from the world of {categoryTitle.toLowerCase()}.
              Stay informed with our comprehensive coverage.
            </p>
          </div>
        </section>
        
        {/* Category Content */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Main Content */}
              <div className="lg:w-8/12">
                {categoryNews.length === 0 ? (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-bold mb-2">No Articles Found</h3>
                    <p className="text-gray-600">There are currently no articles in this category.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categoryNews.map((item) => (
                      <NewsCard key={item.id} news={item} />
                    ))}
                  </div>
                )}

                {/* Pagination (Static for demo) */}
                {categoryNews.length > 0 && (
                  <div className="flex justify-center mt-12">
                    <nav className="flex items-center space-x-1">
                      <button className="px-3 py-2 rounded-md bg-gray-100 text-gray-600">
                        Previous
                      </button>
                      <button className="px-3 py-2 rounded-md bg-news-blue text-white">
                        1
                      </button>
                      <button className="px-3 py-2 rounded-md bg-gray-100 text-gray-600">
                        2
                      </button>
                      <button className="px-3 py-2 rounded-md bg-gray-100 text-gray-600">
                        3
                      </button>
                      <span className="px-3 py-2">...</span>
                      <button className="px-3 py-2 rounded-md bg-gray-100 text-gray-600">
                        Next
                      </button>
                    </nav>
                  </div>
                )}
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-4/12">
                {/* Latest News */}
                <LatestNewsSidebar news={latestNews} />
                
                {/* Ad Banner */}
                <div className="bg-gray-200 rounded-md p-6 my-8 text-center">
                  <p className="text-sm text-gray-500 mb-2">Advertisement</p>
                  <div className="h-60 flex items-center justify-center border border-dashed border-gray-300">
                    <p className="text-gray-400">Ad Space</p>
                  </div>
                </div>
                
                {/* Subscribe Box */}
                <div className="bg-news-blue-500 rounded-md p-6 text-white">
                  <h3 className="text-xl font-bold mb-3 font-display">Newsletter</h3>
                  <p className="mb-4 text-sm">
                    Get the latest {categoryTitle} news delivered to your inbox weekly.
                  </p>
                  <div className="flex flex-col space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="px-4 py-2 rounded-md text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <button className="bg-white text-news-blue font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Category;

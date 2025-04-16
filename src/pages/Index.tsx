
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedNewsSlider from '@/components/FeaturedNewsSlider';
import CategorySection from '@/components/CategorySection';
import LatestNewsSidebar from '@/components/LatestNewsSidebar';
import { 
  featuredNews, 
  politicsNews, 
  businessNews, 
  technologyNews,
  sportsNews,
  entertainmentNews,
  healthNews,
  latestNews,
} from '@/data/mockNews';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-news-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-news-blue font-medium">Loading news...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Featured News Slider */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <FeaturedNewsSlider news={featuredNews} />
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Left Side - Main Content */}
              <div className="lg:w-8/12">
                {/* Politics Section */}
                <CategorySection 
                  title="Politics" 
                  news={politicsNews} 
                  categorySlug="politics"
                />
                
                {/* Business Section */}
                <CategorySection 
                  title="Business" 
                  news={businessNews} 
                  categorySlug="business"
                />
                
                {/* Technology Section */}
                <CategorySection 
                  title="Technology" 
                  news={technologyNews} 
                  categorySlug="technology" 
                  layout="list"
                />
              </div>
              
              {/* Right Side - Sidebar */}
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
                
                {/* Sports Section (Compact) */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 font-display">Sports</h3>
                  <div className="space-y-4">
                    {sportsNews.slice(0, 2).map(item => (
                      <div key={item.id} className="border-b pb-4">
                        <h4 className="font-bold text-lg mb-2">
                          <a href={`/article/${item.slug}`} className="hover:text-news-blue">
                            {item.title}
                          </a>
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">{item.excerpt}</p>
                        <span className="text-xs text-gray-500">{item.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Entertainment Section (Compact) */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 font-display">Entertainment</h3>
                  <div className="space-y-4">
                    {entertainmentNews.slice(0, 2).map(item => (
                      <div key={item.id} className="border-b pb-4">
                        <h4 className="font-bold text-lg mb-2">
                          <a href={`/article/${item.slug}`} className="hover:text-news-blue">
                            {item.title}
                          </a>
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">{item.excerpt}</p>
                        <span className="text-xs text-gray-500">{item.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Health Section (Compact) */}
                <div>
                  <h3 className="text-xl font-bold mb-4 font-display">Health</h3>
                  <div className="space-y-4">
                    {healthNews.slice(0, 2).map(item => (
                      <div key={item.id} className="border-b pb-4">
                        <h4 className="font-bold text-lg mb-2">
                          <a href={`/article/${item.slug}`} className="hover:text-news-blue">
                            {item.title}
                          </a>
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">{item.excerpt}</p>
                        <span className="text-xs text-gray-500">{item.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Subscription */}
        <section className="bg-news-blue-50 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 font-display">Stay Updated</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-l-md border-y border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-news-blue focus:border-transparent"
              />
              <button className="bg-news-blue text-white px-6 py-3 rounded-r-md hover:bg-news-blue-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

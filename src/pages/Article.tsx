
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Bookmark } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsCard, { NewsItem } from '@/components/NewsCard';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import ArticleContent from '@/components/ArticleContent';
import SocialShareBar from '@/components/SocialShareBar';
import LatestNewsSidebar from '@/components/LatestNewsSidebar';
import { allNews } from '@/data/mockNews';

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<NewsItem | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Find the article by slug in our mock data
    const foundArticle = allNews.find(item => item.slug === slug);
    
    if (foundArticle) {
      setArticle(foundArticle);
      
      // Get related articles from the same category
      const related = allNews
        .filter(item => item.category === foundArticle.category && item.id !== foundArticle.id)
        .slice(0, 3);
      
      setRelatedArticles(related);
    }
    
    // Simulate content loading
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    // Scroll to top when article changes
    window.scrollTo(0, 0);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-news-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-news-blue font-medium">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <a href="/" className="inline-block bg-news-blue text-white px-6 py-2 rounded-md hover:bg-news-blue-600">
            Return to Home
          </a>
        </main>
        <Footer />
      </div>
    );
  }

  // Mock article content
  const articleContent = `
    <p class="text-lg mb-5">
      ${article.excerpt}
    </p>
    <p class="mb-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
    </p>
    <p class="mb-5">
      Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.
    </p>
    <h2 class="text-2xl font-bold mt-8 mb-4 font-display">Key Points to Consider</h2>
    <p class="mb-5">
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
    </p>
    <ul class="list-disc pl-6 mb-5">
      <li class="mb-2">Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</li>
      <li class="mb-2">Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus.</li>
      <li class="mb-2">Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta.</li>
    </ul>
    <p class="mb-5">
      Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
    </p>
    <blockquote class="border-l-4 border-news-blue pl-4 italic text-gray-700 my-6">
      "Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat."
    </blockquote>
    <p class="mb-5">
      Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat.
    </p>
    <h2 class="text-2xl font-bold mt-8 mb-4 font-display">Implications for the Future</h2>
    <p class="mb-5">
      Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
    </p>
    <p class="mb-5">
      Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.
    </p>
    <p class="mb-5">
      Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
    </p>
  `;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ReadingProgressBar />
      <Header />
      
      <main className="flex-grow">
        {/* Article Header */}
        <section className="bg-gray-50 py-6">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-4">
                <Link to="/" className="text-gray-600 hover:text-news-blue flex items-center text-sm">
                  <ChevronLeft size={16} className="mr-1" />
                  Back to Homepage
                </Link>
              </div>
              
              <nav className="text-xs text-gray-500 mb-2">
                <ol className="flex items-center flex-wrap">
                  <li className="flex items-center after:content-['/'] after:mx-1">
                    <Link to="/" className="hover:text-news-blue">Home</Link>
                  </li>
                  <li className="flex items-center after:content-['/'] after:mx-1">
                    <Link to={`/category/${article.category.toLowerCase()}`} className="hover:text-news-blue">
                      {article.category}
                    </Link>
                  </li>
                  <li className="truncate max-w-[250px]">{article.title}</li>
                </ol>
              </nav>
            </div>
          </div>
        </section>
        
        {/* Vertical Social Share Bar (visible on large screens) */}
        <SocialShareBar 
          title={article.title} 
          url={window.location.href} 
          vertical={true} 
        />
        
        {/* Article Content */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Main Content */}
              <div className="lg:w-8/12">
                <ArticleContent article={article} content={articleContent} />
                
                {/* Horizontal Social Share Bar (visible on all screens) */}
                <SocialShareBar title={article.title} url={window.location.href} />
                
                {/* Tags */}
                <div className="mt-8 pt-6 border-t">
                  <div className="flex flex-wrap gap-2">
                    {['News', article.category, 'Latest', 'Report'].map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm"
                      >
                        #{tag.toLowerCase()}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Author Info */}
                <div className="mt-8 bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start space-x-5">
                    <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">NewsPortal Staff</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Our team of experienced journalists and field reporters bring you the most accurate and up-to-date news from around the world.
                      </p>
                      <a href="/author/staff" className="text-news-blue text-sm hover:underline">
                        View all articles by this author
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Related Articles - Mobile Only */}
                <div className="mt-10 mb-8 lg:hidden">
                  <h3 className="text-xl font-bold mb-6 font-display">Related Articles</h3>
                  <div className="space-y-6">
                    {relatedArticles.map((item) => (
                      <NewsCard key={item.id} news={item} variant="horizontal" />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-4/12">
                {/* Save Button */}
                <div className="bg-gray-50 p-4 rounded-md mb-6 flex items-center justify-between">
                  <span className="font-medium">Save this article</span>
                  <button className="flex items-center text-sm px-3 py-1 bg-news-blue text-white rounded-md">
                    <Bookmark size={16} className="mr-2" />
                    Save
                  </button>
                </div>
                
                {/* Related Articles */}
                <div className="bg-gray-50 p-6 rounded-md mb-8 hidden lg:block">
                  <h3 className="text-xl font-bold mb-6 font-display">Related Articles</h3>
                  <div className="space-y-6">
                    {relatedArticles.map((item) => (
                      <NewsCard key={item.id} news={item} variant="compact" />
                    ))}
                  </div>
                </div>

                {/* Latest News Sidebar */}
                <LatestNewsSidebar news={allNews.slice(0, 5)} />
                
                {/* Ad Banner */}
                <div className="bg-gray-200 rounded-md p-6 my-8 text-center">
                  <p className="text-sm text-gray-500 mb-2">Advertisement</p>
                  <div className="h-60 flex items-center justify-center border border-dashed border-gray-300">
                    <p className="text-gray-400">Ad Space</p>
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

export default Article;


import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-news-blue font-display">NewsPortal</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium hover:text-news-blue">Home</Link>
            <Link to="/category/politics" className="text-sm font-medium hover:text-news-blue">Politics</Link>
            <Link to="/category/business" className="text-sm font-medium hover:text-news-blue">Business</Link>
            <Link to="/category/tech" className="text-sm font-medium hover:text-news-blue">Technology</Link>
            <Link to="/category/health" className="text-sm font-medium hover:text-news-blue">Health</Link>
            <Link to="/category/entertainment" className="text-sm font-medium hover:text-news-blue">Entertainment</Link>
            <Link to="/category/sports" className="text-sm font-medium hover:text-news-blue">Sports</Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleSearch} 
              className="text-gray-500 hover:text-news-blue"
            >
              <Search size={20} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-500 hover:text-news-blue md:hidden"
              onClick={toggleMenu}
            >
              <Menu size={20} />
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t py-3 px-4 bg-white absolute left-0 right-0 shadow-md">
            <div className="flex items-center max-w-md mx-auto">
              <Input
                type="search"
                placeholder="Search news..."
                className="flex-1"
                autoFocus
              />
              <Button variant="ghost" onClick={toggleSearch} className="ml-2">
                <X size={20} />
              </Button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-news-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/category/politics" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-news-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Politics
              </Link>
              <Link 
                to="/category/business" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-news-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Business
              </Link>
              <Link 
                to="/category/tech" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-news-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Technology
              </Link>
              <Link 
                to="/category/health" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-news-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Health
              </Link>
              <Link 
                to="/category/entertainment" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-news-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Entertainment
              </Link>
              <Link 
                to="/category/sports" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-news-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Sports
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

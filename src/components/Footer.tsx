
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">NewsPortal</h3>
            <p className="text-gray-300 text-sm">
              Your trusted source for breaking news, in-depth reporting, and daily updates on politics, business, technology, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white text-sm">Contact Us</Link></li>
              <li><Link to="/advertise" className="text-gray-300 hover:text-white text-sm">Advertise</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white text-sm">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-lg mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/category/politics" className="text-gray-300 hover:text-white text-sm">Politics</Link></li>
              <li><Link to="/category/business" className="text-gray-300 hover:text-white text-sm">Business</Link></li>
              <li><Link to="/category/tech" className="text-gray-300 hover:text-white text-sm">Technology</Link></li>
              <li><Link to="/category/health" className="text-gray-300 hover:text-white text-sm">Health</Link></li>
              <li><Link to="/category/entertainment" className="text-gray-300 hover:text-white text-sm">Entertainment</Link></li>
              <li><Link to="/category/sports" className="text-gray-300 hover:text-white text-sm">Sports</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-400">Subscribe to our newsletter for daily updates</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} NewsPortal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

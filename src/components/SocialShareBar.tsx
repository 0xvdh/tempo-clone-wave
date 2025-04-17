
import { Facebook, Twitter, Linkedin, Link as LinkIcon, Printer, Mail } from 'lucide-react';
import { toast } from 'sonner';

interface SocialShareBarProps {
  title: string;
  url: string;
  vertical?: boolean;
}

const SocialShareBar = ({ title, url, vertical = false }: SocialShareBarProps) => {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);
  
  const shareLinks = [
    { 
      name: 'Facebook', 
      icon: <Facebook size={18} />, 
      color: 'bg-[#3b5998]',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&t=${encodedTitle}`
    },
    { 
      name: 'Twitter', 
      icon: <Twitter size={18} />, 
      color: 'bg-[#1da1f2]',
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={18} />, 
      color: 'bg-[#0077b5]',
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`
    },
    { 
      name: 'Email', 
      icon: <Mail size={18} />, 
      color: 'bg-gray-600',
      url: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      toast.success('Link copied to clipboard');
    }).catch(() => {
      toast.error('Failed to copy link');
    });
  };

  const printArticle = () => {
    window.print();
  };

  const containerClass = vertical 
    ? "flex flex-col gap-2 fixed left-4 top-1/3 z-10 hidden lg:flex" 
    : "flex gap-2 justify-center my-6";

  return (
    <div className={containerClass}>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${link.color} text-white p-2 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity`}
          aria-label={`Share on ${link.name}`}
        >
          {link.icon}
        </a>
      ))}
      <button
        onClick={copyToClipboard}
        className="bg-gray-700 text-white p-2 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
        aria-label="Copy link"
      >
        <LinkIcon size={18} />
      </button>
      <button
        onClick={printArticle}
        className="bg-gray-500 text-white p-2 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
        aria-label="Print article"
      >
        <Printer size={18} />
      </button>
    </div>
  );
};

export default SocialShareBar;

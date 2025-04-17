
import React from 'react';
import { Calendar, Clock, User, MessageSquare } from 'lucide-react';
import { NewsItem } from './NewsCard';

interface ArticleContentProps {
  article: NewsItem;
  content: string;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ article, content }) => {
  return (
    <article className="max-w-4xl">
      {/* Article header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
          <span className="font-medium uppercase text-news-red">{article.category}</span>
          <span>•</span>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{article.date}</span>
          </div>
          <span>•</span>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>5 min read</span>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 font-display leading-tight">
          {article.title}
        </h1>
        
        <p className="text-lg text-gray-700 mb-4 font-medium">
          {article.excerpt}
        </p>

        <div className="flex items-center text-sm text-gray-600 mb-4">
          <div className="flex items-center mr-4">
            <User size={16} className="mr-1" />
            <span>By <span className="font-medium">NewsPortal Staff</span></span>
          </div>
          <div className="flex items-center">
            <MessageSquare size={16} className="mr-1" />
            <span>5 Comments</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <figure className="mb-8">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-auto rounded-md"
        />
        <figcaption className="text-sm text-gray-500 mt-2 italic">
          Photo: NewsPortal / {article.category} Department
        </figcaption>
      </figure>
      
      {/* Article Body */}
      <div 
        className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-p:text-gray-700 prose-li:text-gray-700"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </article>
  );
};

export default ArticleContent;

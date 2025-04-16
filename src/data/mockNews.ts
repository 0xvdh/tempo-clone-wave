
import { NewsItem } from "@/components/NewsCard";

// Function to generate a slug from a title
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s]/gi, '')
    .replace(/\s+/g, '-');
};

export const featuredNews: NewsItem[] = [
  {
    id: '1',
    title: 'Global Economic Leaders Convene to Address Inflation Crisis',
    excerpt: 'Finance ministers from G20 nations meet in an emergency summit to discuss coordinated response to growing inflation concerns worldwide.',
    image: 'https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?q=80&w=1920&auto=format&fit=crop',
    category: 'Economics',
    date: 'April 15, 2025',
    slug: generateSlug('Global Economic Leaders Convene to Address Inflation Crisis'),
  },
  {
    id: '2',
    title: 'Breakthrough in Renewable Energy Storage Technology Announced',
    excerpt: 'Scientists develop new battery technology that could store renewable energy for months at a fraction of current costs.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1920&auto=format&fit=crop',
    category: 'Technology',
    date: 'April 14, 2025',
    slug: generateSlug('Breakthrough in Renewable Energy Storage Technology Announced'),
  },
  {
    id: '3',
    title: 'Historic Peace Agreement Signed in Middle East Conflict',
    excerpt: 'After decades of tensions, regional powers reach landmark accord that could reshape geopolitical landscape.',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1920&auto=format&fit=crop',
    category: 'Politics',
    date: 'April 13, 2025',
    slug: generateSlug('Historic Peace Agreement Signed in Middle East Conflict'),
  },
];

export const politicsNews: NewsItem[] = [
  {
    id: '4',
    title: 'Parliament Passes Controversial Cybersecurity Bill',
    excerpt: 'New legislation grants expanded powers to intelligence agencies amid privacy concerns from opposition and civil liberties groups.',
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1920&auto=format&fit=crop',
    category: 'Politics',
    date: 'April 15, 2025',
    slug: generateSlug('Parliament Passes Controversial Cybersecurity Bill'),
  },
  {
    id: '5',
    title: 'Election Commission Announces Major Voting Reforms',
    excerpt: 'New measures aim to increase transparency and security in upcoming national elections.',
    image: 'https://images.unsplash.com/photo-1494172961521-33799ddd43a5?q=80&w=1920&auto=format&fit=crop',
    category: 'Politics',
    date: 'April 14, 2025',
    slug: generateSlug('Election Commission Announces Major Voting Reforms'),
  },
  {
    id: '6',
    title: 'Foreign Minister Embarks on Diplomatic Tour',
    excerpt: 'Week-long visit to neighboring countries aims to strengthen regional cooperation and trade relations.',
    image: 'https://images.unsplash.com/photo-1541726260-e6078c228b1d?q=80&w=1920&auto=format&fit=crop',
    category: 'Politics',
    date: 'April 13, 2025',
    slug: generateSlug('Foreign Minister Embarks on Diplomatic Tour'),
  },
];

export const businessNews: NewsItem[] = [
  {
    id: '7',
    title: 'Tech Giant Acquires AI Startup for $2.5 Billion',
    excerpt: 'Major acquisition signals growing competition in artificial intelligence market as companies race for technological advantage.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1920&auto=format&fit=crop',
    category: 'Business',
    date: 'April 15, 2025',
    slug: generateSlug('Tech Giant Acquires AI Startup for $2.5 Billion'),
  },
  {
    id: '8',
    title: 'Stock Markets Hit Record Highs Amid Strong Earnings',
    excerpt: 'Investor confidence surges as major companies report better than expected quarterly profits.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1920&auto=format&fit=crop',
    category: 'Business',
    date: 'April 14, 2025',
    slug: generateSlug('Stock Markets Hit Record Highs Amid Strong Earnings'),
  },
  {
    id: '9',
    title: 'Automotive Industry Faces Supply Chain Disruptions',
    excerpt: 'Global semiconductor shortage continues to impact vehicle production, leading to delivery delays and price increases.',
    image: 'https://images.unsplash.com/photo-1523676060187-f55189a71f5e?q=80&w=1920&auto=format&fit=crop',
    category: 'Business',
    date: 'April 13, 2025',
    slug: generateSlug('Automotive Industry Faces Supply Chain Disruptions'),
  },
];

export const technologyNews: NewsItem[] = [
  {
    id: '10',
    title: 'Revolutionary Quantum Computer Achieves Major Milestone',
    excerpt: 'Scientists achieve quantum supremacy with new processor capable of solving complex problems in seconds.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop',
    category: 'Technology',
    date: 'April 15, 2025',
    slug: generateSlug('Revolutionary Quantum Computer Achieves Major Milestone'),
  },
  {
    id: '11',
    title: 'New Virtual Reality Platform Transforms Remote Work',
    excerpt: 'Innovative VR technology creates immersive office environments for distributed teams.',
    image: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=1920&auto=format&fit=crop',
    category: 'Technology',
    date: 'April 14, 2025',
    slug: generateSlug('New Virtual Reality Platform Transforms Remote Work'),
  },
  {
    id: '12',
    title: 'Cybersecurity Experts Warn of Sophisticated New Malware',
    excerpt: 'Critical infrastructure at risk as researchers discover advanced threat targeting industrial systems.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1920&auto=format&fit=crop',
    category: 'Technology',
    date: 'April 13, 2025',
    slug: generateSlug('Cybersecurity Experts Warn of Sophisticated New Malware'),
  },
];

export const sportsNews: NewsItem[] = [
  {
    id: '13',
    title: 'National Team Advances to World Cup Semifinals',
    excerpt: 'Dramatic last-minute victory secures historic advancement in international tournament.',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1920&auto=format&fit=crop',
    category: 'Sports',
    date: 'April 15, 2025',
    slug: generateSlug('National Team Advances to World Cup Semifinals'),
  },
  {
    id: '14',
    title: 'Tennis Star Announces Surprise Retirement',
    excerpt: 'After fifteen years and multiple Grand Slam titles, beloved athlete plans to step away from professional competition.',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c1?q=80&w=1920&auto=format&fit=crop',
    category: 'Sports',
    date: 'April 14, 2025',
    slug: generateSlug('Tennis Star Announces Surprise Retirement'),
  },
  {
    id: '15',
    title: 'Olympic Committee Reveals Host City for 2036 Games',
    excerpt: 'After competitive bidding process, international sporting event heads to emerging global metropolis.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1920&auto=format&fit=crop',
    category: 'Sports',
    date: 'April 13, 2025',
    slug: generateSlug('Olympic Committee Reveals Host City for 2036 Games'),
  },
];

export const entertainmentNews: NewsItem[] = [
  {
    id: '16',
    title: 'Blockbuster Film Breaks Opening Weekend Record',
    excerpt: 'Latest installment in popular franchise exceeds box office expectations with $300 million global debut.',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1920&auto=format&fit=crop',
    category: 'Entertainment',
    date: 'April 15, 2025',
    slug: generateSlug('Blockbuster Film Breaks Opening Weekend Record'),
  },
  {
    id: '17',
    title: 'Music Industry Awards Celebrate Diverse Artists',
    excerpt: 'Annual ceremony recognizes breakthrough performances and lifetime achievements across multiple genres.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1920&auto=format&fit=crop',
    category: 'Entertainment',
    date: 'April 14, 2025',
    slug: generateSlug('Music Industry Awards Celebrate Diverse Artists'),
  },
  {
    id: '18',
    title: 'Streaming Platform Announces Ambitious New Original Series',
    excerpt: 'Star-studded cast and acclaimed director team up for high-budget production set to premiere next quarter.',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=1920&auto=format&fit=crop',
    category: 'Entertainment',
    date: 'April 13, 2025',
    slug: generateSlug('Streaming Platform Announces Ambitious New Original Series'),
  },
];

export const healthNews: NewsItem[] = [
  {
    id: '19',
    title: 'Medical Researchers Develop Promising Cancer Treatment',
    excerpt: 'Early clinical trials show unprecedented results for targeted therapy with minimal side effects.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1920&auto=format&fit=crop',
    category: 'Health',
    date: 'April 15, 2025',
    slug: generateSlug('Medical Researchers Develop Promising Cancer Treatment'),
  },
  {
    id: '20',
    title: 'Study Reveals Benefits of New Exercise Approach',
    excerpt: 'Research indicates brief high-intensity workouts may be more effective than traditional fitness routines.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1920&auto=format&fit=crop',
    category: 'Health',
    date: 'April 14, 2025',
    slug: generateSlug('Study Reveals Benefits of New Exercise Approach'),
  },
  {
    id: '21',
    title: 'Mental Health Initiatives Expand Nationwide',
    excerpt: 'New government program increases access to counseling and psychological services for underserved communities.',
    image: 'https://images.unsplash.com/photo-1619209941612-43c22bc9aa60?q=80&w=1920&auto=format&fit=crop',
    category: 'Health',
    date: 'April 13, 2025',
    slug: generateSlug('Mental Health Initiatives Expand Nationwide'),
  },
];

export const latestNews: NewsItem[] = [
  {
    id: '22',
    title: 'Scientists Discover New Species in Uncharted Ocean Depths',
    excerpt: 'Deep sea expedition reveals previously unknown marine life with unique adaptations to extreme pressure.',
    image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=1920&auto=format&fit=crop',
    category: 'Science',
    date: 'April 16, 2025 • 2 hours ago',
    slug: generateSlug('Scientists Discover New Species in Uncharted Ocean Depths'),
  },
  {
    id: '23',
    title: 'Central Bank Announces Surprise Interest Rate Cut',
    excerpt: 'Economic stimulus measure aims to boost growth amid signs of slowing economic indicators.',
    image: 'https://images.unsplash.com/photo-1633158829875-e5316a358c6c?q=80&w=1920&auto=format&fit=crop',
    category: 'Economics',
    date: 'April 16, 2025 • 3 hours ago',
    slug: generateSlug('Central Bank Announces Surprise Interest Rate Cut'),
  },
  {
    id: '24',
    title: 'New Public Transportation System Launches in Capital City',
    excerpt: 'Modernized network features electric buses and integrated digital payment system to reduce congestion.',
    image: 'https://images.unsplash.com/photo-1568435363428-2d4b6e6a76e7?q=80&w=1920&auto=format&fit=crop',
    category: 'Urban',
    date: 'April 16, 2025 • 5 hours ago',
    slug: generateSlug('New Public Transportation System Launches in Capital City'),
  },
  {
    id: '25',
    title: 'International Arts Festival Draws Record Attendance',
    excerpt: 'Month-long cultural celebration features works from over fifty countries and thousands of artists.',
    image: 'https://images.unsplash.com/photo-1576799475473-0a1dcac85a14?q=80&w=1920&auto=format&fit=crop',
    category: 'Culture',
    date: 'April 16, 2025 • 7 hours ago',
    slug: generateSlug('International Arts Festival Draws Record Attendance'),
  },
  {
    id: '26',
    title: 'Weather Agency Issues Warning for Coastal Regions',
    excerpt: 'Approaching storm system expected to bring heavy rainfall and potential flooding to vulnerable areas.',
    image: 'https://images.unsplash.com/photo-1590055531615-690adad3e482?q=80&w=1920&auto=format&fit=crop',
    category: 'Weather',
    date: 'April 16, 2025 • 9 hours ago',
    slug: generateSlug('Weather Agency Issues Warning for Coastal Regions'),
  },
];

export const allNews: NewsItem[] = [
  ...featuredNews,
  ...politicsNews,
  ...businessNews,
  ...technologyNews,
  ...sportsNews,
  ...entertainmentNews,
  ...healthNews,
  ...latestNews,
];

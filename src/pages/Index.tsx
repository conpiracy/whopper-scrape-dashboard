import { useState } from "react";
import { Product } from "../../libs/shared/types";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { MainNav } from "@/components/MainNav";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Dummy data matching the screenshot
const dummyProducts: Product[] = [
  // Gambling Products
  {
    id: "g1",
    name: "BetMaster Pro",
    category: "gambling",
    dailyRevenue: 15445,
    valueProposition: "Premium gambling signals and analytics",
    description: "Advanced gambling platform with AI-powered predictions",
    metrics: {
      monthlyUsers: 5000,
      averageOrderValue: 99,
      retentionRate: "68%"
    },
    niche: {
      target: "Professional gamblers",
      competition: "Medium",
      marketSize: "$2.3B"
    }
  },
  {
    id: "g2",
    name: "GambleWise",
    category: "gambling",
    dailyRevenue: 12000,
    valueProposition: "Smart betting strategies and insights",
    description: "AI-driven insights for smarter gambling decisions",
    metrics: {
      monthlyUsers: 4500,
      averageOrderValue: 85,
      retentionRate: "70%"
    },
    niche: {
      target: "Casual gamblers",
      competition: "Low",
      marketSize: "$1.5B"
    }
  },
  {
    id: "g3",
    name: "Betting Guru",
    category: "gambling",
    dailyRevenue: 9800,
    valueProposition: "Expert betting tips and analytics",
    description: "Comprehensive betting analysis and tips",
    metrics: {
      monthlyUsers: 3000,
      averageOrderValue: 75,
      retentionRate: "65%"
    },
    niche: {
      target: "Sports bettors",
      competition: "Medium",
      marketSize: "$1.8B"
    }
  },
  {
    id: "g4",
    name: "Poker Pro",
    category: "gambling",
    dailyRevenue: 15000,
    valueProposition: "Advanced poker strategies and tools",
    description: "Tools and strategies for serious poker players",
    metrics: {
      monthlyUsers: 4000,
      averageOrderValue: 100,
      retentionRate: "80%"
    },
    niche: {
      target: "Poker enthusiasts",
      competition: "High",
      marketSize: "$2.0B"
    }
  },
  {
    id: "g5",
    name: "Casino Master",
    category: "gambling",
    dailyRevenue: 11000,
    valueProposition: "Casino game strategies and tips",
    description: "Expert advice for casino game players",
    metrics: {
      monthlyUsers: 3500,
      averageOrderValue: 90,
      retentionRate: "75%"
    },
    niche: {
      target: "Casino players",
      competition: "Medium",
      marketSize: "$1.6B"
    }
  },
  {
    id: "g6",
    name: "Fantasy League Pro",
    category: "gambling",
    dailyRevenue: 13000,
    valueProposition: "Fantasy sports insights and analytics",
    description: "Optimize your fantasy league performance",
    metrics: {
      monthlyUsers: 5000,
      averageOrderValue: 95,
      retentionRate: "78%"
    },
    niche: {
      target: "Fantasy sports players",
      competition: "High",
      marketSize: "$2.5B"
    }
  },
  {
    id: "g7",
    name: "Betting Insights",
    category: "gambling",
    dailyRevenue: 11500,
    valueProposition: "Data-driven betting insights",
    description: "Leverage data for better betting outcomes",
    metrics: {
      monthlyUsers: 4200,
      averageOrderValue: 88,
      retentionRate: "72%"
    },
    niche: {
      target: "Data-driven gamblers",
      competition: "Medium",
      marketSize: "$1.9B"
    }
  },
  {
    id: "g8",
    name: "Live Betting Hub",
    category: "gambling",
    dailyRevenue: 12500,
    valueProposition: "Real-time betting strategies",
    description: "Stay ahead with live betting insights",
    metrics: {
      monthlyUsers: 4800,
      averageOrderValue: 92,
      retentionRate: "76%"
    },
    niche: {
      target: "Live bettors",
      competition: "High",
      marketSize: "$2.1B"
    }
  },
  {
    id: "g9",
    name: "Betting Academy",
    category: "gambling",
    dailyRevenue: 14000,
    valueProposition: "Learn the art of betting",
    description: "Educational resources for aspiring bettors",
    metrics: {
      monthlyUsers: 6000,
      averageOrderValue: 70,
      retentionRate: "80%"
    },
    niche: {
      target: "New bettors",
      competition: "Low",
      marketSize: "$1.4B"
    }
  },
  {
    id: "g10",
    name: "Betting Network",
    category: "gambling",
    dailyRevenue: 13500,
    valueProposition: "Connect with other bettors",
    description: "A community for sharing betting strategies",
    metrics: {
      monthlyUsers: 5500,
      averageOrderValue: 85,
      retentionRate: "77%"
    },
    niche: {
      target: "Social bettors",
      competition: "Medium",
      marketSize: "$1.7B"
    }
  },

  // Trading Products
  {
    id: "t1",
    name: "CryptoSignals Elite",
    category: "trading",
    dailyRevenue: 12890,
    valueProposition: "Real-time crypto trading signals",
    description: "Professional crypto trading platform with advanced analytics",
    metrics: {
      monthlyUsers: 3500,
      averageOrderValue: 149,
      retentionRate: "72%"
    },
    niche: {
      target: "Crypto traders",
      competition: "High",
      marketSize: "$1.8B"
    }
  },
  {
    id: "t2",
    name: "Stock Market Pro",
    category: "trading",
    dailyRevenue: 14500,
    valueProposition: "Expert stock trading insights",
    description: "Maximize your stock trading potential",
    metrics: {
      monthlyUsers: 4000,
      averageOrderValue: 120,
      retentionRate: "75%"
    },
    niche: {
      target: "Stock traders",
      competition: "Medium",
      marketSize: "$2.0B"
    }
  },
  {
    id: "t3",
    name: "Forex Mastery",
    category: "trading",
    dailyRevenue: 11000,
    valueProposition: "Master forex trading strategies",
    description: "Comprehensive forex trading education",
    metrics: {
      monthlyUsers: 3000,
      averageOrderValue: 100,
      retentionRate: "68%"
    },
    niche: {
      target: "Forex traders",
      competition: "High",
      marketSize: "$1.5B"
    }
  },
  {
    id: "t4",
    name: "Options Trading Pro",
    category: "trading",
    dailyRevenue: 9500,
    valueProposition: "Advanced options trading techniques",
    description: "Learn to trade options like a pro",
    metrics: {
      monthlyUsers: 2500,
      averageOrderValue: 110,
      retentionRate: "70%"
    },
    niche: {
      target: "Options traders",
      competition: "Medium",
      marketSize: "$1.2B"
    }
  },
  {
    id: "t5",
    name: "Trading Signals Hub",
    category: "trading",
    dailyRevenue: 9800,
    valueProposition: "Daily trading signals and insights",
    description: "Stay ahead with expert trading signals",
    metrics: {
      monthlyUsers: 3200,
      averageOrderValue: 95,
      retentionRate: "73%"
    },
    niche: {
      target: "Active traders",
      competition: "High",
      marketSize: "$1.6B"
    }
  },
  {
    id: "t6",
    name: "Market Analysis Pro",
    category: "trading",
    dailyRevenue: 10200,
    valueProposition: "In-depth market analysis tools",
    description: "Analyze market trends and make informed decisions",
    metrics: {
      monthlyUsers: 3700,
      averageOrderValue: 105,
      retentionRate: "74%"
    },
    niche: {
      target: "Market analysts",
      competition: "Medium",
      marketSize: "$1.4B"
    }
  },
  {
    id: "t7",
    name: "Trading Academy",
    category: "trading",
    dailyRevenue: 11500,
    valueProposition: "Learn trading from the experts",
    description: "Educational resources for aspiring traders",
    metrics: {
      monthlyUsers: 4500,
      averageOrderValue: 80,
      retentionRate: "76%"
    },
    niche: {
      target: "New traders",
      competition: "Low",
      marketSize: "$1.3B"
    }
  },
  {
    id: "t8",
    name: "Algorithmic Trading Pro",
    category: "trading",
    dailyRevenue: 12500,
    valueProposition: "Automate your trading strategies",
    description: "Advanced tools for algorithmic trading",
    metrics: {
      monthlyUsers: 3800,
      averageOrderValue: 130,
      retentionRate: "78%"
    },
    niche: {
      target: "Algorithmic traders",
      competition: "High",
      marketSize: "$1.9B"
    }
  },
  {
    id: "t9",
    name: "Trading Community",
    category: "trading",
    dailyRevenue: 9000,
    valueProposition: "Connect with other traders",
    description: "A community for sharing trading strategies",
    metrics: {
      monthlyUsers: 2900,
      averageOrderValue: 70,
      retentionRate: "69%"
    },
    niche: {
      target: "Social traders",
      competition: "Medium",
      marketSize: "$1.1B"
    }
  },
  {
    id: "t10",
    name: "Crypto Trading Academy",
    category: "trading",
    dailyRevenue: 14000,
    valueProposition: "Learn crypto trading from experts",
    description: "Comprehensive education for crypto traders",
    metrics: {
      monthlyUsers: 5000,
      averageOrderValue: 150,
      retentionRate: "80%"
    },
    niche: {
      target: "Crypto enthusiasts",
      competition: "High",
      marketSize: "$2.2B"
    }
  },

  // Betting Products
  {
    id: "b1",
    name: "SportsPro Insights",
    category: "betting",
    dailyRevenue: 9870,
    valueProposition: "Professional sports betting analysis",
    description: "Comprehensive sports betting platform with expert insights",
    metrics: {
      monthlyUsers: 2800,
      averageOrderValue: 79,
      retentionRate: "65%"
    },
    niche: {
      target: "Sports bettors",
      competition: "Medium",
      marketSize: "$1.5B"
    }
  },
  {
    id: "b2",
    name: "Betting Expert",
    category: "betting",
    dailyRevenue: 10200,
    valueProposition: "Expert betting tips and strategies",
    description: "Maximize your betting success with expert advice",
    metrics: {
      monthlyUsers: 3200,
      averageOrderValue: 85,
      retentionRate: "68%"
    },
    niche: {
      target: "Casual bettors",
      competition: "Low",
      marketSize: "$1.3B"
    }
  },
  {
    id: "b3",
    name: "Live Betting Insights",
    category: "betting",
    dailyRevenue: 11500,
    valueProposition: "Real-time betting insights and analytics",
    description: "Stay ahead with live betting strategies",
    metrics: {
      monthlyUsers: 3500,
      averageOrderValue: 90,
      retentionRate: "70%"
    },
    niche: {
      target: "Live bettors",
      competition: "High",
      marketSize: "$1.6B"
    }
  },
  {
    id: "b4",
    name: "Betting Academy",
    category: "betting",
    dailyRevenue: 9800,
    valueProposition: "Learn the art of betting",
    description: "Educational resources for aspiring bettors",
    metrics: {
      monthlyUsers: 2900,
      averageOrderValue: 75,
      retentionRate: "66%"
    },
    niche: {
      target: "New bettors",
      competition: "Medium",
      marketSize: "$1.2B"
    }
  },
  {
    id: "b5",
    name: "Betting Community",
    category: "betting",
    dailyRevenue: 9200,
    valueProposition: "Connect with other bettors",
    description: "A community for sharing betting strategies",
    metrics: {
      monthlyUsers: 3100,
      averageOrderValue: 80,
      retentionRate: "67%"
    },
    niche: {
      target: "Social bettors",
      competition: "Medium",
      marketSize: "$1.4B"
    }
  },
  {
    id: "b6",
    name: "Betting Signals Pro",
    category: "betting",
    dailyRevenue: 10500,
    valueProposition: "Daily betting signals and insights",
    description: "Stay ahead with expert betting signals",
    metrics: {
      monthlyUsers: 3300,
      averageOrderValue: 88,
      retentionRate: "72%"
    },
    niche: {
      target: "Active bettors",
      competition: "High",
      marketSize: "$1.5B"
    }
  },
  {
    id: "b7",
    name: "Betting Tools Hub",
    category: "betting",
    dailyRevenue: 11000,
    valueProposition: "Tools for smarter betting",
    description: "Advanced tools for betting analysis",
    metrics: {
      monthlyUsers: 3600,
      averageOrderValue: 95,
      retentionRate: "74%"
    },
    niche: {
      target: "Serious bettors",
      competition: "Medium",
      marketSize: "$1.7B"
    }
  },
  {
    id: "b8",
    name: "Betting Strategies Academy",
    category: "betting",
    dailyRevenue: 13000,
    valueProposition: "Learn betting strategies from experts",
    description: "Comprehensive education for bettors",
    metrics: {
      monthlyUsers: 4000,
      averageOrderValue: 100,
      retentionRate: "76%"
    },
    niche: {
      target: "New bettors",
      competition: "Low",
      marketSize: "$1.3B"
    }
  },
  {
    id: "b9",
    name: "Betting Insights Network",
    category: "betting",
    dailyRevenue: 12500,
    valueProposition: "Connect with other bettors",
    description: "A community for sharing betting insights",
    metrics: {
      monthlyUsers: 3800,
      averageOrderValue: 85,
      retentionRate: "75%"
    },
    niche: {
      target: "Social bettors",
      competition: "Medium",
      marketSize: "$1.6B"
    }
  },
  {
    id: "b10",
    name: "Betting Analytics Pro",
    category: "betting",
    dailyRevenue: 14000,
    valueProposition: "Advanced betting analytics tools",
    description: "Tools for analyzing betting performance",
    metrics: {
      monthlyUsers: 4200,
      averageOrderValue: 110,
      retentionRate: "78%"
    },
    niche: {
      target: "Data-driven bettors",
      competition: "High",
      marketSize: "$1.8B"
    }
  },

  // Social Media Products
  {
    id: "s1",
    name: "ViralGrowth Pro",
    category: "social media",
    dailyRevenue: 8760,
    valueProposition: "Automated social media growth",
    description: "All-in-one social media management and growth platform",
    metrics: {
      monthlyUsers: 4200,
      averageOrderValue: 59,
      retentionRate: "70%"
    },
    niche: {
      target: "Content creators",
      competition: "High",
      marketSize: "$3.2B"
    }
  },
  {
    id: "s2",
    name: "Social Media Mastery",
    category: "social media",
    dailyRevenue: 9500,
    valueProposition: "Master social media strategies",
    description: "Comprehensive guides for social media success",
    metrics: {
      monthlyUsers: 3800,
      averageOrderValue: 65,
      retentionRate: "72%"
    },
    niche: {
      target: "Marketers",
      competition: "Medium",
      marketSize: "$2.8B"
    }
  },
  {
    id: "s3",
    name: "Content Creator Hub",
    category: "social media",
    dailyRevenue: 10200,
    valueProposition: "Tools for content creators",
    description: "All-in-one platform for content creation",
    metrics: {
      monthlyUsers: 4500,
      averageOrderValue: 75,
      retentionRate: "74%"
    },
    niche: {
      target: "Influencers",
      competition: "High",
      marketSize: "$3.0B"
    }
  },
  {
    id: "s4",
    name: "Social Media Insights",
    category: "social media",
    dailyRevenue: 8900,
    valueProposition: "Data-driven insights for social media",
    description: "Analyze your social media performance",
    metrics: {
      monthlyUsers: 3600,
      averageOrderValue: 68,
      retentionRate: "71%"
    },
    niche: {
      target: "Brands",
      competition: "Medium",
      marketSize: "$2.5B"
    }
  },
  {
    id: "s5",
    name: "Engagement Booster",
    category: "social media",
    dailyRevenue: 9200,
    valueProposition: "Boost your social media engagement",
    description: "Strategies for increasing engagement",
    metrics: {
      monthlyUsers: 4000,
      averageOrderValue: 70,
      retentionRate: "73%"
    },
    niche: {
      target: "Businesses",
      competition: "High",
      marketSize: "$2.9B"
    }
  },
  {
    id: "s6",
    name: "Social Media Scheduler",
    category: "social media",
    dailyRevenue: 8500,
    valueProposition: "Schedule your social media posts",
    description: "Automate your social media posting",
    metrics: {
      monthlyUsers: 3200,
      averageOrderValue: 60,
      retentionRate: "69%"
    },
    niche: {
      target: "Content creators",
      competition: "Medium",
      marketSize: "$2.4B"
    }
  },
  {
    id: "s7",
    name: "Influencer Marketing Pro",
    category: "social media",
    dailyRevenue: 11000,
    valueProposition: "Connect with influencers",
    description: "Tools for influencer marketing success",
    metrics: {
      monthlyUsers: 4500,
      averageOrderValue: 80,
      retentionRate: "75%"
    },
    niche: {
      target: "Brands",
      competition: "High",
      marketSize: "$3.1B"
    }
  },
  {
    id: "s8",
    name: "Social Media Analytics",
    category: "social media",
    dailyRevenue: 9500,
    valueProposition: "Analyze your social media metrics",
    description: "Data-driven insights for better performance",
    metrics: {
      monthlyUsers: 3700,
      averageOrderValue: 65,
      retentionRate: "72%"
    },
    niche: {
      target: "Marketers",
      competition: "Medium",
      marketSize: "$2.6B"
    }
  },
  {
    id: "s9",
    name: "Content Strategy Pro",
    category: "social media",
    dailyRevenue: 10500,
    valueProposition: "Develop a winning content strategy",
    description: "Guides for effective content marketing",
    metrics: {
      monthlyUsers: 3900,
      averageOrderValue: 78,
      retentionRate: "74%"
    },
    niche: {
      target: "Content marketers",
      competition: "High",
      marketSize: "$3.3B"
    }
  },
  {
    id: "s10",
    name: "Social Media Growth Academy",
    category: "social media",
    dailyRevenue: 11500,
    valueProposition: "Learn social media growth strategies",
    description: "Educational resources for social media success",
    metrics: {
      monthlyUsers: 4200,
      averageOrderValue: 82,
      retentionRate: "76%"
    },
    niche: {
      target: "Aspiring marketers",
      competition: "Medium",
      marketSize: "$2.7B"
    }
  },

  // Sales Products
  {
    id: "sa1",
    name: "SalesAce Elite",
    category: "sales",
    dailyRevenue: 11230,
    valueProposition: "Advanced sales automation and CRM",
    description: "Complete sales management and automation platform",
    metrics: {
      monthlyUsers: 3100,
      averageOrderValue: 129,
      retentionRate: "75%"
    },
    niche: {
      target: "Sales professionals",
      competition: "Medium",
      marketSize: "$2.7B"
    }
  },
  {
    id: "sa2",
    name: "Sales Growth Pro",
    category: "sales",
    dailyRevenue: 9800,
    valueProposition: "Strategies for increasing sales",
    description: "Comprehensive guides for sales success",
    metrics: {
      monthlyUsers: 2900,
      averageOrderValue: 115,
      retentionRate: "72%"
    },
    niche: {
      target: "Sales teams",
      competition: "High",
      marketSize: "$2.5B"
    }
  },
  {
    id: "sa3",
    name: "Lead Generation Mastery",
    category: "sales",
    dailyRevenue: 10500,
    valueProposition: "Master lead generation techniques",
    description: "Tools for effective lead generation",
    metrics: {
      monthlyUsers: 3200,
      averageOrderValue: 120,
      retentionRate: "74%"
    },
    niche: {
      target: "Marketers",
      competition: "Medium",
      marketSize: "$2.6B"
    }
  },
  {
    id: "sa4",
    name: "Sales Training Academy",
    category: "sales",
    dailyRevenue: 11500,
    valueProposition: "Learn sales techniques from experts",
    description: "Educational resources for sales professionals",
    metrics: {
      monthlyUsers: 3500,
      averageOrderValue: 130,
      retentionRate: "76%"
    },
    niche: {
      target: "New salespeople",
      competition: "Low",
      marketSize: "$2.3B"
    }
  },
  {
    id: "sa5",
    name: "Sales Analytics Pro",
    category: "sales",
    dailyRevenue: 9900,
    valueProposition: "Analyze your sales performance",
    description: "Data-driven insights for better sales outcomes",
    metrics: {
      monthlyUsers: 3100,
      averageOrderValue: 110,
      retentionRate: "73%"
    },
    niche: {
      target: "Sales managers",
      competition: "Medium",
      marketSize: "$2.4B"
    }
  },
  {
    id: "sa6",
    name: "Sales Strategy Hub",
    category: "sales",
    dailyRevenue: 10800,
    valueProposition: "Develop effective sales strategies",
    description: "Guides for creating winning sales plans",
    metrics: {
      monthlyUsers: 3300,
      averageOrderValue: 125,
      retentionRate: "75%"
    },
    niche: {
      target: "Sales teams",
      competition: "High",
      marketSize: "$2.8B"
    }
  },
  {
    id: "sa7",
    name: "Sales Automation Pro",
    category: "sales",
    dailyRevenue: 11200,
    valueProposition: "Automate your sales processes",
    description: "Tools for streamlining sales operations",
    metrics: {
      monthlyUsers: 3400,
      averageOrderValue: 135,
      retentionRate: "77%"
    },
    niche: {
      target: "Sales professionals",
      competition: "Medium",
      marketSize: "$2.5B"
    }
  },
  {
    id: "sa8",
    name: "Sales Funnel Mastery",
    category: "sales",
    dailyRevenue: 12000,
    valueProposition: "Master the sales funnel process",
    description: "Comprehensive guides for sales funnel optimization",
    metrics: {
      monthlyUsers: 3600,
      averageOrderValue: 140,
      retentionRate: "78%"
    },
    niche: {
      target: "Sales teams",
      competition: "High",
      marketSize: "$2.9B"
    }
  },
  {
    id: "sa9",
    name: "Sales Coaching Pro",
    category: "sales",
    dailyRevenue: 12500,
    valueProposition: "Get coached by sales experts",
    description: "Personalized coaching for sales success",
    metrics: {
      monthlyUsers: 3700,
      averageOrderValue: 150,
      retentionRate: "80%"
    },
    niche: {
      target: "Sales professionals",
      competition: "Medium",
      marketSize: "$2.6B"
    }
  },
  {
    id: "sa10",
    name: "Sales Performance Tracker",
    category: "sales",
    dailyRevenue: 13000,
    valueProposition: "Track your sales performance",
    description: "Tools for monitoring sales metrics",
    metrics: {
      monthlyUsers: 3800,
      averageOrderValue: 155,
      retentionRate: "82%"
    },
    niche: {
      target: "Sales managers",
      competition: "High",
      marketSize: "$2.7B"
    }
  }
];

const categories = ["All", "Gambling", "Trading", "Betting", "Social media", "Sales"];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const isMobile = useIsMobile();

  const filteredProducts = dummyProducts.filter(product => 
    selectedCategory === "All" || 
    product.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <MainNav />

        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Top Products</h2>
          <p className="text-gray-400">
            Discover the highest-performing info products across different niches
          </p>
        </div>

        <div className={`flex ${isMobile ? 'flex-wrap' : ''} gap-2 md:gap-4 mb-8`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 md:px-4 py-2 rounded-lg transition-colors whitespace-nowrap text-sm md:text-base ${
                selectedCategory === category
                  ? 'bg-[#9b87f5] text-white'
                  : 'text-gray-400 hover:bg-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <Accordion type="single" collapsible key={product.id}>
              <AccordionItem value={product.id} className="border-none">
                <Card className="bg-[#1A1F2C] border-gray-800">
                  <AccordionTrigger className="w-full">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start w-full">
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold mb-2 text-left">{product.name}</h3>
                          <div className="flex flex-wrap items-center gap-2 md:gap-4">
                            <span className="text-[#9b87f5] bg-[#9b87f5]/10 px-2 py-1 rounded text-sm">
                              {product.category}
                            </span>
                            <span className="text-gray-400 text-sm">
                              ${product.dailyRevenue.toLocaleString()}/day
                            </span>
                          </div>
                        </div>
                        <ChevronDown className="h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200" />
                      </div>
                    </CardContent>
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent className="pt-0 pb-4">
                      <div className="border-t border-gray-800 pt-4 mt-2">
                        <h4 className="font-semibold mb-2">Value Proposition</h4>
                        <p className="text-gray-400 mb-4 text-sm md:text-base">{product.valueProposition}</p>
                        
                        <h4 className="font-semibold mb-2">Key Metrics</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <p className="text-gray-400 text-sm">Monthly Users</p>
                            <p className="font-semibold">{product.metrics.monthlyUsers.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">Avg. Order Value</p>
                            <p className="font-semibold">${product.metrics.averageOrderValue}</p>
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">Retention Rate</p>
                            <p className="font-semibold">{product.metrics.retentionRate}</p>
                          </div>
                        </div>

                        <h4 className="font-semibold mb-2">Niche Analysis</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          <div>
                            <p className="text-gray-400 text-sm">Target Market</p>
                            <p className="font-semibold">{product.niche.target}</p>
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">Competition</p>
                            <p className="font-semibold">{product.niche.competition}</p>
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">Market Size</p>
                            <p className="font-semibold">{product.niche.marketSize}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;

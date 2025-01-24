import { MainNav } from "@/components/MainNav";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const marketingTopics = [
  {
    id: "fundamentals",
    title: "Marketing Fundamentals",
    sections: [
      {
        title: "Understanding Your Market",
        content: "Learn how to identify and analyze your target market, create buyer personas, and understand market segmentation.",
      },
      {
        title: "Brand Development",
        content: "Master the art of building a strong brand identity, developing your unique value proposition, and creating brand guidelines.",
      },
      {
        title: "Marketing Strategy",
        content: "Develop comprehensive marketing strategies, set SMART goals, and create effective marketing plans.",
      },
    ],
  },
  {
    id: "digital",
    title: "Digital Marketing",
    sections: [
      {
        title: "Social Media Marketing",
        content: "Learn platform-specific strategies for Instagram, TikTok, YouTube, and other social media platforms.",
      },
      {
        title: "Content Marketing",
        content: "Master content creation, content calendars, and content distribution strategies.",
      },
      {
        title: "SEO Fundamentals",
        content: "Understand search engine optimization, keyword research, and on-page optimization techniques.",
      },
    ],
  },
  {
    id: "analytics",
    title: "Analytics & Optimization",
    sections: [
      {
        title: "Data Analysis",
        content: "Learn how to track, measure, and analyze marketing metrics and KPIs.",
      },
      {
        title: "Conversion Optimization",
        content: "Master A/B testing, landing page optimization, and conversion rate optimization.",
      },
      {
        title: "ROI Measurement",
        content: "Understand how to calculate and improve marketing ROI across different channels.",
      },
    ],
  },
];

const Training = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <MainNav />
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Marketing Training Hub</h1>
          <p className="text-gray-400">Comprehensive guides and resources for modern marketers</p>
        </div>

        <Tabs defaultValue="fundamentals" className="space-y-8">
          <TabsList className="bg-[#1A1F2C] border-b border-gray-800">
            {marketingTopics.map((topic) => (
              <TabsTrigger
                key={topic.id}
                value={topic.id}
                className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
              >
                {topic.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {marketingTopics.map((topic) => (
            <TabsContent key={topic.id} value={topic.id} className="space-y-6">
              {topic.sections.map((section, index) => (
                <Card key={index} className="bg-[#1A1F2C] border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">{section.title}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {section.content}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <button className="text-[#9b87f5] hover:text-[#7E69AB] transition-colors">
                      Start Learning →
                    </button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Training;
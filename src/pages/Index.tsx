import { WhopData } from "../../libs/shared/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const dummyData: WhopData = {
  platform_metrics: {
    total_revenue: 1250000,
    total_users: 15000,
  },
  top_communities: [
    {
      name: "Alpha Trading Group",
      price_per_unit: 99.99,
      price_duration: "month",
      logo: "https://picsum.photos/200",
      title: "Premium Trading Signals",
      whop_rank: 1,
      affiliate_earnings: 25000,
      rank: 1,
    },
    {
      name: "Crypto Masterminds",
      price_per_unit: 149.99,
      price_duration: "month",
      logo: "https://picsum.photos/201",
      title: "Expert Crypto Analysis",
      whop_rank: 2,
      affiliate_earnings: 22000,
      rank: 2,
    },
    {
      name: "Tech Innovators Hub",
      price_per_unit: 79.99,
      price_duration: "month",
      logo: "https://picsum.photos/202",
      title: "Latest Tech Insights",
      whop_rank: 3,
      affiliate_earnings: 18000,
      rank: 3,
    },
  ],
  updated_at: new Date().toISOString(),
};

const Index = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Whop Dashboard</h1>
        
        <div className="grid gap-6 mb-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">${dummyData.platform_metrics.total_revenue.toLocaleString()}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{dummyData.platform_metrics.total_users.toLocaleString()}</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Top Communities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {dummyData.top_communities.map((community) => (
                <div key={community.rank} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <img src={community.logo} alt={community.name} className="w-12 h-12 rounded-full" />
                    <div>
                      <h3 className="font-semibold">{community.name}</h3>
                      <p className="text-sm text-gray-600">{community.title}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${community.affiliate_earnings.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">${community.price_per_unit}/{community.price_duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
// Shared TypeScript types that can be used across the project

export interface Community {
  name: string;
  price_per_unit: number;
  price_duration: string;
  logo: string;
  title: string;
  whop_rank: number;
  affiliate_earnings: number;
  rank: number;
}

export interface PlatformMetrics {
  total_revenue: number;
  total_users: number;
}

export interface WhopData {
  platform_metrics: PlatformMetrics;
  top_communities: Community[];
  updated_at: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'gambling' | 'trading' | 'betting' | 'social media' | 'sales';
  dailyRevenue: number;
  valueProposition: string;
  description: string;
  metrics: {
    monthlyUsers: number;
    averageOrderValue: number;
    retentionRate: string;
  };
  niche: {
    target: string;
    competition: string;
    marketSize: string;
  };
}
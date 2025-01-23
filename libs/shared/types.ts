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
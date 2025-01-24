import { MainNav } from "@/components/MainNav";
import { BarChart3 } from "lucide-react";

const NicheAnalysis = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <MainNav />
        
        <div className="flex items-center gap-3 mb-8">
          <BarChart3 className="w-8 h-8 text-[#9b87f5]" />
          <h1 className="text-4xl font-bold">Niche Analysis</h1>
        </div>
        
        <div className="grid gap-6">
          <p className="text-gray-400">
            Detailed niche analysis coming soon. This page will provide in-depth market analysis, 
            competition metrics, and growth opportunities for various niches.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NicheAnalysis;
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, BarChart3, BookOpen, MessageSquare } from "lucide-react";

export const MainNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="flex items-center justify-between mb-8 w-full">
      <h1 className="text-2xl font-bold text-white">Info Radar</h1>
      <div className="flex gap-4">
        <Link 
          to="/" 
          className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
            isActive('/') ? 'bg-[#9b87f5] text-white' : 'text-gray-400 hover:bg-gray-800'
          }`}
        >
          <LayoutDashboard className="w-4 h-4" />
          Dashboard
        </Link>
        <Link 
          to="/niche-analysis" 
          className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
            isActive('/niche-analysis') ? 'bg-[#9b87f5] text-white' : 'text-gray-400 hover:bg-gray-800'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          Niche Analysis
        </Link>
        <Link 
          to="/training" 
          className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
            isActive('/training') ? 'bg-[#9b87f5] text-white' : 'text-gray-400 hover:bg-gray-800'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          Training
        </Link>
        <Link 
          to="/ai-chat" 
          className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
            isActive('/ai-chat') ? 'bg-[#9b87f5] text-white' : 'text-gray-400 hover:bg-gray-800'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          AI Chat
        </Link>
      </div>
    </div>
  );
};
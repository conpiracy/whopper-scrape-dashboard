import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, BarChart3, BookOpen, MessageSquare, Menu } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export const MainNav = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/niche-analysis", icon: BarChart3, label: "Niche Analysis" },
    { path: "/training", icon: BookOpen, label: "Training" },
    { path: "/ai-chat", icon: MessageSquare, label: "AI Chat" },
  ];
  
  return (
    <div className="flex flex-col w-full mb-8">
      <div className="flex items-center justify-between w-full mb-4">
        <h1 className="text-2xl font-bold text-foreground">Info Radar</h1>
        {isMobile && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-muted-foreground hover:bg-muted rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>
        )}
      </div>
      
      <nav className={`${isMobile ? (isMenuOpen ? 'flex' : 'hidden') : 'flex'} ${
        isMobile ? 'flex-col space-y-2' : 'flex-row gap-4'
      }`}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
              isActive(item.path)
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-muted'
            } ${isMobile ? 'w-full' : ''}`}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};
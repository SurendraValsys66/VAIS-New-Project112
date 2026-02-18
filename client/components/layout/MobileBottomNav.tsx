import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Search,
  BarChart3,
  Download,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  {
    name: "Home",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Search",
    href: "/find-prospect",
    icon: Search,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    name: "History",
    href: "/my-downloads",
    icon: Download,
  },
  {
    name: "Profile",
    href: "/settings",
    icon: Settings,
  },
];

export default function MobileBottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine which nav item is active
  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 lg:hidden bg-white border-t border-valasys-gray-200 shadow-lg">
      <div className="flex items-center justify-around h-20">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <button
              key={item.href}
              onClick={() => navigate(item.href)}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full py-2 px-1 transition-colors duration-200 rounded-none",
                active
                  ? "text-valasys-orange border-t-2 border-t-valasys-orange"
                  : "text-valasys-gray-600 hover:text-valasys-gray-900",
              )}
              aria-current={active ? "page" : undefined}
              title={item.name}
            >
              <Icon className="h-6 w-6 mb-1" />
              <span className="text-xs font-medium truncate">{item.name}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

import { useLocation, useNavigate } from "react-router-dom";
import { Home, Camera, ShoppingBag, BookOpen, User } from "lucide-react";

const navItems = [
  { label: "Home", icon: Home, path: "/" },
  { label: "Analyze", icon: Camera, path: "/food-analysis" },
  { label: "Market", icon: ShoppingBag, path: "/marketplace" },
  { label: "Learn", icon: BookOpen, path: "/education" },
  { label: "Profile", icon: User, path: "/profile" },
];

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t bg-card/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-md items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center gap-0.5 rounded-xl px-3 py-1.5 transition-colors ${
                active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <item.icon className={`h-5 w-5 ${active ? "stroke-[2.5]" : ""}`} />
              <span className={`text-[10px] font-medium ${active ? "font-semibold" : ""}`}>{item.label}</span>
              {active && <div className="h-1 w-4 rounded-full bg-primary" />}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;

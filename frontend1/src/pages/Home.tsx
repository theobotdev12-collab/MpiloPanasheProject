import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, ShoppingBag, BookOpen, Heart, Lightbulb, ChevronRight } from "lucide-react";
import { healthTips } from "@/data/mockData";

const quickCards = [
  { title: "Food Analysis", description: "Scan your meals", icon: Camera, path: "/food-analysis", color: "bg-primary/10 text-primary" },
  { title: "Marketplace", description: "Shop healthy", icon: ShoppingBag, path: "/marketplace", color: "bg-secondary/10 text-secondary" },
  { title: "Education", description: "Learn & grow", icon: BookOpen, path: "/education", color: "bg-accent text-accent-foreground" },
];

const Home = () => {
  const navigate = useNavigate();
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((i) => (i + 1) % healthTips.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6 pb-4">
      {/* Greeting */}
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground">Good Morning! 👋</h1>
        <p className="mt-1 text-muted-foreground">Let's take care of your kidneys today</p>
      </div>

      {/* Health Tip */}
      <motion.div
        key={tipIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-gradient-to-r from-primary to-emerald-glow p-4"
      >
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/20">
            <Lightbulb className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-foreground/70">Tip of the Day</p>
            <p className="mt-1 text-sm font-medium text-primary-foreground">{healthTips[tipIndex]}</p>
          </div>
        </div>
      </motion.div>

      {/* Quick Access */}
      <div>
        <h2 className="font-display text-lg font-semibold text-foreground mb-3">Quick Access</h2>
        <div className="grid grid-cols-3 gap-3">
          {quickCards.map((card) => (
            <Card
              key={card.title}
              className="cursor-pointer border-0 shadow-sm hover:shadow-md transition-shadow"
              onClick={() => navigate(card.path)}
            >
              <CardContent className="flex flex-col items-center p-4 text-center">
                <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-2xl ${card.color}`}>
                  <card.icon className="h-6 w-6" />
                </div>
                <p className="text-xs font-semibold text-foreground">{card.title}</p>
                <p className="mt-0.5 text-[10px] text-muted-foreground">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div>
        <h2 className="font-display text-lg font-semibold text-foreground mb-3">Today's Activity</h2>
        <div className="grid grid-cols-2 gap-3">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Camera className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">3</p>
                  <p className="text-xs text-muted-foreground">Foods Analyzed</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10">
                  <BookOpen className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">2</p>
                  <p className="text-xs text-muted-foreground">Articles Read</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Tips */}
      <div>
        <h2 className="font-display text-lg font-semibold text-foreground mb-3">Daily Tips</h2>
        <div className="space-y-2">
          {healthTips.slice(0, 3).map((tip, i) => (
            <Card key={i} className="border-0 shadow-sm">
              <CardContent className="flex items-center gap-3 p-3">
                <Heart className="h-5 w-5 shrink-0 text-primary" />
                <p className="flex-1 text-sm text-foreground">{tip}</p>
                <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

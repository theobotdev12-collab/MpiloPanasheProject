import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Camera, ShoppingBag, BookOpen, ArrowRight } from "lucide-react";

const slides = [
  {
    icon: Camera,
    title: "Analyze Your Food",
    description: "Upload a photo of any meal and instantly learn how kidney-friendly it is, with detailed nutrient breakdowns.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: ShoppingBag,
    title: "Shop Kidney-Friendly",
    description: "Browse our curated marketplace of organic products specially selected for kidney health.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: BookOpen,
    title: "Learn & Thrive",
    description: "Access expert articles, recipes, and lifestyle tips to manage your kidney health with confidence.",
    color: "bg-accent text-accent-foreground",
  },
];

const Onboarding = ({ onComplete }: { onComplete: () => void }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="flex min-h-screen flex-col bg-background px-6 pb-8 pt-12">
      <div className="mb-4 flex items-center gap-2">
        <Heart className="h-6 w-6 text-primary" fill="currentColor" />
        <span className="font-display text-xl font-bold text-foreground">Impilo</span>
      </div>

      <div className="flex flex-1 flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center text-center"
          >
            <div className={`mb-8 flex h-28 w-28 items-center justify-center rounded-[2rem] ${slides[current].color}`}>
              {(() => {
                const Icon = slides[current].icon;
                return <Icon className="h-14 w-14" strokeWidth={1.5} />;
              })()}
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">{slides[current].title}</h2>
            <p className="mt-3 max-w-xs text-muted-foreground">{slides[current].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-primary" : "w-2 bg-border"}`}
            />
          ))}
        </div>

        {current < slides.length - 1 ? (
          <Button onClick={() => setCurrent(current + 1)} size="lg" className="rounded-full gap-2">
            Next <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={onComplete} size="lg" className="rounded-full gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Onboarding;

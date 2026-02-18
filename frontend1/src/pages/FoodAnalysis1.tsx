/*import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Upload, Clock, CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { sampleAnalyses, type FoodAnalysis as FoodAnalysisType } from "@/data/mockData";

const ratingConfig = {
  good: { label: "Kidney Friendly", color: "bg-success/10 text-success", icon: CheckCircle, border: "border-success/20" },
  caution: { label: "Use Caution", color: "bg-caution/10 text-caution", icon: AlertTriangle, border: "border-caution/20" },
  avoid: { label: "Best to Avoid", color: "bg-avoid/10 text-avoid", icon: XCircle, border: "border-avoid/20" },
};

const FoodAnalysis = () => {
  const [analyses, setAnalyses] = useState<FoodAnalysisType[]>(sampleAnalyses);
  const [analyzing, setAnalyzing] = useState(false);
  const [selected, setSelected] = useState<FoodAnalysisType | null>(null);

  const simulateAnalysis = () => {
    setAnalyzing(true);
    setTimeout(() => {
      const newAnalysis: FoodAnalysisType = {
        id: Date.now().toString(),
        name: "Mixed Salad",
        image: "🥗",
        rating: "good",
        sodium: 45,
        potassium: 180,
        phosphorus: 55,
        recommendation: "Excellent choice! Fresh salads with low-potassium vegetables are great for kidney health.",
        analyzedAt: "Just now",
      };
      setAnalyses((prev) => [newAnalysis, ...prev]);
      setSelected(newAnalysis);
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="space-y-6 pb-4">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground">Food Analysis</h1>
        <p className="mt-1 text-muted-foreground">Check if your food is kidney-friendly</p>
      </div>

      {/* Upload Area */}
      /*<Card className="border-2 border-dashed border-primary/30 bg-primary/5">
        <CardContent className="flex flex-col items-center py-8">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <Camera className="h-8 w-8 text-primary" />
          </div>
          <p className="mb-1 font-semibold text-foreground">Analyze Your Food</p>
          <p className="mb-4 text-center text-sm text-muted-foreground">
            Take a photo or upload an image of your meal
          </p>
          <div className="flex gap-3">
            <Button onClick={simulateAnalysis} disabled={analyzing} className="rounded-full gap-2">
              <Camera className="h-4 w-4" /> {analyzing ? "Analyzing..." : "Take Photo"}
            </Button>
            <Button variant="outline" onClick={simulateAnalysis} disabled={analyzing} className="rounded-full gap-2">
              <Upload className="h-4 w-4" /> Upload
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Analysis Result */}
      /*<AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <Card className={`border ${ratingConfig[selected.rating].border}`}>
              <CardContent className="p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{selected.image}</span>
                    <div>
                      <p className="font-semibold text-foreground">{selected.name}</p>
                      <p className="text-xs text-muted-foreground">{selected.analyzedAt}</p>
                    </div>
                  </div>
                  <span className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${ratingConfig[selected.rating].color}`}>
                    {(() => { const Icon = ratingConfig[selected.rating].icon; return <Icon className="h-3 w-3" />; })()}
                    {ratingConfig[selected.rating].label}
                  </span>
                </div>

                <div className="mb-3 grid grid-cols-3 gap-2">
                  {[
                    { label: "Sodium", value: `${selected.sodium}mg`, max: 600 },
                    { label: "Potassium", value: `${selected.potassium}mg`, max: 500 },
                    { label: "Phosphorus", value: `${selected.phosphorus}mg`, max: 400 },
                  ].map((n) => (
                    <div key={n.label} className="rounded-xl bg-muted p-3 text-center">
                      <p className="text-xs text-muted-foreground">{n.label}</p>
                      <p className="text-lg font-bold text-foreground">{n.value}</p>
                      <div className="mt-1 h-1 rounded-full bg-border">
                        <div
                          className="h-1 rounded-full bg-primary transition-all"
                          style={{ width: `${Math.min(100, (parseInt(n.value) / n.max) * 100)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground">{selected.recommendation}</p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* History */}
     /* <div>
        <h2 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
          <Clock className="h-5 w-5 text-muted-foreground" /> Analysis History
        </h2>
        <div className="space-y-2">
          {analyses.map((a) => (
            <Card
              key={a.id}
              className="cursor-pointer border-0 shadow-sm hover:shadow-md transition-shadow"
              onClick={() => setSelected(a)}
            >
              <CardContent className="flex items-center gap-3 p-3">
                <span className="text-2xl">{a.image}</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">{a.name}</p>
                  <p className="text-xs text-muted-foreground">{a.analyzedAt}</p>
                </div>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${ratingConfig[a.rating].color}`}>
                  {ratingConfig[a.rating].label}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodAnalysis;*/

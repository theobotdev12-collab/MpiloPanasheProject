export const healthTips = [
  "Stay hydrated! Aim for 6-8 glasses of water daily, but consult your doctor about your specific fluid intake.",
  "Reduce sodium intake to less than 2,300mg per day to help protect your kidneys.",
  "Include more fruits like apples, berries, and grapes — they're kidney-friendly!",
  "Regular physical activity helps maintain healthy blood pressure and kidney function.",
  "Limit processed foods — they often contain hidden sodium and phosphorus additives.",
];

export interface FoodAnalysis {
  id: string;
  name: string;
  image: string;
  rating: "good" | "caution" | "avoid";
  sodium: number;
  potassium: number;
  phosphorus: number;
  recommendation: string;
  analyzedAt: string;
}

export const sampleAnalyses: FoodAnalysis[] = [
  {
    id: "1",
    name: "Grilled Chicken Breast",
    image: "🍗",
    rating: "good",
    sodium: 74,
    potassium: 256,
    phosphorus: 228,
    recommendation: "Great choice! Lean protein that's easy on your kidneys. Keep portions moderate.",
    analyzedAt: "Today, 10:30 AM",
  },
  {
    id: "2",
    name: "Banana",
    image: "🍌",
    rating: "caution",
    sodium: 1,
    potassium: 422,
    phosphorus: 26,
    recommendation: "High in potassium. Enjoy in small portions or swap for apples or berries.",
    analyzedAt: "Today, 8:15 AM",
  },
  {
    id: "3",
    name: "Processed Deli Meat",
    image: "🥩",
    rating: "avoid",
    sodium: 1200,
    potassium: 180,
    phosphorus: 300,
    recommendation: "Very high in sodium and phosphorus additives. Choose fresh meat instead.",
    analyzedAt: "Yesterday, 1:00 PM",
  },
];

export interface Product {
  id: string;
  name: string;
  category: "fruits" | "vegetables" | "grains" | "supplements";
  price: number;
  image: string;
  badge: string;
  description: string;
  kidneyNote: string;
}

export const products: Product[] = [
  { id: "1", name: "Organic Apples", category: "fruits", price: 4.99, image: "🍎", badge: "Kidney Safe", description: "Fresh organic apples, perfect for kidney-friendly snacking.", kidneyNote: "Low in potassium and phosphorus. Excellent kidney-friendly fruit." },
  { id: "2", name: "Fresh Blueberries", category: "fruits", price: 6.49, image: "🫐", badge: "Superfood", description: "Antioxidant-rich blueberries from local farms.", kidneyNote: "Rich in antioxidants, low potassium. Great for kidney health." },
  { id: "3", name: "Red Grapes", category: "fruits", price: 5.29, image: "🍇", badge: "Heart Healthy", description: "Sweet seedless red grapes, naturally delicious.", kidneyNote: "Contains resveratrol. Low potassium fruit suitable for CKD diets." },
  { id: "4", name: "Bell Peppers", category: "vegetables", price: 3.99, image: "🫑", badge: "Kidney Safe", description: "Colorful organic bell peppers packed with vitamins.", kidneyNote: "Low potassium, high in vitamin C. Excellent kidney-friendly vegetable." },
  { id: "5", name: "Cauliflower", category: "vegetables", price: 3.49, image: "🥦", badge: "Low Potassium", description: "Fresh organic cauliflower, versatile and nutritious.", kidneyNote: "Great substitute for potatoes. Low in potassium when boiled." },
  { id: "6", name: "Cabbage", category: "vegetables", price: 2.99, image: "🥬", badge: "Budget Pick", description: "Crunchy green cabbage, perfect for salads and stir-fry.", kidneyNote: "Very low potassium and phosphorus. Rich in vitamin K." },
  { id: "7", name: "White Rice", category: "grains", price: 3.99, image: "🍚", badge: "Kidney Safe", description: "Premium long-grain white rice.", kidneyNote: "Lower in phosphorus than brown rice. Good energy source for CKD." },
  { id: "8", name: "Sourdough Bread", category: "grains", price: 5.49, image: "🍞", badge: "Low Phosphorus", description: "Artisan sourdough bread, freshly baked.", kidneyNote: "Fermentation reduces phosphorus. Better choice than whole wheat." },
  { id: "9", name: "Omega-3 Supplement", category: "supplements", price: 19.99, image: "💊", badge: "Recommended", description: "High-quality fish oil omega-3 capsules.", kidneyNote: "Supports heart health. Consult doctor for CKD-appropriate dosing." },
  { id: "10", name: "Vitamin D3", category: "supplements", price: 14.99, image: "☀️", badge: "Essential", description: "Vitamin D3 supplement for bone health.", kidneyNote: "Often needed in CKD. Active form may be required — consult nephrologist." },
];

export interface Article {
  id: string;
  title: string;
  category: "nutrition" | "lifestyle" | "understanding-ckd" | "recipes";
  excerpt: string;
  content: string;
  readTime: string;
  image: string;
}

export const articles: Article[] = [
  {
    id: "1", title: "Understanding Your Kidney-Friendly Diet", category: "nutrition",
    excerpt: "Learn the basics of eating well while protecting your kidneys.",
    content: "A kidney-friendly diet helps protect your kidneys from further damage. Key principles include limiting sodium to less than 2,300mg daily, monitoring potassium and phosphorus intake, choosing high-quality proteins in moderate amounts, and staying properly hydrated.\n\nFocus on fresh fruits and vegetables that are lower in potassium, such as apples, berries, cabbage, and bell peppers. Avoid processed foods which often contain hidden sodium and phosphorus additives.\n\nWork with a renal dietitian to create a personalized meal plan that accounts for your specific stage of kidney disease and nutritional needs.",
    readTime: "5 min", image: "🥗",
  },
  {
    id: "2", title: "Exercise Tips for Kidney Health", category: "lifestyle",
    excerpt: "Safe and effective ways to stay active with kidney disease.",
    content: "Regular exercise benefits kidney health by helping control blood pressure, blood sugar, and weight. Aim for 150 minutes of moderate activity per week.\n\nGood options include walking, swimming, cycling, and light strength training. Start slowly and gradually increase intensity. Always warm up and cool down properly.\n\nListen to your body and rest when needed. Stay hydrated according to your doctor's fluid recommendations. Avoid exercising in extreme heat.",
    readTime: "4 min", image: "🏃",
  },
  {
    id: "3", title: "What is Chronic Kidney Disease?", category: "understanding-ckd",
    excerpt: "A comprehensive guide to understanding CKD stages and management.",
    content: "Chronic Kidney Disease (CKD) is a condition where the kidneys gradually lose function over time. It's classified into 5 stages based on GFR (Glomerular Filtration Rate).\n\nStage 1-2: Mild kidney damage with normal or slightly reduced function.\nStage 3: Moderate reduction in kidney function.\nStage 4: Severe reduction in kidney function.\nStage 5: Kidney failure requiring dialysis or transplant.\n\nEarly detection through regular screening is crucial. Risk factors include diabetes, high blood pressure, family history, and age over 60.",
    readTime: "7 min", image: "🏥",
  },
  {
    id: "4", title: "Kidney-Friendly Smoothie Recipes", category: "recipes",
    excerpt: "Delicious smoothie ideas that are gentle on your kidneys.",
    content: "These smoothies are designed to be low in potassium and phosphorus while being delicious and nutritious.\n\n**Berry Blast Smoothie**\n- 1/2 cup blueberries\n- 1/2 cup strawberries\n- 1/2 cup rice milk\n- 1 tbsp honey\n\n**Apple Ginger Refresher**\n- 1 apple, chopped\n- 1/2 inch fresh ginger\n- 1/2 cup cranberry juice\n- Ice cubes\n\nBlend until smooth and enjoy! These recipes keep potassium under 200mg per serving.",
    readTime: "3 min", image: "🥤",
  },
  {
    id: "5", title: "Managing Stress with Kidney Disease", category: "lifestyle",
    excerpt: "Practical strategies for emotional well-being.",
    content: "Living with kidney disease can be stressful. Managing stress is important because chronic stress can raise blood pressure, which affects kidney health.\n\nTry these strategies:\n- Deep breathing exercises for 5-10 minutes daily\n- Mindfulness meditation\n- Gentle yoga or tai chi\n- Journaling your thoughts and feelings\n- Connecting with support groups\n- Maintaining social connections\n\nDon't hesitate to seek professional support if you're feeling overwhelmed.",
    readTime: "4 min", image: "🧘",
  },
  {
    id: "6", title: "Reading Food Labels for Kidney Health", category: "nutrition",
    excerpt: "How to decode nutrition labels to protect your kidneys.",
    content: "Understanding food labels is essential for managing kidney health. Here's what to look for:\n\n**Sodium**: Aim for less than 140mg per serving for 'low sodium'. Avoid anything over 600mg per serving.\n\n**Phosphorus**: Look for phosphorus additives (PHOS in ingredients). These are nearly 100% absorbed vs. 40-60% from natural sources.\n\n**Potassium**: Not always listed, but becoming more common. Check serving sizes carefully.\n\n**Protein**: Monitor total protein intake. Quality matters — choose lean sources.",
    readTime: "5 min", image: "🏷️",
  },
];

export const categoryLabels: Record<string, string> = {
  fruits: "🍎 Fruits",
  vegetables: "🥬 Vegetables",
  grains: "🌾 Grains",
  supplements: "💊 Supplements",
  nutrition: "🥗 Nutrition",
  lifestyle: "🏃 Lifestyle",
  "understanding-ckd": "🏥 Understanding CKD",
  recipes: "🍳 Recipes",
};

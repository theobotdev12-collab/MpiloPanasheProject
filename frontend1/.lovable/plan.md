

# Impilo: Kidney Health Companion – Implementation Plan

## Overview
A mobile-first kidney health management prototype with an emerald/teal color scheme, featuring splash screen, onboarding, and four core modules — all without authentication, serving as a proof-of-concept.

---

## 1. Splash Screen & Onboarding
- **Splash screen** with Impilo logo/brand name, emerald gradient background, and a brief loading animation before auto-transitioning
- **Welcome/onboarding screen** with 2-3 swipeable slides highlighting key features (Food Analysis, Marketplace, Education Hub) with illustrations and a "Get Started" button

## 2. Home Dashboard
- Greeting banner with health tip of the day
- Quick-access cards to Food Analysis, Marketplace, and Education Hub
- Daily kidney health tips carousel
- Summary stats (e.g., foods analyzed today, articles read) using local state

## 3. Food Analysis Tool
- Upload or capture a food photo (simulated with file picker)
- AI-powered analysis display showing:
  - Food identification
  - Kidney-friendliness rating (Good / Caution / Avoid)
  - Key nutrients breakdown (sodium, potassium, phosphorus)
  - Personalized recommendations
- Analysis history list stored in local state

## 4. Organic Marketplace
- Browse kidney-friendly products in categorized grid (Fruits, Vegetables, Grains, Supplements)
- Product cards with images, prices, and kidney-health badges
- Product detail view with nutritional info and kidney-health notes
- Simple cart functionality (local state, no real checkout)
- "Sell" section placeholder for vendors

## 5. Education Hub
- Curated articles and tips organized by category (Nutrition, Lifestyle, Understanding CKD, Recipes)
- Article detail view with rich content
- Bookmarking feature (local state)
- Search and filter functionality

## 6. Profile Section
- User profile display with editable name and avatar placeholder
- Settings (notifications toggle, dark mode toggle)
- Health preferences (dietary restrictions, CKD stage selector)
- App information and help links

## 7. Bottom Navigation Bar
- Persistent mobile bottom nav with icons for: Home, Food Analysis, Marketplace, Education, Profile
- Active state highlighting with emerald accent

## 8. Design System
- Emerald and teal color scheme applied globally (primary emerald, accent teal, soft mint backgrounds)
- Mobile-optimized layouts (max-width container, touch-friendly tap targets)
- Rounded cards, soft shadows, and health-themed iconography
- All screens designed for 390px mobile viewport first

---

All data will be hardcoded/mocked for this prototype. No backend or authentication required — this is a fully functional UI demonstration ready for stakeholder review and usability testing.


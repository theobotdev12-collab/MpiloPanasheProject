import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { ShoppingCart, Plus, Minus, X, Store } from "lucide-react";
import { products, categoryLabels, type Product } from "@/data/mockData";

type CartItem = { product: Product; qty: number };

const categories = ["all", "fruits", "vegetables", "grains", "supplements"] as const;

const Marketplace = () => {
  const [category, setCategory] = useState<string>("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = category === "all" ? products : products.filter((p) => p.category === category);
  const cartTotal = cart.reduce((s, i) => s + i.product.price * i.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) return prev.map((i) => i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { product, qty: 1 }];
    });
  };

  const updateQty = (id: string, delta: number) => {
    setCart((prev) => prev.map((i) => i.product.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i).filter((i) => i.qty > 0));
  };

  return (
    <div className="space-y-6 pb-4">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Marketplace</h1>
          <p className="mt-1 text-muted-foreground">Kidney-friendly organic products</p>
        </div>
        <Button variant="outline" size="icon" className="relative rounded-full" onClick={() => setCartOpen(true)}>
          <ShoppingCart className="h-5 w-5" />
          {cartCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              {cartCount}
            </span>
          )}
        </Button>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              category === c ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            {c === "all" ? "🛒 All" : categoryLabels[c]}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-3">
        {filtered.map((product) => (
          <Card key={product.id} className="border-0 shadow-sm overflow-hidden cursor-pointer" onClick={() => setSelectedProduct(product)}>
            <CardContent className="p-3">
              <div className="mb-2 flex h-20 items-center justify-center rounded-xl bg-muted text-4xl">
                {product.image}
              </div>
              <Badge variant="secondary" className="mb-1 text-[10px]">{product.badge}</Badge>
              <p className="text-sm font-semibold text-foreground leading-tight">{product.name}</p>
              <div className="mt-2 flex items-center justify-between">
                <p className="font-bold text-primary">${product.price.toFixed(2)}</p>
                <Button
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sell Placeholder */}
      <Card className="border-2 border-dashed border-secondary/30 bg-secondary/5">
        <CardContent className="flex flex-col items-center py-6">
          <Store className="mb-2 h-8 w-8 text-secondary" />
          <p className="font-semibold text-foreground">Want to Sell?</p>
          <p className="mt-1 text-center text-sm text-muted-foreground">
            Vendor registration coming soon. Sell your organic kidney-friendly products.
          </p>
        </CardContent>
      </Card>

      {/* Product Detail Sheet */}
      <Sheet open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <SheetContent side="bottom" className="rounded-t-3xl">
          {selectedProduct && (
            <>
              <SheetHeader>
                <div className="mx-auto mb-2 flex h-24 w-24 items-center justify-center rounded-2xl bg-muted text-5xl">
                  {selectedProduct.image}
                </div>
                <SheetTitle>{selectedProduct.name}</SheetTitle>
                <SheetDescription>{selectedProduct.description}</SheetDescription>
              </SheetHeader>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-accent p-3">
                  <p className="text-xs font-semibold text-accent-foreground">🏥 Kidney Health Note</p>
                  <p className="mt-1 text-sm text-muted-foreground">{selectedProduct.kidneyNote}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-primary">${selectedProduct.price.toFixed(2)}</p>
                  <Button className="rounded-full gap-2" onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); }}>
                    <Plus className="h-4 w-4" /> Add to Cart
                  </Button>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>

      {/* Cart Sheet */}
      <Sheet open={cartOpen} onOpenChange={setCartOpen}>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Your Cart ({cartCount})</SheetTitle>
            <SheetDescription>Kidney-friendly selections</SheetDescription>
          </SheetHeader>
          <div className="mt-4 flex-1 space-y-3">
            {cart.length === 0 ? (
              <p className="text-center text-sm text-muted-foreground py-8">Your cart is empty</p>
            ) : (
              cart.map((item) => (
                <div key={item.product.id} className="flex items-center gap-3 rounded-xl bg-muted p-3">
                  <span className="text-2xl">{item.product.image}</span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">{item.product.name}</p>
                    <p className="text-xs text-muted-foreground">${item.product.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQty(item.product.id, -1)} className="flex h-7 w-7 items-center justify-center rounded-full bg-background text-foreground">
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-5 text-center text-sm font-semibold">{item.qty}</span>
                    <button onClick={() => updateQty(item.product.id, 1)} className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          {cart.length > 0 && (
            <div className="mt-4 border-t pt-4">
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-foreground">Total</span>
                <span className="text-xl font-bold text-primary">${cartTotal.toFixed(2)}</span>
              </div>
              <Button className="w-full rounded-full" size="lg">Checkout (Demo)</Button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Marketplace;

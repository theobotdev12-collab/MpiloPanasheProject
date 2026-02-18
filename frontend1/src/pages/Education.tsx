import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Search, Bookmark, BookmarkCheck, Clock, ArrowLeft } from "lucide-react";
import { articles, categoryLabels, type Article } from "@/data/mockData";

const categories = ["all", "nutrition", "lifestyle", "understanding-ckd", "recipes"] as const;

const Education = () => {
  const [category, setCategory] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filtered = articles.filter((a) => {
    const matchCat = category === "all" || a.category === category;
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) || a.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className="space-y-6 pb-4">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground">Education Hub</h1>
        <p className="mt-1 text-muted-foreground">Learn about kidney health</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 rounded-full bg-muted border-0"
        />
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
            {c === "all" ? "📚 All" : categoryLabels[c]}
          </button>
        ))}
      </div>

      {/* Articles */}
      <div className="space-y-3">
        {filtered.map((article) => (
          <Card
            key={article.id}
            className="border-0 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setSelectedArticle(article)}
          >
            <CardContent className="p-4">
              <div className="flex gap-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-muted text-2xl">
                  {article.image}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground leading-tight">{article.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{article.excerpt}</p>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                      <Clock className="h-3 w-3" /> {article.readTime}
                    </span>
                    <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium text-accent-foreground">
                      {categoryLabels[article.category]}
                    </span>
                  </div>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); toggleBookmark(article.id); }}
                  className="shrink-0 self-start"
                >
                  {bookmarks.has(article.id) ? (
                    <BookmarkCheck className="h-5 w-5 text-primary" />
                  ) : (
                    <Bookmark className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-sm text-muted-foreground py-8">No articles found</p>
        )}
      </div>

      {/* Article Detail */}
      <Sheet open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <SheetContent side="bottom" className="rounded-t-3xl h-[85vh] overflow-y-auto">
          {selectedArticle && (
            <>
              <SheetHeader>
                <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-2xl bg-muted text-3xl">
                  {selectedArticle.image}
                </div>
                <SheetTitle className="text-left">{selectedArticle.title}</SheetTitle>
                <SheetDescription className="flex items-center gap-3 text-left">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {selectedArticle.readTime}</span>
                  <span>{categoryLabels[selectedArticle.category]}</span>
                </SheetDescription>
              </SheetHeader>
              <div className="mt-4 space-y-3">
                {selectedArticle.content.split("\n\n").map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-foreground whitespace-pre-line">{p}</p>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 rounded-full gap-2"
                  onClick={() => toggleBookmark(selectedArticle.id)}
                >
                  {bookmarks.has(selectedArticle.id) ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
                  {bookmarks.has(selectedArticle.id) ? "Bookmarked" : "Bookmark"}
                </Button>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Education;

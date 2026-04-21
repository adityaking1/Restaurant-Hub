import { siteConfig } from "@/config/site";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { CalendarDays, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">Blog & Artikel</h1>
        <p className="text-muted-foreground text-lg">
          Kumpulan cerita, resep, dan tips seputar dunia kuliner Nusantara dari tim {siteConfig.brand.name}.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteConfig.blog.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/blog/${post.id}`}>
              <Card className="h-full overflow-hidden group cursor-pointer border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground font-bold shadow-md">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" /> {post.author}
                    </span>
                  </div>
                  <h2 className="font-serif font-bold text-xl md:text-2xl mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 font-semibold text-primary text-sm flex items-center gap-1">
                    Baca Selengkapnya <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

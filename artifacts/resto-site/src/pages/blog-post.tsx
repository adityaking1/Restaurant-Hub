import { siteConfig } from "@/config/site";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { CalendarDays, User, ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function BlogPostPage() {
  const params = useParams();
  const post = siteConfig.blog.find((b) => b.id === params.id);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-serif font-bold mb-4">Artikel Tidak Ditemukan</h1>
        <Button asChild>
          <Link href="/blog">Kembali ke Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <article className="w-full pb-20">
      {/* Hero Image */}
      <div className="w-full h-[40vh] md:h-[60vh] relative">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <div className="container mx-auto max-w-4xl">
            <Badge className="bg-accent text-accent-foreground font-bold mb-4">
              <Tag className="w-3 h-3 mr-1 inline" /> {post.category}
            </Badge>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg leading-tight"
            >
              {post.title}
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap items-center gap-6 text-white/90 text-sm md:text-base font-medium"
            >
              <span className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-primary" /> {post.date}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" /> {post.author}
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-12">
        <div className="max-w-3xl mx-auto">
          <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary gap-2" asChild>
            <Link href="/blog"><ArrowLeft className="w-4 h-4" /> Kembali ke Blog</Link>
          </Button>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg md:prose-xl max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary"
          >
            <p className="text-xl md:text-2xl font-medium text-foreground/80 italic border-l-4 border-primary pl-6 mb-8">
              {post.excerpt}
            </p>
            {/* Split content by newlines and map to paragraphs. Since config has single paragraph, this just renders it, but handles multiple safely */}
            {post.content.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </motion.div>
        </div>
      </div>
    </article>
  );
}

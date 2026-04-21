import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TestimonialPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">Apa Kata Mereka</h1>
        <p className="text-muted-foreground text-lg">
          Kebahagiaan pelanggan adalah prioritas utama kami. Ini adalah pengalaman bersantap mereka di {siteConfig.brand.name}.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteConfig.testimonials.map((t, index) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full bg-card hover:shadow-lg transition-shadow border-border/50 relative overflow-hidden">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < t.rating ? "fill-accent text-accent" : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-foreground/80 text-lg leading-relaxed flex-1 italic mb-8">
                  "{t.comment}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <Avatar className="w-14 h-14 border-2 border-primary/20">
                    <AvatarImage src={t.avatar} alt={t.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-serif font-bold">
                      {t.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-foreground font-serif">{t.name}</h4>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

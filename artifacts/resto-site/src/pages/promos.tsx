import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { Calendar, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PromoPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">Promo & Event</h1>
        <p className="text-muted-foreground text-lg">
          Jangan lewatkan penawaran spesial dan acara menarik di {siteConfig.brand.name}.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteConfig.promos.map((promo, index) => (
          <motion.div
            key={promo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full overflow-hidden group border-border/50 hover:shadow-lg transition-all">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground font-bold px-3 py-1 shadow-md">
                  <Tag className="w-3 h-3 mr-1 inline" /> {promo.badge}
                </Badge>
              </div>
              <CardContent className="p-6 flex flex-col">
                <h3 className="font-serif font-bold text-2xl mb-3 text-foreground group-hover:text-primary transition-colors">
                  {promo.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  {promo.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-foreground/80 bg-muted/50 p-3 rounded-lg mt-auto">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>Berlaku: {promo.validUntil}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

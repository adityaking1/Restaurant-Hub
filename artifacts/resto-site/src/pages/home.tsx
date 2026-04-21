import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatRupiah } from "@/config/site";
import { Star, MapPin } from "lucide-react";

export default function Home() {
  const popularMenu = siteConfig.menu.filter((item) => item.popular).slice(0, 4);
  const recentBlogs = siteConfig.blog.slice(0, 3);
  const previewGallery = siteConfig.gallery.slice(0, 6);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={siteConfig.hero.backgroundImage} 
            alt="Hero Background" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white drop-shadow-xl tracking-tight">
              {siteConfig.hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 drop-shadow-md leading-relaxed max-w-2xl mx-auto font-medium">
              {siteConfig.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full shadow-lg shadow-primary/25 hover-elevate" asChild>
                <Link href="/reservasi">{siteConfig.hero.ctaPrimary}</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full bg-white/10 text-white hover:bg-white hover:text-foreground border-white/30 backdrop-blur-sm" asChild>
                <Link href="/menu">{siteConfig.hero.ctaSecondary}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8 relative z-10"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2">
                Cerita Kami
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                {siteConfig.about.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg md:text-xl">
                {siteConfig.about.story}
              </p>
              <Button variant="link" className="p-0 text-primary h-auto font-semibold text-lg" asChild>
                <Link href="/tentang">Kenali Kami Lebih Dekat &rarr;</Link>
              </Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img 
                  src={siteConfig.about.image} 
                  alt={siteConfig.about.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Menu */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground font-medium text-sm mb-4">
                Pilihan Favorit
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Menu Terpopuler</h2>
            </motion.div>
            <Button variant="outline" size="lg" className="rounded-full" asChild>
              <Link href="/menu">Lihat Semua Menu</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularMenu.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href="/menu">
                  <Card className="h-full cursor-pointer overflow-hidden group border-border/50 hover:border-primary/50 hover:shadow-xl transition-all bg-card">
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-serif font-bold text-xl mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
                      <p className="font-bold text-primary text-lg">{formatRupiah(item.price)}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promos */}
      {siteConfig.promos.length > 0 && (
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Promo Spesial</h2>
              <p className="text-lg text-muted-foreground">Penawaran terbatas yang sayang untuk dilewatkan.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {siteConfig.promos.slice(0, 2).map((promo, index) => (
                <motion.div
                  key={promo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href="/promo">
                    <div className="relative rounded-3xl overflow-hidden group cursor-pointer aspect-[16/9] shadow-lg">
                      <img src={promo.image} alt={promo.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                        <Badge className="w-fit mb-4 bg-primary text-primary-foreground">{promo.badge}</Badge>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">{promo.title}</h3>
                        <p className="text-white/80 line-clamp-2">{promo.description}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="link" className="text-lg text-primary" asChild>
                <Link href="/promo">Lihat Semua Promo &rarr;</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Preview */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16">Kata Mereka</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {siteConfig.testimonials.slice(0, 3).map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background/5 p-8 rounded-3xl text-left border border-background/10 backdrop-blur-sm"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < t.rating ? "fill-accent text-accent" : "fill-muted/20 text-muted/20"}`} />
                  ))}
                </div>
                <p className="text-lg italic text-background/90 mb-8 line-clamp-4">"{t.comment}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/20">
                    {t.avatar && <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />}
                  </div>
                  <div>
                    <h4 className="font-bold font-serif text-background">{t.name}</h4>
                    <p className="text-sm text-background/60">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-muted/50 rounded-3xl p-8 md:p-16 text-center shadow-sm border border-border/50">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Kunjungi Kami</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {siteConfig.contact.address}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="rounded-full h-14 px-8" asChild>
                <Link href="/reservasi">Reservasi Sekarang</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8" asChild>
                <a href={siteConfig.contact.googleMapsUrl} target="_blank" rel="noreferrer">
                  Buka di Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

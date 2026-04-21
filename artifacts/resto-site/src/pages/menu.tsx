import { useState } from "react";
import { siteConfig, formatRupiah, buildOrderMessage, buildWhatsAppUrl, MenuItem } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ShoppingCart, Plus, Minus, X } from "lucide-react";

export default function MenuPage() {
  const [cart, setCart] = useState<{ item: MenuItem; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing) {
        return prev.map((c) => (c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c));
      }
      return [...prev, { item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((c) => c.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev.map((c) => {
        if (c.item.id === itemId) {
          const newQ = c.quantity + delta;
          return newQ > 0 ? { ...c, quantity: newQ } : c;
        }
        return c;
      })
    );
  };

  const totalItems = cart.reduce((sum, c) => sum + c.quantity, 0);
  const totalPrice = cart.reduce((sum, c) => sum + c.item.price * c.quantity, 0);

  const handleCheckout = () => {
    const items = cart.map(c => ({ name: c.item.name, quantity: c.quantity, price: c.item.price }));
    const msg = buildOrderMessage(items);
    window.open(buildWhatsAppUrl(msg), "_blank");
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">Menu Kami</h1>
        <p className="text-muted-foreground text-lg">
          Jelajahi hidangan otentik kami yang disiapkan dengan bahan-bahan segar setiap hari.
        </p>
      </motion.div>

      <Tabs defaultValue={siteConfig.menuCategories[0].id} className="w-full">
        <TabsList className="flex flex-wrap h-auto justify-center gap-2 bg-transparent mb-12">
          {siteConfig.menuCategories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-6 py-2"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {siteConfig.menuCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {siteConfig.menu.filter((item) => item.category === category.id).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="h-full flex flex-col overflow-hidden group border-border/50 hover:border-primary/50 transition-colors">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {item.popular && (
                        <div className="absolute top-2 right-2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                          Populer
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start gap-4">
                        <CardTitle className="font-serif text-xl leading-tight">{item.name}</CardTitle>
                        <span className="font-bold text-primary whitespace-nowrap">{formatRupiah(item.price)}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <CardDescription className="text-sm line-clamp-3">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full gap-2" onClick={() => addToCart(item)}>
                        <Plus className="w-4 h-4" /> Tambah
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Floating Cart */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
          {!isCartOpen ? (
            <Button 
              size="lg" 
              className="rounded-full shadow-xl shadow-primary/20 gap-3 hover-elevate-2 px-6"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="font-semibold">{totalItems} Item • {formatRupiah(totalPrice)}</span>
            </Button>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="bg-card border border-border shadow-2xl rounded-2xl w-[90vw] max-w-sm overflow-hidden"
            >
              <div className="p-4 border-b border-border flex justify-between items-center bg-muted/30">
                <h3 className="font-serif font-bold flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-primary" /> Pesanan Anda
                </h3>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => setIsCartOpen(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="max-h-[40vh] overflow-y-auto p-4 space-y-4">
                {cart.map((c) => (
                  <div key={c.item.id} className="flex justify-between items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{c.item.name}</p>
                      <p className="text-muted-foreground text-xs">{formatRupiah(c.item.price)}</p>
                    </div>
                    <div className="flex items-center gap-2 bg-muted rounded-full px-2 py-1">
                      <button 
                        className="p-1 rounded-full hover:bg-background transition-colors text-foreground"
                        onClick={() => updateQuantity(c.item.id, -1)}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{c.quantity}</span>
                      <button 
                        className="p-1 rounded-full hover:bg-background transition-colors text-foreground"
                        onClick={() => updateQuantity(c.item.id, 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t border-border bg-muted/10 space-y-4">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary">{formatRupiah(totalPrice)}</span>
                </div>
                <Button className="w-full gap-2" size="lg" onClick={handleCheckout}>
                  Pesan via WhatsApp
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}

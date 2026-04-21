import { useState } from "react";
import { siteConfig, buildReservationMessage, buildWhatsAppUrl } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Users, User, MessageSquare } from "lucide-react";

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    name: "",
    guests: "2",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = buildReservationMessage({
      name: formData.name,
      guests: parseInt(formData.guests, 10) || 1,
      date: formData.date,
      time: formData.time,
      notes: formData.notes,
    });
    window.open(buildWhatsAppUrl(msg), "_blank");
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80" 
            alt="Reservasi" 
            className="w-full h-full object-cover brightness-[0.5]"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-md mb-4">
              {siteConfig.reservation.title}
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow">
              {siteConfig.reservation.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-card rounded-3xl shadow-xl border border-border/50 p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" /> Nama Lengkap
                </Label>
                <Input 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Contoh: Budi Santoso"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-background"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="guests" className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" /> Jumlah Tamu
                  </Label>
                  <Input 
                    id="guests" 
                    name="guests" 
                    type="number" 
                    min={siteConfig.reservation.minGuests} 
                    max={siteConfig.reservation.maxGuests} 
                    required 
                    value={formData.guests}
                    onChange={handleChange}
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-primary" /> Tanggal
                  </Label>
                  <Input 
                    id="date" 
                    name="date" 
                    type="date" 
                    required 
                    value={formData.date}
                    onChange={handleChange}
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time" className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" /> Jam Kedatangan
                </Label>
                <Input 
                  id="time" 
                  name="time" 
                  type="time" 
                  required 
                  value={formData.time}
                  onChange={handleChange}
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" /> Catatan Tambahan (Opsional)
                </Label>
                <Textarea 
                  id="notes" 
                  name="notes" 
                  placeholder="Misal: Ulang tahun, butuh kursi bayi, alergi makanan tertentu..."
                  value={formData.notes}
                  onChange={handleChange}
                  className="bg-background min-h-[100px]"
                />
              </div>

              <Button type="submit" size="lg" className="w-full text-lg mt-4 h-14">
                Pesan Meja via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

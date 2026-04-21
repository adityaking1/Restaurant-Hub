import { siteConfig } from "@/config/site";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { FaTiktok } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-serif font-bold text-lg">
                {siteConfig.brand.logoText}
              </div>
              <span className="font-serif font-bold text-xl">
                {siteConfig.brand.name}
              </span>
            </div>
            <p className="text-muted/80 text-sm leading-relaxed">
              {siteConfig.brand.description}
            </p>
            <div className="flex gap-4 pt-2">
              <a href={siteConfig.contact.instagram} target="_blank" rel="noreferrer" className="text-muted/80 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={siteConfig.contact.facebook} target="_blank" rel="noreferrer" className="text-muted/80 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={siteConfig.contact.tiktok} target="_blank" rel="noreferrer" className="text-muted/80 hover:text-primary transition-colors">
                <FaTiktok className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li><Link href="/menu" className="text-muted/80 hover:text-primary text-sm transition-colors">Menu Makanan</Link></li>
              <li><Link href="/tentang" className="text-muted/80 hover:text-primary text-sm transition-colors">Tentang Kami</Link></li>
              <li><Link href="/reservasi" className="text-muted/80 hover:text-primary text-sm transition-colors">Reservasi Meja</Link></li>
              <li><Link href="/galeri" className="text-muted/80 hover:text-primary text-sm transition-colors">Galeri Foto</Link></li>
              <li><Link href="/promo" className="text-muted/80 hover:text-primary text-sm transition-colors">Promo & Event</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted/80">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <a href={siteConfig.contact.googleMapsUrl} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                  {siteConfig.contact.address}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted/80">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted/80">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">Jam Operasional</h4>
            <ul className="space-y-3">
              {siteConfig.contact.operationalHours.map((hours, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-muted/80">
                  <Clock className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <span className="block font-medium">{hours.day}</span>
                    <span>{hours.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-muted/20 text-center text-sm text-muted/60">
          <p>&copy; {new Date().getFullYear()} {siteConfig.brand.name}. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}

import { MessageCircle } from "lucide-react";
import { siteConfig, buildWhatsAppUrl } from "@/config/site";
import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={buildWhatsAppUrl("Halo, saya ingin reservasi/pesan makanan.")}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#128C7E] transition-colors hover-elevate-2"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">Chat di WhatsApp</span>
    </motion.a>
  );
}

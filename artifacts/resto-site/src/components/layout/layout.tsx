import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { FloatingWhatsApp } from "../floating-whatsapp";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

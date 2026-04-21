import { useEffect } from "react";
import { siteConfig } from "@/config/site";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    const theme = siteConfig.theme;

    // Apply CSS variables from config
    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty("--primary-foreground", theme.primaryForeground);
    root.style.setProperty("--accent", theme.accent);
    root.style.setProperty("--background", theme.background);
    root.style.setProperty("--foreground", theme.foreground);
    root.style.setProperty("--muted", theme.muted);
    root.style.setProperty("--muted-foreground", theme.mutedForeground);
    root.style.setProperty("--card", theme.cardBg);
    root.style.setProperty("--radius", theme.radius);
    root.style.setProperty("--app-font-serif", theme.fontHeading);
    root.style.setProperty("--app-font-sans", theme.fontBody);
    
    // Set title and meta description
    document.title = `${siteConfig.brand.name} | ${siteConfig.brand.tagline}`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", siteConfig.brand.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = siteConfig.brand.description;
      document.head.appendChild(meta);
    }
  }, []);

  return <>{children}</>;
}

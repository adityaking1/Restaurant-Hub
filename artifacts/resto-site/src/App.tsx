import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Layout } from "@/components/layout/layout";

// Pages
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import MenuPage from "@/pages/menu";
import AboutPage from "@/pages/about";
import ReservationPage from "@/pages/reservation";
import GalleryPage from "@/pages/gallery";
import TestimonialPage from "@/pages/testimonials";
import PromoPage from "@/pages/promos";
import BlogPage from "@/pages/blog";
import BlogPostPage from "@/pages/blog-post";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/menu" component={MenuPage} />
        <Route path="/tentang" component={AboutPage} />
        <Route path="/reservasi" component={ReservationPage} />
        <Route path="/galeri" component={GalleryPage} />
        <Route path="/testimoni" component={TestimonialPage} />
        <Route path="/promo" component={PromoPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/blog/:id" component={BlogPostPage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

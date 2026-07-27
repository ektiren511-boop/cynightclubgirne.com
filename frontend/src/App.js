import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Toaster } from "@/components/ui/sonner";

import Home from "@/pages/Home";
import Gallery from "@/pages/Gallery";
import ProfileDetail from "@/pages/ProfileDetail";
import Services from "@/pages/Services";
import Pricing from "@/pages/Pricing";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import BookingGuide from "@/pages/BookingGuide";
import LandingPage from "@/pages/LandingPage";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <div className="App grain bg-[#0A0A0B] text-white antialiased">
      <LanguageProvider>
        <BrowserRouter>
          <SmoothScroll />
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/galeri" element={<Gallery />} />
              <Route path="/galeri/:id" element={<ProfileDetail />} />
              <Route path="/hizmetler" element={<Services />} />
              <Route path="/fiyatlar" element={<Pricing />} />
              <Route path="/nasil-rezervasyon" element={<BookingGuide />} />
              <Route path="/sss" element={<FAQ />} />
              <Route path="/iletisim" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/:slug" element={<LandingPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFloatingButton />
          <Toaster
            position="top-right"
            theme="dark"
            toastOptions={{
              style: {
                background: "#0E0E10",
                border: "1px solid rgba(183, 110, 121, 0.3)",
                color: "#fff",
              },
            }}
          />
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;

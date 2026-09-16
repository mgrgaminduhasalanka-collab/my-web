import { LangProvider } from './lib/i18n';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Clients from './components/Clients';
import Work from './components/Work';
import Backdrops from './components/Backdrops';
import Covers from './components/Covers';
import Social from './components/Social';
import AL2026 from './components/AL2026';
import CoverShowcase from './components/CoverShowcase';
import Studio from './components/Studio';
import Posters from './components/Posters';
import VideoEditing from './components/VideoEditing';
import TikTok from './components/TikTok';
import Process from './components/Process';
import Feed from './components/Feed';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <LangProvider>
      <div className="grain relative min-h-screen">
        <Nav />
        <main>
          <Hero />
          <Marquee />
          <Services />
          <Clients />
          <Work />
          <Covers />
          <Social />
          <CoverShowcase />
          <AL2026 />
          <Backdrops />
          <Posters />
          <VideoEditing />
          <TikTok />
          <Studio />
          <Process />
          <Pricing />
          <Feed />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </LangProvider>
  );
}

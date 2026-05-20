import { useState, useEffect } from "react";
import Header from "./components/Header";
import ParallaxHero from "./components/ParallaxHero";
import ImpactCalculator from "./components/ImpactCalculator";
import MichiganMap from "./components/MichiganMap";
import VolunteerHub from "./components/VolunteerHub";
import BlogFeed from "./components/BlogFeed";
import RecipeFinder from "./components/RecipeFinder";
import DonationTerminal from "./components/DonationTerminal";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  // Donation Unified Terminal State
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [donateAmount, setDonateAmount] = useState(25);
  const [donateFreq, setDonateFreq] = useState<"one-time" | "monthly">("monthly");

  // Track scroll position to color active header nav tab
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "hero", top: 0 },
        { id: "impact-calculator", element: document.getElementById("impact-calculator") },
        { id: "food-map", element: document.getElementById("food-map") },
        { id: "volunteer-hub", element: document.getElementById("volunteer-hub") },
        { id: "blog-feed", element: document.getElementById("blog-feed") },
        { id: "recipe-finder", element: document.getElementById("recipe-finder") },
      ];

      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const item = sections[i];
        if (item.element) {
          const rect = item.element.getBoundingClientRect();
          const topPosition = window.scrollY + rect.top;
          if (scrollPosition >= topPosition) {
            setActiveSection(item.id);
            break;
          }
        } else if (item.id === "hero" && scrollPosition < 400) {
          setActiveSection("hero");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth navigation scroll callback
  const handleNavClick = (sectionId: string) => {
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("hero");
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset spacing for sticking absolute header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  // Open direct donation popups
  const handleOpenDonate = () => {
    setDonateAmount(30);
    setDonateFreq("monthly");
    setIsDonateOpen(true);
  };

  const handleCalculatorDonateTrigger = (amount: number, frequency: "one-time" | "monthly") => {
    setDonateAmount(amount);
    setDonateFreq(frequency);
    setIsDonateOpen(true);
  };

  return (
    <div id="full-app-scroller" className="bg-stone-50 text-stone-900 min-h-screen relative font-sans overflow-x-hidden antialiased selection:bg-brand-orange-500 selection:text-stone-950">
      
      {/* Sticky polished Backdrop-blur header bar */}
      <Header
        onNavClick={handleNavClick}
        activeSection={activeSection}
        onOpenDonate={handleOpenDonate}
      />

      {/* Hero parallax layers scrolling panel */}
      <div id="scroll-section-hero">
        <ParallaxHero
          onDonateClick={handleOpenDonate}
          onExploreClick={handleNavClick}
        />
      </div>

      {/* Main interactive sub-sections */}
      <div id="scroll-section-impact">
        <ImpactCalculator onDonateClick={handleCalculatorDonateTrigger} />
      </div>

      <div id="scroll-section-assistance">
        <MichiganMap />
      </div>

      <div id="scroll-section-volunteering">
        <VolunteerHub />
      </div>

      <div id="scroll-section-blog">
        <BlogFeed />
      </div>

      <div id="scroll-section-culinary">
        <RecipeFinder />
      </div>

      {/* Unified Secure payment slide drawer/modal */}
      <DonationTerminal
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
        initialAmount={donateAmount}
        initialFrequency={donateFreq}
      />

      {/* Earthy design footer */}
      <Footer
        onNavClick={handleNavClick}
        onOpenDonate={handleOpenDonate}
      />

    </div>
  );
}

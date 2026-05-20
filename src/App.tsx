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

  // Theme State
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // View navigation (acts like pages)
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    <div id="full-app-scroller" className="bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 min-h-screen relative font-sans overflow-x-hidden antialiased selection:bg-brand-orange-500 selection:text-stone-950 transition-colors duration-300">
      
      {/* Sticky polished Backdrop-blur header bar */}
      <Header
        onNavClick={handleNavClick}
        activeSection={activeSection}
        onOpenDonate={handleOpenDonate}
        isDark={isDark}
        toggleTheme={() => setIsDark(!isDark)}
      />

      {/* Main interactive sub-sections conditionally rendered as pages */}
      <div className="pt-20 lg:pt-0">
        {activeSection === "hero" && (
          <div id="scroll-section-hero">
            <ParallaxHero
              onDonateClick={handleOpenDonate}
              onExploreClick={handleNavClick}
            />
          </div>
        )}

        {activeSection === "impact-calculator" && (
          <div id="scroll-section-impact">
            <ImpactCalculator onDonateClick={handleCalculatorDonateTrigger} />
          </div>
        )}

        {activeSection === "food-map" && (
          <div id="scroll-section-assistance">
            <MichiganMap />
          </div>
        )}

        {activeSection === "volunteer-hub" && (
          <div id="scroll-section-volunteering">
            <VolunteerHub />
          </div>
        )}

        {activeSection === "blog-feed" && (
          <div id="scroll-section-blog">
            <BlogFeed />
          </div>
        )}

        {activeSection === "recipe-finder" && (
          <div id="scroll-section-culinary">
            <RecipeFinder />
          </div>
        )}
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

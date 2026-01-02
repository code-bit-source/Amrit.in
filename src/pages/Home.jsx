import { useState } from "react";

import Navbar from "../component/Navbar";
import MobileMenu from "../component/MobileMenu";
import Hero from "../component/Hero";
import Work from "../component/Work";
import Footer from "../component/Footer";
import MouseEffect from "../component/MouseEffect";
import PageLoad from "../component/PageLoad";
// import CTASection from "../component/CTASection";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHireMeClick = () => {
    const email = "amritmr760@gmail.com";
    const subject = "Let's Work Together!";
    const body =
      "Hey Amrit,\n\nI checked out your work and I’m interested in hiring you.\n\nCheers,";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919315868930?text=Mujhe ek website banwani hai",
      "_blank"
    );
  };

  return (
    <>
      <div className="relative w-screen min-h-screen overflow-hidden bg-zinc-600">
        <Navbar
          onHireClick={handleHireMeClick}
          onMenuClick={() => setMenuOpen(true)}
        />

        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

        <Hero
          onHireClick={handleHireMeClick}
          onWhatsAppClick={handleWhatsApp}
        />
      </div>

      <div className="bg-transparent relative z-3 w-screen min-h-screen">
        <div className="h-32 rotate-2 bg-zinc-900" />
        <div className="h-32 -mt-30 -rotate-4 flex justify-center items-center bg-red-600">
          <h1 className="uppercase text-7xl font-[font2] text-white">
            -feel what you work-
          </h1>
        </div>

        <MouseEffect />
        <Work />
        {/* <CTASection /> */}
        <Footer />
      </div>

      <PageLoad />
    </>
  );
};

export default Home;

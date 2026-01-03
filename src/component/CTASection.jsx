import React from "react";

export const CTASection = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "919315868930"; // 91 + mobile number
    const message = `Hi Amrit 👋

I’m interested in getting a professional website/app for my business.

Please share:
• Pricing
• Timeline
• Portfolio details

Looking forward to working with you 🚀`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Grow Your Business?
        </h2>

        <p className="text-gray-300 text-lg md:text-xl mb-10">
          Get a modern, fast & professional website that converts visitors into
          customers.
        </p>

        <button
          onClick={handleWhatsApp}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-10 py-4 rounded-4xl transition-all duration-300 shadow-lg hover:shadow-red-600/40 font-[font2] uppercase "
        >
          Chat with us
        </button>
      </div>
    </section>
  );
};

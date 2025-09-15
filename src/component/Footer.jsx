import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
const handleClick = () => {
  const phoneNumber = "919315868930"; // <-- with country code, no +
  const message = "Mujhe ek website banwani hai";

  if (!phoneNumber) {
    console.error("WhatsApp phone number is missing!");
    return;
  }

  const encodedMessage = encodeURIComponent(message || "Hello 👋");
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  try {
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  } catch (error) {
    console.error("Failed to open WhatsApp:", error);
  }
};


  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 items-center text-center md:text-left">

          {/* Branding */}
          <div>
            <h2 className="text-4xl font-[font1] font-bold text-white">
              Amrit ~ <span className="text-red-500">Kumar</span>
            </h2>
            <p className="text-sm mt-2 text-zinc-500">
              Crafting clean and creative digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="#home" className="hover:text-red-500 transition">Home</a></li>
              <li><a href="#about" className="hover:text-red-500 transition">About</a></li>
              <li><a href="https://github.com/code-bit-source?tab=repositories" className="hover:text-red-500 transition">Work</a></li>
              <li  ><h1 onClick={handleClick} className="hover:text-red-500 transition">Contact</h1></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Connect</h3>
            <div className="flex justify-center md:justify-start gap-5">
              <a href="https://github.com/code-bit-source" target="_blank" rel="noreferrer"
                 className="text-2xl hover:text-red-500 transition"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/amrit-kumar-4aa789329/" target="_blank" rel="noreferrer"
                 className="text-2xl hover:text-red-500 transition"><FaLinkedin /></a>
              <a href="https://www.instagram.com/developer.dev.in/" target="_blank" rel="noreferrer"
                 className="text-2xl hover:text-red-500 transition"><FaInstagram /></a>
            </div>
          </div>

        </div>

        {/* bottom line */}
        <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-sm text-zinc-600">
          © {new Date().getFullYear()} <span className="text-red-500">Amrit Kumar</span>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

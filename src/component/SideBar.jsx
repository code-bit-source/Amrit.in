import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const SideBar = ({ close }) => {

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
    <div
      className="w-full min-h-screen 
      bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 
      text-white flex flex-col items-center px-6 sm:px-10 md:px-20 py-10 
      relative border border-zinc-800 shadow-[0_0_80px_-20px_rgba(0,0,0,0.8)]"
    >
      {/* Close Button */}
      <button
        onClick={close}
        className="absolute top-5 right-5 text-3xl md:text-4xl text-zinc-500 hover:text-white transition"
      >
        ✕
      </button>

      {/* Profile Section */}
      <div className="flex flex-col items-center gap-3 sm:gap-4 mb-12 sm:mb-16 text-center">
        <img
          src="hero.png"
          alt="profile"
          className="w-28 h-40 sm:w-24 sm:h-24 md:w-28 md:h-28 border-zinc-700 shadow-2xl object-cover"
        />
        <h1 className="text-5xl sm:text-3xl font-[font1] md:text-4xl font-extrabold tracking-wide drop-shadow-md">
          Amrit Kumar
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base md:text-lg">
          Frontend Developer
        </p>
      </div>

      {/* Nav Links */}
      <div className="flex flex-col items-center gap-6 sm:gap-8 mb-14">
        {[
          { name: "Home", href: "#" },
          { name: "About", href: "#" },
          { name: "Projects", href: "https://github.com/code-bit-source?tab=repositories" },
          { name: "Skills", href: "#" },
          { name: "Contact", href: "amritmr760@gmail.com" },
        ].map((item, i) => (
          <a
            key={i}
            href={item.href}
            onClick={close}
            className="relative text-2xl font-light sm:text-3xl md:text-4xl font-[font2] uppercase tracking-wide group hover:text-zinc-300 transition text-center"
          >
            {item.name}
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-zinc-500 to-zinc-300 rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 sm:gap-6">
        {[
          { icon: FaGithub, href: "https://github.com/amritmr760" },
          { icon: FaLinkedin, href: "https://www.linkedin.com/in/amrit-kumar-4aa789329/" },
          { icon: FaInstagram, href: "https://www.instagram.com/developer.dev.in/" },
        ].map(({ icon: Icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-4 rounded-2xl bg-zinc-900/60 border border-zinc-700 shadow-md
             hover:bg-zinc-800 hover:shadow-xl transition"
          >
            <Icon className="text-xl sm:text-2xl" />
          </a>
        ))}
      </div>

      {/* Bottom Border Line Accent */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-zinc-700 to-zinc-400"></div>
    </div>
  );
};

export default SideBar;

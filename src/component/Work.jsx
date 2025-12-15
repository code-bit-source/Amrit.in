import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import About from "./About";

const projects = [
  {
    title: "Animated Website",
    description: "A fully responsive React based website . gsap , motion libraries are used for animations",
    image: "sundown.jpg",
    link: "https://sundown-studios-clone-black.vercel.app/"
  },
  {
    title: "E-Commerce website",
    description: "A fully responsive React based website , whats order E-Commerce website. This client is from Nepal and this i will charge 3500 INR only",
    image: "wine.jpg",
    link: "https://wine-shop-zeta.vercel.app/"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio with smooth animations and responsive design for a vfx artist.",
    image: "vfx.jpg",
    link: "https://anshu-portfolio-psi.vercel.app/"
  }
];

const Work = () => {
  return (
    <section id="work" className="min-h-screen pt-28 -mt-10 bg-zinc-950 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-[font1] md:text-6xl font-bold mb-14 text-center">
          Featured <span className="text-red-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative group rounded-3xl overflow-hidden 
                         bg-zinc-900/30 backdrop-blur-xl 
                         border border-zinc-800 
                         hover:-translate-y-2 hover:border-red-500/40
                         hover:shadow-[0_0_35px_4px_rgba(239,68,68,0.3)]
                         transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-zinc-400 text-sm mb-5">{project.description}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl 
                             bg-red-600/90 hover:bg-red-700 
                             transition text-sm shadow-md"
                >
                  Visit <FaExternalLinkAlt size={14} />
                </a>
              </div>

              {/* subtle red glow ring on hover */}
              <div className="absolute inset-0 rounded-3xl 
                              opacity-0 group-hover:opacity-100 
                              transition pointer-events-none 
                              shadow-[0_0_25px_2px_rgba(239,68,68,0.3)]" />
            </motion.div>
          ))}
        </div>
      </div>
            {/* <div className="w-screen justify-center flex  mt-10">
              <button className=" px-5 py-1 text-center font-[font2] uppercase bg-white text-black rounded-4xl text-2xl"> <a href="/projects">view all.</a> </button>
            </div> */}
      {/* <img src="phone.png" alt="" className="rotate-3" /> */}
      <About />
    </section>
  );
};

export default Work;

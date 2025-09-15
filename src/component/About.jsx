import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative  bg-zinc-950 text-white pt-52 px-6 py-24 overflow-hidden"
    >
      {/* background glow blobs */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] 
                        bg-red-500/10 rounded-full blur-[150px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] 
                        bg-purple-500/5 rounded-full blur-[180px]" />
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left: phone image with glow on its border */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/phone.jpg"
            alt="Phone Mockup"
            className="w-[560px] rounded-3xl
                       border-2 border-red-500/50 
                       shadow-[0_0_30px_4px_rgba(239,68,68,0.4)]
                       hover:shadow-[0_0_50px_8px_rgba(239,68,68,0.6)]
                       hover:-translate-y-2 hover:rotate-3
                       transition-all duration-700"
          />
        </motion.div>

        {/* Right: about content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">
            About <span className="text-red-500">Me</span>
          </h2>

          <p className="text-zinc-400 leading-relaxed mb-8 text-lg">
            I'm <span className="text-white font-semibold">Amrit Kumar</span>, a passionate web developer from Delhi, India.
            I love crafting interactive and user-friendly web applications using modern
            technologies like <span className="text-red-400">React, Node.js, and MongoDB</span>.
            My goal is to build digital experiences that are clean, creative, and impactful.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 mb-10">
            {["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"].map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-xl text-sm
                           bg-zinc-900/50 border border-zinc-800 
                           hover:border-red-500/50 hover:text-red-400
                           transition cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { num: "20+", label: "Projects" },
              { num: "100%", label: "Animation" },
              { num: "100%", label: "Passion" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border border-zinc-800 
                           bg-zinc-900/30 backdrop-blur-xl
                           hover:border-red-500/40 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]
                           transition"
              >
                <h3 className="text-2xl text-center flex justify-center font-bold text-red-400">{item.num}</h3>
                <p className="text-zinc-400 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

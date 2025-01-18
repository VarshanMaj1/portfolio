import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "React.js", "TypeScript", "JavaScript", "Next.js",
    
    "Tailwind CSS", "Framer Motion",
    
    "Node.js", "Express", "MongoDB", "REST APIs",
    
    "Vite", "Git","Github",
    
    "OpenAI API", "Microsoft Azure",

    "Shadcn UI", "Daisy UI", "Figma",
    
  ];

  return (
    <section id="about" className="relative min-h-screen w-full flex  items-center justify-center bg-black py-20">
      <div className="relative z-40 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">About Me</h2>
            <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
          </div>

          {/* Professional Background */}
          <div className="text-neutral-400 space-y-6">
  <p className="text-lg leading-relaxed">
  Hi, I’m Varshan Maji, a passionate and driven Web Developer with a focus on Fullstack development and a growing interest in Web3 technologies. I specialize in building dynamic, responsive websites and applications using modern web technologies, and I'm currently exploring decentralized web development to embrace the future of the internet.

With a strong foundation in front-end technologies like HTML, CSS, JavaScript, and frameworks like React, I am also learning the ins and outs of back-end development, APIs, and databases to build scalable and robust full-stack applications.

I am constantly expanding my skillset by diving into blockchain, smart contracts, and other Web3 concepts, as I believe the decentralized web will reshape how we interact with technology. As I continue to grow, I’m excited to contribute to innovative projects that push the boundaries of web development.

Feel free to browse my projects below and connect with me. Let’s build the future of the web together!
  </p>

</div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="shadow-[inset_0_0_0_2px_#616467] text-white  px-12 py-4 rounded-full tracking-widest uppercase font-bold hover:text-blue-500 dark:text-neutral-200 transition duration-200 "
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 


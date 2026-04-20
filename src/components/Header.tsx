import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Avatar from "./Avatar";
import TypeWriter from "./Typewriter";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="relative mx-auto my-10 flex w-full max-w-6xl flex-col items-center justify-center gap-8 px-4 lg:flex-row">
      
      {/* Mobile Avatar */}
      <div className="lg:hidden">
        <Avatar path="images/pfp.png" />
      </div>

      {/* Content */}
      <div className="grid w-full max-w-130 grid-cols-1 gap-4">
        
        <TypeWriter
          hats={[
            { suffix: "Prashant Patel" },
            { suffix: "a FullStack Developer" },
          ]}
          prefix="I'm  "
        />

        {/* Tagline */}
        <div className="text-xl text-black lg:text-left text-center">
          <span>Engineering </span>
          <span className="font-bold">web & mobile apps</span>
          <span> that don't </span>
          <br className="hidden sm:block" />
          <span>just ship — </span>

          {/* Highlight */}
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-yellow-300 -rotate-2 skew-x-6"></span>
            <span className="relative px-4">they stick.</span>
          </span>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="flex gap-4 mt-4 items-center justify-center lg:justify-start"
        >
          {/* Text */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl font-semibold"
          >
            Connect on:
          </motion.div>

          {/* Icons */}
          {[
            {
              icon: <FaLinkedin size={24} />,
              link: "https://www.linkedin.com/in/itspraskpatel",
              color: "hover:text-blue-700",
            },
            {
              icon: <FaXTwitter size={24} />,
              link: "https://x.com/itspraskpatel",
              color: "hover:text-blue-500",
            },
            {
              icon: <FaGithub size={24} />,
              link: "https://github.com/itspraskpatel",
              color: "hover:text-gray-600",
            },
            {
              icon: <FaInstagram size={24} />,
              link: "https://instagram.com/prashantrix",
              color: "hover:text-red-400",
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`transition-colors duration-200 hover:drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)] ${item.color}`}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Desktop Avatar */}
      <div className="hidden lg:block">
        <Avatar path="images/pfp.png" />
      </div>

      {/* Resume Floating Button */}
      <div className="fixed top-4 right-4 z-50 group">
        <a
          href="https://drive.google.com/file/d/1ZJh8S9mBdlJi6-4xWDzfcqKFeRTg1KdF"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="images/icebear.gif"
            alt="resume.pdf"
            className="select-none md:w-20 md:h-20 object-cover opacity-90 sm:opacity-100 rounded-full h-10 w-10 saturate-180 mb-4"
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
          />

          <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/70 px-2 py-1 text-sm sm:text-lg text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            resume.pdf
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
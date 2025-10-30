import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { id: "hero", label: "Beranda" },
  { id: "definition", label: "Pengertian" },
  { id: "gallery", label: "Galeri" },
  { id: "history", label: "Sejarah" },
  { id: "structure", label: "Struktur" },
  { id: "cosmos", label: "Alam Semesta" },
  { id: "observation", label: "Observasi" },
  { id: "types", label: "Jenis-jenis" },
  { id: "examples", label: "Contoh" },
  { id: "facts", label: "Fakta" },
  { id: "qa", label: "FaQ" }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(2, 6, 23, 0)", "rgba(2, 6, 23, 0.95)"]
  );

  const borderOpacity = useTransform(
    scrollY,
    [0, 100],
    [0, 0.3]
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 50);
      
      // Set hasScrolled to true after user scrolls at least 10px
      if (scrollPos > 10 && !hasScrolled) {
        setHasScrolled(true);
      }
      
      // Detect active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = scrollPos + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Close mobile menu immediately
      setIsMenuOpen(false);
      
      // Small delay to allow menu to start closing, then scroll
      setTimeout(() => {
        const offset = 80;
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth"
        });
      }, 100);
    }
  };

  return (
    <>
      <motion.nav
        style={{ backgroundColor }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg"
      >
        <motion.div
          style={{ 
            borderBottomColor: `rgba(139, 92, 246, ${borderOpacity})` 
          }}
          className="border-b"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
              <motion.button
                onClick={() => scrollToSection("hero")}
                className="flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="w-6 h-6 text-yellow-400 group-hover:rotate-180 transition-transform duration-500" />
                <span className="text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Galaksi
                </span>
              </motion.button>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setHasScrolled(true);
                    }}
                    className={`relative px-4 py-2 rounded-lg transition-colors duration-300 ${
                      activeSection === item.id
                        ? "text-white"
                        : "text-blue-200 hover:text-white"
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.08,
                      ease: [0.645, 0.045, 0.355, 1]
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {activeSection === item.id && hasScrolled && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-blue-600/40 rounded-lg border border-purple-400/50"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 35,
                          mass: 0.8
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </motion.button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-blue-200 hover:text-white"
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ 
          duration: 0.3,
          ease: [0.645, 0.045, 0.355, 1]
        }}
        className="fixed top-[64px] left-0 right-0 z-40 md:hidden overflow-hidden"
        style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
      >
        <motion.div
          initial={false}
          animate={{ y: isMenuOpen ? 0 : -20 }}
          transition={{ 
            duration: 0.3,
            ease: [0.645, 0.045, 0.355, 1]
          }}
          className="bg-slate-950/98 backdrop-blur-lg border-b border-purple-500/30 shadow-2xl w-full"
        >
          <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setHasScrolled(true);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === item.id && hasScrolled
                    ? "bg-gradient-to-r from-purple-600/40 to-blue-600/40 border border-purple-400/50 text-white"
                    : "text-blue-200 hover:bg-slate-800/50 hover:text-white"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: isMenuOpen ? index * 0.06 : 0,
                  ease: [0.645, 0.045, 0.355, 1]
                }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/60 z-30 md:hidden top-[64px]"
        />
      )}
    </>
  );
}

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Atom, Sparkles, Moon, Star, Zap, Circle } from "lucide-react";

export default function DefinitionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const components = [
    { icon: Sparkles, title: "Bintang", desc: "Miliaran bintang yang bersinar" },
    { icon: Atom, title: "Gas & Debu", desc: "Materi pembentuk bintang baru" },
    { icon: Moon, title: "Materi Gelap", desc: "Massa tak terlihat yang dominan" }
  ];

  return (
    <section id="definition" ref={ref} className="py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8,
            ease: [0.645, 0.045, 0.355, 1]
          }}
          className="max-w-5xl mx-auto"
        >
          {/* Title */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-4x2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
              Pengertian Sistem Galaksi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto" />
          </div>
          
          {/* Animated Visual Element - Orbital System */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: [0.645, 0.045, 0.355, 1]
            }}
            className="mb-16 relative h-[400px] flex items-center justify-center"
          >
            {/* Central Core */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 blur-xl"
            />
            <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 flex items-center justify-center">
              <Star className="w-8 h-8 text-white" />
            </div>
            
            {/* Orbit Ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 20, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-48 h-48 border-2 border-blue-400/30 rounded-full"
            >
              <motion.div
                className="absolute -top-2 left-1/2 w-4 h-4 -ml-2"
                animate={{ 
                  scale: [1, 1.3, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Circle className="w-4 h-4 text-blue-400 fill-blue-400" />
              </motion.div>
            </motion.div>
            
            {/* Orbit Ring 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ 
                duration: 30, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-72 h-72 border-2 border-purple-400/30 rounded-full"
            >
              <motion.div
                className="absolute top-0 left-1/2 w-4 h-4 -ml-2"
                animate={{ 
                  scale: [1, 1.3, 1],
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
              </motion.div>
            </motion.div>
            
            {/* Orbit Ring 3 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 40, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-96 h-96 border-2 border-cyan-400/20 rounded-full"
            >
              <motion.div
                className="absolute -top-2 left-1/2 w-4 h-4 -ml-2"
                animate={{ 
                  scale: [1, 1.3, 1],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Zap className="w-4 h-4 text-cyan-400" />
              </motion.div>
            </motion.div>
            
            {/* Floating Particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${50 + Math.cos((i * 30) * Math.PI / 180) * 45}%`,
                  top: `${50 + Math.sin((i * 30) * Math.PI / 180) * 45}%`,
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
          
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              ease: [0.645, 0.045, 0.355, 1]
            }}
            className="prose prose-invert prose-lg max-w-none mb-12"
          >
            <p className="text-blue-100 text-lg leading-relaxed">
              <span className="text-yellow-400">Sistem Galaksi</span> adalah kumpulan besar yang terdiri dari miliaran bintang, gas, debu kosmik, 
              dan materi gelap yang semuanya terikat bersama oleh gaya gravitasi. Galaksi merupakan struktur dasar 
              alam semesta yang membentang dengan ukuran yang sangat masif, mencapai puluhan hingga ratusan ribu tahun cahaya.
            </p>
            <p className="text-blue-100 text-lg leading-relaxed mt-4">
              Setiap galaksi adalah sistem yang kompleks di mana komponen-komponennya berinteraksi dalam keseimbangan 
              gravitasi yang rumit. Di pusat banyak galaksi terdapat lubang hitam supermasif yang memiliki massa jutaan 
              hingga miliaran kali massa Matahari kita.
            </p>
          </motion.div>
          
          {/* Components Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {components.map((component, index) => {
              const Icon = component.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.5 + index * 0.1,
                    ease: [0.645, 0.045, 0.355, 1]
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/60 transition-colors"
                >
                  <Icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl text-white mb-2">{component.title}</h3>
                  <p className="text-blue-200">{component.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
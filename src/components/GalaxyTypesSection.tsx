import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Card } from "./ui/card";

const galaxyTypes = [
  {
    type: "Galaksi Spiral",
    description: "Galaksi dengan struktur berbentuk spiral yang elegan, memiliki lengan-lengan yang melengkung keluar dari pusat galaksi. Lengan spiral ini kaya akan gas dan debu, menjadikannya tempat kelahiran bintang-bintang muda yang bersinar terang.",
    characteristics: [
      "Memiliki cakram datar dengan lengan spiral",
      "Pusat galaksi berbentuk bulge (tonjolan)",
      "Banyak gas dan debu untuk pembentukan bintang",
      "Rotasi teratur mengelilingi pusat"
    ],
    image: "https://images.unsplash.com/photo-1709408635136-f394223e2963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGlyYWwlMjBnYWxheHl8ZW58MXx8fHwxNzYxNzEwMDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-blue-500 to-cyan-400"
  },
  {
    type: "Galaksi Elips",
    description: "Galaksi berbentuk elips atau bulat yang tampak lebih sederhana dibanding galaksi spiral. Umumnya terdiri dari bintang-bintang tua dengan sedikit gas dan debu, sehingga pembentukan bintang baru sangat jarang terjadi.",
    characteristics: [
      "Bentuk bulat atau lonjong (elips)",
      "Minim gas dan debu kosmik",
      "Didominasi bintang-bintang tua",
      "Tidak memiliki struktur lengan spiral"
    ],
    image: "https://images.unsplash.com/photo-1708111174703-1668c3a16ce2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGxpcHRpY2FsJTIwZ2FsYXh5fGVufDF8fHx8MTc2MTcwOTk4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-purple-500 to-pink-400"
  },
  {
    type: "Galaksi Irregular",
    description: "Galaksi dengan bentuk yang tidak beraturan, tidak memiliki struktur spiral maupun elips yang jelas. Sering kali terbentuk akibat interaksi gravitasi atau tabrakan dengan galaksi lain, menghasilkan bentuk yang unik dan chaos.",
    characteristics: [
      "Tidak memiliki bentuk geometris tertentu",
      "Sering hasil dari tabrakan galaksi",
      "Kaya akan gas dan pembentukan bintang aktif",
      "Ukuran umumnya lebih kecil dari galaksi besar"
    ],
    image: "https://images.unsplash.com/photo-1681673819379-a183d9acf860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWJ1bGElMjBjb3NtaWN8ZW58MXx8fHwxNzYxNjg3Mzc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-yellow-500 to-orange-400"
  }
];

export default function GalaxyTypesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="types" ref={ref} className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8,
            ease: [0.645, 0.045, 0.355, 1]
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            Jenis-jenis Galaksi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto" />
        </motion.div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {galaxyTypes.map((galaxy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <Card className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border-purple-500/30 overflow-hidden hover:border-purple-400/60 transition-all">
                <div className={`grid grid-cols-1 ${index % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2'} gap-0`}>
                  {/* Image */}
                  <div className={`${index % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}`}>
                    <img 
                      src={galaxy.image}
                      alt={galaxy.type}
                      className="w-full h-full min-h-[300px] object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className={`p-8 ${index % 2 === 0 ? 'order-2' : 'order-2 md:order-1'}`}>
                    <h3 className={`text-3xl mb-4 bg-clip-text text-transparent bg-gradient-to-r ${galaxy.color}`}>
                      {galaxy.type}
                    </h3>
                    <p className="text-blue-100 mb-6 leading-relaxed">
                      {galaxy.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm text-purple-300 mb-3">Karakteristik:</p>
                      {galaxy.characteristics.map((char, charIndex) => (
                        <motion.div
                          key={charIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ 
                            duration: 0.6, 
                            delay: index * 0.2 + charIndex * 0.1 + 0.3,
                            ease: [0.645, 0.045, 0.355, 1]
                          }}
                          className="flex items-start gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                          <p className="text-blue-200">{char}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

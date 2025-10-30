"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Globe, Network, Zap, Infinity } from "lucide-react";

const cosmicStructures = [
  {
    title: "Gugus Galaksi (Galaxy Cluster)",
    icon: Network,
    description: "Kumpulan ratusan hingga ribuan galaksi yang terikat oleh gravitasi dalam satu wilayah.",
    examples: "Gugus Virgo (2.000+ galaksi), Gugus Coma",
    scale: "Diameter: 2-10 juta tahun cahaya",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Supergugus (Supercluster)",
    icon: Globe,
    description: "Struktur kosmik terbesar, terdiri dari puluhan gugus galaksi yang saling terhubung.",
    examples: "Laniakea Supercluster (100.000+ galaksi termasuk Bima Sakti)",
    scale: "Diameter: hingga 500 juta tahun cahaya",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Filamen Kosmik",
    icon: Zap,
    description: "Struktur seperti benang raksasa yang menghubungkan gugus-gugus galaksi, membentuk 'jaring kosmik'.",
    examples: "Great Wall, Sloan Great Wall",
    scale: "Panjang: ratusan juta tahun cahaya",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    title: "Void (Kekosongan Kosmik)",
    icon: Infinity,
    description: "Wilayah hampa yang sangat luas di antara struktur galaksi, hampir tidak berisi materi.",
    examples: "Boötes Void (diameter 330 juta tahun cahaya)",
    scale: "Volume: miliaran tahun cahaya kubik",
    gradient: "from-indigo-500 to-purple-500"
  }
];

const cosmicConcepts = [
  {
    title: "Teori Big Bang",
    description: "Alam semesta dimulai dari singularitas yang sangat panas dan padat sekitar 13,8 miliar tahun yang lalu. Galaksi pertama terbentuk sekitar 400 juta tahun setelah Big Bang.",
    icon: "💥"
  },
  {
    title: "Ekspansi Alam Semesta",
    description: "Semua galaksi bergerak menjauh satu sama lain karena ruang angkasa itu sendiri yang mengembang. Semakin jauh galaksi, semakin cepat mereka menjauh dari kita (Hukum Hubble).",
    icon: "🌌"
  },
  {
    title: "Dark Energy (Energi Gelap)",
    description: "Kekuatan misterius yang mempercepat ekspansi alam semesta, membentuk sekitar 68% dari total energi alam semesta. Sifatnya masih belum sepenuhnya dipahami.",
    icon: "⚡"
  },
  {
    title: "Evolusi Galaksi",
    description: "Galaksi berkembang melalui pembentukan bintang, penggabungan dengan galaksi lain, dan interaksi gravitasi. Bima Sakti sendiri akan bergabung dengan Andromeda dalam 4 miliar tahun.",
    icon: "🔄"
  }
];

export default function CosmosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cosmos" className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      
      <div ref={ref} className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8,
            ease: [0.645, 0.045, 0.355, 1]
          }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Globe className="w-10 h-10 text-blue-400" />
            <h2 className="text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Galaksi dalam Alam Semesta
            </h2>
          </div>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Memahami posisi dan peran galaksi dalam struktur kosmik yang lebih besar
          </p>
        </motion.div>

        {/* Cosmic Structures */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ 
              duration: 0.7,
              ease: [0.645, 0.045, 0.355, 1]
            }}
            className="text-3xl text-white mb-8 text-center"
          >
            Struktur Kosmik Berskala Besar
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {cosmicStructures.map((structure, index) => {
              const Icon = structure.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.1,
                    ease: [0.645, 0.045, 0.355, 1]
                  }}
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${structure.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                  
                  <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/60 transition-all">
                    <div className="flex items-start gap-4 mb-3">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r ${structure.gradient} flex items-center justify-center`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h4 className={`text-xl bg-clip-text text-transparent bg-gradient-to-r ${structure.gradient} mt-2`}>
                        {structure.title}
                      </h4>
                    </div>
                    
                    <p className="text-blue-100 mb-3 leading-relaxed">
                      {structure.description}
                    </p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-purple-300 flex-shrink-0">Contoh:</span>
                        <span className="text-blue-200">{structure.examples}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-purple-300 flex-shrink-0">Skala:</span>
                        <span className="text-blue-200">{structure.scale}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Cosmic Concepts */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ 
              duration: 0.7,
              delay: 0.4,
              ease: [0.645, 0.045, 0.355, 1]
            }}
            className="text-3xl text-white mb-8 text-center"
          >
            Konsep Kosmologi Fundamental
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {cosmicConcepts.map((concept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.5 + index * 0.1,
                  ease: [0.645, 0.045, 0.355, 1]
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-indigo-500/30 rounded-xl p-6 hover:border-indigo-400/60 transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-4xl">{concept.icon}</span>
                  <h4 className="text-xl text-white mt-1">{concept.title}</h4>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  {concept.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8, 
            delay: 1,
            ease: [0.645, 0.045, 0.355, 1]
          }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <Infinity className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl text-white mb-2">Galaksi dalam Jaring Kosmik</h4>
                <p className="text-blue-100 leading-relaxed">
                  Galaksi bukanlah objek terisolasi, melainkan bagian dari struktur kosmik yang sangat besar dan kompleks. Mereka membentuk gugus, supergugus, dan filamen yang menciptakan 'jaring kosmik' - pola distribusi materi terbesar di alam semesta. Memahami struktur ini membantu kita menjelaskan bagaimana alam semesta berkembang dari fluktuasi kecil setelah Big Bang menjadi kosmos yang kita lihat hari ini. Studi tentang struktur skala besar ini juga memberikan petunjuk tentang sifat dark matter dan dark energy yang mendominasi alam semesta.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Clock, BookOpen, Telescope, Lightbulb } from "lucide-react";

const timelineEvents = [
  {
    year: "1610",
    title: "Galileo Galilei",
    description: "Menggunakan teleskop untuk pertama kalinya mengamati Bima Sakti, menemukan bahwa 'awan putih' tersebut terdiri dari jutaan bintang individual.",
    icon: Telescope,
    color: "from-yellow-500 to-orange-500"
  },
  {
    year: "1755",
    title: "Immanuel Kant",
    description: "Mengusulkan teori bahwa nebula spiral mungkin adalah 'universe islands' atau pulau-pulau alam semesta yang terpisah dari Bima Sakti.",
    icon: Lightbulb,
    color: "from-blue-500 to-cyan-500"
  },
  {
    year: "1845",
    title: "Lord Rosse",
    description: "Membangun teleskop raksasa dan menemukan struktur spiral pada nebula, membuka jalan untuk pemahaman bentuk galaksi.",
    icon: Telescope,
    color: "from-purple-500 to-pink-500"
  },
  {
    year: "1920",
    title: "Debat Besar (Great Debate)",
    description: "Perdebatan antara Harlow Shapley dan Heber Curtis tentang apakah nebula spiral adalah bagian dari Bima Sakti atau galaksi terpisah.",
    icon: BookOpen,
    color: "from-green-500 to-emerald-500"
  },
  {
    year: "1924",
    title: "Edwin Hubble",
    description: "Membuktikan bahwa Andromeda adalah galaksi terpisah di luar Bima Sakti, merevolusi pemahaman kita tentang skala alam semesta.",
    icon: Lightbulb,
    color: "from-red-500 to-rose-500"
  },
  {
    year: "1929",
    title: "Hukum Hubble",
    description: "Edwin Hubble menemukan bahwa galaksi bergerak menjauh dari kita dengan kecepatan proporsional terhadap jaraknya - bukti ekspansi alam semesta.",
    icon: Telescope,
    color: "from-indigo-500 to-purple-500"
  },
  {
    year: "1990",
    title: "Hubble Space Telescope",
    description: "Peluncuran teleskop luar angkasa yang menghasilkan gambar galaksi paling detail, membuka era baru dalam astronomi galaksi.",
    icon: Telescope,
    color: "from-cyan-500 to-blue-500"
  },
  {
    year: "2022",
    title: "James Webb Space Telescope",
    description: "Teleskop inframerah tercanggih mengungkap galaksi tertua dan terjauh yang pernah diamati, hingga 13,5 miliar tahun cahaya.",
    icon: Telescope,
    color: "from-amber-500 to-yellow-500"
  }
];

export default function HistorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="history" className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      
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
            <Clock className="w-10 h-10 text-blue-400" />
            <h2 className="text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Sejarah & Penemuan
            </h2>
          </div>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Perjalanan manusia dalam memahami galaksi, dari Galileo hingga era teleskop luar angkasa modern
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {timelineEvents.map((event, index) => {
            const Icon = event.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.645, 0.045, 0.355, 1]
                }}
                className="relative mb-12 last:mb-0"
              >
                <div className={`flex flex-col md:flex-row gap-6 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Year Badge */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                    className={`flex-shrink-0 w-32 h-32 rounded-full bg-gradient-to-br ${event.color} p-1`}
                  >
                    <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center">
                      <Icon className="w-8 h-8 text-white mb-1" />
                      <span className="text-2xl text-white">{event.year}</span>
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    className="flex-1 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/60 transition-all"
                  >
                    <h3 className={`text-2xl mb-3 bg-clip-text text-transparent bg-gradient-to-r ${event.color}`}>
                      {event.title}
                    </h3>
                    <p className="text-blue-100 leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                </div>

                {/* Connector Line */}
                {index < timelineEvents.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 top-32 w-0.5 h-12 bg-gradient-to-b from-purple-500/50 to-transparent transform -translate-x-1/2" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Summary Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8, 
            delay: 1.2,
            ease: [0.645, 0.045, 0.355, 1]
          }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
            <h4 className="text-xl text-white mb-3 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-purple-400" />
              Perkembangan Pemahaman Kita
            </h4>
            <p className="text-blue-100 leading-relaxed">
              Dari awalnya mengira Bima Sakti adalah satu-satunya galaksi di alam semesta, kini kita tahu bahwa ada <span className="text-purple-300">lebih dari 2 triliun galaksi</span> yang dapat diamati. Setiap penemuan membawa kita lebih dekat untuk memahami asal usul, struktur, dan masa depan alam semesta. Teknologi teleskop modern telah memungkinkan kita melihat galaksi yang terbentuk hanya beberapa ratus juta tahun setelah Big Bang.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

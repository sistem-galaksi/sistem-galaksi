"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Layers, CircleDot, Orbit, Atom } from "lucide-react";

const components = [
  {
    title: "Lubang Hitam Supermasif",
    icon: CircleDot,
    description: "Hampir setiap galaksi memiliki lubang hitam supermasif di pusatnya dengan massa jutaan hingga miliaran kali massa Matahari.",
    details: [
      "Bima Sakti memiliki Sagittarius A* dengan massa 4 juta kali Matahari",
      "Gravitasi sangat kuat sehingga bahkan cahaya tidak bisa lolos",
      "Mempengaruhi orbit bintang dan gas di sekitarnya",
      "Memancarkan radiasi kuat saat 'memakan' materi"
    ],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Lengan Spiral",
    icon: Orbit,
    description: "Struktur melengkung yang terbentuk dari bintang-bintang muda, gas, dan debu yang berputar mengelilingi pusat galaksi.",
    details: [
      "Terbentuk karena gelombang kerapatan yang bergerak melalui piringan galaksi",
      "Tempat pembentukan bintang aktif dengan bintang-bintang biru muda",
      "Bima Sakti memiliki 4 lengan spiral utama",
      "Kecepatan rotasi berbeda dengan kecepatan materi"
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Halo Galaksi",
    icon: Layers,
    description: "Wilayah berbentuk bola yang mengelilingi galaksi, berisi bintang-bintang tua, gugus bola, dan dark matter.",
    details: [
      "Membentang jauh melampaui piringan galaksi yang terlihat",
      "Berisi bintang-bintang tertua di galaksi",
      "Gugus bola dengan ratusan ribu bintang",
      "Orbit bintang sangat elips dan acak"
    ],
    gradient: "from-amber-500 to-orange-500"
  },
  {
    title: "Dark Matter (Materi Gelap)",
    icon: Atom,
    description: "Materi misterius yang tidak memancarkan cahaya namun membentuk sekitar 85% dari total massa galaksi.",
    details: [
      "Hanya bisa dideteksi melalui efek gravitasinya",
      "Mengikat galaksi dan mencegahnya tercerai-berai",
      "Membentuk 'kerangka' tempat materi normal berkumpul",
      "Salah satu misteri terbesar dalam fisika modern"
    ],
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Piringan Galaksi",
    icon: CircleDot,
    description: "Bagian datar dan tipis dari galaksi spiral yang berisi mayoritas bintang, gas, dan debu.",
    details: [
      "Ketebalan sekitar 1.000 tahun cahaya, diameter 100.000 tahun cahaya",
      "Berputar dengan kecepatan ratusan kilometer per detik",
      "Tempat terjadinya sebagian besar pembentukan bintang",
      "Mengandung nebula, gugus bintang terbuka, dan planet"
    ],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Bulge (Tonjolan Pusat)",
    icon: CircleDot,
    description: "Konsentrasi padat bintang-bintang tua di pusat galaksi, berbentuk bulat atau elips.",
    details: [
      "Berisi bintang-bintang yang lebih tua dan lebih merah",
      "Kerapatan bintang sangat tinggi",
      "Sedikit atau tidak ada pembentukan bintang baru",
      "Mengelilingi lubang hitam supermasif"
    ],
    gradient: "from-red-500 to-rose-500"
  }
];

export default function StructureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="structure" className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YjVjZjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJWMzRoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAgMHYtMmgydi0yaC0ydjJoLTJ2MmgyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
      
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
            <Layers className="w-10 h-10 text-purple-400" />
            <h2 className="text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Struktur & Komponen Galaksi
            </h2>
          </div>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Menyelami bagian-bagian penyusun galaksi dan bagaimana mereka bekerja bersama membentuk sistem kosmik yang megah
          </p>
        </motion.div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {components.map((component, index) => {
            const Icon = component.icon;
            
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
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${component.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                
                {/* Card */}
                <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 h-full hover:border-purple-400/60 transition-all">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r ${component.gradient} flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl mb-2 bg-clip-text text-transparent bg-gradient-to-r ${component.gradient}`}>
                        {component.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-blue-100 mb-4 leading-relaxed">
                    {component.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2">
                    <p className="text-sm text-purple-300 mb-2">Detail Penting:</p>
                    {component.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.1 + detailIndex * 0.05 + 0.3,
                          ease: [0.645, 0.045, 0.355, 1]
                        }}
                        className="flex items-start gap-2"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${component.gradient} mt-2 flex-shrink-0`} />
                        <p className="text-sm text-blue-200">{detail}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8, 
            delay: 0.8,
            ease: [0.645, 0.045, 0.355, 1]
          }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 backdrop-blur-sm border border-indigo-500/30 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <Layers className="w-8 h-8 text-indigo-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl text-white mb-2">Sistem yang Kompleks dan Teratur</h4>
                <p className="text-blue-100 leading-relaxed">
                  Galaksi adalah sistem yang sangat kompleks namun teratur. Setiap komponen memiliki peran penting dalam menjaga stabilitas dan evolusi galaksi. Interaksi antara gravitasi, rotasi, dan dark matter menciptakan struktur yang kita lihat hari ini. Mempelajari struktur galaksi membantu kita memahami bagaimana galaksi terbentuk, berkembang, dan berinteraksi selama miliaran tahun.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

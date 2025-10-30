import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Zap, Orbit, Infinity, Telescope, Flame } from "lucide-react";

const facts = [
  {
    icon: Infinity,
    title: "Jumlah Galaksi yang Mengejutkan",
    fact: "Diperkirakan terdapat lebih dari 2 triliun galaksi di alam semesta yang dapat diamati. Setiap galaksi mengandung ratusan miliar hingga triliunan bintang!",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    icon: Zap,
    title: "Kecepatan Galaksi yang Luar Biasa",
    fact: "Bima Sakti bergerak melalui ruang angkasa dengan kecepatan sekitar 2,1 juta km/jam. Dalam waktu yang sama, Tata Surya kita mengorbit pusat galaksi dengan kecepatan 828.000 km/jam.",
    gradient: "from-purple-500 to-pink-400"
  },
  {
    icon: Orbit,
    title: "Tabrakan Galaksi Adalah Hal Biasa",
    fact: "Tabrakan antar galaksi terjadi sepanjang waktu di alam semesta. Namun karena jarak antar bintang sangat besar, kemungkinan bintang bertabrakan hampir nol. Galaksi akan 'melewati' satu sama lain.",
    gradient: "from-yellow-500 to-orange-400"
  },
  {
    icon: Telescope,
    title: "Galaksi Tertua yang Teramati",
    fact: "Galaksi GN-z11 adalah salah satu galaksi tertua yang pernah diamati, terbentuk hanya 400 juta tahun setelah Big Bang (sekitar 13,4 miliar tahun yang lalu).",
    gradient: "from-green-500 to-emerald-400"
  },
  {
    icon: Flame,
    title: "Galaksi Cannibalistic",
    fact: "Galaksi besar sering 'memakan' galaksi yang lebih kecil. Bima Sakti sendiri sedang dalam proses menelan beberapa galaksi kerdil, dan jejak galaksi yang pernah dimakan masih bisa ditemukan di struktur kita.",
    gradient: "from-red-500 to-orange-400"
  }
];

export default function FactsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="facts" ref={ref} className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 mb-4">
            Fakta Menarik tentang Galaksi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-400 mx-auto mb-4" />
          <p className="text-blue-200 max-w-2xl mx-auto">
            Temukan hal-hal menakjubkan yang mungkin belum Anda ketahui tentang galaksi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  ease: [0.645, 0.045, 0.355, 1]
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 1,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${fact.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                
                <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 h-full hover:border-purple-400/60 transition-all">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${fact.gradient} flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl text-white mb-3">
                    {fact.title}
                  </h3>
                  
                  <p className="text-blue-100 leading-relaxed">
                    {fact.fact}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Card } from "./ui/card";
import { Star } from "lucide-react";

const galaxyExamples = [
  {
    name: "Bima Sakti (Milky Way)",
    type: "Galaksi Spiral",
    description: "Galaksi tempat Tata Surya kita berada. Memiliki diameter sekitar 100.000 tahun cahaya dengan lebih dari 200 miliar bintang.",
    distance: "0 tahun cahaya (kita berada di dalamnya)",
    color: "blue"
  },
  {
    name: "Andromeda (M31)",
    type: "Galaksi Spiral",
    description: "Galaksi spiral terbesar dan terdekat dengan Bima Sakti. Diprediksi akan bertabrakan dengan Bima Sakti dalam 4,5 miliar tahun.",
    distance: "~2,5 juta tahun cahaya",
    color: "cyan"
  },
  {
    name: "Messier 87 (M87)",
    type: "Galaksi Elips",
    description: "Galaksi elips raksasa yang sangat masif. Terkenal karena foto pertama lubang hitam supermasif diambil dari pusatnya.",
    distance: "~53,5 juta tahun cahaya",
    color: "purple"
  },
  {
    name: "Triangulum (M33)",
    type: "Galaksi Spiral",
    description: "Anggota ketiga dari Grup Lokal setelah Andromeda dan Bima Sakti. Galaksi spiral yang lebih kecil namun tetap memukau.",
    distance: "~3 juta tahun cahaya",
    color: "blue"
  },
  {
    name: "Large Magellanic Cloud",
    type: "Galaksi Irregular",
    description: "Galaksi satelit Bima Sakti yang terlihat dari belahan bumi selatan. Tempat supernova terdekat yang teramati (1987A).",
    distance: "~163.000 tahun cahaya",
    color: "yellow"
  },
  {
    name: "Small Magellanic Cloud",
    type: "Galaksi Irregular",
    description: "Galaksi irregular kedua yang mengorbit Bima Sakti. Memiliki struktur yang tidak beraturan akibat interaksi gravitasi.",
    distance: "~200.000 tahun cahaya",
    color: "orange"
  }
];

export default function ExamplesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: "from-blue-500 to-cyan-400",
      cyan: "from-cyan-500 to-blue-400",
      purple: "from-purple-500 to-pink-400",
      yellow: "from-yellow-500 to-orange-400",
      orange: "from-orange-500 to-red-400"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="examples" ref={ref} className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-4">
            Contoh Galaksi Terkenal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-4" />
          <p className="text-blue-200 max-w-2xl mx-auto">
            Beberapa galaksi yang telah dipelajari dan diamati oleh para astronom
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galaxyExamples.map((galaxy, index) => (
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
            >
              <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border-purple-500/30 p-6 h-full hover:border-purple-400/60 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <Star className={`w-8 h-8 bg-gradient-to-r ${getColorClasses(galaxy.color)} bg-clip-text text-transparent`} fill="currentColor" />
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {galaxy.type}
                  </span>
                </div>
                
                <h3 className={`text-2xl mb-3 bg-clip-text text-transparent bg-gradient-to-r ${getColorClasses(galaxy.color)}`}>
                  {galaxy.name}
                </h3>
                
                <p className="text-blue-100 mb-4 leading-relaxed">
                  {galaxy.description}
                </p>
                
                <div className="pt-4 border-t border-purple-500/20">
                  <p className="text-sm text-purple-300">Jarak dari Bumi:</p>
                  <p className="text-yellow-400">{galaxy.distance}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

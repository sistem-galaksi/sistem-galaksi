"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Eye, MapPin, Clock, Lightbulb } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const equipment = [
  {
    name: "Teleskop Refraktor Pemula",
    price: "Rp 1-3 juta",
    description: "Cocok untuk pemula, mudah digunakan, perawatan minimal",
    targets: "Bulan, planet-planet terang, gugus bintang terbuka",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Teleskop Reflektor",
    price: "Rp 2-5 juta",
    description: "Aperture lebih besar, lebih banyak cahaya, harga lebih terjangkau",
    targets: "Galaksi terang (M31, M51), nebula, gugus bintang",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "Teleskop Dobsonian",
    price: "Rp 3-8 juta",
    description: "Aperture sangat besar, desain sederhana, value for money terbaik",
    targets: "Galaksi redup, nebula detail, objek deep-sky",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    name: "Binokuler Astronomi",
    price: "Rp 500rb - 2 juta",
    description: "Portabel, mudah digunakan, tidak perlu setup rumit",
    targets: "Bima Sakti, gugus bintang, konstelasi",
    gradient: "from-green-500 to-emerald-500"
  }
];

const apps = [
  {
    name: "Stellarium",
    type: "Desktop & Mobile",
    features: "Planetarium virtual, identifikasi objek, simulasi waktu",
    free: true
  },
  {
    name: "SkySafari",
    type: "iOS & Android",
    features: "Database 120.000+ objek, kontrol teleskop, augmented reality",
    free: false
  },
  {
    name: "Star Walk 2",
    type: "iOS & Android",
    features: "AR mode, notifikasi event astronomi, beginner-friendly",
    free: false
  },
  {
    name: "NASA App",
    type: "iOS & Android",
    features: "Berita NASA, live streaming ISS, image of the day",
    free: true
  }
];

const indonesiaSpots = [
  {
    location: "Gunung Bromo, Jawa Timur",
    reason: "Ketinggian ideal, minim polusi cahaya, pemandangan spektakuler",
    bestTime: "April - Oktober (musim kering)"
  },
  {
    location: "Observatorium Bosscha, Lembang",
    reason: "Observatorium tertua di Indonesia, tur edukasi tersedia",
    bestTime: "Sepanjang tahun (booking required)"
  },
  {
    location: "Pantai Parangtritis, Yogyakarta",
    reason: "Akses mudah, view horizon luas, dekat kota",
    bestTime: "Mei - September"
  },
  {
    location: "Taman Nasional Baluran, Jawa Timur",
    reason: "Sangat gelap, jauh dari polusi cahaya",
    bestTime: "April - November"
  },
  {
    location: "Kepulauan Derawan, Kalimantan",
    reason: "Langit gelap sempurna, pemandangan laut eksotis",
    bestTime: "Maret - Oktober"
  }
];

const tips = [
  {
    icon: Clock,
    title: "Waktu Terbaik",
    tips: [
      "Fase bulan baru (langit paling gelap)",
      "Tengah malam hingga dini hari (1-5 pagi)",
      "Musim kering untuk langit cerah",
      "Hindari saat bulan purnama"
    ]
  },
  {
    icon: MapPin,
    title: "Lokasi Ideal",
    tips: [
      "Jauh dari lampu kota (minimal 50 km)",
      "Dataran tinggi lebih baik",
      "Horizon terbuka tanpa penghalang",
      "Cek peta polusi cahaya online"
    ]
  },
  {
    icon: Eye,
    title: "Teknik Observasi",
    tips: [
      "Adaptasi mata ke gelap (20-30 menit)",
      "Gunakan red light untuk membaca peta",
      "Mulai dari objek terang ke redup",
      "Bersabar, galaksi butuh waktu untuk terlihat"
    ]
  },
  {
    icon: Lightbulb,
    title: "Tips Tambahan",
    tips: [
      "Bawa kursi lipat untuk kenyamanan",
      "Pakaian hangat (malam bisa dingin)",
      "Snack dan air minum",
      "Join komunitas astronomi lokal"
    ]
  }
];

export default function ObservationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="observation" className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      
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
            <Eye className="w-10 h-10 text-purple-400" />
            <h2 className="text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Cara Mengamati Galaksi
            </h2>
          </div>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Panduan praktis untuk memulai petualangan stargazing dan mengamati galaksi dari Indonesia
          </p>
        </motion.div>

        {/* Equipment Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ 
              duration: 0.7,
              ease: [0.645, 0.045, 0.355, 1]
            }}
            className="text-3xl text-white mb-8"
          >
            Peralatan yang Dibutuhkan
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-6">
            {equipment.map((item, index) => (
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
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                
                <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/60 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className={`text-xl bg-clip-text text-transparent bg-gradient-to-r ${item.gradient}`}>
                      {item.name}
                    </h4>
                    <span className="text-sm px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  
                  <p className="text-blue-100 mb-3 text-sm">
                    {item.description}
                  </p>
                  
                  <div className="pt-3 border-t border-purple-500/20">
                    <p className="text-xs text-purple-300 mb-1">Cocok untuk:</p>
                    <p className="text-sm text-blue-200">{item.targets}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Apps Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ 
              duration: 0.7,
              delay: 0.4,
              ease: [0.645, 0.045, 0.355, 1]
            }}
            className="text-3xl text-white mb-8"
          >
            Aplikasi Stargazing Terbaik
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {apps.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.5 + index * 0.08,
                  ease: [0.645, 0.045, 0.355, 1]
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-indigo-500/30 rounded-xl p-5 hover:border-indigo-400/60 transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg text-white">{app.name}</h4>
                  {app.free && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
                      Free
                    </span>
                  )}
                </div>
                <p className="text-xs text-purple-300 mb-2">{app.type}</p>
                <p className="text-sm text-blue-100">{app.features}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Indonesia Spots */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ 
              duration: 0.7,
              delay: 0.6,
              ease: [0.645, 0.045, 0.355, 1]
            }}
            className="text-3xl text-white mb-8"
          >
            Lokasi Terbaik di Indonesia
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {indonesiaSpots.map((spot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.7 + index * 0.08,
                  ease: [0.645, 0.045, 0.355, 1]
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-blue-500/30 rounded-xl p-5 hover:border-blue-400/60 transition-all"
              >
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <h4 className="text-lg text-white">{spot.location}</h4>
                </div>
                <p className="text-sm text-blue-100 mb-2">{spot.reason}</p>
                <p className="text-xs text-purple-300">⏰ {spot.bestTime}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ 
              duration: 0.7,
              delay: 0.8,
              ease: [0.645, 0.045, 0.355, 1]
            }}
            className="text-3xl text-white mb-8"
          >
            Tips & Trik Observasi
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {tips.map((tip, index) => {
              const Icon = tip.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.9 + index * 0.1,
                    ease: [0.645, 0.045, 0.355, 1]
                  }}
                  className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/60 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl text-white">{tip.title}</h4>
                  </div>
                  
                  <ul className="space-y-2">
                    {tip.tips.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 mt-2 flex-shrink-0" />
                        <span className="text-blue-100 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8, 
            delay: 1.3,
            ease: [0.645, 0.045, 0.355, 1]
          }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-purple-500/30">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1745521245831-422f7f9140ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFyZ2F6aW5nJTIwbmlnaHQlMjBza3l8ZW58MXx8fHwxNzYxNzQ4OTA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Stargazing"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white text-lg mb-2">Mulai Petualangan Anda</p>
              <p className="text-blue-200 text-sm">
                Dengan persiapan yang tepat, siapa saja bisa menikmati keindahan galaksi dari halaman belakang rumah. Selamat mengamati bintang! 🌟
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Telescope, Sparkles, Eye } from "lucide-react";

const galaxyImages = [
  {
    url: "https://images.unsplash.com/photo-1708112291895-85eefa0e8179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodWJibGUlMjB0ZWxlc2NvcGUlMjBnYWxheHl8ZW58MXx8fHwxNzYxNzQ4OTA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Galaksi Spiral NGC 1300",
    description: "Galaksi spiral batang yang terletak 61 juta tahun cahaya, difoto oleh Hubble Space Telescope",
    source: "Hubble Space Telescope"
  },
  {
    url: "https://images.unsplash.com/photo-1625736410948-a984d181b8e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGlyYWwlMjBnYWxheHklMjBzcGFjZXxlbnwxfHx8fDE3NjE3NDg5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Galaksi Spiral Megah",
    description: "Struktur lengan spiral yang sempurna menunjukkan pembentukan bintang aktif dengan warna biru cerah",
    source: "NASA"
  },
  {
    url: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmRyb21lZGElMjBnYWxheHl8ZW58MXx8fHwxNzYxNzA5OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Galaksi Andromeda (M31)",
    description: "Tetangga terdekat Bima Sakti dengan 1 triliun bintang, akan bertabrakan dengan kita dalam 4 miliar tahun",
    source: "Hubble & Ground-based"
  },
  {
    url: "https://images.unsplash.com/photo-1681673819379-a183d9acf860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwc3BhY2UlMjBuZWJ1bGF8ZW58MXx8fHwxNzYxNzQ4OTA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Nebula & Pembentukan Bintang",
    description: "Awan gas dan debu tempat lahirnya bintang-bintang baru di dalam galaksi kita",
    source: "James Webb Space Telescope"
  },
  {
    url: "https://images.unsplash.com/photo-1515705576963-95cad62945b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxreSUyMHdheSUyMGdhbGF4eXxlbnwxfHx8fDE3NjE2Njc0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Bima Sakti dari Bumi",
    description: "Pemandangan galaksi kita sendiri dari permukaan Bumi, menampilkan miliaran bintang yang indah",
    source: "Ground-based Photography"
  },
  {
    url: "https://images.unsplash.com/photo-1708111174703-1668c3a16ce2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGxpcHRpY2FsJTIwZ2FsYXh5fGVufDF8fHx8MTc2MTcwOTk4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Galaksi Elips Raksasa",
    description: "Galaksi elips dengan bentuk bulat yang terdiri dari bintang-bintang tua berwarna kekuningan",
    source: "NASA/ESA"
  }
];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
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
            <Telescope className="w-10 h-10 text-purple-400" />
            <h2 className="text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Galeri Visual Galaksi
            </h2>
          </div>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Koleksi gambar menakjubkan dari teleskop luar angkasa terbaik dunia
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galaxyImages.map((image, index) => (
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
                transition: { duration: 0.3 }
              }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-xl border border-purple-500/30 bg-slate-900/50 backdrop-blur-sm hover:border-purple-400/60 transition-all">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* View Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-12 h-12 text-white drop-shadow-lg" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg text-white group-hover:text-purple-300 transition-colors">
                      {image.title}
                    </h3>
                    <Sparkles className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  </div>
                  
                  <p className="text-sm text-blue-200 mb-3 leading-relaxed">
                    {image.description}
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
                    <span className="text-xs text-purple-400">{image.source}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Box */}
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
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <Telescope className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl text-white mb-2">Tentang Gambar-Gambar Ini</h4>
                <p className="text-blue-100 leading-relaxed">
                  Semua gambar ini diambil menggunakan teknologi teleskop canggih seperti <span className="text-purple-300">Hubble Space Telescope</span> dan <span className="text-purple-300">James Webb Space Telescope</span>. Gambar-gambar ini membantu astronom mempelajari struktur, komposisi, dan evolusi galaksi di seluruh alam semesta. Setiap piksel menyimpan informasi berharga tentang usia, jarak, dan kandungan kimia objek-objek langit yang jaraknya jutaan tahun cahaya dari Bumi.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

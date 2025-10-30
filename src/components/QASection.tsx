import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "Bagaimana galaksi-galaksi terbentuk di alam semesta awal?",
    answer: "Galaksi terbentuk dari fluktuasi kecil dalam kepadatan materi di alam semesta awal. Setelah Big Bang, materi gelap mulai menggumpal karena gravitasi, membentuk 'halo' materi gelap. Gas hidrogen dan helium kemudian tertarik ke dalam halo ini, mengumpul dan membentuk bintang-bintang pertama. Seiring waktu, kelompok-kelompok bintang ini bergabung melalui tabrakan dan penggabungan untuk membentuk galaksi-galaksi yang lebih besar yang kita lihat saat ini."
  },
  {
    question: "Mengapa galaksi spiral memiliki lengan yang berbentuk spiral dan tidak berputar seperti benda padat?",
    answer: "Lengan spiral bukanlah struktur fisik yang permanen, melainkan gelombang kepadatan yang bergerak melalui cakram galaksi. Bayangkan seperti kemacetan di jalan raya - mobil masuk dan keluar dari area kemacetan, tapi kemacetan itu sendiri bergerak lebih lambat. Lengan spiral adalah area di mana gas dan debu berkumpul sementara, memicu pembentukan bintang-bintang baru yang terang. Bintang-bintang melewati lengan spiral dalam orbitnya, tetapi lengan itu sendiri bertahan sebagai pola gelombang."
  },
  {
    question: "Apa yang terjadi pada bintang-bintang dan planet ketika dua galaksi bertabrakan?",
    answer: "Meskipun terdengar dramatis, ketika dua galaksi 'bertabrakan', bintang-bintang dan planet hampir tidak pernah bertabrakan secara fisik. Ini karena jarak antar bintang sangat besar dibandingkan ukuran bintang itu sendiri. Yang terjadi adalah orbit bintang-bintang terganggu oleh gaya gravitasi, menciptakan bentuk yang aneh dan memicu gelombang besar pembentukan bintang baru dari gas yang terkompresi. Proses penggabungan bisa memakan waktu ratusan juta hingga miliaran tahun, dan hasilnya adalah satu galaksi yang lebih besar."
  }
];

export default function QASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="qa" ref={ref} className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
            Pertanyaan & Jawaban
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-4" />
          <p className="text-blue-200 max-w-2xl mx-auto">
            Eksplorasi lebih dalam tentang misteri galaksi
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  ease: [0.645, 0.045, 0.355, 1]
                }}
              >
                <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-purple-500/30 rounded-xl overflow-hidden hover:border-purple-400/60 transition-all">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-6 flex items-start justify-between gap-4 text-left group"
                  >
                    <div className="flex-1">
                      <div className="flex items-start gap-3">
                        <span className="text-yellow-400 text-xl flex-shrink-0">Q{index + 1}.</span>
                        <h3 className="text-lg text-white group-hover:text-blue-300 transition-colors">
                          {item.question}
                        </h3>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ 
                        duration: 0.3,
                        ease: [0.645, 0.045, 0.355, 1]
                      }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-6 h-6 text-purple-400" />
                    </motion.div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0
                    }}
                    transition={{ 
                      duration: 0.4,
                      ease: [0.645, 0.045, 0.355, 1]
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="pl-8 border-l-2 border-cyan-400/30">
                        <p className="text-blue-100 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

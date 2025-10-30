import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-purple-500/20 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <h3 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Jelajahi Keagungan Galaksi
            </h3>
            <Sparkles className="w-5 h-5 text-yellow-400" />
          </div>
          
          <p className="text-blue-200 text-sm max-w-2xl mx-auto">
            Website edukasi ini dibuat untuk membantu memahami keindahan dan kompleksitas sistem galaksi di alam semesta.
          </p>
          
          <div className="pt-6 border-t border-purple-500/10">
            <p className="text-purple-300 text-sm">
              © 2025 Sistem Galaksi. Dibuat dengan pengetahuan dan keingintahuan tentang alam semesta.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

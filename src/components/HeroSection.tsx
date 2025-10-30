import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { Card } from "./ui/card";

const teamMembers = [
  "Auddy Deska.M",
  "Wasidin",
  "Anisa Dafina",
  "Vannesa JR"
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500185497267-d635f9c5e90f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzcGFjZSUyMHN0YXJzfGVufDF8fHx8MTc2MTcxMDA3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            ease: [0.645, 0.045, 0.355, 1],
            delay: 0.2
          }}
          className="text-center space-y-6"
        >
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1, 
              delay: 0.4,
              ease: [0.645, 0.045, 0.355, 1]
            }}
            className="flex items-center justify-center gap-3"
          >
            <Sparkles className="w-8 h-8 text-yellow-400" />
            <h1 className="text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400">
              Jelajahi Keagungan Galaksi
            </h1>
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </motion.div>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.6,
              ease: [0.645, 0.045, 0.355, 1]
            }}
            className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto"
          >
            Selami keindahan alam semesta dan temukan rahasia di balik miliaran bintang yang membentuk galaksi-galaksi megah di kosmos
          </motion.p>
          
          {/* Team Members */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.8,
              ease: [0.645, 0.045, 0.355, 1]
            }}
            className="pt-12"
          >
            <p className="text-sm text-purple-300 mb-4">Disusun Oleh:</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1 + index * 0.1,
                    ease: [0.645, 0.045, 0.355, 1]
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="bg-slate-900/50 backdrop-blur-sm border-purple-500/30 p-4 hover:border-purple-400/60 transition-colors">
                    <p className="text-white text-center">{member}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 1, 
          delay: 1.6,
          ease: [0.645, 0.045, 0.355, 1]
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
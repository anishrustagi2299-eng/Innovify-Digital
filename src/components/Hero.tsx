import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #3B82F6 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-blue/20 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
          </span>
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-cyan">
            Next-Gen Growth Engineering
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]"
        >
          We Don’t Just Market Brands.<br />
          <span className="text-gradient">We Engineer Growth.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-brand-grey text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Performance-driven digital strategies designed to scale businesses. 
          We combine data science with creative excellence to dominate your market.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple text-white font-bold text-lg shadow-2xl shadow-brand-blue/30 hover:shadow-brand-blue/50 transition-all overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          
          <button className="flex items-center gap-3 text-white font-semibold hover:text-brand-blue transition-colors group">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-blue transition-colors">
              <Play className="w-4 h-4 fill-current" />
            </div>
            View Our Work
          </button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-[10%] hidden lg:block"
      >
        <div className="w-24 h-24 glass rounded-2xl rotate-12 flex items-center justify-center border-brand-blue/30">
          <div className="w-12 h-2 bg-brand-blue rounded-full mb-2" />
          <div className="w-8 h-2 bg-brand-purple rounded-full" />
        </div>
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-[15%] hidden lg:block"
      >
        <div className="w-20 h-20 glass rounded-full flex items-center justify-center border-brand-purple/30">
          <div className="w-10 h-10 rounded-full border-2 border-brand-purple border-t-transparent animate-spin" />
        </div>
      </motion.div>
    </section>
  );
}

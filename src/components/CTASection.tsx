import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden p-12 md:p-24 text-center border border-white/10"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-brand-midnight -z-10" />
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-brand-blue/20 blur-[150px] -z-10 animate-pulse" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-brand-purple/20 blur-[150px] -z-10 animate-pulse delay-700" />
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight"
          >
            Ready to Scale Like <br />
            <span className="text-gradient">Never Before?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-grey text-lg md:text-xl max-w-2xl mx-auto mb-12"
          >
            Stop guessing. Start growing. Join the elite brands that have engineered their success with Innovify Digital.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 rounded-full bg-white text-brand-charcoal font-bold text-xl shadow-2xl hover:shadow-white/20 transition-all flex items-center gap-3 mx-auto group"
          >
            Let’s Talk Growth <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

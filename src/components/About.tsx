import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

const Counter = ({ value, label }: { value: number; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count}{value > 100 ? '+' : ''}
      </div>
      <div className="text-brand-grey text-sm uppercase tracking-widest font-semibold">
        {label}
      </div>
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4">
              Our DNA
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              We are a collective of <span className="text-gradient">digital architects</span> obsessed with results.
            </h3>
            <p className="text-brand-grey text-lg mb-8 leading-relaxed">
              Founded at the intersection of technology and marketing, Innovify Digital was built to solve the complexity of modern growth. We don't believe in vanity metrics; we believe in ROI, scalability, and market dominance.
            </p>
            <p className="text-brand-grey text-lg mb-12 leading-relaxed">
              Our approach is simple: Understand the data, engineer the strategy, and execute with precision. Every campaign we run is a step towards your brand's future.
            </p>

            <div className="grid grid-cols-3 gap-8">
              <Counter value={250} label="Clients Served" />
              <Counter value={1200} label="Campaigns Run" />
              <Counter value={85} label="Revenue (M)" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 glass rounded-3xl p-8 border-brand-blue/20 overflow-hidden">
              <div className="aspect-square bg-brand-midnight rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Abstract Growth Visual */}
                <div className="absolute inset-0 flex items-end justify-around px-8 pb-12">
                  {[40, 70, 50, 90, 60, 100, 80].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ delay: i * 0.1, duration: 1 }}
                      className="w-4 bg-gradient-to-t from-brand-blue to-brand-purple rounded-t-full"
                    />
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-transparent to-transparent" />
                <div className="z-20 text-center">
                  <div className="text-6xl font-bold text-white mb-2">98%</div>
                  <div className="text-brand-cyan font-semibold uppercase tracking-widest text-xs">
                    Retention Rate
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Blobs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/30 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-purple/30 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

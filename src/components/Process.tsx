import { motion } from 'motion/react';
import { Search, Lightbulb, Rocket, BarChart, Maximize } from 'lucide-react';

const steps = [
  {
    title: 'Understand',
    description: 'Deep dive into your business, market, and data to find hidden opportunities.',
    icon: Search
  },
  {
    title: 'Strategize',
    description: 'Crafting a custom growth roadmap designed for scale and market dominance.',
    icon: Lightbulb
  },
  {
    title: 'Execute',
    description: 'Deploying high-performance campaigns with precision and creative excellence.',
    icon: Rocket
  },
  {
    title: 'Optimize',
    description: 'Continuous A/B testing and data analysis to maximize every dollar spent.',
    icon: BarChart
  },
  {
    title: 'Scale',
    description: 'Aggressively expanding winning strategies to capture total market share.',
    icon: Maximize
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4">
            The Methodology
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            Our <span className="text-gradient">Growth Engine</span>
          </h3>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-brand-blue/20 via-brand-purple/20 to-brand-blue/20 -translate-y-1/2 hidden lg:block" />

          <div className="grid lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-8 inline-block">
                  <div className="w-20 h-20 rounded-2xl glass border-brand-blue/20 flex items-center justify-center group-hover:border-brand-blue transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                    <step.icon className="text-brand-blue w-8 h-8 group-hover:text-brand-cyan transition-colors" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-midnight border border-brand-blue/30 flex items-center justify-center text-xs font-bold text-brand-blue">
                    0{i + 1}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-brand-blue transition-colors">
                  {step.title}
                </h4>
                <p className="text-brand-grey text-sm leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

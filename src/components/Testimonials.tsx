import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, TechFlow',
    content: 'Innovify didn’t just run ads; they understood our business model and engineered a growth strategy that tripled our revenue in 6 months.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'Marcus Chen',
    role: 'Founder, EcoLuxe',
    content: 'The level of strategic thinking and data analysis is unmatched. They are truly a high-end tech-marketing hybrid agency.',
    avatar: 'https://i.pravatar.cc/150?u=marcus'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Marketing Director, SaaSly',
    content: 'Their performance marketing campaigns are surgical. We’ve seen a 400% increase in qualified leads since partnering with them.',
    avatar: 'https://i.pravatar.cc/150?u=elena'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4">
            Testimonials
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] glass p-8 rounded-3xl border-white/5 relative group"
            >
              <Quote className="absolute top-6 right-8 text-brand-blue/20 w-12 h-12 group-hover:text-brand-blue/40 transition-colors" />
              
              <p className="text-brand-grey text-lg leading-relaxed mb-8 relative z-10">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full border-2 border-brand-blue/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-white font-bold">{t.name}</div>
                  <div className="text-brand-blue text-xs font-semibold uppercase tracking-widest">
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

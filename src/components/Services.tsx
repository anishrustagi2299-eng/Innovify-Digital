import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Share2, 
  Search, 
  Palette, 
  Code, 
  Target 
} from 'lucide-react';

const services = [
  {
    title: 'Performance Marketing',
    description: 'Data-driven campaigns that convert browsers into loyal customers with surgical precision.',
    icon: TrendingUp,
    color: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'Social Media Marketing',
    description: 'Building communities and viral presence across platforms that matter to your audience.',
    icon: Share2,
    color: 'from-purple-500 to-pink-400'
  },
  {
    title: 'SEO & Organic Growth',
    description: 'Dominating search results through technical excellence and strategic content architecture.',
    icon: Search,
    color: 'from-brand-blue to-brand-purple'
  },
  {
    title: 'Branding & Creative',
    description: 'Crafting high-end visual identities that resonate and command attention in crowded markets.',
    icon: Palette,
    color: 'from-cyan-500 to-blue-400'
  },
  {
    title: 'Website Development',
    description: 'Futuristic, high-performance web experiences built for conversion and speed.',
    icon: Code,
    color: 'from-brand-purple to-indigo-500'
  },
  {
    title: 'Paid Ads (Meta, Google)',
    description: 'Maximizing ROAS through advanced targeting and continuous optimization cycles.',
    icon: Target,
    color: 'from-brand-blue to-indigo-400'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-midnight/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Solutions for the <span className="text-gradient">Digital Era</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl glass border-white/5 hover:border-brand-blue/30 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className="text-white w-7 h-7" />
              </div>
              
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-blue transition-colors">
                {service.title}
              </h4>
              <p className="text-brand-grey leading-relaxed group-hover:text-brand-white transition-colors">
                {service.description}
              </p>
              
              <div className="mt-8 flex items-center gap-2 text-brand-blue font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                Learn More <TrendingUp className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

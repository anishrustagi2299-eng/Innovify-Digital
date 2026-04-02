import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'FinTech Revolution',
    category: 'Performance Marketing',
    image: 'https://picsum.photos/seed/fintech/800/600',
    metrics: { roas: '4.8x', leads: '12k+', growth: '320%' }
  },
  {
    title: 'Eco-Luxury Brand',
    category: 'Branding & Social',
    image: 'https://picsum.photos/seed/luxury/800/600',
    metrics: { roas: '6.2x', leads: '8k+', growth: '150%' }
  },
  {
    title: 'SaaS Powerhouse',
    category: 'SEO & Organic',
    image: 'https://picsum.photos/seed/saas/800/600',
    metrics: { roas: 'N/A', leads: '25k+', growth: '500%' }
  }
];

export default function Work() {
  return (
    <section id="work" className="py-24 bg-brand-midnight/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4">
              Case Studies
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              Proven <span className="text-gradient">Success</span>
            </h3>
          </div>
          <button className="text-brand-grey hover:text-brand-blue transition-colors font-semibold flex items-center gap-2">
            View All Projects <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass border-white/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent p-8 flex flex-col justify-end">
                <div className="text-brand-cyan text-xs font-bold uppercase tracking-widest mb-2">
                  {project.category}
                </div>
                <h4 className="text-2xl font-bold text-white mb-6">
                  {project.title}
                </h4>
                
                {/* Metrics Overlay */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div>
                    <div className="text-brand-blue font-bold text-lg">{project.metrics.roas}</div>
                    <div className="text-[10px] text-brand-grey uppercase tracking-widest">ROAS</div>
                  </div>
                  <div>
                    <div className="text-brand-blue font-bold text-lg">{project.metrics.leads}</div>
                    <div className="text-[10px] text-brand-grey uppercase tracking-widest">Leads</div>
                  </div>
                  <div>
                    <div className="text-brand-blue font-bold text-lg">{project.metrics.growth}</div>
                    <div className="text-[10px] text-brand-grey uppercase tracking-widest">Growth</div>
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

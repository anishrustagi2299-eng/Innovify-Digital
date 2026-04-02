import { Zap, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 border-t border-white/5 bg-brand-charcoal">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-brand-purple rounded flex items-center justify-center">
                <Zap className="text-white w-5 h-5 fill-white" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">
                Innovify<span className="text-brand-blue">.</span>
              </span>
            </div>
            <p className="text-brand-grey max-w-sm mb-8 leading-relaxed">
              The high-end tech + marketing hybrid agency engineering growth for the next generation of global brands.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-grey hover:text-brand-blue hover:border-brand-blue transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4">
              {['Services', 'About', 'Work', 'Process', 'Contact'].map(item => (
                <li key={item}>
                  <a href="#" className="text-brand-grey hover:text-brand-blue transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-4 text-brand-grey">
              <li>growth@innovify.digital</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Future Ave, <br />Silicon Valley, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-brand-grey text-sm">
            © 2026 Innovify Digital. All rights reserved.
          </div>
          <div className="flex gap-8 text-brand-grey text-sm">
            <a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-blue transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

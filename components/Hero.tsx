import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import { SOCIAL_LINKS } from '../constants';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(SectionId.CONTACT);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id={SectionId.HERO} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-mono mb-6 backdrop-blur-sm">
            Available for Hire
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Zayd Elbassri</span>
          </h1>
          
          <div className="h-12 md:h-16 overflow-hidden mb-8">
            <motion.div
              animate={{ y: [0, -64, -128, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", times: [0, 0.33, 0.66, 1] }}
              className="text-2xl md:text-4xl font-light text-slate-400"
            >
              <div className="h-16 flex items-center justify-center">Business Intelligence Consultant</div>
              <div className="h-16 flex items-center justify-center">Data Analyst</div>
              <div className="h-16 flex items-center justify-center">Data Scientist</div>
              <div className="h-16 flex items-center justify-center">Business Intelligence Consultant</div> 
            </motion.div>
          </div>

          <p className="max-w-2xl mx-auto text-slate-400 text-lg mb-10 leading-relaxed">
            Expert in translating complex data into actionable strategic insights. 
            Bridging the gap between raw data and decision-making through end-to-end BI solutions and advanced Machine Learning models.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`#${SectionId.CONTACT}`}
              onClick={handleScrollToContact}
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all flex items-center gap-2 cursor-pointer"
            >
              Contact Me <ArrowRight size={18} />
            </a>
            <a
              href={SOCIAL_LINKS.resume}
              download="DATA ANALYST ELBASSRI ZAYD.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              Download Resume <Download size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
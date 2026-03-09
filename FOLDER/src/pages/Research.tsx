import React from 'react';
import { motion } from 'motion/react';
import { Beaker, ExternalLink, FileText, Share2 } from 'lucide-react';
import { cn } from '../lib/utils';

const Research = () => {
  const researchWork = [
    {
      id: '1',
      title: 'OWL Student Information Assistance and Guidance Kiosk',
      description: 'The OWL system is designed as an automated, centralized hub to streamline learner workflows by integrating several essential student services into a single interface. Integrated with a Raspberry Pi 5 for high-traffic environments, it moves beyond a single-purpose tool to become a cohesive platform. This serves as a flagship capstone project, demonstrating high-level systems integration and user-centric design.',
      image: '/research-owl.jpg',
      link: '#',
      status: 'Flagship Capstone Project',
      tags: ['Hardware Integration', 'Raspberry Pi', 'User-Centric Design']
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-sky-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-[#0f4c81] mb-4">Research Work</h1>
          <div className="w-20 h-1.5 bg-[#0f4c81] rounded-full"></div>
        </div>

        <div className="space-y-16">
          {researchWork.map((work, idx) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={cn(
                "relative rounded-2xl overflow-hidden border border-sky-200 group",
                idx % 2 !== 0 ? "lg:order-2" : ""
              )}>
                <img src={work.image} alt={work.title} className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 bg-[#0f4c81] text-white text-[10px] font-black uppercase rounded">
                    {work.status}
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {work.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-sky-600 uppercase tracking-widest">#{tag}</span>
                  ))}
                </div>
                <h2 className="text-3xl font-bold text-[#0f4c81] leading-tight">{work.title}</h2>
                <p className="text-slate-600 text-lg leading-relaxed">{work.description}</p>

                <div className="pt-6 flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-[#0f4c81] hover:bg-[#0f4c81]/90 text-white font-bold rounded-xl transition-all flex items-center gap-2">
                    <FileText className="w-5 h-5" /> Read Paper
                  </button>
                  <button className="px-6 py-3 bg-white hover:bg-sky-50 text-[#0f4c81] font-bold rounded-xl border border-sky-200 transition-all flex items-center gap-2">
                    <Share2 className="w-5 h-5" /> Share
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Interests */}
        <div className="mt-32 p-12 bg-sky-100 rounded-3xl border border-sky-200 text-center">
          <Beaker className="w-12 h-12 text-sky-600 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-[#0f4c81] mb-4">Research Interests</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Systems Integration',
              'Embedded Systems Design',
              'Robotics & Bionics',
              'Human-Computer Interaction',
              'Automation Engineering'
            ].map(interest => (
              <span key={interest} className="px-6 py-2 bg-white text-slate-600 rounded-full text-sm font-medium border border-sky-200">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;

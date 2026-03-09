import React from 'react';
import { motion } from 'motion/react';
import { Award, Trophy, ExternalLink, Calendar } from 'lucide-react';
import { CERTIFICATES, HACKATHONS } from '../constants';

const Achievements = () => {
  return (
    <div className="pt-24 pb-20 bg-sky-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-[#0f4c81] mb-4">Achievements</h1>
          <div className="w-20 h-1.5 bg-[#0f4c81] rounded-full"></div>
        </div>

        {/* Certificates Section */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <Award className="w-6 h-6 text-sky-600" />
            <h2 className="text-2xl font-bold text-[#0f4c81] uppercase tracking-widest">Professional Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CERTIFICATES.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="group bg-white border border-sky-200 rounded-2xl overflow-hidden flex flex-col hover:border-sky-300 transition-all"
              >
                {/* Styled certificate preview */}
                {cert.pdfUrl ? (
                  <a href={cert.pdfUrl} target="_blank" rel="noreferrer" className="block group/cert">
                    <div className="w-full h-44 bg-gradient-to-br from-[#003087] via-[#0057a8] to-[#00a3e0] flex flex-col items-center justify-center relative overflow-hidden cursor-pointer">
                      {/* Decorative rings */}
                      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border-4 border-white/10" />
                      <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border-4 border-white/10" />
                      {/* Cisco logo text */}
                      <span className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-2">Cisco Networking Academy</span>
                      <div className="w-12 h-1 bg-white/30 rounded-full mb-3" />
                      <span className="text-white font-black text-lg text-center px-6 leading-tight group-hover/cert:text-sky-200 transition-colors">
                        {cert.title}
                      </span>
                      <span className="text-white/70 text-xs mt-2">Certificate of Completion</span>
                      <span className="absolute bottom-3 right-4 text-white/40 text-[10px] flex items-center gap-1">
                        Click to view <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className="h-48 overflow-hidden">
                    <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  </div>
                )}
                <div className="p-6 flex-1">
                  <span className="text-sky-600 text-[10px] font-bold uppercase tracking-widest mb-2 block">{cert.issuer}</span>
                  <h3 className="text-xl font-bold text-[#0f4c81] mb-2">{cert.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{cert.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-slate-500 text-xs font-medium">{cert.date}</span>
                    {cert.pdfUrl ? (
                      <a
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sky-600 hover:text-blue-400 text-sm font-bold flex items-center gap-1"
                      >
                        View Certificate <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <button className="text-sky-600 hover:text-blue-400 text-sm font-bold flex items-center gap-1">
                        Verify <ExternalLink className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Hackathons Section */}
        <section>
          <div className="flex items-center gap-3 mb-10">
            <Trophy className="w-6 h-6 text-sky-600" />
            <h2 className="text-2xl font-bold text-[#0f4c81] uppercase tracking-widest">Hackathons & Competitions</h2>
          </div>
          <div className="space-y-6">
            {HACKATHONS.map((hack, idx) => (
              <motion.div
                key={hack.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-sky-50 border border-sky-200 rounded-2xl overflow-hidden hover:bg-white transition-all flex flex-col md:flex-row md:items-stretch"
              >
                {hack.image && (
                  <div className="md:w-56 h-48 md:h-auto overflow-hidden shrink-0">
                    <img src={hack.image} alt={hack.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 flex-1">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-[#0f4c81]">{hack.title}</h3>
                      {hack.position && (
                        <span className="px-2 py-0.5 bg-[#0f4c81] text-white text-[10px] font-black uppercase rounded">
                          {hack.position}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">{hack.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm font-medium whitespace-nowrap">
                    <Calendar className="w-4 h-4" /> {hack.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Achievements;

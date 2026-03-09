import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Star, Award } from 'lucide-react';

const Academics = () => {
  const education = [
    {
      level: 'B.S. in Computer Engineering',
      institution: 'Universidad De Dagupan',
      period: '2024 - Present',
      status: 'Current',
      details: 'Focusing on computer architecture, embedded systems, and software engineering. Bridging the gap between hardware and software.',
      grade: 'In Progress',
      logo: '/logo-udd.png'
    },
    {
      level: 'BS in Computer Engineering',
      institution: 'Pangasinan State University (PSU) Urdaneta',
      period: '2023',
      status: 'Completed',
      details: 'Initial coursework and foundation in engineering principles.',
      grade: 'Completed',
      logo: '/logo-psu.png'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-sky-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-[#0f4c81] mb-4">Academic Journey</h1>
          <div className="w-20 h-1.5 bg-[#0f4c81] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-12">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-blue-900/50"
              >
                <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                <div className="p-8 bg-white border border-sky-200 rounded-2xl hover:border-sky-300 transition-all">
                  {edu.logo && (
                    <div className="flex justify-center mb-6">
                      <img src={edu.logo} alt={edu.institution} className="w-28 h-28 object-contain" />
                    </div>
                  )}
                  <div className="flex flex-col sm:row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <span className="text-sky-600 text-[10px] font-bold uppercase tracking-widest mb-1 block">{edu.period}</span>
                      <h3 className="text-2xl font-bold text-[#0f4c81]">{edu.level}</h3>
                    </div>
                    <span className="px-3 py-1 bg-[#0f4c81]/10 text-sky-600 text-xs font-bold rounded-full border border-blue-600/20 w-fit">
                      {edu.grade}
                    </span>
                  </div>
                  <p className="text-slate-500 font-medium mb-4">{edu.institution}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{edu.details}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="p-8 bg-white rounded-2xl border border-sky-200">
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-5 h-5 text-sky-600" />
                <h3 className="text-lg font-bold text-[#0f4c81] uppercase tracking-widest">Key Focus Areas</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Robotics',
                  'Embedded Systems',
                  'Automation',
                  'Bionics',
                  'Full-stack Development'
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-600 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0f4c81]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-[#0f4c81] rounded-2xl text-white">
              <GraduationCap className="w-10 h-10 mb-4 text-sky-300" />
              <h3 className="text-xl font-bold mb-2 text-white">Continuous Learning</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Actively pursuing hands-on certifications, competitions, and capstone projects to stay at the cutting edge of robotics, embedded systems, and full-stack engineering.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-2xl font-black text-white">5+</div>
                  <div className="text-blue-200 text-[10px] uppercase tracking-widest">Projects</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-2xl font-black text-white">3+</div>
                  <div className="text-blue-200 text-[10px] uppercase tracking-widest">Awards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;

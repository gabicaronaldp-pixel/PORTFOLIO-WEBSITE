import React from 'react';
import { motion } from 'motion/react';
import { User, Code, Terminal, Award, BookOpen } from 'lucide-react';

const About = () => {
  const technicalSkills = [
    'Arduino', 'ESP32', 'C++', 'HTML', 'CSS', 'JavaScript', 'SQL', 'Embedded Systems', 'Robotics Design', 'Bio-mechanical logic'
  ];

  const nonTechnicalSkills = [
    'Problem Solving', 'System Integration', 'Hardware-Software Bridging', 'Prototyping', 'Project Management'
  ];

  return (
    <div className="pt-24 pb-20 bg-sky-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <User className="w-6 h-6 text-sky-600" />
            <h1 className="text-4xl md:text-5xl font-black text-[#0f4c81]">About Me</h1>
          </motion.div>
          <div className="w-24 h-1.5 bg-[#0f4c81] rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-1/3 relative"
          >
            <div className="absolute inset-0 bg-[#0f4c81]/10 rounded-[2rem] rotate-3 scale-105 -z-10"></div>
            <img
              src="/profile-about-new.jpg"
              alt="Ronald P. Gabica"
              className="relative z-10 w-full rounded-[2rem] border-8 border-white shadow-xl object-cover aspect-square md:aspect-[3/4]"
            />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full lg:w-2/3 space-y-6"
          >
            <p className="text-slate-500 text-lg leading-relaxed">
              I am a dedicated Computer Engineering student at Universidad De Dagupan (2024 – Present), currently based in Calasiao, Pangasinan. Born on February 20, 2005, I have cultivated a deep-seated passion for the intersection of physical hardware and intelligent software. My goal is to develop functional, user-centric technology that addresses complex, real-world challenges.
            </p>
            <p className="text-slate-600 leading-relaxed">
              <strong className="text-[#0f4c81]">Engineering & Development Expertise</strong><br />
              As a System Developer and Freelance Engineer, I specialize in robotics, bionics, and automation. My technical journey is defined by bridging the gap between low-level hardware constraints and high-level software logic.
            </p>
            <p className="text-slate-600 leading-relaxed">
              <strong className="text-[#0f4c81]">Key Projects & Impact</strong><br />
              • <strong>Bionics & Robotics:</strong> Prototyped an advanced Bionic Robotic Arm with articulated joints, SMARS Robot, Soccer Bot, and Light Follower.<br />
              • <strong>Security & Tracking:</strong> Engineered RFID Secure Lock Systems and specialized Humidity and Temperature Machines.<br />
              • <strong>Business Solutions:</strong> Developed custom POS and Inventory management tools tailored for gadget shops.<br />
              • <strong>Research & Innovation:</strong> Lead developer for the OWL (Optimized Workflow for Learners) Student Information Assistance and Guidance Kiosk.
            </p>

            <div className="pt-8 grid grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-xl border border-sky-200">
                <Award className="w-6 h-6 text-sky-600 mb-2" />
                <h4 className="text-[#0f4c81] font-bold">5+ Wins</h4>
                <p className="text-slate-500 text-xs uppercase font-bold">Hackathons</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-sky-200">
                <BookOpen className="w-6 h-6 text-sky-600 mb-2" />
                <h4 className="text-[#0f4c81] font-bold">3 Papers</h4>
                <p className="text-slate-500 text-xs uppercase font-bold">Research</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Technical */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-[2rem] border border-sky-200 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-6">
              <Terminal className="w-5 h-5 text-sky-600" />
              <h3 className="text-xl font-bold text-[#0f4c81] uppercase tracking-wider">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[#0f4c81]/10 text-sky-600 border border-sky-300 rounded-lg text-sm font-medium hover:bg-[#0f4c81] hover:text-white transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Non-Technical */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-8 rounded-[2rem] border border-sky-200 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-6">
              <Code className="w-5 h-5 text-sky-600" />
              <h3 className="text-xl font-bold text-[#0f4c81] uppercase tracking-wider">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {nonTechnicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-sky-50 text-slate-600 border border-sky-200 rounded-lg text-sm font-medium hover:border-sky-300 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

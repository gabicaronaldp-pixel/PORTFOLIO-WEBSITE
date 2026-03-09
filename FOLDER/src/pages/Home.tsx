import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code, Cpu, Database, Globe, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-sky-50">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f4c81_1px,transparent_1px),linear-gradient(to_bottom,#0f4c81_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_70%,transparent_100%)]"></div>
        </div>

        <div className="container mx-auto px-4 z-10 w-full pt-12">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <span className="inline-block px-4 py-1.5 mb-2 text-xs font-bold tracking-widest text-[#0f4c81] uppercase bg-[#0f4c81]/10 rounded-full border border-[#0f4c81]/20">
                Computer Engineer & System Developer
              </span>
              <h2 className="text-[#0f4c81] font-bold text-2xl md:text-3xl mb-1 mt-4">
                Hello,
              </h2>
              <h1 className="text-5xl md:text-7xl font-black text-[#0f4c81] mb-6 tracking-tight">
                It's RonGab <span className="text-sky-500">Tech!</span>
              </h1>
              <p className="text-slate-600 text-lg md:text-xl max-w-2xl lg:ml-0 mx-auto mb-10 leading-relaxed">
                A dedicated Computer Engineering student and freelance developer specializing in robotics, bionics, and automation. I bridge the gap between hardware and software, having engineered autonomous robots, RFID security systems, and custom POS solutions. I am driven by the challenge of creating functional, user-centric technology that solves real-world problems.
              </p>
              <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
                <Link
                  to="/projects"
                  className="px-8 py-4 bg-[#0f4c81] hover:bg-[#0f4c81]/90 text-white font-bold rounded-xl transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-[#0f4c81]/20"
                >
                  View My Work <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-[#0f4c81]/5 hover:bg-[#0f4c81]/10 text-[#0f4c81] font-bold rounded-xl border border-[#0f4c81]/20 transition-all"
                >
                  Let's Talk
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 relative w-full max-w-sm lg:max-w-md xl:max-w-lg mt-8 lg:mt-0"
            >
              {/* Decorative background behind image */}
              <div className="absolute inset-0 bg-sky-200/50 rounded-[40px] rotate-6 scale-105 -z-10"></div>
              <div className="absolute inset-0 bg-[#0f4c81]/10 rounded-[40px] -rotate-3 scale-105 -z-10 blur-sm"></div>

              <img
                src="/profile-home.png"
                alt="Ronald P. Gabica"
                className="relative z-10 w-full h-auto object-cover rounded-[40px] border-4 border-white shadow-2xl"
              />
            </motion.div>
          </div>
        </div>

        {/* Floating AI Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 hidden lg:block opacity-40"
        >
          <Cpu className="w-16 h-16 text-sky-500" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-10 hidden lg:block opacity-40"
        >
          <Database className="w-16 h-16 text-sky-500" />
        </motion.div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-sky-100 border-y border-sky-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Projects Completed', value: '15+' },
              { label: 'Research Papers', value: '3' },
              { label: 'Hackathons Won', value: '5' },
              { label: 'Certifications', value: '10+' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-4xl font-black text-[#0f4c81] mb-2">{stat.value}</h3>
                <p className="text-sky-600 text-sm uppercase tracking-wider font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-24 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#0f4c81] mb-4">Core Expertise</h2>
            <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="w-8 h-8" />,
                title: 'Embedded Systems',
                desc: 'Designing integrated hardware-software systems using Arduino, ESP32, and C++.'
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: 'Full-Stack Web',
                desc: 'Building custom POS solutions and inventory management tools using HTML, CSS, JS, and SQL.'
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Robotics & Automation',
                desc: 'Prototyping bionic robotic arms and automated security systems with bio-mechanical logic.'
              }
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 bg-white border border-sky-100 shadow-xl shadow-sky-900/5 rounded-2xl hover:border-sky-300 transition-all group"
              >
                <div className="p-3 bg-sky-100 rounded-xl w-fit mb-6 group-hover:bg-[#0f4c81] transition-colors">
                  <div className="text-[#0f4c81] group-hover:text-[#0f4c81]">{skill.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-[#0f4c81] mb-4">{skill.title}</h3>
                <p className="text-slate-600 leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

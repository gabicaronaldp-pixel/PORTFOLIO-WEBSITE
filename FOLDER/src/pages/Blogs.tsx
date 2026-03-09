import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, ExternalLink, Rss } from 'lucide-react';

const BLOG_URL = 'https://udd-cpe-blog.web.app/';

const recentPosts = [
  {
    title: 'Bridging Hardware & Software',
    excerpt: 'How embedded systems and full-stack development come together to solve real-world problems.',
    category: 'Engineering',
    date: 'Mar 2026'
  },
  {
    title: 'Building a Bionic Robotic Arm',
    excerpt: 'A deep dive into prototyping advanced bio-mechanical arms with articulated joints.',
    category: 'Robotics',
    date: 'Feb 2026'
  },
  {
    title: 'OWL Kiosk: From Concept to Capstone',
    excerpt: 'Behind the scenes of developing a centralized student guidance kiosk system using Raspberry Pi 5.',
    category: 'Capstone',
    date: 'Jan 2026'
  }
];

const Blogs = () => {
  return (
    <div className="pt-24 pb-20 bg-sky-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Rss className="w-7 h-7 text-sky-600" />
            <h1 className="text-4xl md:text-6xl font-black text-[#0f4c81]">My Blog</h1>
          </div>
          <p className="text-slate-600 max-w-xl text-lg">
            Thoughts, project deep-dives, and engineering insights — published on my dedicated CPE blog.
          </p>
          <div className="w-20 h-1.5 bg-[#0f4c81] mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Browser Window Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a href={BLOG_URL} target="_blank" rel="noreferrer" className="block group">
              {/* Browser chrome */}
              <div className="bg-slate-200 rounded-t-2xl px-4 py-3 flex items-center gap-2 border-b border-slate-300">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-3 bg-white rounded-md px-3 py-1 text-xs text-slate-500 font-mono truncate border border-slate-300">
                  udd-cpe-blog.web.app
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#0f4c81] transition-colors" />
              </div>
              {/* Preview body */}
              <div className="bg-white rounded-b-2xl border-x border-b border-slate-200 overflow-hidden shadow-2xl shadow-sky-900/10">
                <div className="bg-[#0f4c81] px-8 py-10 text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <BookOpen className="w-8 h-8 text-sky-300" />
                    <span className="text-white font-black text-2xl">UDD CPE Blog</span>
                  </div>
                  <p className="text-sky-200 text-sm max-w-xs mx-auto">
                    Engineering insights, project breakdowns, and tech explorations by Ronald Gabica
                  </p>
                </div>
                {/* Fake post previews */}
                <div className="divide-y divide-sky-100">
                  {recentPosts.map((post, i) => (
                    <div key={i} className="px-6 py-4 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center shrink-0">
                        <BookOpen className="w-5 h-5 text-[#0f4c81]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-sky-500 uppercase tracking-widest">{post.category} · {post.date}</span>
                        <p className="text-sm font-bold text-[#0f4c81] leading-tight">{post.title}</p>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{post.excerpt}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-4 bg-sky-50 text-center">
                  <span className="text-xs text-sky-500 font-bold">+ More posts on the live blog →</span>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Right side CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl border border-sky-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0f4c81] mb-4">What I Write About</h2>
              <div className="space-y-4">
                {[
                  { tag: 'Robotics & Bionics', desc: 'Building and prototyping autonomous robots and bio-mechanical systems.' },
                  { tag: 'Embedded Systems', desc: 'Deep dives into Arduino, ESP32, and C++ hardware/software integration.' },
                  { tag: 'Full-stack Web', desc: 'Custom web apps, POS systems, and database-driven interfaces.' },
                  { tag: 'Capstone Projects', desc: 'Behind the scenes of the OWL Kiosk and engineering research.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 px-2 py-0.5 bg-[#0f4c81]/10 text-sky-600 text-[10px] font-black rounded-full uppercase tracking-wider whitespace-nowrap">
                      {item.tag}
                    </span>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={BLOG_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 w-full py-5 bg-[#0f4c81] hover:bg-[#0f4c81]/90 text-white font-black text-lg rounded-2xl transition-all transform hover:scale-105 shadow-xl shadow-[#0f4c81]/20"
            >
              Visit CPE Blog <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

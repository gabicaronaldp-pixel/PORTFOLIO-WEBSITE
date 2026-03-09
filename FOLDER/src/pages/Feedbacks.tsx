import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import { FEEDBACKS } from '../constants';
import { cn } from '../lib/utils';

const Feedbacks = () => {
  const stats = [
    { label: 'Client Satisfaction', value: '98%', icon: <CheckCircle2 className="w-5 h-5" /> },
    { label: 'On-time Delivery', value: '100%', icon: <TrendingUp className="w-5 h-5" /> },
    { label: 'Average Rating', value: '4.9/5', icon: <Star className="w-5 h-5" /> },
    { label: 'Happy Clients', value: '24', icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <div className="pt-24 pb-20 bg-sky-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-[#0f4c81] mb-4">Client Feedbacks</h1>
          <div className="w-20 h-1.5 bg-[#0f4c81] rounded-full"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-white border border-sky-200 rounded-2xl text-center"
            >
              <div className="text-sky-600 flex justify-center mb-3">{stat.icon}</div>
              <h3 className="text-2xl font-black text-[#0f4c81] mb-1">{stat.value}</h3>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Feedbacks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEEDBACKS.map((feedback, idx) => (
            <motion.div
              key={feedback.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
              className="p-8 bg-sky-50 border border-sky-200 rounded-3xl relative group hover:border-sky-300 transition-all"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-sky-600/10 group-hover:text-sky-600/20 transition-colors" />
              
              <div className="flex items-center gap-4 mb-8">
                <img src={feedback.image} alt={feedback.name} className="w-16 h-16 rounded-full border-2 border-blue-600/20" />
                <div>
                  <h4 className="text-xl font-bold text-[#0f4c81]">{feedback.name}</h4>
                  <p className="text-slate-500 text-xs font-medium">{feedback.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={cn(
                      "w-4 h-4",
                      i < feedback.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-700"
                    )} 
                  />
                ))}
              </div>

              <p className="text-slate-500 italic leading-relaxed mb-8">"{feedback.comment}"</p>

              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-sky-200">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Expertise:</span>
                  <span className="px-2 py-0.5 bg-[#0f4c81]/10 text-sky-600 text-[10px] font-bold rounded">
                    {feedback.skillTag}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Efficiency:</span>
                  <span className="text-[10px] font-bold text-green-500">+{feedback.productivityBoost}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;

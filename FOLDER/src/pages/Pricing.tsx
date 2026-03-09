import React from 'react';
import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

const Pricing = () => {
    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                        MY <span className="text-sky-500">PRICING</span>
                    </h1>
                    <p className="text-slate-500 text-lg">Choose the best plan for your needs</p>
                </div>

                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-center justify-center">

                    {/* Basic Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full lg:w-[350px] bg-white border border-slate-100 rounded-lg p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center flex flex-col min-h-[500px]"
                    >
                        <h3 className="text-xl font-black text-slate-900 mb-4">Basic</h3>
                        <div className="flex justify-center items-start gap-1 mb-8">
                            <span className="text-sky-500 font-bold text-2xl mt-1">₱</span>
                            <span className="text-sky-500 font-black text-6xl tracking-tighter">499</span>
                        </div>

                        <div className="text-left space-y-4 mb-10 flex-1 px-4">
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-sky-500 shrink-0" strokeWidth={3} />
                                <span className="text-slate-600 text-sm">Single Page Website</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-sky-500 shrink-0" strokeWidth={3} />
                                <span className="text-slate-600 text-sm">Responsive Design</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-sky-500 shrink-0" strokeWidth={3} />
                                <span className="text-slate-600 text-sm">Basic SEO</span>
                            </div>
                            <div className="flex items-center gap-3 opacity-50">
                                <X className="w-5 h-5 text-slate-400 shrink-0" strokeWidth={3} />
                                <span className="text-slate-400 text-sm line-through decoration-slate-300">Custom Backend</span>
                            </div>
                        </div>

                        <button className="w-full py-3.5 mt-auto rounded-full border border-slate-200 text-slate-800 font-bold text-sm tracking-widest uppercase hover:border-slate-300 hover:bg-slate-50 transition-colors">
                            CHOOSE PLAN
                        </button>
                    </motion.div>

                    {/* Standard Plan (Highlighted) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="w-full lg:w-[380px] bg-white border border-sky-400 rounded-lg shadow-[0_8px_30px_rgba(14,165,233,0.15)] text-center flex flex-col min-h-[540px] relative mt-0 lg:-mt-8"
                    >
                        <div className="absolute top-0 right-0 bg-sky-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-lg rounded-tr-lg">
                            Most Popular
                        </div>

                        <div className="p-10 flex-1 flex flex-col">
                            <h3 className="text-xl font-black text-slate-900 mb-4 mt-2">Standard</h3>
                            <div className="flex justify-center items-start gap-1 mb-8">
                                <span className="text-sky-500 font-bold text-2xl mt-1">₱</span>
                                <span className="text-sky-500 font-black text-6xl tracking-tighter">999</span>
                            </div>

                            <div className="text-left space-y-4 mb-10 flex-1 px-4">
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-sky-500 shrink-0" strokeWidth={3} />
                                    <span className="text-slate-600 text-sm">Multi-Page Website</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-sky-500 shrink-0" strokeWidth={3} />
                                    <span className="text-slate-600 text-sm">Responsive Design</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-sky-500 shrink-0" strokeWidth={3} />
                                    <span className="text-slate-600 text-sm">Advanced SEO</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-sky-500 shrink-0" strokeWidth={3} />
                                    <span className="text-slate-600 text-sm">CMS Integration</span>
                                </div>
                            </div>

                            <button className="w-full py-3.5 mt-auto rounded-full bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm tracking-widest uppercase transition-colors shadow-lg shadow-sky-500/30">
                                CHOOSE PLAN
                            </button>
                        </div>
                    </motion.div>

                    {/* Premium Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="w-full lg:w-[350px] bg-white border border-slate-100 rounded-lg p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center flex flex-col min-h-[500px]"
                    >
                        <h3 className="text-xl font-black text-slate-900 mb-4">Premium</h3>
                        <div className="flex justify-center items-start gap-1 mb-8">
                            <span className="text-sky-500 font-bold text-2xl mt-1">₱</span>
                            <span className="text-sky-500 font-black text-6xl tracking-tighter">1999</span>
                        </div>

                        <div className="text-left space-y-4 mb-10 flex-1 px-4">
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-sky-500 shrink-0" strokeWidth={3} />
                                <span className="text-slate-600 text-sm">Custom Web Application</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-sky-500 shrink-0" strokeWidth={3} />
                                <span className="text-slate-600 text-sm">Responsive Design</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-sky-500 shrink-0" strokeWidth={3} />
                                <span className="text-slate-600 text-sm">Advanced SEO</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-sky-500 shrink-0" strokeWidth={3} />
                                <span className="text-slate-600 text-sm">Custom Backend & API</span>
                            </div>
                        </div>

                        <button className="w-full py-3.5 mt-auto rounded-full border border-slate-200 text-slate-800 font-bold text-sm tracking-widest uppercase hover:border-slate-300 hover:bg-slate-50 transition-colors">
                            CHOOSE PLAN
                        </button>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Pricing;

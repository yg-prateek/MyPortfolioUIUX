"use client";

import { motion } from "framer-motion";
import { Brain, Rocket, TrendingUp, Sparkles, Target, Zap } from "lucide-react";

export function CurrentFocus() {
    return (
        <section id="current-focus" className="py-24 px-4 md:px-8 bg-[#FDFBF7] relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C1F07C] rounded-full blur-[120px] opacity-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A688FF] rounded-full blur-[120px] opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* 1. Header Column (Spans 4) */}
                    <div className="lg:col-span-12 mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-block"
                        >
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2 relative group">
                                My Current <span className="text-[#A688FF]">Focus</span>
                                <motion.div
                                    className="absolute -bottom-2 left-0 w-full h-2 bg-[#C1F07C] -z-10 origin-left"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                />
                            </h2>
                        </motion.div>
                    </div>

                    {/* 2. Main content Card (Spans 7) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center relative group overflow-hidden"
                    >
                        {/* Decorative Pattern Overlay */}
                        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-[#C1F07C] border-2 border-black rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 transition-transform">
                                <Brain className="w-8 h-8 text-black" />
                            </div>

                            <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-900 border-l-4 border-[#A688FF] pl-6 md:pl-8">
                                Currently, I am focused on the next evolution of digital products:
                                <span className="font-black text-black"> AI-powered user experiences.</span>
                                <br /><br />
                                I am actively upskilling in <span className="bg-[#A688FF]/20 px-2 py-1 rounded">Product Management</span> and roadmap planning to ensure that the products I design are not only beautiful and intuitive but also scalable and future-ready.
                            </p>
                        </div>
                    </motion.div>

                    {/* 3. Feature Matrix (Spans 5) */}
                    <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                        {[
                            {
                                icon: <Sparkles className="w-6 h-6" />,
                                title: "AI-Powered UX",
                                desc: "Integrating LLMs and intelligent interfaces into cohesive user journeys.",
                                color: "#C1F07C"
                            },
                            {
                                icon: <Target className="w-6 h-6" />,
                                title: "Product Strategy",
                                desc: "Bridging the gap between high-level roadmaps and pixel-perfect design.",
                                color: "#A688FF"
                            },
                            {
                                icon: <Zap className="w-6 h-6" />,
                                title: "Scalable Systems",
                                desc: "Designing for growth, ensuring future-proof component architecture.",
                                color: "#FFDC8B"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                                className="bg-white p-6 rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all group"
                            >
                                <div className="flex items-start gap-5">
                                    <div
                                        className="w-12 h-12 rounded-2xl border-2 border-black flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                                        style={{ backgroundColor: item.color }}
                                    >
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-black uppercase tracking-tight text-lg mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-600 font-medium leading-snug">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

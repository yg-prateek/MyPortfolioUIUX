"use client";

import { motion } from "framer-motion";
import { ArrowDownLeft, ArrowRight, Download, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-background font-sans pt-28 md:pt-32 relative overflow-hidden">
            {/* Background Decorative Sparkles */}
            <div className="absolute top-20 left-[10%] text-primary/20 pointer-events-none">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
            </div>
            <div className="absolute bottom-20 right-[10%] text-secondary/20 pointer-events-none">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
            </div>

            {/* Main Grid Container */}
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 relative z-10">

                {/* 1. IDENTITY COLUMN (Left) - Spans 7 cols on large */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-7 flex flex-col gap-6"
                >
                    {/* Branding / Name */}
                    <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group flex flex-col xl:flex-row items-center gap-6 lg:gap-8 text-center xl:text-left transition-transform hover:-translate-x-1 hover:-translate-y-1">

                        {/* User Image - Responsive Sizing */}
                        <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 flex-shrink-0">
                            <div className="absolute inset-0 bg-primary rounded-full border-4 border-black translate-x-2 translate-y-2"></div>
                            <div className="absolute inset-0 rounded-full border-4 border-black overflow-hidden bg-gray-200 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative z-10">
                                <img
                                    src="/prateek.png"
                                    alt="Y G Prateek"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative Sparkle */}
                            <div className="absolute -bottom-2 -right-2 text-warning fill-current drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] z-20">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" stroke="black" strokeWidth="2" className="w-8 h-8 lg:w-12 lg:h-12">
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                                </svg>
                            </div>
                        </div>

                        <div className="z-10 flex-1 min-w-0 flex flex-col items-center xl:items-start mt-4 xl:mt-0">
                            <h1 className="font-black uppercase leading-none tracking-tighter mb-6 text-black">
                                <span className="block text-[clamp(2.5rem,10vw,5.5rem)]">Y G</span>
                                <span className="block text-[clamp(2.5rem,10vw,5.5rem)] relative">
                                    <span className="relative z-10">Prateek</span>
                                    <span className="absolute bottom-2 left-0 w-full h-[0.4em] bg-primary -rotate-1 -z-10 opacity-80"></span>
                                </span>
                            </h1>
                            <div className="relative inline-block mt-2">
                                <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 rounded-lg"></div>
                                <h2 className="relative z-10 text-sm sm:text-base lg:text-xl font-black font-mono bg-accent text-black border-2 border-black px-4 py-1.5 uppercase tracking-widest transform transition-transform group-hover:rotate-0">
                                    UI/UX Designer
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Socials / Contacts Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <motion.a
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            href="mailto:prateekyg@gmail.com"
                            className="bg-warning p-5 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center gap-2 transition-all cursor-pointer group"
                        >
                            <Mail className="w-8 h-8 group-hover:scale-110 transition-transform" />
                            <span className="font-black text-xs uppercase tracking-widest">Email</span>
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            href="https://www.linkedin.com/in/ygprateek/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#C0F7FE] p-5 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center gap-2 transition-all cursor-pointer group"
                        >
                            <Linkedin className="w-8 h-8 group-hover:scale-110 transition-transform" />
                            <span className="font-black text-xs uppercase tracking-widest">LinkedIn</span>
                        </motion.a>
                        <motion.button
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            className="bg-white p-5 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center gap-2 transition-all cursor-pointer group"
                        >
                            <Download className="w-8 h-8 group-hover:scale-110 transition-transform" />
                            <span className="font-black text-xs uppercase tracking-widest">Resume</span>
                        </motion.button>
                    </div>
                </motion.div>

                {/* 2. ABOUT / INTRO COLUMN (Right) - Spans 5 cols on large */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:col-span-5 flex flex-col h-full"
                >
                    <div className="bg-black text-white p-8 md:p-10 rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] h-full flex flex-col justify-start gap-8 relative overflow-hidden group hover:-translate-x-1 hover:-translate-y-1 transition-transform">

                        {/* Dot Pattern Overlay */}
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '24px 24px' }} />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-4 h-4 bg-secondary rounded-sm rotate-45 border-2 border-white" />
                                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-gray-400">The Mission</h3>
                            </div>

                            <p className="text-lg sm:text-xl md:text-2xl font-bold leading-tight tracking-tight text-white mb-6">
                                I bridge the gap between <span className="text-primary italic">physical business</span> and <span className="text-secondary italic">digital growth</span>.
                            </p>
                            <p className="text-base sm:text-lg font-medium leading-relaxed text-gray-300 font-mono">
                                As a UI/UX Designer, I help startups build powerful digital identities that solve real problems.
                            </p>
                        </div>

                        <div className="mt-auto relative z-10 pt-8 border-t-2 border-white/20">
                            <a
                                href="https://wa.me/916362844313"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between group cursor-pointer"
                            >
                                <span className="text-xl sm:text-2xl font-black uppercase tracking-tighter group-hover:text-primary transition-colors">Start a Project</span>
                                <div className="bg-primary text-black p-3 rounded-xl border-2 border-black group-hover:rotate-12 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                                    <ArrowRight className="w-6 h-6" />
                                </div>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* 3. SCROLL INDICATOR / EXTRA DECOR (Bottom Full Width) */}

        </section>
    );
}

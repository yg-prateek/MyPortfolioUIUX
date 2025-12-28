"use client";

import { motion } from "framer-motion";
import { ArrowDownLeft, ArrowRight, Download, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-[#FDFBF7] font-sans pt-28 md:pt-32">

            {/* Main Grid Container */}
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">

                {/* 1. IDENTITY COLUMN (Left) - Spans 7 cols on large */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-7 flex flex-col gap-6"
                >
                    {/* Status Badge */}
                    <div className="w-fit mb-2 md:mb-4">
                        <div className="px-4 py-2 bg-[#99E885] border-2 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 animate-bounce-slow">
                            <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse" />
                            <span className="font-bold text-sm uppercase tracking-wider">Available for work</span>
                        </div>
                    </div>

                    {/* Branding / Name */}
                    <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group flex flex-col xl:flex-row items-center gap-6 lg:gap-8 text-center xl:text-left">

                        {/* User Image - Responsive Sizing */}
                        <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 flex-shrink-0">
                            <div className="absolute inset-0 bg-[#C1F07C] rounded-full border-4 border-black translate-x-1 translate-y-1"></div>
                            <div className="absolute inset-0 rounded-full border-4 border-black overflow-hidden bg-gray-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <img
                                    src="/prateek.png"
                                    alt="Y G Prateek"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative Sparkle */}
                            <div className="absolute -bottom-2 -right-2 text-yellow-400 fill-current drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" stroke="black" strokeWidth="2" className="w-8 h-8 lg:w-10 lg:h-10">
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                                </svg>
                            </div>
                        </div>

                        <div className="z-10 flex-1 min-w-0 flex flex-col items-center xl:items-start">
                            <h1 className="font-black uppercase leading-tight tracking-tighter mb-6 text-black">
                                <span className="block text-[clamp(2rem,8vw,4.5rem)]">Y G</span>
                                <span className="block text-[clamp(2rem,8vw,4.5rem)] text-black stroke-black decoration-[#C1F07C] underline decoration-4 lg:decoration-8 underline-offset-8 lg:underline-offset-[16px]" style={{ WebkitTextStroke: '0px' }}>Prateek</span>
                            </h1>
                            <h2 className="text-sm sm:text-base lg:text-2xl font-bold font-mono text-gray-500 uppercase tracking-widest bg-black text-white px-3 py-1 inline-block transform -rotate-2 mt-2">
                                UI/UX Designer
                            </h2>
                        </div>
                    </div>

                    {/* Socials / Contacts Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <a
                            href="mailto:prateekyg@gmail.com"
                            className="bg-[#FFDC8B] p-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center gap-2 hover:translate-y-[-2px] transition-all cursor-pointer group"
                        >
                            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            <span className="font-bold text-xs uppercase">Email</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ygprateek/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#C0F7FE] p-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center gap-2 hover:translate-y-[-2px] transition-all cursor-pointer group"
                        >
                            <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            <span className="font-bold text-xs uppercase">LinkedIn</span>
                        </a>
                        {/* Placeholder for other socials if needed, using generic link for now */}
                        <button className="bg-white p-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center gap-2 hover:translate-y-[-2px] transition-all cursor-pointer group">
                            <Download className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            <span className="font-bold text-xs uppercase">Resume</span>
                        </button>
                    </div>
                </motion.div>

                {/* 2. ABOUT / INTRO COLUMN (Right) - Spans 5 cols on large */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:col-span-5 flex flex-col h-full"
                >
                    <div className="bg-[#1a1a1a] text-white p-8 md:p-10 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] h-full flex flex-col justify-start gap-8 relative overflow-hidden">

                        {/* Decorative Gradient Blob */}
                        <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-[#C1F07C] rounded-full blur-[80px] opacity-20 pointer-events-none" />

                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-3 h-3 bg-[#FE90E8] rounded-full" />
                                <h3 className="text-xl font-bold uppercase tracking-widest text-gray-400">About Me</h3>
                            </div>

                            <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed text-gray-200">
                                I'm Prateek, a UI/UX Designer with 2+ years of experience creating intuitive, user-centered digital experiences.
                                <br /><br />
                                Proficient in interaction and visual design with a strong foundation in design thinking. Skilled at developed adaptive wireframes and prototypes that balance aesthetics and functionality.
                            </p>
                        </div>

                        <div className="mt-8 md:mt-12 pt-8 border-t border-white/20">
                            <a
                                href="https://wa.me/916362844313"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between group cursor-pointer hover:text-[#25D366] transition-colors"
                            >
                                <span className="text-xl sm:text-3xl font-black uppercase">WhatsApp Chat</span>
                                <div className="bg-[#25D366] text-black p-2 rounded-full group-hover:scale-110 transition-transform">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* 3. SCROLL INDICATOR / EXTRA DECOR (Bottom Full Width) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="col-span-full mt-4"
                >
                    <div className="bg-[#C1F07C] p-4 rounded-xl border-2 border-black flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                        <div className="flex gap-8 md:gap-24 whitespace-nowrap font-black uppercase text-sm">
                            <motion.div
                                animate={{ x: [0, -1500] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 40,
                                    ease: "linear"
                                }}
                                className="flex gap-8 md:gap-24 items-center"
                            >
                                <span className="flex gap-8 md:gap-24 items-center">
                                    <span>UX RESEARCH</span>
                                    <span className="w-2 h-2 bg-black rounded-full" />
                                    <span>WIREFRAMING</span>
                                    <span className="w-2 h-2 bg-black rounded-full" />
                                    <span>PROTOTYPING</span>
                                    <span className="w-2 h-2 bg-black rounded-full" />
                                    <span>VISUAL DESIGN</span>
                                    <span className="w-2 h-2 bg-black rounded-full" />
                                    <span>INTERACTION DESIGN</span>
                                    <span className="w-2 h-2 bg-black rounded-full" />
                                    <span>DESIGN SYSTEMS</span>
                                </span>
                                {/* Seamless Loop Duplicate */}
                                <span className="flex gap-8 md:gap-24 items-center">
                                    <span>UX RESEARCH</span>
                                    <span className="w-2 h-2 bg-black rounded-full" />
                                    <span>WIREFRAMING</span>
                                    <span className="w-2 h-2 bg-black rounded-full" />
                                    <span>PROTOTYPING</span>
                                    <span className="w-2 h-2 bg-black rounded-full" />
                                    <span>VISUAL DESIGN</span>
                                    <span className="w-2 h-2 bg-black rounded-full" />
                                    <span>INTERACTION DESIGN</span>
                                    <span className="w-2 h-2 bg-black rounded-full" />
                                    <span>DESIGN SYSTEMS</span>
                                </span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

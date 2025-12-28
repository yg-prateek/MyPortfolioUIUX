"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Gamepad2, Sparkles, Smartphone, Layout, Star } from "lucide-react";
import Link from "next/link";

const categories = [
    { icon: Smartphone, label: "Mobile Apps", color: "bg-[#FE90E8]" },
    { icon: Layout, label: "Web Design", color: "bg-[#C0F7FE]" },
    { icon: Gamepad2, label: "Game UI", color: "bg-[#FFDC8B]" },
    { icon: Sparkles, label: "Branding", color: "bg-[#A688FF]" },
];

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-32 pb-20 px-4 md:px-8 overflow-hidden">

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto mb-32 relative">
                <div className="absolute top-0 right-0 p-4 rotate-12 animate-wiggle">
                    <div className="bg-primary text-black font-black uppercase text-xl px-6 py-2 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        Product Design
                    </div>
                </div>

                <div className="text-center md:text-left pt-20">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-black mb-4 relative z-10"
                    >
                        Case<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary stroke-black" style={{ WebkitTextStroke: '2px black' }}>Study</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl font-mono text-gray-600 max-w-2xl border-l-4 border-black pl-6 ml-2">
                        Explorations in digital interactions, game design, and brand identity.
                    </p>
                </div>

                {/* Floating Stickers */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 right-[10%] hidden md:block"
                >
                    <Star className="w-24 h-24 text-accent fill-current drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] stroke-black stroke-2" />
                </motion.div>
            </section>

            {/* Featured Project: CLAUD Style */}
            <section className="max-w-6xl mx-auto mb-32">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="bg-white border-4 border-black rounded-[3rem] p-8 md:p-12 relative overflow-hidden group hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
                >
                    <div className="flex flex-col md:flex-row gap-12 relative z-10">
                        <div className="flex-1 space-y-8">
                            <div className="flex gap-2">
                                <span className="bg-secondary text-white font-bold px-4 py-1 rounded-full border-2 border-black text-sm uppercase shadow-sm">UI/UX</span>
                                <span className="bg-accent text-black font-bold px-4 py-1 rounded-full border-2 border-black text-sm uppercase shadow-sm">Game</span>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9]">
                                Claud<br />
                                <span className="text-primary text-3xl md:text-5xl stroke-black" style={{ WebkitTextStroke: '1px black' }}>Ai-Games</span>
                            </h2>

                            <p className="text-xl text-gray-600 leading-relaxed font-medium">
                                Innovative games that redefine team challenges. A gamified platform helping companies engage employees through interactive AI-driven storylines.
                            </p>

                            <div className="flex gap-4 pt-4">
                                <Link href="/work/hello-mentor">
                                    <button className="pop-button flex items-center gap-2 hover:bg-white hover:text-black">
                                        View Case <ArrowUpRight className="w-6 h-6" />
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Visual Collage Right Side */}
                        <div className="flex-1 relative min-h-[400px]">
                            <div className="absolute top-0 right-0 w-64 h-80 bg-secondary/20 rounded-2xl border-2 border-black rotate-6 z-0"></div>
                            <div className="absolute top-10 right-10 w-64 h-80 bg-accent/20 rounded-2xl border-2 border-black -rotate-3 z-10"></div>

                            {/* Simulated Phone UI */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="absolute top-20 right-20 w-56 h-auto bg-white rounded-3xl border-4 border-black p-2 z-20 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                            >
                                <div className="bg-gray-100 rounded-2xl h-full p-4 flex flex-col items-center gap-4 border border-gray-200">
                                    <div className="w-12 h-12 bg-white rounded-full border-2 border-black flex items-center justify-center font-black">C</div>
                                    <div className="text-black font-bold text-center">Create your<br />own Claud</div>
                                    <div className="flex gap-2 text-3xl">☁️☁️</div>
                                    <div className="bg-black text-white text-xs px-4 py-2 rounded-full font-bold">Start Now</div>
                                </div>
                            </motion.div>

                            {/* Stickers */}
                            <div className="absolute bottom-10 left-10 bg-white text-black font-bold px-4 py-2 rounded-lg border-2 border-black rotate-[-12deg] z-30 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                TAP TAP! 👆
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Categories */}
            <section className="mb-32">
                <div className="flex flex-col items-center">
                    <h3 className="text-3xl font-black uppercase mb-12 text-center border-b-4 border-black pb-4 inline-block">
                        Design <span className="text-primary">Playground</span>
                    </h3>

                    <div className="flex flex-wrap justify-center gap-8">
                        {categories.map((cat, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 3 : -3 }}
                                className={`w-40 h-40 rounded-full ${cat.color} border-4 border-black flex flex-col items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all`}
                            >
                                <cat.icon className="w-10 h-10 stroke-[2]" />
                                <span className="font-bold uppercase text-sm tracking-wide">{cat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Grid of other works */}
            <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2].map((item) => (
                    <div key={item} className="bg-white rounded-[2rem] border-4 border-black p-8 min-h-[400px] flex flex-col justify-end relative overflow-hidden group shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
                        <div className="relative z-20">
                            <h3 className="text-4xl font-black uppercase mb-2">Project {item}</h3>
                            <p className="text-gray-500 mb-4">Coming soon...</p>
                            <div className="flex gap-2">
                                <span className="text-xs font-mono border-2 border-black px-2 py-1 rounded font-bold bg-accent">2024</span>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

        </main>
    );
}

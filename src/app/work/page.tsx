"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Cpu, Sparkles, Zap, Layout, Star, Palette, Trophy, Users, BookOpen, BrainCircuit } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const categories = [
    { icon: Layout, label: "Product UX", color: "bg-[#FE90E8]" },
    { icon: Cpu, label: "AI Interfaces", color: "bg-[#C0F7FE]" },
    { icon: Palette, label: "Brand Design", color: "bg-[#FFDC8B]" },
    { icon: Zap, label: "Interaction", color: "bg-[#A688FF]" },
];

const insights = [
    { title: "85k+ Aspirants", subtitle: "Real-time tracking", icon: Users, color: "bg-[#C1F07C]" },
    { title: "AI Predictor", subtitle: "98.5% Accuracy", icon: BrainCircuit, color: "bg-[#A688FF]" },
    { title: "Expert Hub", subtitle: "24/7 Resources", icon: BookOpen, color: "bg-[#FE90E8]" },
    { title: "Top Ranked", subtitle: "Ed-Tech Choice", icon: Trophy, color: "bg-[#FFDC8B]" },
];

const playgroundProjects = [
    {
        title: "Neo-Wallet",
        description: "A futuristic crypto-wallet interface with focus on glassmorphism and accessibility.",
        image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2574&auto=format&fit=crop",
        date: "JAN 2024",
        category: "Product UX"
    },
    {
        title: "Prompt Sculptor",
        description: "Visual interface for complex AI prompt engineering and version control.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
        date: "FEB 2024",
        category: "AI Interfaces"
    },
    {
        title: "Vibe Theory",
        description: "Complete visual identity for a creative lifestyle brand.",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2671&auto=format&fit=crop",
        date: "MAR 2024",
        category: "Brand Design"
    },
    {
        title: "Gravity Scroll",
        description: "Experimental scroll physics and micro-interactions for web.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        date: "APR 2024",
        category: "Interaction"
    },
    {
        title: "Flux Dashboard",
        description: "Real-time data visualization for cloud performance monitoring.",
        image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2670&auto=format&fit=crop",
        date: "MAY 2024",
        category: "Product UX"
    },
    {
        title: "Neural Mesh",
        description: "Generative canvas for AI-assisted collaborative brainstorming.",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop",
        date: "JUN 2024",
        category: "AI Interfaces"
    }
];

function InsightStack() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % insights.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
                {insights.map((insight, i) => {
                    const isCurrent = i === index;
                    const nextIndex = (index + 1) % insights.length;
                    const isNext = i === nextIndex;
                    const prevIndex = (index - 1 + insights.length) % insights.length;
                    const isPrev = i === prevIndex;

                    if (!isCurrent && !isNext && !isPrev) return null;

                    return (
                        <motion.div
                            key={insight.title}
                            initial={{ scale: 0.8, opacity: 0, x: 100, rotate: 10 }}
                            animate={{
                                scale: isCurrent ? 1 : isNext ? 0.9 : 0.8,
                                opacity: isCurrent ? 1 : isNext ? 0.6 : 0,
                                x: isCurrent ? 0 : isNext ? 20 : -40,
                                zIndex: isCurrent ? 30 : isNext ? 20 : 10,
                                rotate: isCurrent ? 0 : isNext ? 5 : -5,
                                y: isCurrent ? 0 : isNext ? 10 : -20,
                            }}
                            exit={{ scale: 0.8, opacity: 0, x: -100, rotate: -10 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className={`absolute w-64 h-80 ${insight.color} rounded-3xl border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between`}
                        >
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 bg-white rounded-xl border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <insight.icon className="w-6 h-6 text-black" />
                                </div>
                                <div className="bg-black text-white text-[10px] font-black px-2 py-1 rounded border border-white">STK :: {i + 1}</div>
                            </div>

                            <div>
                                <h4 className="text-2xl font-black uppercase leading-none mb-2">{insight.title}</h4>
                                <p className="text-black/60 font-bold text-xs uppercase tracking-wider">{insight.subtitle}</p>
                            </div>

                            <div className="h-2 bg-black/10 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: isCurrent ? "100%" : "0%" }}
                                    transition={{ duration: 3, ease: "linear" }}
                                    className="h-full bg-black"
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>

            {/* Background static cards for depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-black/5 rounded-3xl border-2 border-dashed border-black/20 -rotate-6 scale-95 translate-x-4 translate-y-4 -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-black/5 rounded-3xl border-2 border-dashed border-black/20 rotate-3 scale-90 -translate-x-6 translate-y-2 -z-20" />
        </div>
    );
}

export default function WorkPage() {
    const [selectedCategory, setSelectedCategory] = useState("Product UX");
    const filteredProjects = playgroundProjects.filter(p => p.category === selectedCategory);

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
                    className="bg-white border-4 border-black rounded-[2.5rem] p-4 md:p-12 relative overflow-hidden group shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all duration-300"
                >
                    {/* Featured Sticker */}
                    <div className="absolute top-6 right-[-20px] md:top-10 md:right-[-30px] rotate-12 z-30">
                        <div className="bg-primary text-black font-black uppercase text-sm md:text-xl px-4 py-2 md:px-8 md:py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2">
                            <Star className="w-4 h-4 md:w-6 md:h-6 fill-current" /> Featured
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 relative z-10">
                        <div className="flex-1 space-y-8">
                            <div className="flex gap-2">
                                <span className="bg-primary text-black font-bold px-4 py-1 rounded-full border-2 border-black text-sm uppercase shadow-sm">Ed-Tech</span>
                                <span className="bg-accent text-black font-bold px-4 py-1 rounded-full border-2 border-black text-sm uppercase shadow-sm">Product Design</span>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9]">
                                Hello<br />
                                <span className="text-primary text-3xl md:text-5xl stroke-black" style={{ WebkitTextStroke: '1px black' }}>Mentor</span>
                            </h2>

                            <p className="text-xl text-gray-600 leading-relaxed font-medium">
                                A simplified NEET counselling platform. Providing aspirants with real-time college predictors, rank analyzers, and expert resources to navigate the post-exam journey.
                            </p>

                            <div className="flex gap-4 pt-4">
                                <Link href="/work/hello-mentor">
                                    <button className="pop-button flex items-center gap-2 hover:bg-white hover:text-black">
                                        View Case <ArrowUpRight className="w-6 h-6" />
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Animated Insight Stack */}
                        <div className="flex-1 min-h-[400px]">
                            <InsightStack />
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

                    <div className="flex flex-wrap justify-center gap-8 mb-20">
                        {categories.map((cat, i) => (
                            <motion.div
                                key={i}
                                onClick={() => setSelectedCategory(cat.label)}
                                whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 3 : -3 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-40 h-40 rounded-full ${cat.color} border-4 border-black flex flex-col items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all ${selectedCategory === cat.label ? "ring-8 ring-black/10 scale-105 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" : "opacity-70 hover:opacity-100"}`}
                            >
                                <cat.icon className="w-10 h-10 stroke-[2]" />
                                <span className="font-bold uppercase text-sm tracking-wide">{cat.label}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 min-h-[500px]">
                        <AnimatePresence mode="wait">
                            {filteredProjects.map((project, idx) => (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    className="bg-white border-4 border-black rounded-[2rem] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group hover:translate-y-[-4px] transition-all"
                                >
                                    <div className="aspect-[16/9] relative overflow-hidden border-b-4 border-black">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4 bg-white border-2 border-black px-3 py-1 text-[10px] font-black uppercase rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                            {project.date}
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h4 className="text-3xl font-black uppercase mb-4 leading-tight">{project.title}</h4>
                                        <p className="text-gray-500 font-medium mb-6 line-clamp-2">{project.description}</p>
                                        <div className="flex justify-between items-center">
                                            <div className="h-2 w-12 bg-black/10 rounded-full" />
                                            <ArrowUpRight className="w-6 h-6 opacity-20 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            {filteredProjects.length === 0 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="col-span-full flex flex-col items-center justify-center py-20 text-gray-300"
                                >
                                    <Star className="w-16 h-16 mb-4 animate-pulse" />
                                    <p className="font-black uppercase tracking-widest">More coming soon...</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </main>
    );
}

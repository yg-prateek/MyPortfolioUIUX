"use client";

import { motion } from "framer-motion";
import { Download, Mail, Palette, Smartphone, Sticker } from "lucide-react";
import Image from "next/image";

const experience = [
    { role: "UIUX Designer | Product", company: "Hello Mentor", period: "2023-Present" },
    { role: "Web Design | Visual Design | UIUX Design", company: "Freelance", period: "2021-Present" },
];

const software = [
    { name: "Figma", value: 90, color: "bg-[#FE90E8]" }, // Pink
    { name: "Framer", value: 85, color: "bg-[#C0F7FE]" }, // Blue
    { name: "React", value: 70, color: "bg-[#99E885]" }, // Green
    { name: "Blender", value: 40, color: "bg-[#FFDC8B]" }, // Yellow
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-32 pb-20 px-4 flex justify-center items-center">
            {/* Main Bento Container */}
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">

                {/* HOBBY BLOCK */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="md:col-span-4 bg-white text-black p-6 rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col justify-between min-h-[200px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                    <h2 className="text-xl font-bold uppercase border-b-2 border-black pb-2 mb-4 w-min">Hobby</h2>
                    <div className="flex gap-4 items-center relative z-10">
                        <Palette className="w-10 h-10 stroke-2" />
                        <span className="font-handwriting text-3xl rotate-[-5deg]">Design & Dream</span>
                    </div>
                    <div className="absolute -bottom-4 -right-4 opacity-20">
                        <Sticker className="w-32 h-32" />
                    </div>
                </motion.div>

                {/* RESUME / ABOUT ME HEADER BLOCK */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="md:col-span-8 bg-accent text-black p-6 rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative"
                >
                    <div className="flex justify-between items-start">
                        <h2 className="text-xl font-bold uppercase border-b-2 border-black pb-2 mb-4">About</h2>
                        <div className="hidden md:block w-4 h-4 rounded-full bg-black"></div>
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-10deg]">
                        <span className="font-handwriting text-5xl text-black">about me_</span>
                    </div>
                </motion.div>

                {/* LEFT COLUMN: NAME & INTRO */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="md:col-span-4 bg-white text-black p-6 rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center gap-6"
                >
                    <div>
                        <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tighter">
                            Y G<br />Prateek
                        </h1>
                    </div>
                    <p className="font-mono text-sm leading-relaxed border-t-2 border-black pt-4">
                        I'm Prateek, a UI/UX Designer with 2+ years of experience creating intuitive, user-centered digital experiences.
                    </p>
                </motion.div>

                {/* ID CARD BLOCK */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="md:col-span-8 relative min-h-[300px] flex items-center justify-center py-10"
                >
                    <div className="bg-white text-black p-4 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg] max-w-md w-full border-2 border-black relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-black rounded-full z-10 border-4 border-white" />
                        <div className="border-b-2 border-black pb-2 mb-4 flex justify-between items-end">
                            <span className="font-mono text-xs text-gray-500">ID: #8920-UX</span>
                            <span className="font-bold uppercase tracking-widest text-sm">Official ID</span>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-32 h-40 bg-gray-100 rounded-lg overflow-hidden relative border-2 border-black">
                                <Image
                                    src="/prateek.png"
                                    alt="Prateek Y G"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex-1 space-y-2">
                                <div>
                                    <span className="text-xs text-gray-500 uppercase block">Name</span>
                                    <h3 className="text-2xl font-black uppercase leading-none">Prateek Y G</h3>
                                </div>
                                <div>
                                    <span className="text-xs text-gray-500 uppercase block">Role</span>
                                    <p className="font-medium text-lg">UIUX | Product Designer</p>
                                </div>
                                <div className="pt-2">
                                    <div className="h-8 bg-black w-full" style={{ maskImage: "repeating-linear-gradient(90deg, black, black 2px, transparent 2px, transparent 4px)" }}></div>
                                    <span className="text-[10px] font-mono tracking-[0.5em] block text-center mt-1">3+ Years of Experience</span>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -right-4 rotate-12 bg-primary text-black px-4 py-1 font-black border-2 border-black rounded-full shadow-lg text-xs">
                            VERIFIED
                        </div>
                    </div>
                </motion.div>

                {/* EXPERIENCE BLOCK */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="md:col-span-7 bg-white text-black p-8 rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                    <h2 className="text-xl font-bold uppercase border-b-2 border-black pb-2 mb-6">Experience</h2>
                    <div className="space-y-6">
                        {experience.map((exp, i) => (
                            <div key={i} className="flex justify-between items-baseline group">
                                <div>
                                    <span className="text-sm font-bold text-gray-500 block mb-1">{exp.period}</span>
                                    <h3 className="text-xl font-black uppercase">{exp.role}</h3>
                                </div>
                                <span className="font-mono text-sm px-3 py-1 bg-secondary/20 border-2 border-black rounded-full font-bold">{exp.company}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* SOFTWARE BLOCK */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="md:col-span-5 bg-white text-black p-8 rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center"
                >
                    <h2 className="text-xl font-bold uppercase border-b-2 border-black pb-2 mb-6">Software</h2>
                    <div className="space-y-4">
                        {software.map((sw, i) => (
                            <div key={i}>
                                <div className="flex justify-between mb-1">
                                    <span className="font-bold text-sm bg-black text-white px-2 py-0.5 rounded-sm">{sw.name}</span>
                                </div>
                                <div className="h-4 bg-gray-100 rounded-full border-2 border-black relative">
                                    <div
                                        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-2 border-black"
                                        style={{ left: `${sw.value}%` }}
                                    />
                                    <div className="h-full bg-black rounded-l-full" style={{ width: `${sw.value}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* BOTTOM CONTACT BLOCK */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="md:col-span-12 bg-white text-black p-6 rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <div className="flex flex-col">
                        <h2 className="text-3xl font-black uppercase">Contact Me</h2>
                        <p className="text-sm text-gray-600">Let's create something extraordinary.</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <a href="tel:+916362844313" className="text-lg font-bold hover:bg-primary/50 px-2 rounded transition-colors flex items-center gap-2">
                            <Smartphone className="w-4 h-4" /> +91 6362844313
                        </a>
                        <a href="mailto:prateekyg@gmail.com" className="text-lg font-bold hover:bg-primary/50 px-2 rounded transition-colors flex items-center gap-2">
                            <Mail className="w-4 h-4" /> prateekyg@gmail.com
                        </a>
                    </div>
                </motion.div>

            </div>
        </main>
    );
}

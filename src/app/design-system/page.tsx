"use client";

import { motion } from "framer-motion";
import {
    Mail, ArrowRight, Download, Github, Linkedin, Twitter,
    ArrowUpRight, Check, Heart, Star, Share2, Info,
    AlertTriangle, AlertCircle, Code2, Palette, Zap,
    Globe, Cpu, Layers
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function DesignSystemPage() {
    return (
        <main className="min-h-screen bg-[#FDFBF7] py-20 px-4 md:px-8">
            <div className="max-w-6xl mx-auto space-y-24">

                {/* Header */}
                <header className="space-y-4">
                    <div className="inline-block bg-[#99E885] border-2 border-black px-4 py-1 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold uppercase text-xs tracking-widest">
                        v1.1.0 (Expanded)
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">
                        Component<br />
                        <span className="text-white outline-text" style={{ WebkitTextStroke: '2px black' }}>Catalogue</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl font-medium leading-relaxed">
                        The complete DNA of the portfolio. Every block, atom, and interactive pattern documented for consistency.
                    </p>
                </header>

                <hr className="border-4 border-black" />

                {/* Section 01: Colors & Typography */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Colors */}
                    <section className="space-y-12">
                        <div className="space-y-2">
                            <h2 className="text-4xl font-black uppercase tracking-tight">01. Colors</h2>
                            <p className="text-gray-500 font-bold uppercase text-sm tracking-wider">Foundation & Accents</p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                            <ColorSwatch name="BG" hex="#FDFBF7" description="Base" />
                            <ColorSwatch name="Green" hex="#99E885" description="Primary" />
                            <ColorSwatch name="Pink" hex="#FE90E8" description="Pop" />
                            <ColorSwatch name="Cyan" hex="#C0F7FE" description="Accent" />
                            <ColorSwatch name="Yellow" hex="#FFDC8B" description="Info" />
                            <ColorSwatch name="Purple" hex="#A688FF" description="Deep" />
                            <ColorSwatch name="Black" hex="#000000" description="Solid" />
                            <ColorSwatch name="White" hex="#FFFFFF" description="Plain" />
                        </div>
                    </section>

                    {/* Typography */}
                    <section className="space-y-12">
                        <div className="space-y-2">
                            <h2 className="text-4xl font-black uppercase tracking-tight">02. Type</h2>
                            <p className="text-gray-500 font-bold uppercase text-sm tracking-wider">Hierarchy & Display</p>
                        </div>
                        <div className="space-y-8 bg-white p-8 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            <div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Heading / Syne</p>
                                <h3 className="text-4xl font-black uppercase tracking-tighter leading-none">BOLD IMPACT</h3>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Outline / Variant</p>
                                <h3 className="text-4xl font-black uppercase tracking-tighter leading-none text-white" style={{ WebkitTextStroke: '1.5px black' }}>OUTLINE FIX</h3>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Handwriting / Patrick</p>
                                <p className="font-handwriting text-3xl text-[#FE90E8]">Personal touch...</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Body / Inter</p>
                                <p className="text-sm font-medium text-gray-600 leading-relaxed">Clean, modern, and highly readable on all devices.</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Section 03: Interactive Bricks */}
                <section className="space-y-12">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-black uppercase tracking-tight">03. Interactive Bricks</h2>
                        <p className="text-gray-500 font-bold uppercase text-sm tracking-wider">Buttons, Socials & Connections</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Standard Buttons */}
                        <div className="bg-[#FFDC8B] p-8 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-6">
                            <h4 className="font-black uppercase text-xl">Standard Buttons</h4>
                            <div className="flex flex-col gap-4">
                                <button className="w-full py-4 bg-black text-white font-black uppercase tracking-widest rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                                    Primary Action
                                </button>
                                <button className="w-full py-4 bg-white text-black font-black uppercase tracking-widest rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2">
                                    Secondary <ArrowUpRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Social Buttons (Hero Style) */}
                        <div className="bg-white p-8 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-6">
                            <h4 className="font-black uppercase text-xl">Social Icons</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <button className="bg-[#C0F7FE] p-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center gap-2">
                                    <Linkedin className="w-6 h-6" />
                                    <span className="font-bold text-[10px] uppercase">LinkedIn</span>
                                </button>
                                <button className="bg-[#FE90E8] p-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center gap-2">
                                    <Twitter className="w-6 h-6" />
                                    <span className="font-bold text-[10px] uppercase">Twitter</span>
                                </button>
                                <button className="bg-white p-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center gap-2">
                                    <Github className="w-6 h-6 text-black" />
                                    <span className="font-bold text-[10px] uppercase">Github</span>
                                </button>
                                <button className="bg-[#FFDC8B] p-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center gap-2">
                                    <Download className="w-6 h-6" />
                                    <span className="font-bold text-[10px] uppercase">Resume</span>
                                </button>
                            </div>
                        </div>

                        {/* WhatsApp CTA (Special) */}
                        <div className="bg-[#1a1a1a] text-white p-8 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                            <h4 className="font-black uppercase text-xl text-[#99E885]">WhatsApp CTA</h4>
                            <div className="py-4 border-t border-white/20">
                                <div className="flex items-center justify-between group cursor-pointer hover:text-[#25D366] transition-colors">
                                    <span className="text-xl font-black uppercase">Start Chat</span>
                                    <div className="bg-[#25D366] text-black p-2 rounded-full group-hover:scale-110 transition-transform">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 04: Bento & Grid Elements */}
                <section className="space-y-12">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-black uppercase tracking-tight">04. Grid Elements</h2>
                        <p className="text-gray-500 font-bold uppercase text-sm tracking-wider">Expertise Cards & Bento Assets</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Expertise Card (Small) */}
                        <div className="p-8 rounded-[2rem] border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all group">
                            <div className="mb-6 w-12 h-12 rounded-xl border-2 border-black flex items-center justify-center bg-[#FE90E8]">
                                <Palette className="w-6 h-6" />
                            </div>
                            <h4 className="text-2xl font-black uppercase mb-2 leading-none">UI/UX Design</h4>
                            <p className="text-gray-500 font-medium text-sm">Intuitive & Accessible experiences.</p>
                        </div>

                        {/* Expertise Card (Wide) */}
                        <div className="md:col-span-2 p-8 rounded-[2rem] border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center gap-8 group">
                            <div className="mb-0 w-16 h-16 rounded-xl border-2 border-black flex-shrink-0 flex items-center justify-center bg-[#99E885]">
                                <Code2 className="w-8 h-8" />
                            </div>
                            <div className="text-center md:text-left">
                                <h4 className="text-3xl font-black uppercase mb-2 leading-none">Frontend Architecture</h4>
                                <p className="text-gray-500 font-medium">Scalable React & Next.js applications built for performance.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 05: The "Stick" Elements */}
                <section className="space-y-12">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-black uppercase tracking-tight">05. The stickers</h2>
                        <p className="text-gray-500 font-bold uppercase text-sm tracking-wider">Accent pieces & highlights</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                        {/* Status Sticker */}
                        <div className="px-6 py-3 bg-[#99E885] border-2 border-black rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3 w-fit">
                            <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse" />
                            <span className="font-bold text-sm uppercase tracking-wider">Sticker Label</span>
                        </div>

                        {/* Highlight Sticker */}
                        <div className="relative inline-block px-8 py-4 bg-[#A688FF] transform rotate-3 border-4 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            <span className="relative z-10 text-white font-black uppercase text-xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                                EPIC HIGHLIGHT
                            </span>
                        </div>

                        {/* Badge Sticker */}
                        <div className="bg-black text-white px-6 py-2 rounded-lg border-2 border-black font-bold uppercase text-sm w-fit transform -rotate-2">
                            03. Selected Works
                        </div>
                    </div>
                </section>

                {/* Section 06: Media Frames */}
                <section className="space-y-12 pb-32">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-black uppercase tracking-tight">06. Media Frames</h2>
                        <p className="text-gray-500 font-bold uppercase text-sm tracking-wider">Image presentation patterns</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Project Frame */}
                        <div className="space-y-6">
                            <div className="aspect-[4/3] rounded-3xl border-4 border-black overflow-hidden relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-gray-100 group">
                                <Image
                                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop"
                                    alt="Sample"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 bg-white border-2 border-black px-3 py-1 rounded-full text-[10px] font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                    Mockup
                                </div>
                            </div>
                            <p className="text-center font-bold text-gray-400 uppercase text-xs">Standard Project Frame (4:3)</p>
                        </div>

                        {/* Avatar/Sticker Frame */}
                        <div className="flex flex-col items-center justify-center space-y-6">
                            <div className="relative w-48 h-48 flex-shrink-0">
                                <div className="absolute inset-0 bg-[#C1F07C] rounded-full border-4 border-black translate-x-2 translate-y-2"></div>
                                <div className="absolute inset-0 rounded-full border-4 border-black overflow-hidden bg-gray-200 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                                    <img
                                        src="/prateek.png"
                                        alt="Avatar"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-2 -right-2 text-yellow-400 fill-current drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                                    <Star className="w-12 h-12 fill-[#FFDC8B] stroke-black stroke-[3px]" />
                                </div>
                            </div>
                            <p className="text-center font-bold text-gray-400 uppercase text-xs">Circular Sticker Frame</p>
                        </div>
                    </div>
                </section>

                {/* Section 07: Dynamic Patterns */}
                <section className="space-y-12 pb-32">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-black uppercase tracking-tight">07. Dynamic Patterns</h2>
                        <p className="text-gray-500 font-bold uppercase text-sm tracking-wider">Movement & Rhythm</p>
                    </div>

                    <div className="space-y-8">
                        {/* Marquee Sample */}
                        <div className="bg-[#C1F07C] p-6 rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                            <div className="flex gap-8 md:gap-24 whitespace-nowrap font-black uppercase text-xl overflow-hidden">
                                <motion.div
                                    animate={{ x: [0, -1500] }}
                                    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                                    className="flex gap-8 md:gap-24 items-center"
                                >
                                    <span className="flex gap-8 md:gap-24 items-center">
                                        <span>UX RESEARCH</span>
                                        <span className="w-3 h-3 bg-black rounded-full" />
                                        <span>WIREFRAMING</span>
                                        <span className="w-3 h-3 bg-black rounded-full" />
                                        <span>PROTOTYPING</span>
                                        <span className="w-3 h-3 bg-black rounded-full" />
                                        <span>VISUAL DESIGN</span>
                                    </span>
                                    {/* Seamless Loop Duplicate */}
                                    <span className="flex gap-8 md:gap-24 items-center">
                                        <span>UX RESEARCH</span>
                                        <span className="w-3 h-3 bg-black rounded-full" />
                                        <span>WIREFRAMING</span>
                                        <span className="w-3 h-3 bg-black rounded-full" />
                                        <span>PROTOTYPING</span>
                                        <span className="w-3 h-3 bg-black rounded-full" />
                                        <span>VISUAL DESIGN</span>
                                    </span>
                                </motion.div>
                            </div>
                        </div>
                        <p className="font-bold text-gray-400 uppercase text-xs">Continuous Scroll Marquee</p>
                    </div>
                </section>

            </div>
        </main>
    );
}

function ColorSwatch({ name, hex, description }: { name: string; hex: string; description: string }) {
    return (
        <div className="space-y-3">
            <div
                className="aspect-square w-full rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:scale-105 active:scale-95"
                style={{ backgroundColor: hex }}
            />
            <div>
                <p className="font-black text-[10px] uppercase tracking-wider">{name}</p>
                <code className="text-[10px] font-bold text-gray-400">{hex}</code>
            </div>
        </div>
    );
}

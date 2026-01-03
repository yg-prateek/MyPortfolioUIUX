"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Rocket, Sparkles, Cpu, Layers } from "lucide-react";

const expertiseItems = [
    {
        title: "Product & UX Strategy",
        description: "Research-driven, data-backed designs.",
        icon: <Rocket className="w-8 h-8 text-black" />,
        color: "bg-primary", // Electric Lime
        className: "md:col-span-2",
    },
    {
        title: "AI & Innovation",
        description: "Designing for the future of AI.",
        icon: <Cpu className="w-8 h-8 text-black" />,
        color: "bg-accent", // Purple
        className: "md:col-span-1",
    },
    {
        title: "Visual Craft",
        description: "Branding & visual storytelling.",
        icon: <Sparkles className="w-8 h-8 text-black" />,
        color: "bg-secondary", // Pink
        className: "md:col-span-1",
    },
    {
        title: "Engineering Mindset",
        description: "Bridging the gap between design and code.",
        icon: <Layers className="w-8 h-8 text-black" />,
        color: "bg-warning", // Yellow
        className: "md:col-span-2",
    },
];

export function Expertise() {
    return (
        <section className="min-h-screen flex flex-col justify-center py-32 md:py-48 px-4 md:px-20 bg-background relative overflow-hidden">
            <div className="max-w-6xl w-full mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-12 md:mb-20"
                >
                    <div className="bg-white border-4 border-black px-8 py-3 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1">
                        <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest text-black">
                            The Arsenal
                        </h2>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {expertiseItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={cn(
                                "p-8 md:p-12 rounded-3xl border-4 border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group relative overflow-hidden",
                                item.className
                            )}
                        >
                            {/* Accent Background on Hover */}
                            <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity", item.color)} />

                            <div className={cn("mb-8 w-16 h-16 rounded-2xl border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform group-hover:rotate-6", item.color)}>
                                {item.icon}
                            </div>
                            <h4 className="text-3xl font-black uppercase mb-4 leading-none tracking-tighter">{item.title}</h4>
                            <p className="text-gray-600 font-bold text-lg leading-snug">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

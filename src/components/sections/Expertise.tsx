"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Code2, Palette, Zap, Globe, Cpu, Layers } from "lucide-react";

const expertiseItems = [
    {
        title: "Frontend Architecture",
        description: "Scalable React & Next.js applications.",
        icon: <Code2 className="w-6 h-6 text-black" />,
        color: "bg-[#99E885]",
        className: "md:col-span-2",
    },
    {
        title: "UI/UX Design",
        description: "Intuitive & Accessible.",
        icon: <Palette className="w-6 h-6 text-black" />,
        color: "bg-[#FE90E8]",
        className: "md:col-span-1",
    },
    {
        title: "Motion & Interaction",
        description: "Framer Motion & GSAP.",
        icon: <Zap className="w-6 h-6 text-black" />,
        color: "bg-[#C0F7FE]",
        className: "md:col-span-1",
    },
    {
        title: "Web Performance",
        description: "Lightning fast loads.",
        icon: <Globe className="w-6 h-6 text-black" />,
        color: "bg-[#FFDC8B]",
        className: "md:col-span-2",
    },
];

export function Expertise() {
    return (
        <section className="min-h-screen flex flex-col justify-center py-32 md:py-48 px-4 md:px-20 bg-background">
            <div className="max-w-6xl w-full mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-8 md:mb-16 inline-block"
                >
                    <div className="bg-white border-2 border-black px-6 py-2 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <h2 className="text-sm font-bold uppercase tracking-widest">
                            02. The Arsenal
                        </h2>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {expertiseItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={cn(
                                "p-6 sm:p-8 md:p-10 rounded-[2rem] border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group",
                                item.className
                            )}
                        >
                            <div className={cn("mb-6 w-12 h-12 rounded-xl border-2 border-black flex items-center justify-center", item.color)}>
                                {item.icon}
                            </div>
                            <h4 className="text-2xl font-black uppercase mb-2 leading-none">{item.title}</h4>
                            <p className="text-gray-500 font-medium">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

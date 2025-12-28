"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Lumina Interface",
        category: "UI/UX Design",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
        color: "bg-[#C0F7FE]"
    },
    {
        id: 2,
        title: "Kinetic Brand",
        category: "Motion Design",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
        color: "bg-[#FE90E8]"
    },
];

export function ProjectGallery() {
    return (
        <section className="min-h-screen flex flex-col justify-center py-32 md:py-48 px-4 md:px-20 bg-background">
            <div className="max-w-7xl w-full mx-auto">
                <div className="flex justify-between items-end mb-10 md:mb-20">
                    <div>
                        <div className="bg-black text-white px-4 py-1 rounded inline-block mb-4 font-bold uppercase text-sm">03. Selected Works</div>
                        <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">Recent<br />Projects</h3>
                    </div>
                </div>

                <div className="space-y-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-4 md:p-8 rounded-[2.5rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] grid grid-cols-1 md:grid-cols-2 gap-8 items-center group hover:translate-y-[-4px] transition-all"
                        >
                            {/* Content */}
                            <div className={`order-2 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                                <div className={`inline-block px-4 py-1 rounded-full border-2 border-black font-bold uppercase text-xs mb-6 ${project.color}`}>
                                    {project.category}
                                </div>
                                <h4 className="text-2xl md:text-6xl font-black uppercase mb-6 leading-[0.9]">
                                    {project.title}
                                </h4>
                                <p className="text-gray-500 text-sm md:text-lg font-medium mb-8 max-w-md">
                                    Designed and developed to solve real-world problems. Focusing on performance interactions.
                                </p>
                                <button className="bg-black text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-[#99E885] hover:text-black border-2 border-transparent hover:border-black transition-all flex items-center gap-2">
                                    View Project <ArrowUpRight className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Image Frame */}
                            <div className={`order-1 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                                <div className="aspect-[4/3] rounded-2xl border-2 border-black overflow-hidden relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";

export function AboutStory() {
    return (
        <section className="min-h-[50vh] flex flex-col justify-center items-center py-32 md:py-48 px-4 md:px-20 bg-background relative z-10 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 -rotate-6 pointer-events-none" />

            <div className="max-w-5xl w-full bg-white border-4 border-black p-8 md:p-20 rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group hover:-translate-x-1 hover:-translate-y-1 transition-transform">

                {/* Decorative Badge */}
                <div className="absolute top-0 left-0 bg-accent text-black font-black uppercase text-sm px-8 py-3 border-b-4 border-r-4 border-black rounded-br-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    The Origin
                </div>

                {/* Narrative Content */}
                <div className="mt-12 space-y-10 text-2xl md:text-6xl font-black uppercase leading-none tracking-tighter">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        It started with a simple curiosity: <br />
                        <span className="text-gray-400 font-mono text-xl md:text-3xl block mt-4">"How does this button work?"</span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        Now, I view code as a medium for <br />
                        <span className="relative inline-block mt-4">
                            <span className="relative z-10 text-primary drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">storytelling.</span>
                            <span className="absolute bottom-2 left-0 w-full h-[0.3em] bg-black opacity-10"></span>
                        </span>
                    </motion.p>
                </div>

                {/* Corner Decorative Sparkle */}
                <div className="absolute bottom-8 right-8 text-secondary pointer-events-none">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" stroke="black" strokeWidth="1">
                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                    </svg>
                </div>
            </div>
        </section>
    );
}

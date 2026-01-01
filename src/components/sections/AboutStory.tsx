"use client";

import { motion } from "framer-motion";

export function AboutStory() {
    return (
        <section className="min-h-[50vh] flex flex-col justify-center items-center py-32 md:py-48 px-4 md:px-20 bg-background relative z-10">
            <div className="max-w-5xl w-full bg-white border-4 border-black p-8 md:p-16 pb-12 md:pb-20 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">

                {/* Decorative Badge */}
                <div className="absolute top-0 left-0 bg-[#A688FF] text-white font-bold uppercase text-xs px-6 py-2 border-b-4 border-r-4 border-black rounded-br-2xl">
                    The Origin
                </div>

                {/* Narrative Content */}
                <div className="mt-8 space-y-8 text-xl md:text-5xl font-black uppercase leading-tight tracking-tight">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        It started with a simple curiosity: <span className="text-gray-400">"How does this button work?"</span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Now, I view code as a medium for <span className="text-[#99E885] stroke-black" style={{ WebkitTextStroke: '1.5px black' }}>storytelling</span>.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export function ContactCTA() {
    return (
        <section className="min-h-[70vh] flex flex-col justify-center items-center py-32 md:py-48 px-4 text-center bg-background">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl bg-[#FFDC8B] p-6 md:p-20 rounded-[3rem] border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
            >
                <div className="relative z-10">
                    <div className="inline-block bg-white border-2 border-black rounded-full px-5 py-2 mb-6 transform -rotate-3 hover:rotate-0 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <span className="font-bold text-sm md:text-base uppercase tracking-widest flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Open for Opportunities
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-8xl font-black mb-10 uppercase leading-[0.9] tracking-tighter">
                        Let's Create<br />
                        <span className="relative inline-block mt-2 px-4">
                            <span className="absolute inset-0 bg-[#A688FF] transform rotate-2 border-4 border-black rounded-xl translate-y-1"></span>
                            <span className="relative z-10 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Something Epic</span>
                        </span>
                    </h2>

                    <motion.a
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 px-6 py-4 md:px-10 md:py-6 bg-[#25D366] text-white text-sm sm:text-base md:text-xl font-black uppercase tracking-wider rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all sm:w-auto"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Chat on WhatsApp
                    </motion.a>
                </div>

                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
            </motion.div>

            <footer className="mt-20 text-sm font-bold uppercase tracking-widest text-gray-500">
                © {new Date().getFullYear()} Prateek Design. All Rights Reserved.
            </footer>
        </section>
    );
}

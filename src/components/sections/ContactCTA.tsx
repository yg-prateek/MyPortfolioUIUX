"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export function ContactCTA() {
    return (
        <section className="min-h-[70vh] flex flex-col justify-center items-center py-32 md:py-48 px-4 text-center bg-background relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl bg-warning p-8 md:p-24 rounded-[3rem] border-4 md:border-[6px] border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group hover:-translate-x-2 hover:-translate-y-2 transition-transform duration-300"
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

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full mt-8">
                        {/* WhatsApp Button */}
                        <motion.a
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://wa.me/916362844313"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white text-xs sm:text-sm md:text-base font-black uppercase tracking-wider rounded-xl border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all whitespace-nowrap"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            WhatsApp
                        </motion.a>

                        {/* Email Button */}
                        <motion.a
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            whileTap={{ scale: 0.95 }}
                            href="mailto:prateekyg@gmail.com"
                            className="inline-flex items-center gap-2 px-5 py-3 bg-[#A688FF] text-white text-xs sm:text-sm md:text-base font-black uppercase tracking-wider rounded-xl border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all whitespace-nowrap"
                        >
                            <Mail className="w-4 h-4 md:w-5 md:h-5" />
                            prateekyg@gmail.com
                        </motion.a>

                        {/* Phone Button */}
                        <motion.a
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href="tel:+916362844313"
                            className="inline-flex items-center gap-2 px-5 py-3 bg-black text-white text-xs sm:text-sm md:text-base font-black uppercase tracking-wider rounded-xl border-2 md:border-4 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-900 transition-all whitespace-nowrap"
                        >
                            <span className="text-base md:text-xl leading-none">📞</span>
                            +91 6362844313
                        </motion.a>
                    </div>
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

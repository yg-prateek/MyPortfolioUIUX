"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const statusMessages = [
    "Initializing Creative Synergy...",
    "Powering up AI Engines...",
    "Collaborating with Prateek...",
    "Loading Creative Portfolio...",
    "Synergy Check: Antigravity AI...",
    "Engine Ready: Next.js + Vercel...",
    "Styling Module: Tailwind CSS...",
    "Animation Layer: Framer Motion...",
    "Optimizing User Experience...",
    "Assembling Masterpiece...",
];

const techStack = [
    "Antigravity AI",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Vercel",
    "Lucide React",
    "TypeScript"
];

export function LoadingScreen() {
    const [statusIndex, setStatusIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const statusInterval = setInterval(() => {
            setStatusIndex((prev) => (prev + 1) % statusMessages.length);
            setIsTyping(true);
        }, 2500);

        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) return 100;
                return prev + 1;
            });
        }, 45);

        return () => {
            clearInterval(statusInterval);
            clearInterval(progressInterval);
        };
    }, []);

    useEffect(() => {
        let currentText = "";
        const targetText = statusMessages[statusIndex];
        let charIndex = 0;

        const typingInterval = setInterval(() => {
            if (charIndex < targetText.length) {
                currentText += targetText[charIndex];
                setDisplayText(currentText);
                charIndex++;
            } else {
                setIsTyping(false);
                clearInterval(typingInterval);
            }
        }, 40);

        return () => clearInterval(typingInterval);
    }, [statusIndex]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white p-6 overflow-hidden"
        >
            {/* AI Core Animation */}
            <div className="relative w-56 h-56 mb-12 flex items-center justify-center">
                {/* Outer Rotating Orbits */}
                <motion.div
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute inset-0 border-2 border-dashed border-[#C1F07C] rounded-full opacity-20"
                />
                <motion.div
                    animate={{
                        rotate: [360, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute inset-4 border-2 border-dashed border-[#A688FF] rounded-full opacity-30"
                />

                {/* Profile Picture Container */}
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-black shadow-[0_0_20px_#C1F07C] z-10">
                    <img
                        src="/prateek.png"
                        alt="Prateek"
                        className="w-full h-full object-cover rounded-full"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>

                {/* Pulse Effect */}
                <motion.div
                    animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-8 bg-[#C1F07C] rounded-full blur-2xl z-0"
                />
            </div>

            {/* Narrative Text */}
            <div className="text-center max-w-md w-full px-4">
                <h2 className="text-xl md:text-3xl font-black uppercase tracking-tighter mb-4 leading-tight">
                    Prompted by <span className="text-[#A688FF]">Curiosity</span>, <br className="sm:hidden" /> Built with <span className="text-[#C1F07C]">AI</span>
                </h2>

                <div className="h-6 mb-8 flex items-center justify-center">
                    <p className="text-gray-400 font-mono text-xs md:text-sm uppercase tracking-wider flex items-center gap-1">
                        {displayText}
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="w-1.5 h-4 bg-[#C1F07C] inline-block"
                        />
                    </p>
                </div>

                {/* Tech Stack Matrix */}
                <div className="mb-10 flex flex-wrap justify-center gap-2 max-w-xs mx-auto opacity-60">
                    {techStack.map((tech, i) => (
                        <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                                opacity: progress > (i * 14) ? 1 : 0.2,
                                scale: progress > (i * 14) ? 1 : 0.8,
                                color: progress > (i * 14) ? "#C1F07C" : "#9ca3af"
                            }}
                            className="text-[9px] font-bold font-mono border border-white/20 px-2 py-0.5 rounded uppercase"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>

                {/* Progress Bar Container */}
                <div className="flex flex-col items-center gap-3">
                    <div className="w-72 h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/10 relative">
                        <motion.div
                            className="h-full bg-gradient-to-r from-[#A688FF] to-[#C1F07C]"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.1 }}
                        />
                    </div>
                    <div className="flex justify-between w-72 text-[9px] uppercase tracking-widest text-white/30 font-bold font-mono">
                        <span>PORTFOLIO_OS</span>
                        <span>{progress}% LOADED</span>
                    </div>
                </div>
            </div>

            {/* Aesthetic Dots Grid */}
            <div className="absolute bottom-12 left-12 grid grid-cols-4 gap-2 opacity-10 hidden sm:grid">
                {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full" />
                ))}
            </div>

            {/* Floating System Info */}
            <div className="absolute top-12 right-12 text-right opacity-20 font-mono text-[8px] md:text-[10px] space-y-1">
                <p>ESTABLISHING NEURAL UPLINK...</p>
                <p>CREATIVE_PROTOCOL_V4.0.1</p>
                <p>STACK_INIT :: OK</p>
                <p>PRATEEK_DESIGN_OS :: ACTIVE</p>
                <p>LATENCY :: 12ms</p>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#A688FF]/5 blur-[120px] rounded-full" />
            </div>
        </motion.div>
    );
}

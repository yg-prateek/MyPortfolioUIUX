"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const galleryItems = [
    { type: "image", src: "https://res.cloudinary.com/dyrvdezvy/image/upload/v1766455833/Frame_1321315599_kadjrv.png", aspectRatio: "aspect-[3/4]" },
    { type: "video", src: "https://res.cloudinary.com/dyrvdezvy/video/upload/v1766455160/Review_anim_tb1kuu.mp4", aspectRatio: "aspect-[16/9]" },
    { type: "image", src: "https://res.cloudinary.com/dyrvdezvy/image/upload/v1766455833/Frame_1321315599_kadjrv.png", aspectRatio: "aspect-[4/3]" },
    { type: "video", src: "https://res.cloudinary.com/dyrvdezvy/video/upload/v1766455160/Scene_1_uakxqt.mp4", aspectRatio: "aspect-[16/9]" },
    { type: "video", src: "https://res.cloudinary.com/dyrvdezvy/video/upload/v1766455080/Scene-1_tqkgbe.mp4", aspectRatio: "aspect-[16/9]" },
    { type: "image", src: "https://res.cloudinary.com/dyrvdezvy/image/upload/v1766455833/Frame_1321315599_kadjrv.png", aspectRatio: "aspect-[3/4]" },
    { type: "video", src: "https://res.cloudinary.com/dyrvdezvy/video/upload/v1766455080/Scene_broo8i.mp4", aspectRatio: "aspect-[16/9]" },
    { type: "image", src: "https://res.cloudinary.com/dyrvdezvy/image/upload/v1766455833/Frame_1321315599_kadjrv.png", aspectRatio: "aspect-[3/4]" },
];

function ParallaxColumn({ items, direction = "up", speed = "normal", className }: { items: typeof galleryItems, direction?: "up" | "down", speed?: "slow" | "normal" | "fast", className?: string }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => { setIsMounted(true); }, []);
    if (!isMounted) return <div className={cn("relative h-[80vh] overflow-hidden", className)} />;

    const durationValue = speed === "slow" ? 60 : speed === "normal" ? 40 : 25;
    const yStart = direction === "up" ? "0%" : "-33.33%";
    const yEnd = direction === "up" ? "-33.33%" : "0%";

    return (
        <div className={cn("relative h-[80vh] overflow-hidden", className)}>
            <motion.div
                className="flex flex-col gap-8 w-full absolute top-0 left-0"
                initial={{ y: yStart }}
                animate={{ y: yEnd }}
                transition={{ duration: durationValue, ease: "linear", repeat: Infinity }}
            >
                {[...items, ...items, ...items].map((item, i) => (
                    <div key={i} className={cn("relative w-full rounded-2xl overflow-hidden bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]", item.aspectRatio)}>
                        {item.type === "video" ? (
                            <video src={item.src} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                        ) : (
                            <Image src={item.src} alt="Gallery Item" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                        )}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export function InfiniteGallery() {
    return (
        <section className="min-h-screen py-32 md:py-48 px-4 md:px-8 bg-background overflow-hidden relative">

            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            {/* Header Title with increased spacing and z-index */}
            <div className="max-w-7xl mx-auto mb-24 text-center relative z-30">
                <div className="bg-[#FE90E8] border-2 border-black px-6 py-2 rounded-full inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-black">04. The Gallery</h2>
                </div>
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight">Visual Explorations</h3>
            </div>

            {/* Gallery Grid */}
            <div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[80vh] max-w-[1920px] mx-auto relative z-10"
                style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)',
                    maskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)',
                }}
            >
                <ParallaxColumn items={galleryItems.slice(0, 3)} direction="up" speed="slow" />
                <ParallaxColumn items={galleryItems.slice(3, 6)} direction="up" speed="normal" className="md:translate-y-12" />
                <ParallaxColumn items={galleryItems.slice(6, 9)} direction="up" speed="fast" />
            </div>
        </section>
    );
}

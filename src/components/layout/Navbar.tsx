"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Navbar() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/work", label: "Work" },
        { href: "/about", label: "About" },
        { href: "/design-system", label: "System" },
        { href: "/#contact", label: "Contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-8 px-4 pointer-events-none"
        >
            <div className="pointer-events-auto flex items-center gap-2 bg-white/90 backdrop-blur-xl border-[3px] border-black p-2 rounded-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 max-w-[95vw] overflow-x-auto no-scrollbar">
                {links.map((link) => {
                    const isActive = pathname === link.href;

                    return (
                        <Link key={link.href} href={link.href} className="relative">
                            <motion.div
                                whileHover={{ rotate: isActive ? 0 : [-2, 2, -2, 0], scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={cn(
                                    "relative px-6 py-3 rounded-full text-sm font-black uppercase tracking-wider transition-colors border-2 whitespace-nowrap",
                                    isActive
                                        ? "bg-pop-primary text-black border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                        : "bg-transparent border-transparent text-gray-500 hover:text-black hover:bg-black/5"
                                )}
                            >
                                {link.label}
                            </motion.div>
                        </Link>
                    );
                })}
            </div>
        </motion.nav>
    );
}

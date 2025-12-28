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
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
        >
            <div className="pointer-events-auto flex items-center gap-2 md:gap-4 bg-white/80 backdrop-blur-md border-2 border-black p-2 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-[95vw] overflow-x-auto no-scrollbar">
                {links.map((link) => {
                    const isActive = pathname === link.href || (link.href !== "/" && pathname === link.href);

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                " relative text-xs md:text-sm font-bold uppercase tracking-wider px-4 py-2 md:px-6 md:py-3 rounded-xl transition-all duration-300 border-2 whitespace-nowrap",
                                isActive
                                    ? "bg-[#99E885] border-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-y-[-2px]"
                                    : "border-transparent text-gray-500 hover:text-black hover:bg-gray-100 hover:border-black/10"
                            )}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </div>
        </motion.nav>
    );
}

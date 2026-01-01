"use client";

import { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { AnimatePresence } from "framer-motion";

export function LoadingWrapper({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // We want the loading screen to be impactful.
        // 5 seconds allows the progress bar and status messages to cycle.
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && <LoadingScreen key="loading" />}
            </AnimatePresence>
            <main className={isLoading ? "hidden" : "block"}>
                {children}
            </main>
        </>
    );
}

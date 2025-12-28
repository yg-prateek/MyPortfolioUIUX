"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
    ArrowLeft, ArrowUpRight, Globe, Layers, Layout, Users, Zap, Star,
    CheckCircle2, XCircle, Clock, Search, Target, Smartphone, FileText,
    Component, Database
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRef } from "react";

// Extended Data Dictionary
const caseStudies: Record<string, any> = {
    "hello-mentor": {
        title: "Hello Mentor",
        tagline: "Simplified NEET Counselling Platform",
        tags: ["Ed-tech", "Product Design", "2024"],
        liveLink: "https://portal.hellomentor.in/",
        colors: {
            primary: "text-primary",
            accent: "bg-primary",
            border: "border-primary",
            shadow: "shadow-primary"
        },
        stats: [
            { label: "Sector", value: "Ed-Tech" },
            { label: "Role", value: "Product Designer" },
            { label: "Timeline", value: "2024" },
            { label: "Focus", value: "Web App" }
        ],
        overview: "To design and develop an all-in-one counseling portal that provides NEET aspirants with the tools, resources, and guidance they need to successfully navigate the complex and often stressful post-exam counseling process.",
        story: "The lack of existing platforms to streamline the complex NEET counseling process made us interested in designing an all-in-one portal. We identified a critical gap in how aspirants access information about college selection and seat allocation.",
        problem: {
            description: "Aspirants face overwhelming challenges due to the lack of centralized resources. This makes it difficult for them to make informed decisions about college choices.",
            points: ["Disorganized Information", "Informed Decision-Making Issues", "Document Management Chaos", "Unclear Guidance"]
        },
        solution: {
            description: "An all-in-one online portal, 'Medical Counselling,' that provides a centralized platform with tools and resources. Features include college predictors, rank analyzers, and expert advice.",
            points: ["Centralized Platform", "Document Checklist", "Counseling Process Guide", "Expert Advice"]
        },
        process: [
            { title: "Ideate", desc: "Turn idea from concept and brainstorm to MVP" },
            { title: "Design", desc: "Sketch out the product to align the user needs" },
            { title: "Develop", desc: "Convert the designs into a live application" },
            { title: "Deploy", desc: "Launching the application to the market" }
        ],
        role: [
            { icon: FileText, title: "UI Documentation", desc: "Creation of UI documentation so dev team can code well." },
            { icon: Component, title: "Provide Assets", desc: "Ensure assets contained in the UI are usable." },
            { icon: Users, title: "User Testing", desc: "User testing using UT and AB testing." },
            { icon: Search, title: "UI Audit", desc: "Perform UI audits. Make sure nothing goes wrong." },
            { icon: Database, title: "Flow Documentation", desc: "When the application is continued, it can be easily carried out." },
            { icon: Target, title: "Research", desc: "This process is made so requirements meet target market." }
        ],
        strategy: {
            intention: "Creating an intuitive online portal for NEET aspirants that simplifies the counseling process and empowers users to share their experiences.",
            targetUser: ["NEET Aspirants", "Parents/Guardians"],
            constraints: ["Internet Connectivity", "Device Compatibility", "Scalability"],
            successFactors: ["User-Centric Design", "Comprehensive Resources", "Effective Marketing", "Expert Involvement"]
        },
        research: {
            participants: 60,
            audience: "17-25 years old",
            insights: [
                "Users prefer mobile-first experiences.",
                "Real-time notifications are critical.",
                "Simplified language wins over jargon."
            ]
        }
    }
};

export default function CaseStudyPage() {
    const params = useParams();
    const slug = params.slug as string;
    const project = caseStudies[slug] || caseStudies["hello-mentor"];

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <main ref={containerRef} className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black font-sans">

            {/* Progress Bar */}
            <motion.div
                style={{ scaleX }}
                className="fixed top-0 left-0 right-0 h-2 bg-black origin-left z-50"
            />

            {/* Navigation */}
            <nav className="fixed top-6 left-6 z-40">
                <Link href="/work" className="bg-white border-2 border-black p-3 rounded-full inline-flex hover:bg-black hover:text-white transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <ArrowLeft className="w-6 h-6" />
                </Link>
            </nav>

            {/* 1. HERO SECTION */}
            <section className="relative min-h-[90vh] flex flex-col justify-center px-4 md:px-12 pt-20 border-b-4 border-black bg-white">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
                        <div className="flex flex-wrap gap-4 mb-8">
                            {project.tags.map((tag: string, i: number) => (
                                <span key={i} className="pop-badge shadow-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter mb-8 leading-[0.9]"
                    >
                        {project.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-3xl font-bold bg-accent inline-block px-2 text-black max-w-4xl border-l-8 border-black pl-6 leading-relaxed mb-12 transform -rotate-1"
                    >
                        {project.tagline}
                    </motion.p>

                    <div className="flex gap-6">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="pop-button flex items-center gap-2 group">
                            Visit Live Site <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Decor */}
                <div className="absolute top-20 right-20 hidden md:block animate-spin-slow opacity-20">
                    <Star className="w-40 h-40 fill-primary stroke-black stroke-2" />
                </div>
            </section>

            {/* 2. STATS GRID */}
            <section className="border-b-4 border-black bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x-4 divide-black">
                    {project.stats.map((stat: any, i: number) => (
                        <div key={i} className="p-8 md:p-12 hover:bg-gray-50 transition-colors">
                            <span className="text-xs font-black uppercase tracking-widest block mb-4 bg-black text-white px-2 py-1 w-fit rounded">{stat.label}</span>
                            <span className="text-2xl md:text-3xl font-black">{stat.value}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. PROBLEM VS SOLUTION */}
            <section className="py-32 px-4 md:px-12 relative overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 relative">

                    {/* VS Badge */}
                    <div className="absolute left-1/2 top-0 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center">
                        <div className="w-24 h-24 bg-black text-white rounded-full flex items-center justify-center border-4 border-white shadow-xl rotate-12">
                            <span className="text-4xl font-black italic">VS</span>
                        </div>
                    </div>

                    {/* Problem */}
                    <div className="space-y-8 bg-red-50 p-8 rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-red-500 rounded-full border-2 border-black flex items-center justify-center">
                                <XCircle className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-4xl font-black uppercase text-red-500 transform -rotate-2">Problem</h2>
                        </div>
                        <p className="text-black font-medium text-lg leading-relaxed">
                            {project.problem?.description}
                        </p>
                        <ul className="space-y-4">
                            {project.problem?.points.map((pt: string, i: number) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-red-500 rounded-full border border-black" />
                                    <span className="text-black font-bold">{pt}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solution */}
                    <div className="space-y-8 bg-green-50 p-8 rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary rounded-full border-2 border-black flex items-center justify-center">
                                <CheckCircle2 className="w-8 h-8 text-black" />
                            </div>
                            <h2 className="text-4xl font-black uppercase text-green-600 transform rotate-2">Solution</h2>
                        </div>
                        <p className="text-black font-medium text-lg leading-relaxed">
                            {project.solution?.description}
                        </p>
                        <ul className="space-y-4">
                            {project.solution?.points.map((pt: string, i: number) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-primary rounded-full border border-black" />
                                    <span className="text-black font-bold">{pt}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 4. DESIGN PROCESS */}
            <section className="py-20 bg-accent border-y-4 border-black">
                <div className="max-w-7xl mx-auto px-4 md:px-12">
                    <h2 className="text-5xl font-black uppercase mb-16 text-center text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">Design Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {project.process.map((step: any, i: number) => (
                            <div key={i} className="relative group p-6 rounded-2xl bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all">
                                <span className="absolute -top-6 -right-4 text-6xl font-black text-black/10 group-hover:text-primary transition-colors">
                                    0{i + 1}
                                </span>
                                <h3 className="text-xl font-black mb-2 relative z-10 uppercase">{step.title}</h3>
                                <p className="text-sm font-bold text-gray-600 relative z-10">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. ROLE & STRATEGY */}
            <section className="py-32 px-4 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto space-y-32">

                    {/* My Role Grid */}
                    <div>
                        <h2 className="text-4xl font-black uppercase mb-12 text-center bg-black text-white px-4 py-2 w-fit mx-auto -rotate-1 transform">My Role</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {project.role?.map((role: any, i: number) => (
                                <div key={i} className="bg-gray-50 p-8 rounded-2xl border-2 border-black hover:bg-primary transition-colors text-center group cursor-default">
                                    <div className="mx-auto w-12 h-12 rounded-xl bg-white border-2 border-black flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                                        <role.icon className="w-6 h-6 stroke-2" />
                                    </div>
                                    <h3 className="text-lg font-black mb-2 uppercase">{role.title}</h3>
                                    <p className="text-sm font-medium text-gray-600 group-hover:text-black">{role.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Design Strategy Bento */}
                    <div>
                        <h2 className="text-4xl font-black uppercase mb-12 text-center bg-black text-white px-4 py-2 w-fit mx-auto rotate-1 transform">Design Strategy</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Detailed Cards */}
                            <div className="bg-secondary/20 p-10 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                <h3 className="text-2xl font-black mb-4 flex items-center gap-3 uppercase">
                                    <Target className="w-8 h-8" /> Intention
                                </h3>
                                <p className="text-xl leading-relaxed font-bold">"{project.strategy.intention}"</p>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-white p-8 rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <h3 className="text-lg font-black mb-4 uppercase tracking-widest bg-gray-200 px-2 py-1 w-fit">Tech Constraints</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {project.strategy.constraints.map((c: string, i: number) => (
                                            <span key={i} className="px-3 py-1 bg-black text-white font-bold rounded text-sm">{c}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white p-8 rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <h3 className="text-lg font-black mb-4 uppercase tracking-widest bg-gray-200 px-2 py-1 w-fit">Success Factors</h3>
                                    <ul className="space-y-2">
                                        {project.strategy.successFactors.map((f: string, i: number) => (
                                            <li key={i} className="flex items-center gap-2 font-bold">
                                                <CheckCircle2 className="w-5 h-5 text-green-600 fill-current" /> {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. USER RESEARCH */}
            <section className="py-20 bg-gray-50 border-t-4 border-black">
                <div className="max-w-7xl mx-auto px-4 md:px-12">
                    <h2 className="text-6xl font-black uppercase mb-16 text-center">User Research</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="col-span-1 space-y-8">
                            <div className="p-8 bg-white border-2 border-black rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <h3 className="text-2xl font-black mb-2 uppercase">Participants</h3>
                                <p className="text-8xl font-black text-primary stroke-black" style={{ WebkitTextStroke: '2px black' }}>{project.research.participants}</p>
                                <p className="font-bold text-gray-600">NEET Aspirants</p>
                            </div>
                            <div className="p-8 bg-white border-2 border-black rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <h3 className="text-2xl font-black mb-2 uppercase">Target Age</h3>
                                <p className="text-4xl font-black">{project.research.audience}</p>
                            </div>
                        </div>

                        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Chart Visual */}
                            <div className="bg-black text-white p-8 rounded-3xl relative overflow-hidden group border-4 border-black">
                                <h3 className="text-xl font-bold mb-6 uppercase text-center">Platform Preference</h3>
                                <div className="relative w-48 h-48 mx-auto border-[8px] border-white rounded-full flex items-center justify-center bg-gray-900">
                                    <div className="absolute inset-0 border-[40px] border-primary rounded-full border-t-transparent border-l-transparent rotate-45" />
                                    <span className="text-2xl font-black relative z-10">Mobile</span>
                                </div>
                                <div className="mt-8 flex justify-center gap-8 text-sm font-bold">
                                    <span className="flex items-center gap-2"><div className="w-3 h-3 bg-primary rounded-full" /> Mobile (75%)</span>
                                    <span className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-800 rounded-full" /> Web (25%)</span>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-3xl flex flex-col justify-center border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                <h3 className="text-xl font-black mb-4 uppercase bg-primary w-fit px-2">Key Insights</h3>
                                <ul className="space-y-4">
                                    {project.research.insights.map((insight: string, i: number) => (
                                        <li key={i} className="flex gap-3 items-start">
                                            <div className="mt-1.5 w-2 h-2 bg-black rounded-full flex-shrink-0" />
                                            <p className="font-bold text-lg leading-snug">"{insight}"</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FOOTER */}
            <section className="min-h-[50vh] flex flex-col items-center justify-center relative bg-accent border-t-4 border-black">
                <Link href="/work" className="group relative z-10 text-center">
                    <span className="text-lg font-black text-black mb-4 block uppercase tracking-widest bg-white border-2 border-black px-4 py-1 rounded-full mx-auto w-fit">Next Case Study</span>
                    <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-black group-hover:text-white transition-colors drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                        Coming<br />Soon
                    </h2>
                    <Zap className="mx-auto mt-8 w-16 h-16 text-black fill-white stroke-2 group-hover:rotate-12 transition-transform" />
                </Link>
            </section>

        </main>
    );
}

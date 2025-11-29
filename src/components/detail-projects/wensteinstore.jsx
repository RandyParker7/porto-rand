import FadeContent from "../FadeContent";
import { useEffect } from "react";

export const Wensteinstore = () => {
    useEffect(() => {
        window.scrollTo(0, 0);  
    }, []);

    return (
        <section id="fitzone" className="detail-project-container min-h-screen justify-center py-20">
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className="max-w-6xl mx-auto px-4 rounded-xl border border-white/10 p-8 bg-black/50 backdrop-blur-sm text-left">
                    <a href="/#projects" className="text-blue-400 hover:text-blue-300 transition-colors mb-4 inline-block">← Back to Projects</a>
                    <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Wenstein Store - Account Report</h1>
                    <a href="https://github.com/axltavideus/web_akun.git" target="_blank" className="px-4 py-2 mb-7 inline-flex items-center gap-2 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            alt="GitHub"
                            className="w-5 h-5 invert items-center"
                        />
                        <span className="items-center">Code</span>
                    </a>

                    <img src="/src/assets/wensteinstore/home-page.png" alt="FitZone Home Page" className="w-full h-auto rounded-lg mb-8" />

                    {/* Description Section */}
                    <div className="mb-8 text-left">
                        <h2 className="text-3xl font-bold mb-4 text-white">Description</h2>
                        <p className="text-gray-400 mb-4">
                            A responsive web platform designed to help users report suspicious Mobile Legends accounts and online scammers involved in account trading. The system provides a simple way to submit reports, view verified cases, and help players stay safe from fraud.A responsive web platform designed to help users report suspicious Mobile Legends accounts and online scammers involved in account trading. The system allows players to submit detailed reports, upload evidence, and track the status of their submissions. It also provides a publicly accessible database of verified scam cases, enabling users to check the credibility of sellers or buyers before proceeding with a transaction. By offering a structured reporting flow and centralized scam information, the platform aims to create a safer trading environment for the Mobile Legends community.
                        </p>
                    </div>

                    <hr className="border-white/10 mb-8" />

                    {/* Features Section */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-white">Features</h2>
                        <ul className="text-gray-400 space-y-2">
                            <li>• Scammer Phone Number Check - Users can check if a Mobile Legends account ID has been previously reported for scams.</li>
                            <li>• Reported Account Checker - Allows users to look up ML accounts that have been flagged or reported as dangerous.</li>
                            <li>• Account Issue Reporting - Users can submit detailed reports about suspicious accounts, scammers, or unfair trading behavior.</li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-white">Admin Panel</h2>
                        <ul className="text-gray-400 space-y-2">
                            <li>• Manage Dangerous Accounts - Admin reviews incoming reports, verifies evidence, approves valid cases. </li>
                            <li>• Manage Dangerous Phone Numbers - Admin can add, verify, or remove harmful phone numbers used in scams.</li>
                            <li>• Upload Group Links - Admin can upload and manage trusted marketplace or trading group links to help users trade safely.</li>
                        </ul>
                    </div>

                    <hr className="border-white/10 mb-8" />

                                      {/* What I Learned */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-white">What I Learned</h2>
                        <ul className="text-gray-400 space-y-2">
                            <li>• Building a full-stack web application using Laravel and structuring the project with a clean MVC architecture.</li>
                            <li>• Designing and managing a MySQL database for storing reports, account data, and admin-reviewed records.</li>
                            <li>• Implementing secure CRUD operations and backend logic for report submission, verification, and admin moderation.</li>
                            <li>• Creating responsive and user-friendly interfaces, including search and verification features.</li>
                        </ul>
                    </div>

                    <hr className="border-white/10 mb-8" />

                    {/* Tech Stack Section */}
                    <div className="mb-8 text-left">
                        <h2 className="text-3xl font-bold mb-4 text-white">Tech Stack</h2>
                        <div className="flex flex-wrap gap-3">
                            {["Bootstrap", "Angular.js", "MongoDB"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-2 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Media Section */}
                    <h2 className="text-3xl font-bold mb-4 text-white">Media</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition">
                            <img src="/src/assets/wensteinstore/home-page.png" alt="Wenstein Home Page" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-center">Home Page</h3>
                        </div>

                        <div className="rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition">
                            <img src="/src/assets/wensteinstore/kasus-page.png" alt="Akun Berbahaya" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-center">Cases Page</h3>
                        </div>
                        <div className="rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition">
                            <img src="/src/assets/wensteinstore/lapor-page.png" alt="FitZone Dashboard" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-center">Report Page</h3>
                        </div>
                        <div className="rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition">
                            <img src="/src/assets/wensteinstore/nomor-page.png" alt="FitZone Dashboard" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-center">Number Check</h3>
                        </div>
                        <div className="rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition">
                            <img src="/src/assets/wensteinstore/contact-page.png" alt="FitZone Dashboard" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-center">Contact Page</h3>
                        </div>
                        <div className="rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition">
                            <img src="/src/assets/wensteinstore/admin-panel.png" alt="Admin Panel" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-center">Admin Panel</h3>
                        </div>
                    </div>
                </div>
                
            </FadeContent>
        </section>
    )
}

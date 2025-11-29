import { Link } from "react-router-dom";
import FadeContent from "../FadeContent";
import { useEffect } from "react";

export const Dompt = () => {

    useEffect(() => {
        window.scrollTo(0, 0);  
    }, []);

    return (
        <section id="fitzone" className="min-h-screen justify-center py-20">
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className="max-w-6xl mx-auto px-4 rounded-xl border border-white/10 p-8 bg-black/50 backdrop-blur-sm text-left">
                    <a href="/#projects" className="text-blue-400 hover:text-blue-300 transition-colors mb-4 inline-block">← Back to Projects</a>
                    <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Dompt </h1>
                    <a href="https://github.com/axltavideus/uas_fintech.git" target="_blank" className="px-4 py-2 mb-7 inline-flex items-center gap-2 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            alt="GitHub"
                            className="w-5 h-5 invert items-center"
                        />
                        <span className="items-center">Code</span>
                    </a>

                    <img src="/src/assets/dompt/prototype.png" alt="FitZone Home Page" className="w-full h-auto rounded-lg mb-8" />

                    <div className="mb-8 text-left">
                        <h2 className="text-3xl font-bold mb-4 text-white">Description</h2>
                        <p className="text-gray-400 mb-4">
                            A digital wallet application that allows users to manage their daily financial activities with ease. DOMPT provides essential features such as balance storage, fund transfers, top-ups, payments, and transaction tracking—all in one secure and user-friendly platform. It aims to deliver a smooth cashless experience similar to modern e-wallet services.
                        </p>
                    </div>

                    <hr className="border-white/10 mb-8" />

                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-white">Features</h2>
                        <ul className="text-gray-400 space-y-2">
                            <li>• Balance Overview - Users can check their current balance stored securely in Firebase.</li>
                            <li>• Top-Up Balance - Add wallet balance using available methods.</li>
                            <li>• Send & Receive Funds - Transfer money between users instantly.</li>
                            <li>• Payment Feature - Make payments for services or purchases through the app.</li>
                            <li>• Transaction History - View complete logs of transactions.</li>
                            <li>• Account Settings - Manage personal information and profile details.</li>
                        </ul>
                    </div>

                    <hr className="border-white/10 mb-8" />

                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-white">What I Learned</h2>
                        <ul className="text-gray-400 space-y-2">
                            <li>• Implementing Firebase Authentication for handling user login and registration securely.</li>
                            <li>• Building a complete mobile application interface using Flutter, including navigation, state handling, and responsive layouts.</li>
                            <li>• Designing clean and intuitive UI/UX that simulates real e-wallet interactions.</li>
                            <li>• Structuring Flutter widgets in a modular and maintainable way.</li>
                            <li>• Managing form input, validation, and user flow for financial-style features.</li>
                        </ul>
                    </div>

                    <hr className="border-white/10 mb-8" />

                    <div className="mb-8 text-left">
                        <h2 className="text-3xl font-bold mb-4 text-white">Tech Stack</h2>
                        <div className="flex flex-wrap gap-3">
                            {["Flutter", "Dart", "Firebase"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-2 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mb-4 text-white">Media</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition">
                            <img src="/src/assets/dompt/landing-page.jpg" alt="FitZone Home Page" className="mx-auto max-h-64 w-auto object-contain rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-center">Landing Page</h3>
                        </div>
                        <div className="rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition">
                            <img src="/src/assets/dompt/home-page.jpg" alt="FitZone Home Page" className="mx-auto max-h-64 w-auto object-contain rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-center">Home Page</h3>
                        </div>

                        <div className="rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition">
                            <img src="/src/assets/dompt/register-page.jpg" alt="FitZone Login Page" className="mx-auto max-h-64 w-auto object-contain rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-center">Register Page </h3>
                        </div>

                        <div className="rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition">
                            <img src="/src/assets/dompt/login-page.jpg" alt="FitZone Dashboard" className="mx-auto max-h-64 w-auto object-contain rounded-lg mb-4"  />
                            <h3 className="text-xl font-bold mb-2 text-center">Login Page</h3>
                        </div>
                        <div className="rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition">
                            <img src="/src/assets/dompt/security-code.jpg" alt="FitZone Dashboard" className="mx-auto max-h-64 w-auto object-contain rounded-lg mb-4"  />
                            <h3 className="text-xl font-bold mb-2 text-center">Security Code</h3>
                        </div>
                        <div className="rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition">
                            <img src="/src/assets/dompt/qr-page.jpg" alt="FitZone Dashboard" className="mx-auto max-h-64 w-auto object-contain rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-center">QR Page</h3>
                        </div>
                        <div className="rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition">
                            <img src="/src/assets/dompt/transaction-history.jpg" alt="FitZone Dashboard" className="mx-auto max-h-64 w-auto object-contain rounded-lg mb-4"  />
                            <h3 className="text-xl font-bold mb-2 text-center">Transaction History</h3>
                        </div>
                        <div className="rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition">
                            <img src="/src/assets/dompt/detail-transaction.jpg" alt="FitZone Dashboard" className="mx-auto max-h-64 w-auto object-contain rounded-lg mb-4"  />
                            <h3 className="text-xl font-bold mb-2 text-center">Detail Transaction</h3>
                        </div>
                        <div className="rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition">
                            <img src="/src/assets/dompt/transfer-page.jpg" alt="FitZone Dashboard" className="mx-auto max-h-64 w-auto object-contain rounded-lg mb-4"  />
                            <h3 className="text-xl font-bold mb-2 text-center">Transfer Page</h3>
                        </div>
                        <div className="rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition">
                            <img src="/src/assets/dompt/profile-page.jpg" alt="FitZone Dashboard" className="mx-auto max-h-64 w-auto object-contain rounded-lg mb-4"  />
                            <h3 className="text-xl font-bold mb-2 text-center">Profile Page</h3>
                        </div>
                    </div>
                </div>
                
            </FadeContent>
        </section>
    )
}

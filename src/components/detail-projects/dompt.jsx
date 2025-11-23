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
                    <Link to="/#projects" className="text-blue-400 hover:text-blue-300 transition-colors mb-4 inline-block">← Back to Projects</Link>
                    <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Wenstein Store - Account Report</h1>
                    <a href="https://github.com/RandyParker7/FRONTEND_UAS_LIFESTYLE.git" target="_blank" className="px-4 py-2 mb-7 inline-flex items-center gap-2 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition">
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
                            FitZone is a comprehensive fitness platform designed to help users achieve their health and wellness goals through personalized workout plans, nutrition tracking, and community support. The platform offers a modern, intuitive interface that makes fitness accessible to everyone, from beginners to advanced athletes.
                        </p>
                    </div>

                    <hr className="border-white/10 mb-8" />

                    {/* Features Section */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-white">Features</h2>
                        <ul className="text-gray-400 space-y-2">
                            <li>• Personalized workout plans</li>
                            <li>• Nutrition and calorie tracking</li>
                            <li>• Progress monitoring and analytics</li>
                            <li>• Community challenges and leaderboards</li>
                            <li>• Mobile-responsive design</li>
                            <li>• Secure user authentication</li>
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
                            <img src="/src/assets/wensteinstore/home-page.png" alt="FitZone Home Page" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-center">Home Page</h3>
                        </div>

                        <div className="rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition">
                            <img src="/src/assets/fitzone/login-page.png" alt="FitZone Login Page" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-center">Login Page </h3>
                        </div>

                        <div className="rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition">
                            <img src="/src/assets/fitzone/register-page.png" alt="FitZone Dashboard" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-center">Register Page</h3>
                        </div>
                        <div className="rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition">
                            <img src="/src/assets/fitzone/article-page.png" alt="FitZone Dashboard" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-center">Article Page</h3>
                        </div>
                        <div className="rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition">
                            <img src="/src/assets/fitzone/recipe-page.png" alt="FitZone Dashboard" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-center">Recipe Page</h3>
                        </div>
                        <div className="rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition">
                            <img src="/src/assets/fitzone/workout-page.png" alt="FitZone Dashboard" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-center">Workout Page</h3>
                        </div>
                        <div className="rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition">
                            <img src="/src/assets/fitzone/bmi-calculator.png" alt="FitZone Dashboard" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-center">BMI Calculator</h3>
                        </div>
                        <div className="rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition">
                            <img src="/src/assets/fitzone/playlist-page.png" alt="FitZone Dashboard" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-center">Playlist Page</h3>
                        </div>
                        <div className="rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition">
                            <img src="/src/assets/fitzone/faq-page.png" alt="FitZone Dashboard" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-center">FAQ Page</h3>
                        </div>
                        <div className="rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition">
                            <img src="/src/assets/fitzone/profile-page.png" alt="FitZone Dashboard" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-center">Profile Page</h3>
                        </div>
                        <div className="rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition">
                            <img src="/src/assets/fitzone/admin-page.png" alt="FitZone Dashboard" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-center">Admin Page</h3>
                        </div>
                    </div>
                </div>
                
            </FadeContent>
        </section>
    )
}

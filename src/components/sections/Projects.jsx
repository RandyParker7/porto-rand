import { RevealOnScroll } from "../RevealOnScroll"
import { Link } from "react-router-dom";

export const Projects = () => {

    return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <img src="/src/assets/fitzone/home-page.png" alt="FitZone Home Page Preview" className="w-full h-70 object-cover rounded-t-xl" />
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-left"> FitZone - Fitness Platform </h3>
                    <p className="text-gray-400 mb-4 text-left">
                        A responsive web platform that offers healthy recipes, workout tutorials, health news, and a wellness blog.
                    </p>
                    <div className="text-left flex flex-wrap gap-2 mb-4">
                        {["Bootstrap", "Angular.js", "MongoDB"].map((tech, key) => (
                            <span
                            key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-alt">
                            {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <Link to="/fitzone" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project </Link> {" "}
                    </div>
                </div>
                </div>
                <div className="rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <img src="/src/assets/wensteinstore/home-page.png" alt="FitZone Login Page Preview" className="w-full h-70 object-cover rounded-t-xl" />
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-left"> Wenstein Store - Report </h3>
                    <p className="text-gray-400 mb-4 text-left">
                        Secure login interface for FitZone users to access their personalized fitness accounts and track progress.
                    </p>
                    <div className="text-left flex flex-wrap gap-2 mb-4">
                        {["PHP", "Laravel", "Bootstrap", "MySQL"].map((tech, key) => (
                            <span
                            key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-alt">
                            {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center"> {" "}
                        <Link to="/wensteinstore" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project </Link> {" "}
                    </div>
                </div>
                </div>
                <div className="rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <img src="/src/assets/fitzone/register-page.png" alt="FitZone Register Page Preview" className="w-full h-70 object-cover rounded-t-xl" />
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-left"> Dompt - E - Wallet </h3>
                    <p className="text-gray-400 mb-4 text-left">
                        User registration page for FitZone, allowing new users to create accounts and start their fitness journey.
                    </p>
                    <div className="text-left flex flex-wrap gap-2 mb-4">
                        {["React", "Node.js", "AWS"].map((tech, key) => (
                            <span
                            key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-alt">
                            {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center"> {" "}
                        <Link to="/dompt" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project </Link> {" "}
                    </div>
                </div>
                </div>
                <div className="rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <img src="/src/assets/fitzone/home-page.png" alt="FitZone Dashboard Preview" className="w-full h-70 object-cover rounded-t-xl" />
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-left"> Dompt - E-Wallet </h3>
                    <p className="text-gray-400 mb-4 text-left">
                        Main dashboard for FitZone, providing users with an overview of their fitness activities, progress tracking, and personalized recommendations.
                    </p>
                    <div className="text-left flex flex-wrap gap-2 mb-4">
                        {["React", "Node.js", "AWS"].map((tech, key) => (
                            <span
                            key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-alt">
                            {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center"> {" "}
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project {" "}</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
    );
};

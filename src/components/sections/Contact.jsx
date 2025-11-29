import { RevealOnScroll } from "../RevealOnScroll";
import { Mail, MapPin, Briefcase, Github, Linkedin, Instagram, Twitter } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4">
            <RevealOnScroll>
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Get In Touch
                </h2>
                <div className="w-full max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-4 text-left">Contact Information</h3>
                    <div className="flex space-x-4">
                        <div className="w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1 text-left">Email</p>
                        <a href="mailto:jeremy.yosep@gmail.com" className="text-lg text-gray-200 hover:text-blue-400 transition">
                            randyestevan887@gmail.com
                        </a>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1 text-left">Location</p>
                        <p className="text-lg text-gray-200">Jakarta, Indonesia</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl shrink-0">
                        <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div>
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1 text-left">Status</p>
                        <p className="text-lg text-blue-400 font-medium">Open to Opportunities</p>
                        </div>
                    </div>

                    <div className="flex space-x-4 pt-4">
                        <a href="https://github.com/RandyParker7" className="w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/50 transition group">
                        <Github className="w-6 h-6 text-white group-hover:text-blue-500 transition" />
                        </a>
                        <a href="https://www.linkedin.com/in/fahrrandy-estevvan/" className="w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/50 transition group">
                        <Linkedin className="w-6 h-6 text-white group-hover:text-blue-500 transition" />
                        </a>
                        <a href="https://www.instagram.com/randyestevvan/" className="w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/50 transition group">
                        <Instagram className="w-6 h-6 text-white group-hover:text-blue-500 transition" />
                        </a>
                        <a href="#" className="w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/50 transition group">
                        <Twitter className="w-6 h-6 text-white group-hover:text-blue-500 transition" />
                        </a>
                    </div>

                    </div>

                    <div className="bg-white/5 p-8 rounded-2xl border border-white/5">

                        <form className="space-y-6">
                            <div className="relative">
                            <input
                                type="text"
                                id="nama"
                                name="nama"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Name.."
                            />
                            </div>
                            <div className="relative">
                            <input
                                type="text"
                                id="email"
                                name="email"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="example@gmail.com"
                            />
                            </div>
                            <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Your Message"
                            />
                            </div>
                            <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                            >
                            Send Message
                            </button>
                        </form>
                    </div>

                </div>
                </div>
            </RevealOnScroll>
            
        </section>
        
    );
};
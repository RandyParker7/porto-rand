import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {

    const techStack = ["React", "Tailwind", "AngularJS", "PHP", "Laravel","NodeJs", ];


    return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
    
    <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">About Me</h2>
            <div className="glass rounded-xl p-9 border-white/10 border hover:-translate-y-1 transition-all text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div>
                        <h4 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center">Web & Mobile Developer</h4>
                        <p className="text-gray-300 mb-6 text-center">
                            Hi, I'm an Informatics Engineering student from Tarumanagara University with a strong passion for web and mobile development. I enjoy building clean, responsive, and user-friendly applications using modern and efficient technologies.
                            <br/><br/>
                            Beyond development, I'm also interested in data science, especially machine learning and data-driven problem solving. I like exploring how data can uncover insights, support decisions, and create smarter digital experiences.
                            <br/><br/>
                            Right now, I'm continuously improving my skills across both software development and data science to become a more versatile and impactful developer.
                        </p>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">TechStack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {techStack.map((tech, key) => (
                                        <span
                                        key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="src/assets/randy-portoo.jpg" alt="Profile" className="w-full max-w-xs aspect-square object-cover rounded-full shadow-lg" />
                    </div>
                </div>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all mt-8">
                <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Education </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 text-center">
                    <li><strong> B.S. In Informatics Engineering </strong> - Tarumanagara University (2023 - Present)</li>
                </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-left">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Work Experience</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold"> Admin at Wenstein Store</h4>
                            <p>Admin for Wenstein Store, handling account sales for Mobile Legends</p>
                        </div>
                    </div>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Organizational Experience</h3>
                    <div className="space-y-4 px-10 text-gray-300">
                        <div>
                            <li><h4 className="font-semibold"> General Secretary - Student Representative Council Faculty Of Information Technology (Jul 2025 - Present)</h4></li>
                            <p>Responsible for administrative tasks and coordination within the faculty council</p>
                        </div>
                        <div>
                            <li><h4 className="font-semibold"> Member Of Budgeting Controlling - Student Representative Council Faculty Of Information Technology (Nov 2024 - Jul 2025)</h4></li>
                            <p>Managed budgeting and financial oversight for student activities</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </RevealOnScroll>
    </section>

    )
}
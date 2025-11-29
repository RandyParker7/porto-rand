import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    // Smooth scroll handler for anchor links
    const handleSmoothScroll = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
        if(menuOpen){
            setMenuOpen(false);
        }
    };

    return (
        <nav className="sticky top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white" onClick={handleSmoothScroll}>
                        {" "}
                        Fahrrandy<span className="text-blue-500"> Estevvan</span>{" "}
                    </a>

                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-9">
                        <a
                            href="#home"
                            className="relative text-gray-300 transition-colors duration-300 group"
                            onClick={handleSmoothScroll}
                        >
                            <span className="group-hover:text-blue-400 transition-colors duration-300">
                            Home
                            </span>
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>

                        <a
                            href="#about"
                            className="relative text-gray-300 transition-colors duration-300 group"
                            onClick={handleSmoothScroll}
                        >
                            <span className="group-hover:text-blue-400 transition-colors duration-300">
                            About
                            </span>
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>

                        <a
                            href="#projects"
                            className="relative text-gray-300 transition-colors duration-300 group"
                            onClick={handleSmoothScroll}
                        >
                            <span className="group-hover:text-blue-400 transition-colors duration-300">
                            Projects
                            </span>
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>

                        <a
                            href="#contact"
                            className="relative text-gray-300 transition-colors duration-300 group"
                            onClick={handleSmoothScroll}
                        >
                            <span className="group-hover:text-blue-400 transition-colors duration-300">
                            Contact
                            </span>
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

import { useEffect } from "react";

export const Mobilemenu = ({menuOpen, setMenuOpen, scrollToSection}) => {
    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                         transition-all duration-300 ease-in-out
                         
                         ${menuOpen ? "h-screen opacity-100 pointer-events-auto"
                                      :"h-0 opacity-0 pointer-events-none" 
                                    }
        `}
    >

        <button
        onClick={() => setMenuOpen(false)} 
        className="absolute top-6 right-6 text-white text-3xl focus:outine-none cursor-pointer"
        aria-label="Close Menu"
        >
            &times;
        </button>

        <a 
         href="#home"
         onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
            setMenuOpen(false);
         }}
         className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                    ${
                        menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }
                `}
        >
         Home
        </a>

        <a 
            href="#about"
            onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
                setMenuOpen(false);
            }}
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                    ${
                        menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }
                `}
        >
         About
        </a>

        <a 
         href="#projects"
         onClick={(e) => {
            e.preventDefault();
            scrollToSection('projects');
            setMenuOpen(false);
         }}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
        ${
            menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }
    `}
        >
         Projects
        </a>

        <a 
        href="#contact"
        onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
            setMenuOpen(false);
        }}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
        ${
            menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }
    `}
         >
         Contact
        </a>
    </div>
    );
};
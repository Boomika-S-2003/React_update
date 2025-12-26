import React, { useState, useEffect } from 'react';

const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Features', id: 'features' },

    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
];

const NavDashboard = () => {
    const [activeTab, setActiveTab] = useState('hero');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Track current section
            const sections = navItems.map(item => document.getElementById(item.id));
            const currentSection = sections.find(section => {
                if (!section) return false;
                const rect = section.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
            });

            if (currentSection) {
                setActiveTab(currentSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[90%] max-w-4xl px-4 py-2 ${isScrolled
                ? 'bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-purple-500/10'
                : 'bg-transparent'
                }`}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-white text-xl">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-400 flex items-center justify-center text-sm">
                        ⚛️
                    </div>
                    <span className="hidden sm:block">ReactPro</span>
                </div>

                <div className="flex bg-white/5 p-1 rounded-xl border border-white/5 backdrop-blur-sm">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item.id)}
                            className={`px-4 py-1.5 text-sm font-medium transition-all duration-300 rounded-lg ${activeTab === item.id
                                ? 'bg-white text-black shadow-lg shadow-white/10'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:scale-105 active:scale-95 transition-all hidden md:block border border-purple-400/20">
                    Get Started
                </button>
            </div>
        </nav>
    );
};

export default NavDashboard;

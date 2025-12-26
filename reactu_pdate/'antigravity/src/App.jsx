import React from 'react';
import NavDashboard from './components/NavDashboard';

const App = () => {
    return (
        <div className="bg-[#030303] text-white selection:bg-purple-500/30">
            <NavDashboard />

            {/* Hero Section */}
            <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full -z-10" />
                <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-cyan-600/10 blur-[100px] rounded-full -z-10" />

                <div className="max-w-4xl text-center space-y-6">
                    <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[1.1] animate-in slide-in-from-bottom duration-1000">
                        Build Faster with <br />
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-transparent bg-clip-text">
                            React Intelligence.
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        The ultimate starter kit for high-performance SPAs. Modular, accessible, and beautifully themed by default.
                    </p>
                    <div className="flex items-center justify-center gap-4 pt-4">
                        <button className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-all text-lg shadow-xl shadow-white/5">
                            Launch App
                        </button>
                        <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-lg backdrop-blur-sm">
                            View Documentation
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="min-h-screen py-24 px-4 bg-[#050505]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
                        <div className="space-y-4">
                            <span className="text-purple-500 font-mono text-sm tracking-widest uppercase">Features</span>
                            <h2 className="text-4xl md:text-6xl font-bold">Cutting-edge Stack.</h2>
                        </div>
                        <p className="text-gray-400 max-w-md text-lg">
                            Optimized for developer experience and user performance and efficiency.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Lightning Fast', desc: 'Vite-powered HMR for instant feedback loops.', icon: '⚡' },
                            { title: 'Type Safe', desc: 'Built with TypeScript support from the ground up.', icon: '🛡️' },
                            { title: 'Modern CSS', desc: 'Styled with Tailwind for maximum flexibility.', icon: '🎨' },
                            { title: 'Accessible', desc: 'WCAG 2.1 compliant components out of the box.', icon: '♿' },
                            { title: 'SEO Ready', desc: 'Optimized meta tags and semantic structure.', icon: '🔍' },
                            { title: 'Modular', desc: 'Scale your application with ease using our patterns.', icon: '🧩' },
                        ].map((f, i) => (
                            <div key={i} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-purple-500/30 transition-all duration-500 hover:bg-white/[0.04]">
                                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all transform group-hover:scale-110 duration-500">
                                    {f.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
                                <p className="text-gray-400 leading-relaxed font-light">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* About Section */}
            <section id="about" className="min-h-screen py-24 px-4 flex items-center">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">Driven by Performance & Efficiency.</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            We believe that the web should be fast, accessible, and beautiful. ReactPro is built to bridge the gap between high-end design and solid engineering.
                        </p>
                        <ul className="space-y-3">
                            {['Open Source', 'Community Driven', 'Enterprise Ready'].map(item => (
                                <li key={item} className="flex items-center gap-3 text-gray-200">
                                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-64 bg-white/5 rounded-3xl border border-white/10 flex items-end p-6">
                            <span className="text-4xl font-black text-white/20">01</span>
                        </div>
                        <div className="h-80 bg-gradient-to-b from-purple-600/20 to-transparent rounded-3xl border border-white/10 flex items-end p-6 -mt-8">
                            <span className="text-4xl font-black text-white/20">02</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="min-h-screen py-24 px-4 bg-gradient-to-b from-transparent to-[#050505] flex items-center">
                <div className="max-w-3xl mx-auto w-full text-center space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Let's Connect.</h2>
                        <p className="text-gray-400 text-lg">Ready to transform your development workflow?</p>
                    </div>

                    <div className="bg-white/[0.03] border border-white/10 p-8 rounded-[32px] backdrop-blur-lg">
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="enter your email"
                                className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-purple-500/50 transition-all font-light"
                            />
                            <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl font-bold text-lg hover:brightness-110 active:scale-[0.98] transition-all">
                                Get Early Access
                            </button>
                        </form>
                    </div>

                    <div className="pt-12 text-gray-600 text-sm">
                        © 2025 ReactPro SPA Development. Built with Passion.
                    </div>
                </div>
            </section>
        </div>
    );
};

export default App;

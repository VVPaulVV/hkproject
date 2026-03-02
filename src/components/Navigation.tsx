import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { projectData } from '../data';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'glass py-4' : 'bg-transparent py-10'}`}>
                <div className="container-custom flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-5 group">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-antique-bg font-header font-black text-2xl shadow-xl border border-white/20 group-hover:rotate-[360deg] transition-transform duration-1000">F</div>
                        <div className="flex flex-col">
                            <span className={`font-header font-black tracking-[0.4em] text-base uppercase leading-none transition-colors duration-500 ${scrolled ? 'text-primary' : 'text-primary'}`}>FORTUNA</span>
                            <span className={`font-header font-medium tracking-[0.15em] text-[9px] uppercase mt-1.5 transition-colors duration-500 ${scrolled ? 'text-antique-text/40' : 'text-primary'}`}>St-Jean-Cap-Ferrat</span>
                        </div>
                    </Link>

                    <div className="hidden lg:flex gap-12 items-center">
                        {projectData.map((section) => (
                            <Link
                                key={section.id}
                                to={`/${section.id}`}
                                className={`roman-link ${location.pathname === `/${section.id}` ? 'active' : ''} ${!scrolled && location.pathname === '/' ? 'text-primary' : ''}`}
                            >
                                {section.title}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href="/Dossier_Fortuna.pdf"
                            download
                            className={`hidden sm:block px-8 py-2.5 border-2 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 ${scrolled ? 'border-primary text-primary hover:bg-primary hover:text-white' : 'border-primary text-primary hover:bg-primary hover:text-white'}`}
                        >
                            Le Dossier
                        </a>
                        <button
                            className={`lg:hidden p-2 rounded-xl transition-colors ${scrolled ? 'text-primary hover:bg-primary/5' : 'text-primary hover:bg-white/10'}`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-antique-bg p-12 flex flex-col justify-center items-center overflow-hidden"
                    >
                        <div className="absolute inset-0 marble-texture opacity-50" />
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />

                        <button className="absolute top-12 right-12 text-primary p-4 hover:rotate-90 transition-transform" onClick={() => setIsMenuOpen(false)}>
                            <X size={40} />
                        </button>

                        <div className="flex flex-col gap-10 items-center relative z-10">
                            <Link to="/" className="text-5xl font-header font-black text-primary hover:text-secondary transition-all hover:tracking-widest">ACCUEIL</Link>
                            {projectData.map((section, idx) => (
                                <motion.div
                                    key={section.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * idx }}
                                >
                                    <Link
                                        to={`/${section.id}`}
                                        className="text-4xl font-header font-black text-antique-text/30 hover:text-primary transition-all duration-500 uppercase tracking-tighter hover:tracking-normal"
                                    >
                                        {section.title}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
                            <span className="text-[10px] font-bold tracking-[0.5em] text-primary/30 uppercase mb-4">Fortuna Experience</span>
                            <div className="h-20 w-[2px] bg-linear-to-b from-primary to-transparent" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;

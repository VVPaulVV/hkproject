import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Instagram, Linkedin } from 'lucide-react';
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
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    useEffect(() => {
        setIsMenuOpen(false);
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const menuVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, y: 20 },
        open: { opacity: 1, y: 0 }
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'glass py-4' : 'bg-transparent py-10'}`}>
                <div className="container-custom flex justify-between items-center text-primary">
                    <Link to="/" className="flex items-center gap-5 group">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-antique-bg font-header font-black text-2xl shadow-xl border border-white/20 group-hover:rotate-[360deg] transition-transform duration-1000">F</div>
                        <div className="flex flex-col">
                            <span className="font-header font-black tracking-[0.4em] text-base uppercase leading-none">FORTUNA</span>
                            <span className={`font-header font-medium tracking-[0.15em] text-[9px] uppercase mt-1.5 transition-colors duration-500 ${scrolled ? 'text-antique-text/40' : 'text-primary'}`}>St-Jean-Cap-Ferrat</span>
                        </div>
                    </Link>

                    <div className="hidden lg:flex gap-12 items-center">
                        {projectData.map((section) => (
                            <Link
                                key={section.id}
                                to={`/${section.id}`}
                                className={`roman-link ${location.pathname === `/${section.id}` ? 'active' : ''}`}
                            >
                                {section.title}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href="/Dossier_Fortuna.pdf"
                            download
                            className="hidden sm:inline-flex items-center gap-3 px-8 py-2.5 border-2 border-primary rounded-full text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 hover:bg-primary hover:text-white group"
                        >
                            Le Dossier
                            <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
                        </a>
                        <button
                            className="p-2 rounded-xl text-primary hover:bg-primary/5 transition-colors lg:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 z-[60] bg-antique-bg overflow-hidden flex flex-col"
                    >
                        <div className="absolute inset-0 marble-texture opacity-30 pointer-events-none" />

                        {/* Custom Header in Menu */}
                        <div className="container-custom py-10 flex justify-between items-center relative z-10">
                            <div className="flex items-center gap-5">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-antique-bg font-header font-black text-2xl">F</div>
                                <span className="font-header font-black tracking-[0.4em] text-base uppercase text-primary">FORTUNA</span>
                            </div>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 text-primary hover:bg-primary/5 rounded-xl transition-colors"
                            >
                                <X size={32} />
                            </button>
                        </div>

                        <div className="flex-1 flex flex-col justify-center container-custom relative z-10 pt-20 pb-32">
                            <div className="grid gap-8">
                                <motion.div variants={itemVariants}>
                                    <Link to="/" className="group flex items-center gap-6">
                                        <span className="text-xs font-black text-primary/20 group-hover:text-primary transition-colors tracking-widest">00</span>
                                        <span className="text-4xl md:text-6xl font-header font-black text-antique-text hover:text-primary transition-all uppercase tracking-tighter">ACCUEIL</span>
                                    </Link>
                                </motion.div>

                                {projectData.map((section, idx) => (
                                    <motion.div key={section.id} variants={itemVariants}>
                                        <Link
                                            to={`/${section.id}`}
                                            className="group flex items-center gap-6"
                                        >
                                            <span className="text-xs font-black text-primary/20 group-hover:text-primary transition-colors tracking-widest">0{idx + 1}</span>
                                            <span className="text-4xl md:text-6xl font-header font-black text-antique-text hover:text-primary transition-all uppercase tracking-tighter">
                                                {section.title}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                variants={itemVariants}
                                className="mt-20 flex flex-col md:flex-row gap-12 md:items-center border-t border-primary/10 pt-12"
                            >
                                <a
                                    href="/Dossier_Fortuna.pdf"
                                    download
                                    className="flex items-center justify-center gap-4 bg-primary text-white px-10 py-5 rounded-full font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-antique-text transition-colors shadow-xl"
                                >
                                    Télécharger le Dossier <Download size={16} />
                                </a>

                                <div className="flex gap-8">
                                    <a href="#" className="p-4 bg-white rounded-2xl text-primary shadow-sm hover:shadow-md transition-all"><Instagram size={20} /></a>
                                    <a href="#" className="p-4 bg-white rounded-2xl text-primary shadow-sm hover:shadow-md transition-all"><Linkedin size={20} /></a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decor */}
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;

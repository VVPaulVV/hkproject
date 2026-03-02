import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <header className="relative h-screen flex items-end pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-antique-bg z-10" />
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        src="/assets/slide_hero.jpg"
                        alt="Fortuna Roman Villa"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="container-custom relative z-20">
                    <div className="max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="flex items-center gap-6 mb-8"
                        >
                            <div className="h-[2px] w-16 bg-primary" />
                            <span className="text-xs font-bold tracking-[0.5em] uppercase text-primary drop-shadow-sm">L'Hospitalité Impériale</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="text-primary mb-12 hero-title"
                        >
                            FOR<br />TUNA.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="text-2xl md:text-3xl text-antique-text font-serif italic mb-16 max-w-2xl leading-relaxed drop-shadow-sm"
                        >
                            Un hôtel d'exception sur la presqu'île de Saint-Jean-Cap-Ferrat.
                            La démesure de Rome, le calme de la Riviera.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.5 }}
                        >
                            <Link
                                to="/concept"
                                className="inline-flex items-center gap-6 px-12 py-6 bg-primary text-white font-black text-xs tracking-[0.4em] uppercase transition-all hover:bg-antique-text hover:shadow-[0_20px_50px_rgba(174,68,56,0.3)] group"
                            >
                                Commencer l'immersion
                                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 text-primary z-20"
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-primary/40">Scroll</span>
                        <ChevronDown size={24} strokeWidth={3} />
                    </div>
                </motion.div>
            </header>

            {/* Intro Section */}
            <section className="section-padding bg-white relative">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-24 lg:gap-40 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <span className="absolute -top-20 -left-10 text-[15rem] font-header font-black text-primary/5 select-none -z-10">01</span>
                            <h2 className="mb-12 text-antique-text leading-none">L'ÉVEIL DE <br /><span className="text-primary">L'EMPIRE.</span></h2>
                            <div className="space-y-8 text-xl text-antique-text/70 font-serif leading-relaxed">
                                <p>Situé dans un microcosme méditerranéen sur la presqu'île de Saint-Jean Cap Ferrat, Fortuna est un hôtel ***** de 34 chambres.</p>
                                <div className="relative py-8 px-10 bg-antique-bg/50 rounded-3xl border-l-[6px] border-primary">
                                    <p className="italic text-antique-text/90 m-0">"Notre établissement est représentatif du cadre de vie dans la Rome antique, du mode de vie de la société romaine. C'est un microcosme d'une ville romaine."</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-8 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]"
                            >
                                <img src="/assets/slide_map.jpg" alt="Map" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                whileInView={{ opacity: 1, scale: 1, y: 50 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] mt-12"
                            >
                                <img src="/assets/slide_mural.jpg" alt="Mural" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                            </motion.div>
                            <div className="absolute inset-0 -z-10 bg-primary/10 rounded-full blur-[100px] opacity-30" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Access Grid */}
            <section className="section-padding marble-texture">
                <div className="container-custom text-center mb-32">
                    <h2 className="text-antique-text mb-4">EXPLORER L'UNIVERS</h2>
                    <div className="h-1 w-24 bg-primary mx-auto" />
                </div>
                <div className="container-custom grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {[
                        { id: 'concept', title: 'Le Microcosme', img: '/assets/slide_plan.jpg', part: 'I' },
                        { id: 'hebergement', title: 'Hébergement', img: '/assets/room_suite.jpg', part: 'II' },
                        { id: 'restauration', title: 'La Tavola', img: '/assets/la_tavola_mosaic.jpg', part: 'III' },
                        { id: 'detente', title: 'Thermes & Théâtre', img: '/assets/thermes_view.jpg', part: 'IV' },
                        { id: 'organigramme', title: 'Organigramme', img: '/assets/slide_hero.jpg', part: 'V' },
                    ].map((item, idx) => (
                        <Link
                            key={item.id}
                            to={`/${item.id}`}
                            className="group relative aspect-[3/4] overflow-hidden rounded-[3rem] block shadow-2xl transition-all hover:-translate-y-4"
                        >
                            <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-linear-to-t from-antique-text via-black/20 to-transparent p-10 flex flex-col justify-end">
                                <span className="text-[10px] font-bold text-secondary tracking-[0.5em] uppercase mb-3">Partie {item.part}</span>
                                <h3 className="text-white text-3xl mb-0 group-hover:text-primary transition-colors leading-tight">{item.title}</h3>
                                <div className="h-0 group-hover:h-12 overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100 flex items-center gap-3">
                                    <span className="text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase">Découvrir</span>
                                    <ArrowRight size={14} className="text-primary" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;

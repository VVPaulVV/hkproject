import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projectData, menuData, barMenuData } from '../data';

const Restauration = () => {
    const data = projectData.find(s => s.id === 'restauration')!;

    return (
        <div className="min-h-screen">
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <img src={data.image} alt={data.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-40" />
                <div className="absolute inset-0 bg-linear-to-b from-antique-bg/0 via-antique-bg/80 to-antique-bg z-10" />
                <div className="container-custom relative z-20 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="text-secondary font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs mb-4 block">Partie II</span>
                        <h1 className="text-primary text-4xl md:text-7xl lg:text-8xl">{data.title}</h1>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding pt-0 px-4 md:px-0">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24 px-4">
                        <p className="text-lg md:text-2xl font-serif italic text-antique-text/80 leading-relaxed whitespace-pre-wrap">
                            {data.description}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-24 md:mb-32">
                        {data.subsections.map((sub) => (
                            <motion.div
                                key={sub.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] bg-white shadow-xl shadow-primary/5"
                            >
                                <h3 className="text-primary text-xl md:text-2xl uppercase tracking-widest mb-8 md:mb-10 flex justify-between items-center">
                                    {sub.title}
                                    <div className="h-[1px] w-8 md:w-12 bg-primary/20" />
                                </h3>
                                <div className="space-y-6 md:space-y-8">
                                    {sub.items.map((item, iIdx) => (
                                        <div key={iIdx} className="flex gap-4 md:gap-6 items-start">
                                            {item.icon && <div className="p-3 bg-primary/5 text-primary rounded-xl shrink-0"><item.icon size={20} /></div>}
                                            <div>
                                                <p className="font-header font-black uppercase text-xs md:text-sm tracking-widest text-antique-text">{item.label}</p>
                                                <p className="text-sm md:text-base text-antique-text/60 mt-2 font-serif">{item.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Meal Menu Section */}
                    <div className="bg-antique-text text-white rounded-[3rem] md:rounded-[5rem] overflow-hidden relative p-8 md:p-20 shadow-[0_50px_100px_rgba(0,0,0,0.2)] mb-24">
                        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                            <img src="/assets/la_tavola_mosaic.jpg" alt="" className="w-full h-full object-cover" />
                        </div>

                        <div className="relative z-10 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-6 mb-8 md:mb-12">
                                <div className="h-[1px] w-8 md:w-12 bg-secondary" />
                                <span className="text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-secondary">La Carte du Chef</span>
                            </div>
                            <h2 className="mb-12 md:mb-16 text-white text-3xl md:text-6xl uppercase font-black italic">MANIFESTO <br />GASTRONOMICO.</h2>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
                                {[
                                    { title: 'ENTRÉES', key: 'entrees', num: 'I' },
                                    { title: 'PLATS', key: 'plats', num: 'II' },
                                    { title: 'DESSERTS', key: 'desserts', num: 'III' }
                                ].map((cat) => (
                                    <div key={cat.key}>
                                        <h4 className="flex items-center justify-center md:justify-start gap-4 text-primary mb-4 md:mb-6 text-xl font-black italic uppercase">
                                            {cat.title} <span className="text-white/5 text-4xl md:text-5xl font-black">{cat.num}</span>
                                        </h4>
                                        <div className="space-y-5 md:space-y-6">
                                            {(menuData as any)[cat.key].map((item: any, iIdx: number) => (
                                                <div key={iIdx} className="group cursor-pointer flex justify-between items-start gap-4 text-left">
                                                    <div className="flex-1">
                                                        <p className="font-header font-bold text-base md:text-lg text-white group-hover:text-secondary transition-colors uppercase tracking-tight leading-tight">{item.name}</p>
                                                        <p className="text-white/30 text-[10px] md:text-xs font-serif italic mt-2">{item.desc}</p>
                                                    </div>
                                                    <div className="flex items-center gap-2 shrink-0">
                                                        <div className="h-[1px] w-2 md:w-4 bg-secondary/20 hidden group-hover:block" />
                                                        <span className="font-header font-bold text-secondary text-base md:text-lg">{item.price}€</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bar Menu Section */}
                    <div className="bg-white text-antique-text rounded-[3rem] md:rounded-[5rem] overflow-hidden relative p-8 md:p-20 shadow-2xl border border-primary/5">
                        <div className="absolute inset-0 marble-texture opacity-50 pointer-events-none" />

                        <div className="relative z-10 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-6 mb-8 md:mb-12">
                                <div className="h-[1px] w-8 md:w-12 bg-primary" />
                                <span className="text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-primary">Le Nectar de l'Empire</span>
                            </div>
                            <h2 className="mb-12 md:mb-16 text-antique-text text-3xl md:text-6xl uppercase font-black italic leading-none">CARTE DU BAR.</h2>

                            <div className="grid lg:grid-cols-12 gap-12 md:gap-16">
                                {/* 1. Cocktails - Main Column */}
                                <div className="lg:col-span-12">
                                    <h3 className="text-primary text-xl md:text-2xl font-black italic uppercase mb-8 tracking-widest flex items-center gap-4">
                                        1. BOISSONS & COCKTAILS SIGNATURES
                                        <div className="h-[1px] flex-1 bg-primary/10" />
                                    </h3>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                                        {barMenuData.cocktails.map((item, idx) => (
                                            <div key={idx} className="group flex flex-col gap-3">
                                                <div className="flex justify-between items-center">
                                                    <p className="font-header font-black text-lg text-antique-text group-hover:text-primary transition-colors tracking-tight uppercase leading-none">{item.name}</p>
                                                    <span className="text-primary font-bold text-lg">{item.price}€</span>
                                                </div>
                                                <p className="text-primary font-bold text-[10px] uppercase tracking-widest leading-none">{item.desc}</p>
                                                <p className="text-antique-text/50 text-[11px] font-serif italic leading-relaxed">{item.ingredients}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 2. Wines Column */}
                                <div className="lg:col-span-12">
                                    <h3 className="text-primary text-xl md:text-2xl font-black italic uppercase mb-8 tracking-widest flex items-center gap-4">
                                        2. VINS & EFFERVESCENTS
                                        <div className="h-[1px] flex-1 bg-primary/10" />
                                    </h3>
                                    <div className="grid md:grid-cols-3 gap-12 md:gap-16">
                                        {['Vins Blancs', 'Vins Rouges', 'Bulles'].map((type) => (
                                            <div key={type} className="space-y-6">
                                                <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-antique-text/40 mb-6">{type}</h4>
                                                {barMenuData.vins.filter(v => v.desc === type).map((item, idx) => (
                                                    <div key={idx} className="flex justify-between items-end border-b border-primary/5 pb-4 group">
                                                        <div className="flex-1">
                                                            <p className="font-header font-bold text-base text-antique-text group-hover:text-primary transition-colors uppercase tracking-tight leading-none">{item.name}</p>
                                                        </div>
                                                        <span className="text-antique-text font-bold text-base ml-4 shrink-0">{item.price}€</span>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 3.1. Sans Alcool */}
                                <div className="lg:col-span-6">
                                    <h3 className="text-primary text-xl md:text-2xl font-black italic uppercase mb-8 tracking-widest flex items-center gap-4">
                                        3.1. APÉRITIFS SANS ALCOOL
                                        <div className="h-[1px] flex-1 bg-primary/10" />
                                    </h3>
                                    <div className="space-y-6">
                                        {(barMenuData as any).sansAlcool.map((item: any, idx: number) => (
                                            <div key={idx} className="flex justify-between items-start border-b border-primary/5 pb-4 group gap-4">
                                                <div className="flex-1">
                                                    <p className="font-header font-bold text-base text-antique-text group-hover:text-primary transition-colors uppercase tracking-tight leading-tight">{item.name}</p>
                                                    <p className="text-primary/60 text-[10px] uppercase font-bold tracking-widest mt-2 leading-relaxed">{item.desc}</p>
                                                </div>
                                                <span className="text-antique-text font-bold text-base shrink-0">{item.price}€</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 3.2. Gustatio */}
                                <div className="lg:col-span-6">
                                    <h3 className="text-primary text-xl md:text-2xl font-black italic uppercase mb-8 tracking-widest flex items-center gap-4">
                                        3.2. ENTRÉES & À PARTAGER (GUSTATIO)
                                        <div className="h-[1px] flex-1 bg-primary/10" />
                                    </h3>
                                    <div className="space-y-6">
                                        {barMenuData.aperitifs.map((item, idx) => (
                                            <div key={idx} className="flex justify-between items-start border-b border-primary/5 pb-4 group gap-4">
                                                <div className="flex-1">
                                                    <p className="font-header font-bold text-base text-antique-text group-hover:text-primary transition-colors uppercase tracking-tight leading-tight">{item.name}</p>
                                                    <p className="text-primary/60 text-[10px] uppercase font-bold tracking-widest mt-2 leading-relaxed">{item.desc}</p>
                                                </div>
                                                <span className="text-antique-text font-bold text-base shrink-0">{item.price}€</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-24 pt-12 border-t border-primary/10 text-center md:text-left">
                                <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-antique-text/30">
                                    Dégustation interdite aux mineurs • À consommer avec modération
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-32 px-4 md:px-0 bg-white">
                <div className="container-custom">
                    <Link to="/detente" className="group flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <span className="text-secondary font-bold tracking-[0.5em] uppercase text-[10px] mb-6">Éveil des Sens</span>
                            <h2 className="text-primary text-3xl md:text-7xl lg:text-8xl mb-0 group-hover:scale-105 transition-transform duration-700 flex items-center gap-6">
                                THERMES & THÉÂTRE <ArrowRight className="w-8 h-8 md:w-16 md:h-16 group-hover:translate-x-4 transition-transform duration-700" />
                            </h2>
                        </motion.div>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Restauration;

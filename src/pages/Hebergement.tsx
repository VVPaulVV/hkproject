import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bed, Star, Shield, ArrowRight } from 'lucide-react';
import { projectData } from '../data';

const Hebergement = () => {
    const data = projectData.find(s => s.id === 'hebergement')!;

    const rooms = [
        { img: '/assets/room_confort.jpg', title: 'Cubiculum Confort', area: '20m²', price: '450€', icon: Bed },
        { img: '/assets/room_deluxe.jpg', title: 'Chambre Deluxe', area: '40m²', price: '800€', icon: Star },
        { img: '/assets/room_suite.jpg', title: 'Suite Imperatoria', area: '60m²', price: '1100€', icon: Shield }
    ];

    return (
        <div className="min-h-screen">
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <img src={data.image} alt={data.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-40" />
                <div className="absolute inset-0 bg-linear-to-b from-antique-bg/0 via-antique-bg/80 to-antique-bg z-10" />
                <div className="container-custom relative z-20 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="text-secondary font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs mb-4 block">Partie I</span>
                        <h1 className="text-primary text-4xl md:text-7xl lg:text-8xl">{data.title}</h1>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding pt-0">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24 px-4">
                        <p className="text-lg md:text-2xl font-serif italic text-antique-text/80 leading-relaxed italic">
                            {data.description}
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-32">
                        {rooms.map((room, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl"
                            >
                                <img src={room.img} alt={room.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8 md:p-10">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
                                        <div>
                                            <room.icon size={20} className="text-secondary mb-3 md:mb-4" />
                                            <h3 className="text-white text-xl md:text-2xl mb-1 md:mb-2">{room.title}</h3>
                                            <p className="text-secondary font-bold tracking-widest text-[10px] md:text-xs uppercase">{room.area}</p>
                                        </div>
                                        <div className="text-left sm:text-right">
                                            <span className="block text-white/50 text-[8px] md:text-[10px] uppercase tracking-widest mb-1 font-bold">À partir de</span>
                                            <span className="text-white font-black text-lg md:text-xl">{room.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Subsections Detail */}
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                        {data.subsections.map((sub, idx) => (
                            <motion.div
                                key={sub.id}
                                initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-5 md:p-10 rounded-[3rem] md:rounded-[4rem] bg-white border border-primary/5 shadow-xl text-center max-w-xl mx-auto w-full"
                            >
                                <h3 className="text-primary text-xl md:text-2xl uppercase tracking-widest mb-10 md:mb-12 flex flex-col items-center gap-4">
                                    {sub.title}
                                    <div className="h-[1px] w-12 md:w-20 bg-primary/20" />
                                </h3>
                                <div className="space-y-8 md:space-y-10">
                                    {sub.items.map((item, iIdx) => (
                                        <div key={iIdx} className="flex flex-col items-center gap-4 text-center">
                                            {item.icon && <div className="p-4 bg-primary/5 text-primary rounded-2xl w-fit"><item.icon size={20} md={24} /></div>}
                                            <div className="w-full">
                                                <div className="flex flex-col items-center mb-2 gap-3">
                                                    <h4 className="text-base md:text-lg uppercase tracking-widest mb-0 font-black">{item.label}</h4>
                                                    {item.price && <span className="bg-primary text-white text-[8px] md:text-[10px] font-black px-3 py-1 rounded-full whitespace-nowrap">{item.price}</span>}
                                                </div>
                                                <p className="text-sm md:text-base text-antique-text/60 font-serif leading-relaxed">{item.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pb-32 px-4 md:px-0">
                <div className="container-custom">
                    <Link to="/restauration" className="group flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <span className="text-secondary font-bold tracking-[0.5em] uppercase text-[10px] mb-6">Étape Suivante</span>
                            <h2 className="text-primary text-3xl md:text-7xl lg:text-8xl mb-0 group-hover:scale-105 transition-transform duration-700 flex items-center gap-6">
                                LA TAVOLA <ArrowRight className="w-8 h-8 md:w-16 md:h-16 group-hover:translate-x-4 transition-transform duration-700" />
                            </h2>
                        </motion.div>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Hebergement;

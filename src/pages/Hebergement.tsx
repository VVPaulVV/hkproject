import { motion } from 'framer-motion';
import { projectData } from '../data';
import { Bed, Star, Shield } from 'lucide-react';

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
                        <span className="text-secondary font-bold tracking-[0.5em] uppercase text-xs mb-4 block">Partie II</span>
                        <h1 className="text-primary">{data.title}</h1>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding pt-0">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center mb-24">
                        <p className="text-2xl font-serif italic text-antique-text/80 leading-relaxed italic">
                            {data.description}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-32">
                        {rooms.map((room, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
                            >
                                <img src={room.img} alt={room.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-10">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <room.icon size={24} className="text-secondary mb-4" />
                                            <h3 className="text-white text-2xl mb-2">{room.title}</h3>
                                            <p className="text-secondary font-bold tracking-widest text-xs uppercase">{room.area}</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="block text-white/50 text-[10px] uppercase tracking-widest mb-1 font-bold">À partir de</span>
                                            <span className="text-white font-black text-xl">{room.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Subsections Detail */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        {data.subsections.map((sub, idx) => (
                            <motion.div
                                key={sub.id}
                                initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-12 md:p-16 rounded-[4rem] bg-white border border-primary/5 shadow-xl"
                            >
                                <h3 className="text-primary text-2xl uppercase tracking-widest mb-12 flex items-center justify-between">
                                    {sub.title}
                                    <div className="h-[1px] w-12 bg-primary/20" />
                                </h3>
                                <div className="space-y-10">
                                    {sub.items.map((item, iIdx) => (
                                        <div key={iIdx} className="flex gap-6">
                                            {item.icon && <div className="p-4 bg-primary/5 text-primary rounded-2xl"><item.icon size={24} /></div>}
                                            <div>
                                                <div className="flex justify-between items-center mb-2">
                                                    <h4 className="text-lg uppercase tracking-widest mb-0">{item.label}</h4>
                                                    {item.price && <span className="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full">{item.price}</span>}
                                                </div>
                                                <p className="text-antique-text/60 font-serif leading-relaxed">{item.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hebergement;

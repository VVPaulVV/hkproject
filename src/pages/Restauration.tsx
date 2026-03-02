import { motion } from 'framer-motion';
import { projectData, menuData } from '../data';

const Restauration = () => {
    const data = projectData.find(s => s.id === 'restauration')!;

    return (
        <div className="min-h-screen">
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <img src={data.image} alt={data.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-40" />
                <div className="absolute inset-0 bg-linear-to-b from-antique-bg/0 via-antique-bg/80 to-antique-bg z-10" />
                <div className="container-custom relative z-20 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="text-secondary font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs mb-4 block">Partie III</span>
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
                                className="p-8 md:p-16 rounded-[3rem] md:rounded-[4rem] bg-white shadow-xl shadow-primary/5"
                            >
                                <h3 className="text-primary text-xl md:text-2xl uppercase tracking-widest mb-10 md:mb-12 flex justify-between items-center">
                                    {sub.title}
                                    <div className="h-[1px] w-8 md:w-12 bg-primary/20" />
                                </h3>
                                <div className="space-y-8 md:space-y-10">
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

                    {/* Menu Section */}
                    <div className="bg-antique-text text-white rounded-[3rem] md:rounded-[5rem] overflow-hidden relative p-8 md:p-24 shadow-[0_50px_100px_rgba(0,0,0,0.2)]">
                        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                            <img src="/assets/la_tavola_mosaic.jpg" alt="" className="w-full h-full object-cover" />
                        </div>

                        <div className="relative z-10 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-6 mb-8 md:mb-12">
                                <div className="h-[1px] w-8 md:w-12 bg-secondary" />
                                <span className="text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-secondary">La Carte du Chef</span>
                            </div>
                            <h2 className="mb-16 md:mb-24 text-white text-3xl md:text-6xl">MANIFESTO <br />GASTRONOMICO.</h2>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24">
                                {[
                                    { title: 'ENTRÉES', key: 'entrees', num: 'I' },
                                    { title: 'PLATS', key: 'plats', num: 'II' },
                                    { title: 'DESSERTS', key: 'desserts', num: 'III' }
                                ].map((cat) => (
                                    <div key={cat.key}>
                                        <h4 className="flex items-center justify-center md:justify-start gap-4 text-primary mb-8 md:mb-12 text-xl">
                                            {cat.title} <span className="text-white/5 text-4xl md:text-5xl font-black">{cat.num}</span>
                                        </h4>
                                        <div className="space-y-8 md:space-y-10">
                                            {(menuData as any)[cat.key].map((item: any, iIdx: number) => (
                                                <div key={iIdx} className="group cursor-pointer flex justify-between items-start gap-4 text-left">
                                                    <div className="flex-1">
                                                        <p className="font-header font-bold text-base md:text-lg text-white group-hover:text-secondary transition-colors uppercase tracking-tight leading-tight">{item.name}</p>
                                                        <p className="text-white/30 text-[10px] md:text-xs font-serif italic mt-2">{item.desc}</p>
                                                    </div>
                                                    <div className="flex items-center gap-2 shrink-0">
                                                        <div className="h-[1px] w-2 md:w-4 bg-secondary/20 hidden group-hover:block" />
                                                        <span className="font-header font-bold text-secondary text-base md:text-lg">{item.price}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Restauration;

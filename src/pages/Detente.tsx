import { motion } from 'framer-motion';
import { projectData } from '../data';

const Detente = () => {
    const data = projectData.find(s => s.id === 'detente')!;

    return (
        <div className="min-h-screen">
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <img src={data.image} alt={data.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-40" />
                <div className="absolute inset-0 bg-linear-to-b from-antique-bg/0 via-antique-bg/80 to-antique-bg z-10" />
                <div className="container-custom relative z-20 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="text-secondary font-bold tracking-[0.5em] uppercase text-xs mb-4 block">Partie IV</span>
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

                    <div className="grid lg:grid-cols-2 gap-12">
                        {data.subsections.map((sub, idx) => (
                            <motion.div
                                key={sub.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`p-12 md:p-16 rounded-[4rem] flex flex-col ${idx % 2 === 0 ? 'bg-primary text-white' : 'bg-white text-antique-text shadow-xl'}`}
                            >
                                <h2 className={`text-4xl mb-12 flex justify-between items-center ${idx % 2 === 0 ? 'text-white' : 'text-primary'}`}>
                                    {sub.title}
                                    <div className={`h-[1px] w-20 ${idx % 2 === 0 ? 'bg-white/20' : 'bg-primary/10'}`} />
                                </h2>

                                <div className="grid gap-12 flex-grow">
                                    {sub.items.map((item, iIdx) => (
                                        <div key={iIdx} className="group">
                                            <div className="flex items-center gap-6 mb-4">
                                                {item.icon && (
                                                    <div className={`p-4 rounded-2xl ${idx % 2 === 0 ? 'bg-white/10' : 'bg-primary/5 text-primary'} group-hover:scale-110 transition-transform`}>
                                                        <item.icon size={28} />
                                                    </div>
                                                )}
                                                <h3 className="text-2xl mb-0">{item.label}</h3>
                                            </div>
                                            <p className={`text-lg font-serif opacity-70 leading-relaxed pl-2`}>
                                                {item.content}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Decorative Section */}
                    <div className="mt-32 rounded-[4rem] overflow-hidden aspect-video relative group shadow-2xl">
                        <img src="/assets/thermes_view.jpg" alt="Thermes" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent p-12 flex flex-col justify-end">
                            <h3 className="text-white text-4xl mb-4">L'Art de Vivre</h3>
                            <p className="text-white/60 text-xl font-serif max-w-2xl">
                                Un équilibre parfait entre le soin du corps et l'élévation de l'esprit, hérité des traditions les plus nobles de l'Antiquité.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Detente;

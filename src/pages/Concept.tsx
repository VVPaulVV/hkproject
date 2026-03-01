import { motion } from 'framer-motion';
import { projectData } from '../data';

const Concept = () => {
    const data = projectData.find(s => s.id === 'concept')!;

    return (
        <div className="min-h-screen">
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <img src={data.image} alt={data.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-40" />
                <div className="absolute inset-0 bg-linear-to-b from-antique-bg/0 via-antique-bg/80 to-antique-bg z-10" />
                <div className="container-custom relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-secondary font-bold tracking-[0.5em] uppercase text-xs mb-4 block">Partie I</span>
                        <h1 className="text-primary">{data.title}</h1>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding pt-0">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center mb-24">
                        <p className="text-2xl font-serif italic text-antique-text/80 leading-relaxed">
                            {data.description}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {data.subsections.map((sub, idx) => (
                            <motion.div
                                key={sub.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`p-12 md:p-16 rounded-[4rem] shadow-2xl ${idx === 0 ? 'bg-primary text-white' : 'bg-white text-antique-text'}`}
                            >
                                <div className="flex items-center gap-6 mb-12">
                                    <h2 className="text-3xl md:text-4xl mb-0">{sub.title}</h2>
                                    <div className={`h-[1px] flex-1 ${idx === 0 ? 'bg-white/20' : 'bg-primary/10'}`} />
                                </div>

                                <div className="space-y-12">
                                    {sub.items.map((item, iIdx) => (
                                        <div key={iIdx} className="flex gap-8 group">
                                            {item.icon && (
                                                <div className={`shrink-0 p-4 h-16 w-16 flex items-center justify-center rounded-2xl ${idx === 0 ? 'bg-white/10' : 'bg-primary/5 text-primary'} group-hover:scale-110 transition-transform`}>
                                                    <item.icon size={28} />
                                                </div>
                                            )}
                                            <div>
                                                <h3 className="text-xl mb-2">{item.label}</h3>
                                                <p className={`text-lg font-serif opacity-70 leading-relaxed`}>{item.content}</p>
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

export default Concept;

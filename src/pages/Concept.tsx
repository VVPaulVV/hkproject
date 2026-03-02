import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
                        <span className="text-secondary font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs mb-4 block">Partie I</span>
                        <h1 className="text-primary text-4xl md:text-7xl lg:text-8xl">{data.title}</h1>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding pt-0">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
                        <p className="text-lg md:text-2xl font-serif italic text-antique-text/80 leading-relaxed">
                            {data.description}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                        {data.subsections.map((sub, idx) => (
                            <motion.div
                                key={sub.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`p-8 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl ${idx === 0 ? 'bg-primary text-white' : 'bg-white text-antique-text'}`}
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-12">
                                    <h2 className="text-2xl md:text-4xl mb-0">{sub.title}</h2>
                                    <div className={`h-[1px] flex-1 ${idx === 0 ? 'bg-white/20' : 'bg-primary/10'}`} />
                                </div>

                                <div className="space-y-8 md:space-y-12">
                                    {sub.items.map((item, iIdx) => (
                                        <div key={iIdx} className="flex flex-col sm:flex-row gap-6 md:gap-8 group">
                                            {item.icon && (
                                                <div className={`shrink-0 p-4 h-14 w-14 md:h-16 md:w-16 flex items-center justify-center rounded-2xl ${idx === 0 ? 'bg-white/10' : 'bg-primary/5 text-primary'} group-hover:scale-110 transition-transform`}>
                                                    <item.icon size={24} />
                                                </div>
                                            )}
                                            <div>
                                                <h3 className="text-lg md:text-xl font-black mb-2 uppercase tracking-wide">{item.label}</h3>
                                                <p className={`text-base md:text-lg font-serif opacity-70 leading-relaxed`}>{item.content}</p>
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
                    <Link to="/hebergement" className="group flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <span className="text-secondary font-bold tracking-[0.5em] uppercase text-[10px] mb-6">Chapitre Suivant</span>
                            <h2 className="text-primary text-3xl md:text-7xl lg:text-8xl mb-0 group-hover:scale-105 transition-transform duration-700 flex items-center gap-6">
                                HÉBERGEMENT <ArrowRight className="w-8 h-8 md:w-16 md:h-16 group-hover:translate-x-4 transition-transform duration-700" />
                            </h2>
                        </motion.div>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Concept;

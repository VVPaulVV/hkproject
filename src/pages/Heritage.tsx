import { motion } from 'framer-motion';
import { Landmark, Users, Globe, Zap, History, Sparkles, Quote } from 'lucide-react';

const Heritage = () => {
    return (
        <div className="min-h-screen pt-24 md:pt-40 pb-24 md:pb-32 marble-texture bg-antique-bg">
            <div className="container-custom max-w-5xl px-4 md:px-6">
                {/* Hero Section */}
                <div className="text-center mb-16 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase text-primary mb-4 block">Héritage & Transmission</span>
                        <h1 className="text-3xl md:text-7xl text-antique-text mb-6 md:mb-8 uppercase font-black tracking-tighter leading-tight">L'ÂME DE L'HÔTEL FORTUNA.</h1>
                        <div className="h-1 w-16 md:w-24 bg-primary mx-auto mb-8 md:mb-10" />
                        <p className="max-w-3xl mx-auto text-lg md:text-xl font-serif italic text-antique-text/70 leading-relaxed">
                            L'Hôtel Fortuna n'est pas seulement un lieu de séjour, c'est un témoin du temps. Notre engagement est de faire revivre l'histoire de ce bâtiment tout en garantissant sa pérennité pour les générations futures.
                        </p>
                    </motion.div>
                </div>

                {/* 4 Pillars Section */}
                <div className="grid gap-8 md:gap-12 mb-24 md:mb-40">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        {/* 1. Architecture */}
                        <motion.section
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-white shadow-xl border border-primary/5"
                        >
                            <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
                                <div className="p-3 md:p-4 bg-primary/10 text-primary rounded-xl md:rounded-2xl shrink-0">
                                    <Landmark size={28} />
                                </div>
                                <h2 className="text-xl md:text-2xl text-antique-text m-0 uppercase tracking-tight font-black leading-tight">1. Architecture</h2>
                            </div>
                            <div className="space-y-4 md:space-y-6 text-sm md:text-base">
                                <p className="text-antique-text/60 font-serif leading-relaxed">
                                    Nous nous engageons à préserver l'intégrité architecturale de notre établissement.
                                    Lors de nos rénovations, nous utilisons des techniques artisanales traditionnelles pour respecter l'esthétique originelle.
                                </p>
                                <p className="text-antique-text/60 font-serif leading-relaxed border-t border-antique-bg pt-4 md:pt-6 italic">
                                    Chaque moulure, chaque fresque et chaque parquet ancien a été méticuleusement restauré par des compagnons locaux.
                                </p>
                            </div>
                        </motion.section>

                        {/* 2. Savoir-Faire */}
                        <motion.section
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-white shadow-xl border border-primary/5"
                        >
                            <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
                                <div className="p-3 md:p-4 bg-secondary/10 text-secondary rounded-xl md:rounded-2xl shrink-0">
                                    <Users size={28} />
                                </div>
                                <h2 className="text-xl md:text-2xl text-antique-text m-0 uppercase tracking-tight font-black leading-tight">2. Savoir-Faire</h2>
                            </div>
                            <div className="space-y-4 md:space-y-6 text-sm md:text-base">
                                <p className="text-antique-text/60 font-serif leading-relaxed">
                                    La préservation du patrimoine passe aussi par les hommes et les femmes qui le font vivre.
                                    Le mobilier est le fruit d'une collaboration avec des ébénistes régionaux.
                                </p>
                                <p className="text-antique-text/60 font-serif leading-relaxed border-t border-antique-bg pt-4 md:pt-6 italic">
                                    Nous accueillons régulièrement des apprentis pour transmettre les codes de l'hôtellerie "à la française".
                                </p>
                            </div>
                        </motion.section>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        {/* 3. Engagement Culturel */}
                        <motion.section
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-white shadow-xl border border-primary/5"
                        >
                            <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
                                <div className="p-3 md:p-4 bg-[#ABE188]/20 text-[#2D4A22] rounded-xl md:rounded-2xl shrink-0">
                                    <Globe size={28} />
                                </div>
                                <h2 className="text-xl md:text-2xl text-antique-text m-0 uppercase tracking-tight font-black leading-tight">3. Culture</h2>
                            </div>
                            <div className="space-y-4 md:space-y-6 text-sm md:text-base">
                                <p className="text-antique-text/60 font-serif leading-relaxed">
                                    L'Hôtel Fortuna se veut un pont entre le passé et le présent.
                                    Une sélection de documents historiques est disponible dans notre bibliothèque.
                                </p>
                                <p className="text-antique-text/60 font-serif leading-relaxed border-t border-antique-bg pt-4 md:pt-6 italic">
                                    Nous recommandons exclusivement des guides locaux et des sites culturels partenaires.
                                </p>
                            </div>
                        </motion.section>

                        {/* 4. Modernisation Invisible */}
                        <motion.section
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-antique-text text-white shadow-2xl"
                        >
                            <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
                                <div className="p-3 md:p-4 bg-primary text-white rounded-xl md:rounded-2xl shrink-0">
                                    <Zap size={28} />
                                </div>
                                <h2 className="text-xl md:text-2xl text-white m-0 uppercase tracking-tight font-black leading-tight">4. Modernité</h2>
                            </div>
                            <div className="space-y-4 md:space-y-6 text-sm md:text-base">
                                <p className="text-white/60 font-serif leading-relaxed">
                                    Pour préserver la structure ancienne, nous avons intégré des technologies modernes :
                                    Isolation thermique et systèmes de gestion d'énergie intelligents.
                                </p>
                                <div className="pt-4 md:pt-6 border-t border-white/10">
                                    <Quote size={20} className="text-primary mb-3 md:mb-4" />
                                    <p className="text-white text-base md:text-lg font-serif italic italic leading-relaxed">
                                        "Préserver le patrimoine, c'est s'assurer que l'excellence de demain possède des racines solides."
                                    </p>
                                </div>
                            </div>
                        </motion.section>
                    </div>
                </div>

                {/* Legend History Section */}
                <div className="relative p-8 md:p-24 rounded-[3rem] md:rounded-[5rem] bg-white shadow-2xl overflow-hidden border border-primary/5">
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
                        <img src="/assets/slide_hero.jpg" alt="" className="w-full h-full object-cover grayscale" />
                    </div>

                    <div className="relative z-10 max-w-3xl">
                        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-12 text-center md:text-left">
                            <History size={40} className="text-primary mx-auto md:mx-0" />
                            <h2 className="text-2xl md:text-5xl text-antique-text m-0 uppercase font-black tracking-tighter leading-tight">LA LÉGENDE DE L'HÔTEL FORTUNA.</h2>
                        </div>

                        <div className="space-y-8 md:space-y-12 text-antique-text/70 font-serif text-base md:text-lg leading-relaxed italic">
                            <div className="text-center md:text-left">
                                <h3 className="text-primary text-[10px] md:text-xs font-black tracking-widest uppercase mb-4 md:mb-6 not-italic">L'Origine du Destin</h3>
                                <p>
                                    L'histoire de l'Hôtel Fortuna commence bien avant que ses portes ne s'ouvrent aux voyageurs.
                                    La légende raconte que l'édifice fut bâti sur l'emplacement d'une ancienne demeure visionnaire.
                                </p>
                                <p className="mt-4 md:mt-6">
                                    Au XIXe siècle, le maître des lieux, un célèbre navigateur, aurait rapporté de ses expéditions une pièce d'or frappée à l'effigie de Fortuna.
                                    Il fit sceller cette pièce dans la pierre angulaire du bâtiment.
                                </p>
                            </div>

                            <div className="p-8 md:p-10 bg-antique-bg rounded-[2rem] md:rounded-[3rem] border-l-4 border-primary text-center md:text-left">
                                <h3 className="text-primary text-[10px] md:text-xs font-black tracking-widest uppercase mb-4 not-italic">Refuge des Voyageurs</h3>
                                <p>
                                    C'est de l'aura de bienveillance entourant ce foyer qu'est né le nom de notre établissement.
                                    On disait qu'quiconque franchissait le seuil voyait sa chance tourner : les projets se concrétisaient et l'esprit s'apaisait.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 md:gap-12 pt-8 text-center md:text-left">
                                <div className="space-y-3 md:space-y-4">
                                    <div className="flex items-center justify-center md:justify-start gap-3 text-antique-text not-italic">
                                        <Sparkles size={18} className="text-secondary" />
                                        <span className="font-header font-black uppercase tracking-widest text-[10px]">Murs Murmurent</span>
                                    </div>
                                    <p className="text-sm md:text-base">
                                        Lors de la rénovation de 2024, nous avons révélé des fresques cachées sous des couches séculaires.
                                    </p>
                                </div>
                                <div className="space-y-3 md:space-y-4">
                                    <div className="flex items-center justify-center md:justify-start gap-3 text-antique-text not-italic">
                                        <Sparkles size={18} className="text-secondary" />
                                        <span className="font-header font-black uppercase tracking-widest text-[10px]">Éclat Retrouvé</span>
                                    </div>
                                    <p className="text-sm md:text-base">
                                        Le lustre du lobby a été restauré cristal par cristal par les derniers maîtres verriers.
                                    </p>
                                </div>
                            </div>

                            <div className="pt-8 md:pt-12 border-t border-antique-bg text-center">
                                <h3 className="text-primary text-xl md:text-2xl font-black uppercase tracking-tight mb-4 not-italic">Votre Chapitre</h3>
                                <p className="text-sm md:text-lg">
                                    En séjournant à l'Hôtel Fortuna, vous entrez dans une lignée d'hôtes illustres.
                                    L'esprit de Fortuna veille sur votre séjour.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 md:mt-24 text-center">
                    <p className="text-[8px] md:text-[10px] font-bold tracking-[0.5em] uppercase text-antique-text/30">
                        Preserving the past, defining the future.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Heritage;

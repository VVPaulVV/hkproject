import { motion } from 'framer-motion';
import { Music, Leaf, Users, Lock, ExternalLink, Scale } from 'lucide-react';

const MentionsLegales = () => {
    return (
        <div className="min-h-screen pt-24 md:pt-40 pb-24 md:pb-32 marble-texture bg-antique-bg">
            <div className="container-custom max-w-5xl px-4 md:px-6">
                <div className="text-center mb-16 md:mb-24 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase text-primary mb-4 block">Engagement & Transparence</span>
                        <h1 className="text-3xl md:text-7xl text-antique-text mb-6 md:mb-8 font-black uppercase tracking-tight leading-tight">NOS ENGAGEMENTS & CONFORMITÉ LÉGALE.</h1>
                        <div className="h-1 w-16 md:w-24 bg-primary mx-auto mb-8 md:mb-10" />
                        <p className="max-w-3xl mx-auto text-lg md:text-xl font-serif italic text-antique-text/70 leading-relaxed">
                            L’Hôtel Fortuna s’inscrit dans une démarche de tourisme durable et responsable. À ce titre, nous veillons au strict respect des réglementations en vigueur pour garantir une expérience éthique et transparente à nos clients.
                        </p>
                    </motion.div>
                </div>

                <div className="grid gap-8 md:gap-12">
                    {/* 1. RSE */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-white shadow-xl shadow-primary/5 border border-primary/5"
                    >
                        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-10 md:mb-12 text-center md:text-left">
                            <div className="p-4 bg-[#ABE188]/20 text-[#2D4A22] rounded-2xl w-fit mx-auto md:mx-0">
                                <Leaf size={32} />
                            </div>
                            <h2 className="text-xl md:text-3xl text-antique-text m-0 uppercase tracking-tight font-black leading-tight">1. Responsabilité RSE</h2>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                            <div className="space-y-3 md:space-y-4 text-center md:text-left">
                                <h3 className="text-primary text-[10px] md:text-sm font-black tracking-widest uppercase">Lutte contre le gaspillage</h3>
                                <p className="text-sm md:text-base text-antique-text/60 font-serif leading-relaxed italic">
                                    Nous assurons le tri à la source et la valorisation de 100% de nos biodéchets.
                                    Une solution de "Gourmet Bag" est systématiquement proposée.
                                </p>
                            </div>
                            <div className="space-y-3 md:space-y-4 text-center md:text-left">
                                <h3 className="text-primary text-[10px] md:text-sm font-black tracking-widest uppercase">Réduction du plastique</h3>
                                <p className="text-sm md:text-base text-antique-text/60 font-serif leading-relaxed italic">
                                    Nous avons supprimé l’usage de plastiques à usage unique dans nos chambres (absence de pailles, distributeurs rechargeables).
                                </p>
                            </div>
                            <div className="space-y-3 md:space-y-4 text-center md:text-left">
                                <h3 className="text-primary text-[10px] md:text-sm font-black tracking-widest uppercase">Transparence alimentaire</h3>
                                <p className="text-sm md:text-base text-antique-text/60 font-serif leading-relaxed italic">
                                    L'origine de toutes nos viandes (ovines, bovines, porcines et volailles) est affichée de manière visible.
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    {/* 2 & 3 Grid */}
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        {/* 2. Accessibilité */}
                        <motion.section
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-white shadow-xl border border-primary/5"
                        >
                            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-6 md:mb-8 text-center md:text-left">
                                <div className="p-3 md:p-4 bg-secondary/10 text-secondary rounded-xl md:rounded-2xl w-fit mx-auto md:mx-0">
                                    <Users size={28} />
                                </div>
                                <h2 className="text-xl md:text-2xl text-antique-text m-0 uppercase tracking-tight font-black">2. Accessibilité</h2>
                            </div>
                            <div className="space-y-4 md:space-y-6 text-sm md:text-base text-center md:text-left">
                                <p className="text-antique-text/60 font-serif leading-relaxed">
                                    L'Hôtel Fortuna est entièrement accessible aux PMR.
                                    Notre Registre Public d'Accessibilité est consultable à la réception.
                                </p>
                                <p className="text-antique-text/60 font-serif leading-relaxed border-t border-antique-bg pt-4 md:pt-6">
                                    Nous nous efforçons de rendre ce site web accessible au plus grand nombre (RGAA).
                                </p>
                            </div>
                        </motion.section>

                        {/* 3. SACEM */}
                        <motion.section
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-antique-text text-white shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-6 md:mb-8 text-center md:text-left">
                                    <div className="p-3 md:p-4 bg-primary text-white rounded-xl md:rounded-2xl w-fit mx-auto md:mx-0">
                                        <Music size={28} />
                                    </div>
                                    <h2 className="text-xl md:text-2xl text-white m-0 uppercase tracking-tight font-black">3. SACEM & Diffusion</h2>
                                </div>
                                <p className="text-white/60 font-serif leading-relaxed italic text-sm md:text-base text-center md:text-left">
                                    La diffusion de musique d'ambiance (Lobby, Restaurant, Spa) est effectuée en parfaite conformité avec la législation SACEM et SPRE.
                                </p>
                            </div>
                        </motion.section>
                    </div>

                    {/* 4. RGPD & Médiation */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-white shadow-xl border border-primary/5"
                    >
                        <div className="flex flex-col lg:flex-row gap-10 md:gap-12">
                            <div className="lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left">
                                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 justify-center lg:justify-start">
                                    <div className="p-3 md:p-4 bg-primary/10 text-primary rounded-xl md:rounded-2xl w-fit mx-auto md:mx-0">
                                        <Lock size={28} />
                                    </div>
                                    <h2 className="text-xl md:text-2xl text-antique-text m-0 uppercase tracking-tight font-black">4. Protection RGPD</h2>
                                </div>
                                <p className="text-sm md:text-base text-antique-text/60 font-serif leading-relaxed">
                                    Vos données personnelles sont collectées uniquement pour la gestion de votre séjour.
                                    Elles sont protégées et ne sont jamais transmises à des tiers sans votre accord.
                                    Vous disposez d'un droit d'accès auprès de notre service client.
                                </p>
                            </div>

                            <div className="lg:w-1/2 bg-antique-bg/50 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-primary/10 text-center lg:text-left">
                                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mb-4 md:mb-6 text-primary justify-center lg:justify-start">
                                    <Scale size={24} className="mx-auto md:mx-0" />
                                    <h3 className="text-[10px] md:text-sm font-black tracking-widest uppercase">Médiation de la consommation</h3>
                                </div>
                                <p className="text-sm md:text-base text-antique-text/60 font-serif leading-relaxed mb-6">
                                    En cas de litige non résolu, vous pouvez saisir gratuitement le médiateur du voyage (MTV).
                                </p>
                                <a
                                    href="https://www.mtv.travel"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-primary/20 rounded-full text-[10px] font-bold tracking-widest uppercase text-primary hover:bg-primary hover:text-white transition-all group shadow-sm"
                                >
                                    mtv.travel <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                                <div className="mt-8 pt-6 md:pt-8 border-t border-primary/10">
                                    <p className="text-[10px] font-bold text-antique-text/40 uppercase mb-2">Service Médiation :</p>
                                    <p className="text-[10px] md:text-xs text-antique-text/60">BP 80 303, 75 823 Paris Cedex 17.</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                </div>

                <div className="mt-16 md:mt-24 text-center">
                    <p className="text-[8px] md:text-[10px] font-bold tracking-[0.5em] uppercase text-antique-text/30">
                        Fortuna St-Jean-Cap-Ferrat © 2026 - Tous droits réservés
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MentionsLegales;

import { motion } from 'framer-motion';
import { Users, User, ShieldCheck, Soup, Bed, ChevronRight, Info, Waves, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Position {
    id: string;
    title: string;
    description: string;
    icon: any;
    color: string;
    children?: Position[];
    dottedChildren?: Position[];
}

const organigrammeData: Position[] = [
    {
        id: 'directeur',
        title: 'Directeur',
        icon: ShieldCheck,
        color: 'bg-[#A33434]',
        description: "Le décideur ultime. Il est responsable de la rentabilité de l'hôtel, de la satisfaction client et de la stratégie globale. Il coordonne tous les départements pour s'assurer que les standards de la marque \"Fortuna\" sont respectés.",
        dottedChildren: [
            {
                id: 'technicien-spa',
                title: 'Technicien Spa',
                icon: Waves,
                color: 'bg-[#DAD2D8] !text-antique-text',
                description: "Garant de la maintenance technique et de l'hygiène des installations (piscines, hammams, saunas). En raison de la technicité et des normes de sécurité, il rapporte souvent directement à la direction."
            }
        ],
        children: [
            {
                id: 'reception',
                title: 'Pôle Réception',
                icon: Users,
                color: 'bg-[#ABE188] !text-antique-text',
                description: "Front Office - Le cœur de l'accueil et de la gestion client.",
                children: [
                    {
                        id: 'chef-reception',
                        title: 'Chef de Réception',
                        icon: User,
                        color: 'bg-[#ABE188]/80 !text-antique-text',
                        description: "Il encadre l'équipe de réception. Gestion du planning, optimisation du taux d'occupation, et coordination avec la gouvernante.",
                        children: [
                            {
                                id: 'premiere-receptionniste',
                                title: 'Première Réceptionniste',
                                icon: User,
                                color: 'bg-[#ABE188]/60 !text-antique-text',
                                description: "Réceptionniste référente. Fait le pont entre l'équipe et le manager. Gère les arrivées VIP et forme les nouveaux arrivants.",
                                children: [
                                    {
                                        id: 'receptionniste',
                                        title: 'Réceptionniste',
                                        icon: User,
                                        color: 'bg-[#ABE188]/40 !text-antique-text',
                                        description: "Premier point de contact. Gère check-ins/check-outs, réservations et s'assure du bon déroulement du séjour."
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: 'restauration',
                title: 'Pôle Restauration',
                icon: Soup,
                color: 'bg-[#6A7FDB]',
                description: "Cuisine & Salle - L'excellence gastronomique de La Tavola.",
                children: [
                    {
                        id: 'dir-restre',
                        title: 'Directeur du Restaurant',
                        icon: User,
                        color: 'bg-[#6A7FDB]/80',
                        description: "Supervise la salle et la cuisine. Gère les budgets, la carte et garantit l'excellence du service.",
                        children: [
                            {
                                id: 'chef-rang',
                                title: 'Chef de Rang',
                                icon: User,
                                color: 'bg-[#6A7FDB]/60',
                                description: "Responsable d'un rang. Prends les commandes et conseille les clients sur les menus.",
                                children: [
                                    {
                                        id: 'commis-salle',
                                        title: 'Commis de Salle',
                                        icon: User,
                                        color: 'bg-[#6A7FDB]/40',
                                        description: "Assistant du Chef de Rang. Assure le dressage des tables et la propreté de la salle."
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 'chef-cuisine',
                        title: 'Chef de Cuisine',
                        icon: User,
                        color: 'bg-[#6A7FDB]/80',
                        description: "Le patron des fourneaux. Crée les menus, gère les stocks et veille aux normes d'hygiène.",
                        children: [
                            {
                                id: 'sous-chef',
                                title: 'Sous-Chef',
                                icon: User,
                                color: 'bg-[#6A7FDB]/60',
                                description: "Bras droit du Chef. Supervise la brigade pendant le service et assure la qualité.",
                                children: [
                                    {
                                        id: 'cuisinier',
                                        title: 'Cuisinier',
                                        icon: User,
                                        color: 'bg-[#6A7FDB]/40',
                                        description: "Réalise les préparations culinaires selon les fiches techniques du Chef."
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: 'hebergement',
                title: 'Pôle Hébergement',
                icon: Bed,
                color: 'bg-[#fffd82] !text-antique-text',
                description: "Housekeeping - La garantie d'une propreté impériale.",
                children: [
                    {
                        id: 'gouvernante',
                        title: 'Gouvernante',
                        icon: User,
                        color: 'bg-[#fffd82]/80 !text-antique-text',
                        description: "Responsable de la propreté et de l'esthétique. Inspecte les chambres et gère le linge.",
                        children: [
                            {
                                id: 'femme-chambre',
                                title: 'Femme de Chambre',
                                icon: User,
                                color: 'bg-[#fffd82]/60 !text-antique-text',
                                description: "Assure le nettoyage et la remise en état quotidienne des chambres."
                            },
                            {
                                id: 'equipier',
                                title: 'Équipier',
                                icon: User,
                                color: 'bg-[#fffd82]/40 !text-antique-text',
                                description: "Entretien des parties communes et aide aux tâches lourdes des étages."
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

const PositionCard = ({ pos, depth = 0 }: { pos: Position; depth?: number }) => {
    const [isOpen, setIsOpen] = useState(depth < 2);
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className="flex flex-col items-center">
            <div className={`relative group ${showInfo ? 'z-50' : 'z-20'}`}>
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`relative z-10 w-64 p-5 rounded-2xl shadow-xl border border-white/10 ${pos.color} text-white cursor-pointer transition-all duration-500`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-white/20 rounded-lg">
                            <pos.icon size={20} />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-[11px] font-black tracking-widest uppercase mb-1">{pos.title}</h4>
                            <div className="h-[1px] w-8 bg-white/30" />
                        </div>
                        {pos.children && (
                            <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
                                <ChevronRight size={16} className="opacity-50" />
                            </motion.div>
                        )}
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowInfo(!showInfo);
                        }}
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-antique-text flex items-center justify-center shadow-lg hover:bg-secondary hover:text-white transition-colors"
                    >
                        <Info size={14} />
                    </button>
                </motion.div>

                {/* Dotted Children (Technicien Spa, etc.) */}
                {pos.dottedChildren && (
                    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-12 flex items-center">
                        <div className="w-12 h-0 border-t-2 border-dashed border-primary/30" />
                        <div className="flex flex-col gap-4">
                            {pos.dottedChildren.map(child => (
                                <PositionCard key={child.id} pos={child} depth={depth + 1} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Info Tooltip */}
                {showInfo && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-full left-0 right-0 mb-4 z-50 p-6 bg-white rounded-2xl shadow-2xl border border-antique-bg text-antique-text"
                    >
                        <p className="text-xs leading-relaxed font-serif italic">{pos.description}</p>
                    </motion.div>
                )}
            </div>

            {pos.children && isOpen && (
                <div className="mt-12 flex gap-8 relative">
                    {/* Vertical Line Connector */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[2px] h-12 bg-linear-to-b from-white/20 to-primary/20" />

                    {pos.children.map((child, idx) => (
                        <div key={child.id} className="relative">
                            {/* Horizontal Line Connector */}
                            {pos.children!.length > 1 && (
                                <>
                                    {idx === 0 && (
                                        <div className="absolute top-0 left-1/2 right-0 h-[2px] bg-primary/20 -translate-y-[48px]" />
                                    )}
                                    {idx > 0 && idx < pos.children!.length - 1 && (
                                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary/20 -translate-y-[48px]" />
                                    )}
                                    {idx === pos.children!.length - 1 && (
                                        <div className="absolute top-0 left-0 right-1/2 h-[2px] bg-primary/20 -translate-y-[48px]" />
                                    )}
                                </>
                            )}
                            <PositionCard pos={child} depth={depth + 1} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const Organigramme = () => {
    return (
        <div className="min-h-screen pt-32 md:pt-48 pb-24 md:pb-32 marble-texture bg-antique-bg overflow-x-hidden">
            {/* Header Section remains standard width */}
            <div className="container-custom">
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center text-center w-full"
                    >
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.5em] uppercase text-primary mb-4 block">Gouvernance & Excellence</span>
                        <h1 className="text-4xl md:text-8xl text-antique-text mb-6 md:mb-8 font-black tracking-tight uppercase text-center">ORGANIGRAMME</h1>
                        <div className="h-1 w-16 md:w-24 bg-primary mx-auto" />
                    </motion.div>
                </div>

                {/* Mobile scroll indicator */}
                <div className="md:hidden flex flex-col items-center gap-2 mb-12 opacity-40">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-center">Faites défiler horizontalement <br /> pour explorer l'arbre</span>
                    <div className="h-[1px] w-20 bg-primary" />
                </div>
            </div>

            {/* Isolated Scrollable Org Chart Tree - Increased vertical padding for tooltips */}
            <div className="w-full overflow-x-auto py-48 no-scrollbar">
                <div className="flex flex-col items-center min-w-full w-max px-12 md:px-24">
                    {organigrammeData.map(pos => (
                        <PositionCard key={pos.id} pos={pos} />
                    ))}
                </div>
            </div>

            <div className="container-custom">
                {/* Footer Section (Philosophy & Legend) */}
                <div className="mt-24 md:mt-40 max-w-4xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 border-t border-primary/10 pt-16 md:pt-20 px-4">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl md:text-2xl mb-6 font-black uppercase tracking-tight">PHILOSOPHIE</h3>
                        <p className="text-sm md:text-base text-antique-text/70 italic font-serif leading-relaxed">
                            Chaque collaborateur de Fortuna est un gardien de l'hospitalité impériale.
                            De la direction aux étages, notre structure est conçue pour garantir une fluidité
                            digne des plus grandes demeures de la Rome Antique.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#A33434]/5 rounded-full border border-[#A33434]/10">
                            <div className="w-2 h-2 rounded-full bg-[#A33434]" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">Direction</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#6A7FDB]/5 rounded-full border border-[#6A7FDB]/10">
                            <div className="w-2 h-2 rounded-full bg-[#6A7FDB]" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">Restauration</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#fffd82]/5 rounded-full border border-[#fffd82]/10">
                            <div className="w-2 h-2 rounded-full bg-[#fffd82]" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">Hébergement</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#ABE188]/5 rounded-full border border-[#ABE188]/10">
                            <div className="w-2 h-2 rounded-full bg-[#ABE188]" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">Réception</span>
                        </div>
                    </div>
                </div>

                <div className="mt-24 md:mt-40 text-center">
                    <p className="text-[8px] md:text-[10px] font-bold tracking-[0.5em] uppercase text-antique-text/30">
                        Preserving the past, defining the future.
                    </p>
                </div>
            </div>

            <section className="pb-32 px-4 md:px-0 bg-antique-bg">
                <div className="container-custom">
                    <Link to="/" className="group flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <span className="text-secondary font-bold tracking-[0.5em] uppercase text-[10px] mb-6">Fin de l'Immersion</span>
                            <h2 className="text-primary text-3xl md:text-7xl lg:text-8xl mb-0 group-hover:scale-105 transition-transform duration-700 flex items-center gap-6">
                                RETOUR À L'ACCUEIL <ArrowRight className="w-8 h-8 md:w-16 md:h-16 group-hover:translate-x-4 transition-transform duration-700" />
                            </h2>
                        </motion.div>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Organigramme;

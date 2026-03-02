import { Link } from 'react-router-dom';
import { projectData } from '../data';

const Footer = () => {
    return (
        <footer className="py-24 md:py-32 bg-antique-text text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <img src="/assets/slide_hero.jpg" alt="" className="w-full h-full object-cover scale-150 rotate-3" />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    <div>
                        <div className="flex items-center gap-6 mb-12">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-header font-black text-3xl border border-white/10 shadow-2xl">F</div>
                            <span className="font-header font-black tracking-[0.4em] text-primary text-4xl uppercase">FORTUNA</span>
                        </div>
                        <p className="text-white/40 text-xl font-serif italic mb-12 max-w-md">
                            "Un sanctuaire de l'histoire, redéfini pour le luxe contemporain au bord de la Méditerranée."
                        </p>
                        <div className="flex flex-wrap gap-8">
                            {['LinkedIn', 'Instagram'].map(social => (
                                <button key={social} className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/40 hover:text-primary transition-all border-b border-white/10 pb-2 hover:border-primary">
                                    {social}
                                </button>
                            ))}
                            <a
                                href="/Dossier_Fortuna.pdf"
                                download
                                className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/40 hover:text-primary transition-all border-b border-white/10 pb-2 hover:border-primary"
                            >
                                Dossier PDF
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-12">
                        <div className="flex flex-col gap-6">
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-2">Navigation</span>
                            <Link to="/" className="text-white/40 hover:text-white transition-colors text-sm font-medium">ACCUEIL</Link>
                            {projectData.map(s => (
                                <Link key={s.id} to={`/${s.id}`} className="text-white/40 hover:text-white transition-colors text-sm font-medium">
                                    {s.title}
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-col gap-6">
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-2">Contact</span>
                            <p className="text-white/40 text-sm font-medium hover:text-white transition-colors cursor-pointer">contact@fortuna-capferrat.com</p>
                            <div className="mt-8 pt-8 border-t border-white/5">
                                <p className="text-primary text-[9px] font-bold tracking-[0.2em] uppercase mb-2">Présentation par</p>
                                <p className="text-white/70 text-xl font-header font-black">Anthony et Ibrahim</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/10">© 2026 FORTUNA</span>
                    <div className="flex gap-10">
                        <Link to="/heritage" className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/10 hover:text-white/30 cursor-pointer transition-colors">Heritage & Preservation</Link>
                        <Link to="/mentions-legales" className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/10 hover:text-white/30 cursor-pointer transition-colors">Mentions Légales</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

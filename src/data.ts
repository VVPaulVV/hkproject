import {
    Waves,
    Map as MapIcon,
    Utensils,
    Bed,
    Music,
    Compass,
    Church,
    Shield,
    Star,
    Info,
    Clock,
    Coffee,
    Sword,
    Calendar,
    Users,
} from 'lucide-react';

export interface ProjectSection {
    id: string;
    title: string;
    icon: any;
    image: string;
    description: string;
    subsections: {
        id: string;
        title: string;
        items: {
            label: string;
            content: string;
            icon?: any;
            price?: string;
        }[];
    }[];
}

export const menuData = {
    entrees: [
        { name: "Ovis opalis", desc: "œufs durs, garniture aux pignons", price: "9" },
        { name: "Concicla a la Commodus", desc: "soufflé de petits pois verts", price: "11" },
        { name: "Patina de aparagis frigida", desc: "flan d'asperges", price: "12" },
        { name: "Scarola napoli", desc: "scarole aux raisins secs", price: "9" },
        { name: "Farinata", desc: "galette de pois chiches", price: "12" },
        { name: "Burrata ex Apulia", desc: "burrata des Pouilles", price: "15" },
        { name: "Frixum lolligo", desc: "encornets frits", price: "14" },
        { name: "Sepia cum pisis", desc: "seiches aux petits poids", price: "13" },
        { name: "Salade « Cesare »", desc: "", price: "16" },
    ],
    plats: [
        { name: "Acetaria fabarum latarum et pecorini", desc: "salade de fèves et pecorino", price: "16" },
        { name: "Boletos", desc: "tourte de ragoût de champignons", price: "19" },
        { name: "Perna", desc: "jambon en croûte", price: "22" },
        { name: "Porcellus Hortulanus", desc: "porcelet à la jardinière", price: "22" },
        { name: "Lenticulae cum botulis", desc: "lentilles aux saucisses", price: "21" },
        { name: "Bucatini all'amatriciana", desc: "bucatini à la l'amatriciana", price: "22" },
        { name: "Gnocchi alla romana", desc: "gnocchi à la romaine", price: "22" },
        { name: "Pluma Iberica in aromatibus macerata", desc: "pluma ibérique marinée aux épices", price: "24" },
        { name: "Ceviche de Daurade", desc: "", price: "23" },
    ],
    desserts: [
        { name: "Frigidum coagulum cum melle pomisque", desc: "caillé frais au miel et aux fruits", price: "9" },
        { name: "Savillum", desc: "cheese cake romain", price: "9" },
        { name: "Patina de piris", desc: "gratin de poires", price: "11" },
        { name: "Meli melon", desc: "compote de fruits au miel", price: "9" },
        { name: "Puls", desc: "sablé de céréales", price: "9" },
        { name: "Tiramisu capulus", desc: "tiramisu au café", price: "11" },
        { name: "Panna cotta aux fruits de l'Empire", desc: "", price: "9" },
    ]
};

export const projectData: ProjectSection[] = [
    {
        id: 'concept',
        title: 'LE MICROCOSME ROMAIN',
        icon: Compass,
        image: '/assets/slide_plan.jpg',
        description: "Un hôtel ***** representative du cadre de vie dans la Rome antique. Un microcosme d'une ville romaine alliant modernité et antiquité.",
        subsections: [
            {
                id: 'urban-structure',
                title: 'Structure & Centuriation',
                items: [
                    { label: 'Cardo & Decumanus', content: "Architecture organisée selon le plan de ville traditionnel romain.", icon: MapIcon },
                    { label: 'Le Forum', content: "Centre névralgique pour les échanges et la vie sociale.", icon: Church },
                    { label: 'Hand Plan', content: "Un tracé précis incluant Insula, Domus et Villa l'Orangerie.", icon: Info },
                ]
            }
        ]
    },
    {
        id: 'hebergement',
        title: 'HÉBERGEMENT',
        icon: Bed,
        image: '/assets/room_suite.jpg',
        description: '34 unités déclinées en 3 types d’exception, du Cubiculum à la Suite Imperatoria.',
        subsections: [
            {
                id: 'room-types',
                title: 'Les 3 Types d\'Hébergement',
                items: [
                    { label: 'Confort (Cubiculum)', content: '20 chambres de 20m² au décor raffiné.', icon: Bed, price: '450€' },
                    { label: 'Luxe', content: '10 chambres de 40m² avec agencement supérieur.', icon: Star, price: '800€' },
                    { label: 'Suites Imperatoria', content: '4 suites de 60m² pour un confort impérial.', icon: Shield, price: '1100€' },
                ]
            }
        ]
    },
    {
        id: 'restauration',
        title: 'LA TAVOLA',
        icon: Utensils,
        image: '/assets/la_tavola_mosaic.jpg',
        description: "Le Chef vous propose une carte inspirée de ses voyages dans les régions méditerranéennes (Alpes, Lombardie, Latium) et associé à la gastronomie romaine. \n\n L’art de bien boire et bien manger faisait foi dans le monde antique romain. \n\n Laissez-vous, vous transporter à travers la découverte et la dégustation de mets légers et frais.",
        subsections: [
            {
                id: 'service-info',
                title: 'Informations Services',
                items: [
                    { label: 'Ouverture', content: "D'avril à septembre, tous les jours.", icon: Calendar },
                    { label: 'Horaires', content: "12h-14h / 19h-21h", icon: Clock },
                    { label: 'L\'Art du Bien Boire', content: "Une sélection de vins et nectars inspirés de l'Antiquité.", icon: Utensils },
                ]
            },
            {
                id: 'thermopolium',
                title: 'Thermopolium',
                items: [
                    { label: 'Snack Romain', content: "Vente de mets légers et frais pour une dégustation rapide.", icon: Coffee },
                ]
            }
        ]
    },
    {
        id: 'detente',
        title: 'THERMES & THÉÂTRE',
        icon: Waves,
        image: '/assets/thermes_view.jpg',
        description: 'L’équilibre parfait entre le soin du corps et l’élévation de l’esprit.',
        subsections: [
            {
                id: 'wellness',
                title: 'Les Thermes',
                items: [
                    { label: 'Espace Aquatique', content: "Un centre de bien-être authentique avec bassins romains.", icon: Waves },
                    { label: 'Lupanar', content: "Espace de détente privé et exclusif.", icon: Church },
                ]
            },
            {
                id: 'culture',
                title: 'Cultures & Loisirs',
                items: [
                    { label: 'Le Théâtre', content: "Représentations classiques et événements sous les étoiles.", icon: Music },
                    { label: 'Animations', content: "Spectacles historiques incluant des combats de gladiateurs.", icon: Sword },
                ]
            }
        ]
    },
    {
        id: 'organigramme',
        title: 'ORGANIGRAMME',
        icon: Users,
        image: '/assets/slide_hero.jpg',
        description: "L'organisation d'excellence de l'Hôtel Fortuna. Une hiérarchie fluide pour un service impérial.",
        subsections: []
    }
];

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
        { name: "Ovis opalis", desc: "œufs durs, garniture aux pignons" },
        { name: "Concicla a la Commodus", desc: "soufflé de petits pois verts" },
        { name: "Patina de aparagis frigida", desc: "flan d'asperges" },
        { name: "Scarola napoli", desc: "scarole aux raisins secs" },
        { name: "Farinata", desc: "galette de pois chiches" },
        { name: "Burrata ex Apulia", desc: "burrata des Pouilles" },
        { name: "Frixum lolligo", desc: "encornets frits" },
        { name: "Sepia cum pisis", desc: "seiches aux petits poids" },
        { name: "Salade « Cesare »", desc: "" },
    ],
    plats: [
        { name: "Acetaria fabarum latarum et pecorini", desc: "salade de fèves et pecorino" },
        { name: "Boletos", desc: "ragoût de champignons" },
        { name: "Perna", desc: "jambon en croûte" },
        { name: "Porcellus Hortulanus", desc: "porcelet à la jardinière" },
        { name: "Lenticulae cum botulis", desc: "lentilles aux saucisses" },
        { name: "Bucatini all'amatriciana", desc: "bucatini à la l'amatriciana" },
        { name: "Gnocchi alla romana", desc: "gnocchi à la romaine" },
        { name: "Pluma Iberica in aromatibus macerata", desc: "pluma ibérique marinée aux épices" },
        { name: "Ceviche de Daurade", desc: "" },
    ],
    desserts: [
        { name: "Frigidum coagulum cum melle pomisque", desc: "caillé frais au miel et aux fruits" },
        { name: "Savillum", desc: "cheese cake romain" },
        { name: "Patina de piris", desc: "gratin de poires" },
        { name: "Meli melon", desc: "compote de fruits au miel" },
        { name: "Puls", desc: "sablé de céréales" },
        { name: "Tiramisu capulus", desc: "tiramisu au café" },
        { name: "Panna cotta aux fruits de l'Empire", desc: "" },
    ]
};

export const projectData: ProjectSection[] = [
    {
        id: 'concept',
        title: 'LE MICROCOSME ROMAIN',
        icon: Compass,
        image: 'assets/slide_plan.jpg',
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
        image: 'assets/room_suite.jpg',
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
        image: 'assets/la_tavola_mosaic.jpg',
        description: "Cuisine romaine et latine inspirée des voyages du Chef en Méditerranée (Alpes, Lombardie, Latium).",
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
        image: 'assets/thermes_view.jpg',
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
    }
];

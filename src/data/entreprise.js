// Seule source des infos de l'entreprise : changer ici change tout le site.
export const E = {
  nom: 'Odyssée Travaux',
  tel: '06 14 03 02 02',
  telHref: '+33614030202',
  email: 'contact@odyssee-travaux.fr',
  instagram: 'https://www.instagram.com/odyssee_travaux_/',
  instagramNom: '@odyssee_travaux_',
  rue: '3 quai Henri Matisse',
  cp: '59290',
  ville: 'Wasquehal',
  horaires: 'Du lundi au vendredi, de 8 h à 18 h',
  forme: 'SARL U au capital de 1 314 €',
  rcs: 'RCS Lille Métropole 913 651 915',
  siret: '913 651 915 00013',
  tva: 'FR82 913 651 915',
  ape: '4391B',
  decennale: 'Groupama Nord Est, contrat n° 168122760001',
  decennaleAdresse: '2 rue Léon Patoux, 51686 Reims Cedex 2',
  activites: 'couverture, zinguerie, pose de châssis de toit, isolation et écran sous toiture',
};

export const villes = [
  'Wasquehal', 'Roubaix', 'Croix', 'Tourcoing', 'Marcq-en-Barœul', 'Mouvaux', "Villeneuve-d'Ascq",
  'Lille', 'Wattrelos', 'Hem', 'Lys-lez-Lannoy', 'La Madeleine', 'Marquette-lez-Lille', 'Bondues',
];

// slug = adresse de la page (src/pages/<slug>.md) et valeur « prestation » des chantiers
export const prestations = [
  { slug: 'fuite-toiture', titre: 'Fuite et réparation de toiture',
    accroche: "Une tache au plafond, de l'eau dans les combles, des tuiles déplacées après un coup de vent." },
  { slug: 'zinguerie-gouttieres', titre: 'Gouttières, chéneaux et zinguerie',
    accroche: "Une gouttière qui déborde, un chéneau percé, de l'eau qui coule le long du mur." },
  { slug: 'velux', titre: 'Fenêtres de toit Velux',
    accroche: "Une fuite au pied d'un Velux, une fenêtre de toit à changer ou à créer." },
  { slug: 'couverture', titre: 'Couverture neuve ou à refaire',
    accroche: 'Une toiture usée, des tuiles poreuses, une extension à couvrir.' },
  { slug: 'entretien-toiture', titre: 'Entretien de toiture',
    accroche: 'Pour éviter la fuite plutôt que la réparer, surtout après la chute des feuilles.' },
];

export const mailDevis = `mailto:${E.email}?subject=${encodeURIComponent('Demande de devis toiture')}&body=${encodeURIComponent(
  'Ville : \nType de travaux (fuite, gouttière, Velux, toiture...) : \nDescription : \nTéléphone : \n\n(Ajoutez 1 ou 2 photos en pièce jointe)'
)}`;

# Site d'Odyssée Travaux

Site statique (Astro) pour odyssee-travaux.fr. Hors du Bureau exprès : le Bureau est synchronisé avec iCloud.

## Commandes (depuis ce dossier)
- `npm run dev` : aperçu en direct sur http://localhost:4321
- `npm run build` : fabrique le site final dans `dist/`

## Où changer quoi
- Téléphone, adresse, assurance, villes, liste des prestations : `src/data/entreprise.js` (un seul endroit)
- Textes des pages prestations : `src/pages/<prestation>.md`
- Accueil : `src/pages/index.astro`
- Couleurs et mise en page : `src/styles/global.css`

## Ajouter un chantier
1. Copier `src/content/chantiers/_modele/` en `src/content/chantiers/AAAA-MM-travaux-ville/`.
2. Y mettre les photos (jpg ou heic converti en jpg), les déclarer dans `index.md` avec une légende.
3. Remplir titre, ville, date, prestation, résumé et le texte, puis `brouillon: false`.
4. `npm run build` : la page, la carte sur l'accueil, la page prestation et le plan du site se mettent à jour seuls.

Jamais d'adresse exacte ni de nom de client, jamais de maison reconnaissable sans accord.
Les photos déposées par Kévin arrivent dans `ODYSSÉE TRAVAUX/10 - COMMUNICATION/Photos chantiers/`.

const fs = require('fs');
const ejs = require('ejs');

// Lire le fichier JSON
const cvDonnees = JSON.parse(fs.readFileSync('cv_cafr.json', 'utf8'));

// Lire le gabarit EJS
const gabarit_cv = fs.readFileSync('gabarit_cv.ejs', 'utf8');

// Générer le HTML
const contenuHtml = ejs.render(gabarit_cv, { cv_cafr: cvDonnees });

// Écrire le fichier HTML
fs.writeFileSync('src/vues/composants/cv_cafr.html', contenuHtml, 'utf8');

console.log('Le fichier HTML a été généré avec succès !');
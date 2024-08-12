const fs = require('fs');
const ejs = require('ejs');

// Lire le fichier JSON
//const cvDonnees = JSON.parse(fs.readFileSync('cv_cafr.json', 'utf8'));

// Lire le gabarit EJS
//const gabarit_cv = fs.readFileSync('gabarit_cv.ejs', 'utf8');

// Générer le HTML
//const contenuHtml = ejs.render(gabarit_cv, { cv_cafr: cvDonnees });

// Écrire le fichier HTML
//fs.writeFileSync('src/vues/composants/cv_cafr.html', contenuHtml, 'utf8');

//console.log('Le fichier HTML a été généré avec succès !');

// ***

// Fonction pour générer un CV
function genererCV(entreeJson, fichierGabarit, sortieHtml) {
    // Lire le fichier JSON
    const donnees = JSON.parse(fs.readFileSync(entreeJson, 'utf8'));

    // Lire le gabarit EJS
    const gabarit = fs.readFileSync(fichierGabarit, 'utf8');

    // Générer le HTML
    const html = ejs.render(gabarit, donnees);

    // Écrire le fichier HTML
    fs.writeFileSync(sortieHtml, html, 'utf8');
    console.log('Généré ${sortieHtml}');

}

// Générer le CV en français
genererCV('cv_cafr.json', 'gabarit_cv.ejs', 'src/vues/composants/cv_cafr.html');

// Générer le CV en anglais
genererCV('cv_caen.json', 'gabarit_cv.ejs', 'src/vues/composants/cv_caen.html');

// Générer le CV en anglais pour les États-Unis
genererCV('cv_usen.json', 'gabarit_cv.ejs', 'src/vues/composants/cv_usen.html');

// Générer le CV en espagnol pour Puerto Rico
genererCV('cv_uses.json', 'gabarit_cv.ejs', 'src/vues/composants/cv_uses.html');
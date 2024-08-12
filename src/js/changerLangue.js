document.getElementById('drapeau_qc').addEventListener('click', function() {
    // Charger le contenu du CV en québécois
    fetch('cv_cafr.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('cv').innerHTML = data;
        })
        .catch(error => console.error('Erreur lors du chargement du CV en canadien français', error));
});

document.getElementById('drapeau_ca').addEventListener('click', function() {
    // Charger le contenu du CV en canadien anglais
    fetch('cv_caen.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('cv').innerHTML = data;
        })
        .catch(error => console.error('Erreur lors du chargement du CV en canadien anglais', error));
});

document.getElementById('drapeau_us').addEventListener('click', function() {
    // Changer le contenu du CV en anglais américain
    fetch('cv_usen.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('cv').innerHTML = data;
        })
        .catch(error => console.error('Erreur lors du chargement du CV en anglais américain', error));
});
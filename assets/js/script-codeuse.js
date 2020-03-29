// Ouverture des coordonnées (page codeuse)

    document.querySelector('.masquer-coordonnees').style.display = "none";
    document.querySelector('.coordonnees').style.display = 'none';


document.querySelector('.afficher-coordonnees').addEventListener('click', function(){
    document.querySelector('.afficher-coordonnees').style.display = "none";
    document.querySelector('.masquer-coordonnees').style.display = "block";
    document.querySelector('.coordonnees').style.display = 'block';
});

// Fermeture des coordonnées

document.querySelector('.masquer-coordonnees').addEventListener('click', function(){
    document.querySelector('.afficher-coordonnees').style.display = "block";
    document.querySelector('.masquer-coordonnees').style.display = "none";
    document.querySelector('.coordonnees').style.display = 'none';
});

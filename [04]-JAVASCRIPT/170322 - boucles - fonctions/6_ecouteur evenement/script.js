// détecter le clic sur un élément

// sélectionner l'élément
var titre = document.getElementById('wow');

// fonction
function maSuperFonction(){
    alert('Salut WF3 Pierrefitte !');
}

// poser un écouteur d'évènements
// 1er paramètre: l'évènement
// 2nd paramètre: la fonction à exécuter
titre.addEventListener('click', maSuperFonction)

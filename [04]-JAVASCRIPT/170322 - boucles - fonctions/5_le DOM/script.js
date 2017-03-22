//SELECTIONNER DES ELEMENTS DE LA PAGE HTML AVEC JS

/*	* 1/ document.getElementById()
    * Recherche dans l'arbre DOM d'une balise ayant l'id spécifié.
    *
    * document.getElementById() renvoie un objet DOM manipulable
    * en JavaScript correspondant à la balise trouvée.
    *
    * Sinon la méthode renvoie la valeur spéciale null.
*/

/*	* 2/ document.getElementsByClassName()
    * Recherche dans l'arbre DOM de toutes les balises ayant la class spécifiées.
    *
    * document.getElementById() renvoie un objet DOM manipulable
    * en JavaScript correspondant à la balise trouvée.
    *
    * Sinon la méthode renvoie la valeur spéciale null.
*/

/*	* 3/ document.getElementsByTagName()
    * Recherche dans l'arbre DOM de toutes les balises ayant la balise spécifiée.
    *
    * document.getElementById() renvoie un objet DOM manipulable
    * en JavaScript correspondant à la balise trouvée.
    *
    * Sinon la méthode renvoie la valeur spéciale null.
*/

/*	* 4/ document.querySelector()
    * Recherche dans l'arbre DOM de la 1ere balise rencontrée
    * qui a l'id, la class ou le tag spécifié.
    *
    * document.getElementById() renvoie un objet DOM manipulable
    * en JavaScript correspondant à la balise trouvée.
    *
    * Sinon la méthode renvoie la valeur spéciale null.
*/

// Modifier le contenu d'une balise
//
// textContent =
// innerHTML =

var title = document.getElementById('wow');
// title.textContent = 'Salut Pierrefitte !';

var classes = document.getElementsByClassName('toto');
// me retourne un tableau
classes.innerHTML='<h1>Salut Pierrefitte</h1>';

var listes = document.getElementsByTagName('ul');

var css = document.querySelector('.toto');

// manipuler les class
var block = document.querySelector('.toto');
block.classList.remove('toto');

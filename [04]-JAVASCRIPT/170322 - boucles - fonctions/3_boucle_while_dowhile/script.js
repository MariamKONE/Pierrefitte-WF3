// ## Enoncé
//
// Demander à l'utilisateur de saisir obligatoirement un nombre quoiqu'il arrive, afficher ce nombre ensuite en HTML.
//
// ## Remarques
//
// * On peut saisir un nombre entier comme un nombre à virgule.
//
// - Utiliser la boucle do while
// - Utiliser la fonction isNaN() // renvoie true si on lui passe une chaîne de caractère en parametre
//
// + Définition : La boucle while permet d'executer du code TANT QU'UNE CONDITION EST VRAIE
// + SYNTAXE :
//
// <script>
// while(condition) {
// 	// code à executer
// }
// </script>
//
// ------------------
//
// + Définition : idem boucle while MAIS execute le code au moins une fois AVANT de vérifier que la condition est vraie
// + SYNTAXE :
//
// <script>
// do {
// 	// code à executer
//
// } while(condition)

do {
    var user = parseFloat(window.prompt('Entrez un chiffre'));
} while(isNaN(user));
document.write('<p>Merci vous avez saisi <strong>' + user + '</strong></p>');

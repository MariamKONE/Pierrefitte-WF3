// la boucle for
// permet d'exécuter du code X fois

// SYNTAXE
// for (initialisation ; condition de sortie ; le pas d'incrémentation){...}
for (var compteur = 1 ; compteur <= 10 ; compteur++) {
    document.write('<p><strong>Le compteur vaut ' + compteur + '</strong></p>');
}

//=========EXOS==========//

var tableau = ['Abdoul', 'Mila', 'Benjamin', 'Ali', 'AlexandreM', 'AlexandreB']
document.write('<hr /><p>Exercice 1 - Prénoms</p><ul>');
for (var i = 0; i < tableau.length; i++) {
    document.write('<li>' + tableau[i] + '</li>');
}
document.write('</ul>');


document.write('<hr /><p>Exercice 2 - Langages</p>');
var langages = ['html', 'css', 'bootstrap','js', 'jquery', 'mysql', 'php', 'ajax', 'symfony'];

for (var i = 0; i < langages.length; i++) {
    document.write('<p>' + langages[i].toUpperCase() + '</p>');
}

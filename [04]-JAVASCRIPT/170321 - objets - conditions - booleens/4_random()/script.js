// ## Enoncé
//
// L'utilisateur choisit dans un prompt du navigateur pierre, feuille ou ciseau, l'ordinateur choisit aléatoirement l'une des trois possibilités, et la partie commence !
//
// ## Remarques
//
// * On doit pouvoir indifféremment saisir le mot en minuscules comme en majuscules.
// * Le ciseau est écrasé par la pierre.
// * La feuille est découpée par le ciseau.
// * La pierre est enveloppée par la feuille.
// * Si le joueur et l'ordinateur font le même choix on obtient une égalité.

// var chiffoumi = Math.random();
// var computer;
// if (chiffoumi < 1/3) {
//     computer = 'ciseaux';
// }else if (chiffoumi < 2/3) {
//     computer = 'pierre';
// }else if (chiffoumi < 3/3) {
//     computer = 'feuille';
// }
// console.log(chiffoumi);
//
// var user = window.prompt('Choisis un mot entre pierre, feuille et ciseaux :');
// user = user.toLowerCase(user);
//
// if (user == computer) {
//     document.write('<p>Vous êtes à égalité !</p>');
// }else if ((chiffoumi < 1/3) && (user == 'pierre' || user == 'feuille')) {
//     document.write('<p>Vous avez gagné !</p>');
// }else if ((chiffoumi < 2/3) && (user == 'feuille')) {
//     document.write('<p>Vous avez gagné !</p>');
// }else if ((chiffoumi < 3/3) && (user == 'ciseaux' || user == 'pierre')) {
//     document.write('<p>Vous avez gagné !</p>');
// }
//
// document.write('<p>Votre choix : ' + user + ' et Choix de l\'ordinateur : ' + computer + '</p>');

//==========FRED==========//
// Déclaration de trois variables.
var computer;
var player;
var random;

// Récupération du choix du joueur.
player = window.prompt('Que choisissez-vous : pierre, feuille ou ciseau ?');

// Récupération d'un nombre aléatoire entre 0 et 1 inclus.
random = Math.random();

if(random <= 0.33)
{
    computer = 'pierre';
}
else if(random <= 0.66)
{
    computer = 'feuille';
}
else
{
    computer = 'ciseau';
}

document.write("<p>Choix de l'ordinateur : " + computer + '</p>');


if(computer == player)
{
    document.write('<p>Vous avez choisi la même chose : égalité !</p>');
}
else
{
    // Le joueur et l'ordinateur n'ont pas choisi la même chose, la bataille commence !

    switch(computer)
    {
        case 'ciseau':
            if(player == 'pierre')
            {
                document.write('<p>La pierre écrase le ciseau : vous gagnez !</p>');
            }
            else // player == 'feuille'
            {
                document.write('<p>La feuille est découpée par le ciseau : vous perdez !</p>');
            }
            break;

        case 'feuille':
            if(player == 'pierre')
            {
                document.write('<p>La pierre est enveloppée par la feuille : vous perdez !</p>');
            }
            else // player == 'ciseau'
            {
                document.write('<p>Le ciseau découpe la feuille : vous gagnez !</p>');
            }
            break;

        case 'pierre':
            if(player == 'feuille')
            {
                document.write('<p>La feuille enveloppe la pierre : vous gagnez !</p>');
            }
            else // player == 'ciseau'
            {
                document.write('<p>Le ciseau est écrasé par la pierre : vous perdez !</p>');
            }
            break;
    }
}

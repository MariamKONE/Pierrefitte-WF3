// ## Enoncé
//
// Rechercher et afficher en HTML la chaîne ayant le plus grand nombre de caractères dans le tableau de phrases.
//
// ## Remarques
//
// * Le programme doit etre dynamique : le tableau peut s'aggrandir ou diminuer sans qu'il y ait besoin de modifier le code.
// * Les tableaux comme les chaînes de caractères sont des objets et disposent chacun d'une propriété nécessaire pour le programme.
// * Construire par étapes le programme : faire une boucle, puis une boucle qui affiche la longueur de chaque phrase, etc.
// * A la fin il faut afficher la phrase la plus longue elle-même ainsi que sa longueur.

var phrases =
[
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "Aenean commodo ligula eget dolor. Aenean massa.",
    "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    "Nulla consequat massa quis enim.",
    "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
    "Nullam dictum felis eu pede mollis pretium.",
    "Integer tincidunt. Cras dapibus.",
    "Vivamus elementum semper nisi.",
    "Aenean vulputate eleifend tellus.",
    "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
    "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
    "Phasellus viverra nulla ut metus varius laoreet.",
    "Quisque rutrum. Aenean imperdiet.",
    "Etiam ultricies nisi vel augue.",
    "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "Aenean commodo ligula eget dolor. Aenean massa.",
    "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.",
    "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    "Nulla consequat massa quis enim.",
    "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
    "Nullam dictum felis eu pede mollis pretium.",
    "Integer tincidunt. Cras dapibus.",
    "Vivamus elementum semper nisi.",
    "Aenean vulputate eleifend tellus.",
    "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
    "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
    "Phasellus viverra nulla ut metus varius laoreet.",
    "Quisque rutrum. Aenean imperdiet.",
    "Etiam ultricies nisi vel augue.",
    "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
    "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit ipsuminus max.",
    "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.",
    "Maecenas nec odio et ante tincidunt tempus.",
    "Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.",
    "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.",
    "Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.",
    "Sed consequat, leo eget bibendum sodales, augue velit cursus nunc."
];

var index;
var indexPhraseLaPlusLongue;

// On suppose au début que la phrase la plus longue est la première.
indexPhraseLaPlusLongue = 0;

for (var index = 0; index < phrases.length; index++) {
    if (indexPhraseLaPlusLongue < phrases[index].length) {
        indexPhraseLaPlusLongue = phrases[index].length;
        contenu = phrases[index];
    }
}
document.write('<hr /><h3>Phrase la plus longue !</h3><p>La phrase la plus longue a l\'index N°' + index + ' et contient ' + indexPhraseLaPlusLongue + ' caractères.</p>');
document.write('<p>La phrase la plus longue est : ' + contenu + '.</p>');


//==========FRED==========//
var index;
var indexPhraseLaPlusLongue;

// On suppose au début que la phrase la plus longue est la première.
indexPhraseLaPlusLongue = 0;

// La boucle va parcourir l'ensemble du tableau de phrases et s'arrêtera à la dernière.
for(index = 1; index < phrases.length; index++)
{
    /*
     * phrases représente le tableau de toutes les phrases
     * phrases[index] représente un élément du tableau, une phrase
     *
     * Chaque élément du tableau est une chaîne de caractères
     * La propriété .length permet d'obtenir la longueur d'une chaîne de caractères
     * phrases[index].length représente donc la longueur d'une phrase dans le tableau
     *
     * On compare la longueur de la phrase courante avec celle qu'on pense être la plus longue
     * (en utilisant la variable indexPhraseLongue)
     */
    if(phrases[index].length > phrases[indexPhraseLaPlusLongue].length)
    {
        /*
         * La phrase courante est plus longue que celle qui était la plus longue jusqu'à présent
         * On change donc l'indice de la phrase la plus longue en utilisant celui de la phrase courante
         */
        indexPhraseLaPlusLongue = index;
    }
}

// Affichage du résultat directement dans la page HTML.
document.write
(
    '<p>' +
        "La phrase la plus longue est : '" +
        phrases[indexPhraseLaPlusLongue] + "' " +
        'et elle fait ' +
        phrases[indexPhraseLaPlusLongue].length + ' ' +
        'caractère(s) !' +
    '</p>'
);

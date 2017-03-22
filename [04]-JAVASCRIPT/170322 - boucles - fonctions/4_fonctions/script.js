//==========COURS==========//
// nous avons déjà travaillé avec des fonctions, natives à JS

var cart = ['Playstation4'];
cart.push('Manette');// ajoute à la fin
console.log(cart);
document.write(cart);

document.write('<hr />');

cart.push('Hub');// ajoute à la fin
console.log(cart);
document.write(cart);

document.write('<hr />');

cart.push('Multiprise', 'Souris', 'Clé USB');// ajoute à la fin
console.log(cart);
document.write(cart);

document.write('<hr />');

cart.pop();// supprime la dernière entrée d'un tableau
console.log(cart);
document.write(cart);

document.write('<hr />');

cart.shift();// supprime la première entrée d'un tableau
console.log(cart);
document.write(cart);

document.write('<hr />');

cart.shift();// ajoute au début d'un tableau
console.log(cart);
document.write(cart);

document.write('<hr />');

// on peut aussi créer ses propres fonctions
// je déclare ma fonction (on crée la fonction qui est disponible pour plus tard et l'appeler quand on veut)
function direBonjour(){
    document.write("Salut Pierrefitte !");
}
// j'appelle ma fonction pour l'exécuter
direBonjour();
document.write('<hr />');
// avec des paramètres
function helloToi(prenom){
    document.write('Hello ' +  prenom);
}
// j'appelle ma fonction pour l'exécuter
helloToi('Mila');
document.write('<hr />');

//==========EXO==========//
document.write('<h3>Exercice</h3><br /><p>Créer une fonction additionner</p>');

function additionner(nb1, nb2){
    var res = nb1 + nb2;
    document.write('Le résultat de ' +nb1+ ' + ' +nb2+ ' est ' + res);
}
additionner(55, 102);

document.write('<hr /><h3>Exercice</h3><br /><p>Créer une fonction calculatrice</p>');
var res;
function calculatrice(nb1, nb2, op){
    switch(op) {
    case '+' :
    res = nb1 + nb2;
    break;

    case '-' :
    res = nb1 - nb2;
    break;

    case '*' :
    res = nb1 * nb2;
    break;

    case '/' :
    res = nb1 / nb2;
    break;
    }
    document.write('Le résultat de ' +nb1+ ' ' + op + ' ' +nb2+ ' est ' + res);
}
calculatrice(10, 2, '/');

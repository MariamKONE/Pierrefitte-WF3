//========== EXEMPLES ==========

var maison;

maison = new Object();
maison = {};

maison.couleurMurs = 'rouge';
maison.nbPiece = 3;
maison.estages = 2;

var user = {};

user.firstname = 'Fred';
user.friendList = ['Marie', 'Lea'];

// la même chose en notation groupée
var user = {
    firstname : 'Fred',
    lastname : 'Dupont',
    friendList : ['Marie', 'Lea']
}

//========= EXERCICE ==========
// ## Enoncé
//
// Créer puis afficher en HTML un objet contenant les propriétés d'une voiture :
// 1. La marque de la voiture
// 2. Son année de fabrication
// 3. Sa date d'achat
// 4. La liste des passagers, avec le prénom de chacun des passagers
//
// ## Remarques
//
// * Afficher les propriétés de l'objet voiture sous la forme d'une liste HTML
// * On peut stocker un objet dans un tableau tout comme on peut stocker un tableau dans un objet...
// * On peut représenter n'importe quelle date en JavaScript en donnant une chaîne de caractères au moment de la création d'un objet de la classe Date
// * La chaîne de caractères doit être au format américain YYYY-MM-DD :
//
//
// 	var monAnniversaire = new Date('2014-04-05')
	// Représente la date du 5 avril 2014

var car = new Object();//création d'un nouvel object 'car'
var car = {//déclaration des propriétés de mon objet 'car'
    marque : 'Peugeot',
    annee : '2017',
    date_achat : new Date('2017-04-05'),
    passagers : ['Abdoul', 'Benji', 'Mila']
}
var table_date = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
var table_day = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

document.write('<h1>Objet Voiture</h1><h3>Informations sur la voiture :</h3>');
//sans mise en forme de la date
//document.write('<ul><li>Marque : ' + car.marque + '</li><li>Année de fabrication : ' + car.annee + '</li><li>Date d\'achat : ' + car.dateAchat + '</li><li>Passager 1 : ' + car.passagers[0] + '</li><li>Passager 2 : ' + car.passagers[1] + '</li><li>Passager 3 : ' + car.passagers[2] + '</li></ul>');

//avec mise en forme de la date
document.write('<ul><li>Marque : ' + car.marque + '</li><li>Année de fabrication : ' + car.annee + '</li><li>Date d\'achat : ' + table_date[car.date_achat.getDay()] + ' ' + car.date_achat.getDate() + ' ' + table_day[car.date_achat.getMonth()] + ' ' + car.date_achat.getFullYear() + '</li><li>Passager 1 : ' + car.passagers[0] + '</li><li>Passager 2 : ' + car.passagers[1] + '</li><li>Passager 3 : ' + car.passagers[2] + '</li></ul>');

console.log(car);

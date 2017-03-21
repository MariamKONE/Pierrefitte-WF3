var today = new Date();
// document.write(today);

var table_date = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
var table_day = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

// document.write(table_date[1]);
document.write('Nous sommes le ' + table_date[today.getDay()] + ' ' + today.getDate() + ' ' + table_day[today.getMonth()] + ' ' + today.getFullYear() + ' depuis ce matin !');

// var nb_day = today.getDate();
// document.write(nb_day);
//
// var index_day = today.getDay();
// document.write(index_day);
//
// var index_month = today.getMonth();
// document.write(index_month);
//
// var year = today.getFullYear();
// document.write(year);

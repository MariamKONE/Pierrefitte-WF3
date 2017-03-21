var tableau = [];

tableau[0] = 'Lundi';
tableau[1] = 'Mardi';
tableau[2] = 'Mercredi';
tableau[3] = 'Jeudi';
tableau[4] = 'Vendredi';
tableau[5] = 'Samedi';
tableau[6] = 'Dimanche';

document.write(tableau[1]);
document.write('<br />');

console.log(tableau[0]);
document.write(tableau[5]);
document.write('<br />');

// Le premier jour de la semaine est le ...
document.write('<p>Le premier jour de la semaine est le ' + tableau[0] + '.</p>');

// Le dernier jour de la semaine est le ...
document.write('<p>Le dernier jour de la semaine est le ' + tableau[6] + '.</p>');

var table = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
document.write(table[2]);

//=========== EXERCICE ==========

// Afficher une alerte "Vous êtes majeur !"

var age;
age = window.prompt('Quel est votre âge ?');

if(age >= 18){
    window.alert('Vous êtes majeur !');
    document.write('<h2>Vous êtes majeur !</h2>');
}else {
    window.alert('Vous n\'êtes PAS majeur !');
    document.write('<h2>Vous n\'êtes PAS majeur !</h2>');
}

// avec sinon si
var age;
age = window.prompt('Quel est votre âge ?');

if(age >= 100){
    window.alert('Vous avez plus de cent ans, le code ça va être chaud !');
    document.write('<h2>Vous avez plus de cent ans, le code ça va être chaud !</h2>');
else if(age >= 18){
    window.alert('Vous êtes majeur !');
    document.write('<h2>Vous êtes majeur !</h2>');
}else {
    window.alert('Vous n\'êtes PAS majeur !');
    document.write('<h2>Vous n\'êtes PAS majeur !</h2>');
}

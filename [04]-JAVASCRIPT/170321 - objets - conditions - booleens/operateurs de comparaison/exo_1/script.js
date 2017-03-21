//=========== EXERCICE ==========

// Afficher une alerte "Vous êtes majeur !"

var age;
age = window.prompt('Quel est votre âge ?');

if(age >= 18){
    window.alert('Vous êtes majeur !');
}else {
    window.alert('Vous n\'êtes PAS majeur !');
}

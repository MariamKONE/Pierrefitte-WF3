var ht = window.prompt('Saisir le nombre HT :');
const TAUX_TVA = 0.2;
ht = parseFloat(ht);
console.log('montant ht ' + ht);
var ttc = ht * (1 + TAUX_TVA);
console.log('montant ttc ' + ttc);
var tva = ttc - ht;
console.log('montant tva ' + tva);

document.write('<h3>Résultat de l\'exercice :</h3>');
document.write('<p>Pour un montant HT de ' + ht + '€, il y a ' + tva + '€ de TVA.</p>');
document.write('<p>Le montant TTC est donc de ' + ttc + '€.</p>');

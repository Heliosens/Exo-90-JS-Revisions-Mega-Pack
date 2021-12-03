let nomVoiture = "Peugeot";

let x = 50;

let z = 5;
let w = 10;
document.getElementById('demo').innerHTML = "z vaut " + z + ", w vaut " + w + ", le résultat est " + (z + w);

d = z + w;

let prenom = "John";
let nom = "doe";
let age = 35;

alert(10/2);

alert(15%9);

let l = 10;
let k = 5;

l += k

function maFonction (){
    alert("Salut tout le monde !");
}

maFonction();

function maFonctionDeRetour (){
    return "Bonjour !"
}

document.getElementById('demoRetour').innerHTML = maFonctionDeRetour();

document.getElementById('monBouton').addEventListener('click', function (){
    alert('Listener du bouton');
})

document.getElementById('changeSurOver').addEventListener('mouseover', function (){
    this.style.backgroundColor = "red";
})

let txt = "une longue phrase";

let longueur = txt.length;
alert(longueur);

let str1 = "Bonjour ";
let str2 = "le monde !";

alert((str1 + str2).toString());

let listeVoiture = ["Renault","Volvo","Citroen"];

let maVoiture = listeVoiture[1];

listeVoiture[0] = "Ford";

alert(listeVoiture.length);

listeVoiture.pop();

listeVoiture.push("Ferrari");

let rNumber = Math.floor(Math.random() * 10);

let fNumber = 15.7;
Math.round(fNumber);

let nombreUn = 10;
let nombreDeux = 5;

if(nombreUn > nombreDeux){
    alert("nombreUn est supérieur à nombreDeux");
}

let nombreTrois = 10;
let nombreQuatre = 10;

if(nombreTrois === nombreQuatre){
    alert("nombreTrois est égal à nombreQuatre");
}

if(nombreUn !== nombreDeux){
    alert("nombreUn n'est pas égal à nombreDeux");
}

for(let i = 0 ; i < 10 ; i++){
    console.log(i);
}

let fruit = ["pomme","banane","poire"];

for(let i = 0 ; i < fruit.length ; i++){
    console.log(i);
}

let i = 0;
while (i < 10){
    console.log("while i < 10 : " + i);
    i++;
}

i = 0;
while (i < 10){
    console.log("while +2 : " + i);
    i+= 2;
}

for(let i = 0 ; i < 10 ; i++){
    console.log(i);
    if(i === 5){
        alert("i = " + i);
    }
}


/**
 * Created by sstienface on 16/10/2018.
 */


// Inutile de modifier le code suivant

var articles = [
    "Orangina",
    "Creme Fraiche",
    "Tartiflette",
    "Emmental",
    "Bananes",
    "Chips",
    "Bieres",
    "Pizza",
    "Chocolat",
    "Carotte",
    "Patate"
];

// Votre code à partir d'ici :

function Liste () {

    var i = 0;

    while (i < articles.length) {

        var liste = document.createElement('li');

        document.getElementById('listeCourse').appendChild(liste);

        liste.innerHTML = articles[i];

        liste.style.fontSize = "20px";

        var Btn = document.createElement('button');

        document.getElementById('listeCourse').appendChild(Btn);

        Btn.innerHTML = articles[i];

        Btn.id = 'Btn';

        liste.id = 'Liste';



        i++;   

    }

}

var Diiv = document.createElement('div');

var Recherche = document.createElement('input');

document.getElementById('viewport').appendChild(Recherche);

Diiv.innerHTML = Recherche;

var Valider = document.createElement('button');

document.getElementById('viewport').appendChild(Valider);

Valider.innerHTML = 'Valider';

Recherche.id = 'barre';

Valider.id = 'bouton';

Recherche.setAttribute('type', 'text');

Liste ();



document.getElementById('bouton').addEventListener("click",
    function () {

    document.getElementById('listeCourse').innerHTML = '';

    articles.push(document.getElementById('barre').value);

    Liste ();

    Div.innerHTML = "J'ai besoin de" + " " + articles;

});



var Bouton = document.createElement('button');

document.getElementById('viewport').appendChild(Bouton);

Bouton.innerHTML = 'Supprimer';

Bouton.id = 'Supprimer';



document.getElementById('Supprimer').addEventListener("click", function () {

    document.getElementById('listeCourse').innerHTML = '';

    articles.pop();

    Liste ();

    Div.innerHTML = "J'ai besoin de" + " " + articles;

});

var Div = document.createElement('div');

document.getElementById('viewport').appendChild(Div);

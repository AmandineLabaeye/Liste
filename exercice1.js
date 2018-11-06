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

var i = 0;

while (i < articles.length) {

    var liste = document.createElement('li');

    document.getElementById('listeCourse').appendChild(liste);

    liste.innerHTML = articles[i];

    var bouton = document.createElement('button');

    liste.appendChild(bouton);

    document.addEventListener("click", function () {

        if (bouton < articles) {
            articles.style.display = 'none';
            articles.style.display = "block";
        }

        if (bouton > articles) {
            articles.style.display = "none";
        }
      });

    i++;

}





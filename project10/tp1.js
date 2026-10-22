function direBonjour() {
    document.getElementById("message").textContent = "Bonjour ! Bienvenue sur ma page.";
}

function afficherDate() {
    var maintenant = new Date();
    var texte = "Nous somme le " + maintenant.toLocaleDateString("fr-FR") +
        " et il est" +maintenant.toLocaleTimeString("fr-FR") + ".";
        document.getElementById("message").textContent = texte;
}

function changerCouleur() {
    var couleurs = ["#ffeaa7", "#fab1a0", "#81ecec", "#a29bfe", "#b2f2bb"];
    var indice = Math.floor(Math.random() * couleurs.length);
    document.body.style.backgroundColor = couleurs[indice];
    document.getElementById("message").textContent = "Nouvelle couleur de fond : " + couleurs[indice];
}

function nombreAleatoire() {
    var nombre = Math.floor(Math.random() * 100) + 1;
    document.getElementById("message").textContent = "Votre nombre aléatoire est : " + nombre;
}

function effacer() {
    document.getElementById("message").textContent = "";
}

function verif_age() {
let n1 = prompt("Donnez votre age :");
document.getElementById("message").textContent = "Votre age est : " + n1 + " ans.";

if (n1 < 18) {
    document.write("Vous êtes mineur");
    document.body.style.backgroundColor = "red";
} else {
    document.write("Vous êtes majeur");
    document.body.style.backgroundColor = "green";
}
}
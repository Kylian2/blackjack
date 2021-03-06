const nameContener = document.getElementById("name");
const walletContener = document.getElementById("wallet");
const miseContener = document.getElementById("mise");
const coutContener = document.getElementById("cout");
const topBarre = document.getElementById("top-barre");
const plateauJeu = document.getElementById("plateau-de-jeu");
const jeuJoueur = document.getElementById("jeu-joueur");
const jeuDealer = document.getElementById("jeu-dealer");
const affichageCarte = document.getElementsByClassName("affichage-carte");
const bravo = document.getElementById("jeu-fini");
const unactiver = document.getElementById("unactiver");

const conteneurCarteJoueur1 = document.getElementById("carte-joueur-1");
const conteneurCarteJoueur2 = document.getElementById("carte-joueur-2");
const conteneurCarteJoueur3 = document.getElementById("carte-joueur-3");
const conteneurCarteJoueur4 = document.getElementById("carte-joueur-4");
const conteneurCarteJoueur5 = document.getElementById("carte-joueur-5");
const conteneurCarteJoueur6 = document.getElementById("carte-joueur-6");
const conteneurCarteJoueur7 = document.getElementById("carte-joueur-7");

const conteneurCarteDealer1 = document.getElementById("carte-dealer-1");
const conteneurCarteDealer2 = document.getElementById("carte-dealer-2");
const conteneurCarteDealer3 = document.getElementById("carte-dealer-3");
const conteneurCarteDealer4 = document.getElementById("carte-dealer-4");
const conteneurCarteDealer5 = document.getElementById("carte-dealer-5");
const conteneurCarteDealer6 = document.getElementById("carte-dealer-6");
const conteneurCarteDealer7 = document.getElementById("carte-dealer-7");

const persoCase1 = document.getElementById("perso-case-1");
const persoCase2 = document.getElementById("perso-case-2");
const persoCase3 = document.getElementById("perso-case-3");
const persoCase4 = document.getElementById("perso-case-4");
const persoCase5 = document.getElementById("perso-case-5");
const persoCase6 = document.getElementById("perso-case-6");
const persoCase7 = document.getElementById("perso-case-7");
const persoCase8 = document.getElementById("perso-case-8");
const persoCase9 = document.getElementById("perso-case-9");
const persoCase10 = document.getElementById("perso-case-10");
const persoCase11 = document.getElementById("perso-case-11");
const persoCase12 = document.getElementById("perso-case-12");
const persoCase13 = document.getElementById("perso-case-13");
const persoCase14 = document.getElementById("perso-case-14");
const persoCase15 = document.getElementById("perso-case-15");

const cookiesTrue = document.getElementById("cookies-true");
const cookiesFalse = document.getElementById("cookies-false");
const cookiesAlert = document.getElementById("accept-cookies-conteneur");

var cookiesAccepte = getCookie("cookiesAnswers") || false;

const conteneurCarte = document.getElementsByClassName("carte-contener");

const info = document.getElementById("info");
info.textContent = "Validez la mise pour commencer";

const affichageCarteJoueur = document.getElementById("affichage-carte-joueur");
const affichageCarteDealer = document.getElementById("affichage-carte-dealer");

const boutonConnection = document.getElementById("connection");
const pageDeConnection = document.getElementById("page-de-connection");
const pseudo = document.getElementById("pseudo");
const password = document.getElementById("password");

const boutonRegle = document.getElementById("regle-bouton");
const regle = document.getElementById("regle");

const boutonCarte = document.getElementById("carte-bouton");
const carteAvancement = document.getElementById("carte-avancement");

const avancement = document.getElementById("avancement");
const boutonCaseSuivante = document.getElementById("case-suivante");
const boutonSauterCase = document.getElementById("sauter-case");

const infoSommeDealer = document.getElementById("somme-dealer");
const infoSommeJoueur = document.getElementById("somme-joueur");

const boutonDouble = document.getElementById("double");
const boutonTirer = document.getElementById("tirer");
const boutonRester = document.getElementById("rester");
const valideMise = document.getElementById("valide-mise");

var blocker = false;

const defaultMise = 1000;
var actualMise = 1000;
const miseMax = 50000;
const miseMin = 100;
miseContener.textContent = actualMise;

const defaultWallet = 5000;
var actualWallet = getCookie("wallet") || defaultWallet;
walletContener.textContent = actualWallet;

var dealerSomme = 0;
var joueurSomme = 0;
infoSommeDealer.textContent = dealerSomme;
infoSommeJoueur.textContent = joueurSomme;

var nombreCarteDealerTirer = 0;
var nombreCarteJoueurTirer = 0;

const defaultCase = 1;
var actualCase = parseInt(getCookie("case")) || defaultCase;
avancement.textContent = actualCase;
changerLeBonhommeDeCase();

const listCout = [
  // contient les prix pour passer ?? la case suivante
  1000, 1500.0, 2500.0, 4000.0, 5000.0, 6500.0, 8500.0, 12000.0, 15000.0,
  18500.0, 22500.0, 26000.0, 30500.0, 34500.0, 39500.0, 45000.0, 50000.0,
];
coutContener.textContent =
  listCout[parseInt(getCookie("case")) - 1] || listCout[0];

var deck = [
  // contient 8 jeu de 52 cartes sans joker 
  "trefle-2--",
  "trefle-3--",
  "trefle-4--",
  "trefle-5--",
  "trefle-6--",
  "trefle-7--",
  "trefle-8--",
  "trefle-9--",
  "trefle-10--",
  "trefle-as--",
  "trefle-roi--",
  "trefle-reine--",
  "trefle-valet--",
  "carreaux-2--",
  "carreaux-3--",
  "carreaux-4--",
  "carreaux-5--",
  "carreaux-6--",
  "carreaux-7--",
  "carreaux-8--",
  "carreaux-9--",
  "carreaux-10--",
  "carreaux-as--",
  "carreaux-roi--",
  "carreaux-reine--",
  "carreaux-valet--",
  "pique-2--",
  "pique-3--",
  "pique-4--",
  "pique-5--",
  "pique-6--",
  "pique-7--",
  "pique-8--",
  "pique-9--",
  "pique-10--",
  "pique-as--",
  "pique-roi--",
  "pique-reine--",
  "pique-valet--",
  "coeur-2--",
  "coeur-3--",
  "coeur-4--",
  "coeur-5--",
  "coeur-6--",
  "coeur-7--",
  "coeur-8--",
  "coeur-9--",
  "coeur-10--",
  "coeur-as--",
  "coeur-roi--",
  "coeur-reine--",
  "coeur-valet--",
  "trefle-2--",
  "trefle-3--",
  "trefle-4--",
  "trefle-5--",
  "trefle-6--",
  "trefle-7--",
  "trefle-8--",
  "trefle-9--",
  "trefle-10--",
  "trefle-as--",
  "trefle-roi--",
  "trefle-reine--",
  "trefle-valet--",
  "carreaux-2--",
  "carreaux-3--",
  "carreaux-4--",
  "carreaux-5--",
  "carreaux-6--",
  "carreaux-7--",
  "carreaux-8--",
  "carreaux-9--",
  "carreaux-10--",
  "carreaux-as--",
  "carreaux-roi--",
  "carreaux-reine--",
  "carreaux-valet--",
  "pique-2--",
  "pique-3--",
  "pique-4--",
  "pique-5--",
  "pique-6--",
  "pique-7--",
  "pique-8--",
  "pique-9--",
  "pique-10--",
  "pique-as--",
  "pique-roi--",
  "pique-reine--",
  "pique-valet--",
  "coeur-2--",
  "coeur-3--",
  "coeur-4--",
  "coeur-5--",
  "coeur-6--",
  "coeur-7--",
  "coeur-8--",
  "coeur-9--",
  "coeur-10--",
  "coeur-as--",
  "coeur-roi--",
  "coeur-reine--",
  "coeur-valet--",
  "trefle-2--",
  "trefle-3--",
  "trefle-4--",
  "trefle-5--",
  "trefle-6--",
  "trefle-7--",
  "trefle-8--",
  "trefle-9--",
  "trefle-10--",
  "trefle-as--",
  "trefle-roi--",
  "trefle-reine--",
  "trefle-valet--",
  "carreaux-2--",
  "carreaux-3--",
  "carreaux-4--",
  "carreaux-5--",
  "carreaux-6--",
  "carreaux-7--",
  "carreaux-8--",
  "carreaux-9--",
  "carreaux-10--",
  "carreaux-as--",
  "carreaux-roi--",
  "carreaux-reine--",
  "carreaux-valet--",
  "pique-2--",
  "pique-3--",
  "pique-4--",
  "pique-5--",
  "pique-6--",
  "pique-7--",
  "pique-8--",
  "pique-9--",
  "pique-10--",
  "pique-as--",
  "pique-roi--",
  "pique-reine--",
  "pique-valet--",
  "coeur-2--",
  "coeur-3--",
  "coeur-4--",
  "coeur-5--",
  "coeur-6--",
  "coeur-7--",
  "coeur-8--",
  "coeur-9--",
  "coeur-10--",
  "coeur-as--",
  "coeur-roi--",
  "coeur-reine--",
  "coeur-valet--",
  "trefle-2--",
  "trefle-3--",
  "trefle-4--",
  "trefle-5--",
  "trefle-6--",
  "trefle-7--",
  "trefle-8--",
  "trefle-9--",
  "trefle-10--",
  "trefle-as--",
  "trefle-roi--",
  "trefle-reine--",
  "trefle-valet--",
  "carreaux-2--",
  "carreaux-3--",
  "carreaux-4--",
  "carreaux-5--",
  "carreaux-6--",
  "carreaux-7--",
  "carreaux-8--",
  "carreaux-9--",
  "carreaux-10--",
  "carreaux-as--",
  "carreaux-roi--",
  "carreaux-reine--",
  "carreaux-valet--",
  "pique-2--",
  "pique-3--",
  "pique-4--",
  "pique-5--",
  "pique-6--",
  "pique-7--",
  "pique-8--",
  "pique-9--",
  "pique-10--",
  "pique-as--",
  "pique-roi--",
  "pique-reine--",
  "pique-valet--",
  "coeur-2--",
  "coeur-3--",
  "coeur-4--",
  "coeur-5--",
  "coeur-6--",
  "coeur-7--",
  "coeur-8--",
  "coeur-9--",
  "coeur-10--",
  "coeur-as--",
  "coeur-roi--",
  "coeur-reine--",
  "coeur-valet--",
  "trefle-2--",
  "trefle-3--",
  "trefle-4--",
  "trefle-5--",
  "trefle-6--",
  "trefle-7--",
  "trefle-8--",
  "trefle-9--",
  "trefle-10--",
  "trefle-as--",
  "trefle-roi--",
  "trefle-reine--",
  "trefle-valet--",
  "carreaux-2--",
  "carreaux-3--",
  "carreaux-4--",
  "carreaux-5--",
  "carreaux-6--",
  "carreaux-7--",
  "carreaux-8--",
  "carreaux-9--",
  "carreaux-10--",
  "carreaux-as--",
  "carreaux-roi--",
  "carreaux-reine--",
  "carreaux-valet--",
  "pique-2--",
  "pique-3--",
  "pique-4--",
  "pique-5--",
  "pique-6--",
  "pique-7--",
  "pique-8--",
  "pique-9--",
  "pique-10--",
  "pique-as--",
  "pique-roi--",
  "pique-reine--",
  "pique-valet--",
  "coeur-2--",
  "coeur-3--",
  "coeur-4--",
  "coeur-5--",
  "coeur-6--",
  "coeur-7--",
  "coeur-8--",
  "coeur-9--",
  "coeur-10--",
  "coeur-as--",
  "coeur-roi--",
  "coeur-reine--",
  "coeur-valet--",
  "trefle-2--",
  "trefle-3--",
  "trefle-4--",
  "trefle-5--",
  "trefle-6--",
  "trefle-7--",
  "trefle-8--",
  "trefle-9--",
  "trefle-10--",
  "trefle-as--",
  "trefle-roi--",
  "trefle-reine--",
  "trefle-valet--",
  "carreaux-2--",
  "carreaux-3--",
  "carreaux-4--",
  "carreaux-5--",
  "carreaux-6--",
  "carreaux-7--",
  "carreaux-8--",
  "carreaux-9--",
  "carreaux-10--",
  "carreaux-as--",
  "carreaux-roi--",
  "carreaux-reine--",
  "carreaux-valet--",
  "pique-2--",
  "pique-3--",
  "pique-4--",
  "pique-5--",
  "pique-6--",
  "pique-7--",
  "pique-8--",
  "pique-9--",
  "pique-10--",
  "pique-as--",
  "pique-roi--",
  "pique-reine--",
  "pique-valet--",
  "coeur-2--",
  "coeur-3--",
  "coeur-4--",
  "coeur-5--",
  "coeur-6--",
  "coeur-7--",
  "coeur-8--",
  "coeur-9--",
  "coeur-10--",
  "coeur-as--",
  "coeur-roi--",
  "coeur-reine--",
  "coeur-valet--",
  "trefle-2--",
  "trefle-3--",
  "trefle-4--",
  "trefle-5--",
  "trefle-6--",
  "trefle-7--",
  "trefle-8--",
  "trefle-9--",
  "trefle-10--",
  "trefle-as--",
  "trefle-roi--",
  "trefle-reine--",
  "trefle-valet--",
  "carreaux-2--",
  "carreaux-3--",
  "carreaux-4--",
  "carreaux-5--",
  "carreaux-6--",
  "carreaux-7--",
  "carreaux-8--",
  "carreaux-9--",
  "carreaux-10--",
  "carreaux-as--",
  "carreaux-roi--",
  "carreaux-reine--",
  "carreaux-valet--",
  "pique-2--",
  "pique-3--",
  "pique-4--",
  "pique-5--",
  "pique-6--",
  "pique-7--",
  "pique-8--",
  "pique-9--",
  "pique-10--",
  "pique-as--",
  "pique-roi--",
  "pique-reine--",
  "pique-valet--",
  "coeur-2--",
  "coeur-3--",
  "coeur-4--",
  "coeur-5--",
  "coeur-6--",
  "coeur-7--",
  "coeur-8--",
  "coeur-9--",
  "coeur-10--",
  "coeur-as--",
  "coeur-roi--",
  "coeur-reine--",
  "coeur-valet--",
  "trefle-2--",
  "trefle-3--",
  "trefle-4--",
  "trefle-5--",
  "trefle-6--",
  "trefle-7--",
  "trefle-8--",
  "trefle-9--",
  "trefle-10--",
  "trefle-as--",
  "trefle-roi--",
  "trefle-reine--",
  "trefle-valet--",
  "carreaux-2--",
  "carreaux-3--",
  "carreaux-4--",
  "carreaux-5--",
  "carreaux-6--",
  "carreaux-7--",
  "carreaux-8--",
  "carreaux-9--",
  "carreaux-10--",
  "carreaux-as--",
  "carreaux-roi--",
  "carreaux-reine--",
  "carreaux-valet--",
  "pique-2--",
  "pique-3--",
  "pique-4--",
  "pique-5--",
  "pique-6--",
  "pique-7--",
  "pique-8--",
  "pique-9--",
  "pique-10--",
  "pique-as--",
  "pique-roi--",
  "pique-reine--",
  "pique-valet--",
  "coeur-2--",
  "coeur-3--",
  "coeur-4--",
  "coeur-5--",
  "coeur-6--",
  "coeur-7--",
  "coeur-8--",
  "coeur-9--",
  "coeur-10--",
  "coeur-as--",
  "coeur-roi--",
  "coeur-reine--",
  "coeur-valet--",
];

deckJouable = melangerDeck();

var derniereCarteTirer = "";
var deuxiemeCarteTirerDealer = "";

const codeToucheFlecheHaut = 91;
const codeToucheFlecheBas = 40;
const codeToucheA = 65;
const codeToucheS = 83;
const codeToucheD = 68;
const codeToucheEntree = 13;
const codeToucheSpace = 32;

var clavierBloquer = true;

function areThereAnyCookies() { 
  /* Cherche l'existence de cookies et si les cookies ont ??t?? accepter
  Si oui, cela prolonge leurs dur??e */
  var date = new Date(Date.now() + 86400000 * 7); //86400000ms = 1 jour
  date = date.toUTCString();
  if (cookiesAccepte == true || cookiesAccepte == "true") {
    if (getCookie("wallet") == null) {
      document.cookie = `wallet=${actualWallet}; expires=${date};`;
    } else if (getCookie("case") == null) {
      document.cookie = `case=${actualCase}; expires=expires=${date};`;
    }
  }
}

function newUser(name, password) {
  // fonction utis??e avec la page de connection, NON-UTILISABLE, permet de stock?? les
  // donn??e le l'utilisateur. La fonction n'est pas termin??e puisque nous avons d??cid??
  // de ne pas utlis?? la page de connection 
  user = {
    name: name,
    password: password,
    actualWallet: defaultWallet,
  };
  return user;
}

var date = new Date();
var jours = (cookiesTrue.onclick = function () {
  var date = new Date(Date.now() + 86400000 * 7); //86400000ms = 1 jour
  date = date.toUTCString();
  cookiesAccepte = true;
  document.cookie = `cookiesAnswers=true; expires=${date};`;
  cookiesAlert.style.display = "none";
});

cookiesFalse.onclick = function () {
  cookiesAccepte = false;
  cookiesAlert.style.display = "none";
};

function isCookiesAccepte() {
  if (cookiesAccepte == true || cookiesAccepte == "true") {
    cookiesAlert.style.display = "none";
  }
}

isCookiesAccepte();

/* FONTION NON UTLIS??E
boutonConnection.onclick = function () {
  newUser(pseudo.value, password.value);
  nameContener.textContent = user.name;
  topBarre.style.display = "flex";
  plateauJeu.style.display = "flex";
  pageDeConnection.style.display = "none";
};
*/

boutonRegle.onclick = function () {
  regle.classList.toggle("regle-unactiv");
  carteAvancement.classList.add("carte-unactiv");
  unactiver.classList.toggle("unactive");
};

boutonCarte.onclick = function () {
  carteAvancement.classList.toggle("carte-unactiv");
  regle.classList.add("regle-unactiv");
  unactiver.classList.toggle("unactive");
};

unactiver.onclick = function () {
  regle.classList.add("regle-unactiv");
  carteAvancement.classList.add("carte-unactiv");
  unactiver.classList.add("unactive");
};

boutonCaseSuivante.onclick = function () {
  if (actualCase == 15) {
    isWin();
    return;
  }
  if (listCout[actualCase - 1] < actualWallet) {
    newCase = actualCase + 1;
    avancement.textContent = newCase;
    actualWallet = actualWallet - listCout[actualCase - 1];
    coutContener.textContent = listCout[actualCase];
    walletContener.textContent = actualWallet;
    actualCase = newCase;
    if (cookiesAccepte == true || cookiesAccepte == "true") {
      document.cookie = `case=${actualCase};`;
      document.cookie = `wallet=${actualWallet};`;
    }
    changerLeBonhommeDeCase();
    isWin();
  } else {
    return;
  }
};

boutonSauterCase.onclick = function () {
  if (actualCase == 15) {
    isWin();
    return;
  }
  if (actualCase == 14) {
    if (listCout[actualCase - 1] < actualWallet) {
      newCase = actualCase + 1;
      avancement.textContent = newCase;
      actualWallet = actualWallet - listCout[actualCase - 1];
      coutContener.textContent = listCout[actualCase];
      walletContener.textContent = actualWallet;
      actualCase = newCase;
      if (cookiesAccepte == true || cookiesAccepte == "true") {
        document.cookie = `case=${actualCase};`;
        document.cookie = `wallet=${actualWallet};`;
      }
      changerLeBonhommeDeCase();
      isWin();
      return;
    }
  }
  if (listCout[actualCase - 1] + listCout[actualCase] < actualWallet) {
    newCase = actualCase + 2;
    avancement.textContent = newCase;
    actualWallet =
      actualWallet - (listCout[actualCase - 1] + listCout[actualCase]);
    walletContener.textContent = actualWallet;
    coutContener.textContent = listCout[actualCase + 1];
    actualCase = newCase;
    if (cookiesAccepte == true || cookiesAccepte == "true") {
      document.cookie = `case=${actualCase};`;
      document.cookie = `wallet=${actualWallet};`;
    }
    changerLeBonhommeDeCase();
    isWin();
  } else {
    return;
  }
};

function changerLeBonhommeDeCase() {
  // modifie la position du bonhomme sur la carte 
  if (actualCase == 1) {
    persoCase1.style.display = "block";
  } else if (actualCase == 2) {
    persoCase1.style.display = "none";
    persoCase1.style.display = "none";
    persoCase2.style.display = "block";
  } else if (actualCase == 3) {
    persoCase1.style.display = "none";
    persoCase2.style.display = "none";
    persoCase3.style.display = "block";
  } else if (actualCase == 4) {
    persoCase2.style.display = "none";
    persoCase3.style.display = "none";
    persoCase4.style.display = "block";
  } else if (actualCase == 5) {
    persoCase3.style.display = "none";
    persoCase4.style.display = "none";
    persoCase5.style.display = "block";
  } else if (actualCase == 6) {
    persoCase4.style.display = "none";
    persoCase5.style.display = "none";
    persoCase6.style.display = "block";
  } else if (actualCase == 7) {
    persoCase5.style.display = "none";
    persoCase6.style.display = "none";
    persoCase7.style.display = "block";
  } else if (actualCase == 8) {
    persoCase6.style.display = "none";
    persoCase7.style.display = "none";
    persoCase8.style.display = "block";
  } else if (actualCase == 9) {
    persoCase7.style.display = "none";
    persoCase8.style.display = "none";
    persoCase9.style.display = "block";
  } else if (actualCase == 10) {
    persoCase8.style.display = "none";
    persoCase9.style.display = "none";
    persoCase10.style.display = "block";
  } else if (actualCase == 11) {
    persoCase9.style.display = "none";
    persoCase10.style.display = "none";
    persoCase11.style.display = "block";
  } else if (actualCase == 12) {
    persoCase10.style.display = "none";
    persoCase11.style.display = "none";
    persoCase12.style.display = "block";
  } else if (actualCase == 13) {
    persoCase11.style.display = "none";
    persoCase12.style.display = "none";
    persoCase13.style.display = "block";
  } else if (actualCase == 14) {
    persoCase12.style.display = "none";
    persoCase13.style.display = "none";
    persoCase14.style.display = "block";
  } else if (actualCase == 15) {
    persoCase13.style.display = "none";
    persoCase14.style.display = "none";
    persoCase15.style.display = "block";
  }
}

function melangerDeck() {
  // range les cartes du deck dans un ordre al??atoire 
  var nombreIndice = deck.length;
  var nombreCarte = nombreIndice;
  var deckJouable = [];
  for (let i = 1; i <= nombreIndice; i++) {
    indiceAleatoire = Math.floor(Math.random() * nombreCarte);
    var valeur = deck[indiceAleatoire];
    deckJouable.push(valeur);
    deck.splice(indiceAleatoire, 1);
    nombreCarte -= 1;
  }
  return deckJouable;
}

function distribueCarte() {
  // distribue une carte
  derniereCarteTirer = deckJouable.shift();
  return derniereCarteTirer;
}

function reduireAsJoueur() {
  // reduit l'as du joueur ?? 1 si sa somme depasse 21 et qu'un as est sur son plateau 
  if (joueurAs11 == true && joueurSomme > 21) {
    joueurSomme -= 10;
    joueurAs11 = false;
  } else {
    return;
  }
}

function reduireAsDealer() {
  // reduit l'as du dealer ?? 1 si sa somme depasse 21 et qu'un as est sur son plateau 
  if (joueurAs11 == true && dealerSomme > 21) {
    dealerSomme -= 10;
    dealerAs11 = false;
  } else {
    return;
  }
}

function reduireAsDealer2() {
  // reduit l'as du dealer ?? 1 si sa somme depasse 21 et qu'un as est sur son plateau 
  if (joueurAs11 == true && newDealerSomme > 21) {
    newDealerSomme -= 10;
    dealerAs11 = false;
  } else {
    return;
  }
}

const test = deckJouable[0];
var joueurAs11 = false;
var dealerAs11 = false;

function sommeCarteJoueur(mot) {
  // calcule la somme des cartes du joueur 
  for (let i = 0; i < mot.length; i++) {
    if (mot[i] == "a" && mot[i + 1] == "s") {
      if (joueurSomme + 11 <= 21) {
        joueurSomme += 11;
        joueurAs11 = true;
      } else {
        joueurSomme += 1;
      }
      reduireAsJoueur();
      return joueurSomme;
    } else if (mot[i] == "r" && mot[i + 1] == "o" && mot[i + 2] == "i") {
      joueurSomme += 10;
      reduireAsJoueur();
      return joueurSomme;
    } else if (mot[i] == "r" && mot[i + 1] == "e" && mot[i + 2] == "i") {
      joueurSomme += 10;
      reduireAsJoueur();
      return joueurSomme;
    } else if (mot[i] == "v" && mot[i + 1] == "a" && mot[i + 2] == "l") {
      joueurSomme += 10;
      reduireAsJoueur();
      return joueurSomme;
    } else if (mot[i] == "2") {
      joueurSomme += 2;
      reduireAsJoueur();
      return joueurSomme;
    } else if (mot[i] == "3") {
      joueurSomme += 3;
      reduireAsJoueur();
      return joueurSomme;
    } else if (mot[i] == "4") {
      joueurSomme += 4;
      reduireAsJoueur();
      return joueurSomme;
    } else if (mot[i] == "5") {
      joueurSomme += 5;
      reduireAsJoueur();
      return joueurSomme;
    } else if (mot[i] == "6") {
      joueurSomme += 6;

      reduireAsJoueur();
      return joueurSomme;
    } else if (mot[i] == "7") {
      joueurSomme += 7;
      reduireAsJoueur();
      return joueurSomme;
    } else if (mot[i] == "8") {
      joueurSomme += 8;
      reduireAsJoueur();
      return joueurSomme;
    } else if (mot[i] == "9") {
      joueurSomme += 9;
      reduireAsJoueur();
      return joueurSomme;
    } else if (mot[i] == "1" && mot[i + 1] == "0") {
      joueurSomme += 10;
      reduireAsJoueur();
      return joueurSomme;
    }
  }
}

function sommeCarteDealer(mot) {
  // calcule la sommme des cartes du dealer 
  for (let i = 0; i < mot.length; i++) {
    if (mot[i] == "a" && mot[i + 1] == "s") {
      if (dealerSomme + 11 <= 21) {
        dealerSomme += 11;
      } else {
        dealerSomme += 1;
      }
      reduireAsDealer();
      return dealerSomme;
    } else if (mot[i] == "r" && mot[i + 1] == "o" && mot[i + 2] == "i") {
      dealerSomme += 10;
      reduireAsDealer();
      return dealerSomme;
    } else if (mot[i] == "r" && mot[i + 1] == "e" && mot[i + 2] == "i") {
      dealerSomme += 10;
      reduireAsDealer();
      return dealerSomme;
    } else if (mot[i] == "v" && mot[i + 1] == "a" && mot[i + 2] == "l") {
      dealerSomme += 10;
      reduireAsDealer();
      return dealerSomme;
    } else if (mot[i] == "2") {
      dealerSomme += 2;
      reduireAsDealer();
      return dealerSomme;
    } else if (mot[i] == "3") {
      dealerSomme += 3;
      reduireAsDealer();
      return dealerSomme;
    } else if (mot[i] == "4") {
      dealerSomme += 4;
      reduireAsDealer();
      return dealerSomme;
    } else if (mot[i] == "5") {
      dealerSomme += 5;
      reduireAsDealer();
      return dealerSomme;
    } else if (mot[i] == "6") {
      dealerSomme += 6;
      reduireAsDealer();
      return dealerSomme;
    } else if (mot[i] == "7") {
      dealerSomme += 7;
      reduireAsDealer();
      return dealerSomme;
    } else if (mot[i] == "8") {
      dealerSomme += 8;
      reduireAsDealer();
      return dealerSomme;
    } else if (mot[i] == "9") {
      dealerSomme += 9;
      reduireAsDealer();
      return dealerSomme;
    } else if (mot[i] == "1" && mot[i + 1] == "0") {
      dealerSomme += 10;
      reduireAsDealer();
      return dealerSomme;
    }
  }
}

function newSommeCarteDealer(mot) {
  // calcule la somme du score du dealer
  for (let i = 0; i < mot.length; i++) {
    if (mot[i] == "a" && mot[i + 1] == "s") {
      if (newDealerSomme + 11 <= 21) {
        newDealerSomme += 11;
      } else {
        newDealerSomme += 1;
      }
      reduireAsDealer2();
      return newDealerSomme;
    } else if (mot[i] == "r" && mot[i + 1] == "o" && mot[i + 2] == "i") {
      newDealerSomme += 10;
      reduireAsDealer2();
      return newDealerSomme;
    } else if (mot[i] == "r" && mot[i + 1] == "e" && mot[i + 2] == "i") {
      newDealerSomme += 10;
      reduireAsDealer2();
      return newDealerSomme;
    } else if (mot[i] == "v" && mot[i + 1] == "a" && mot[i + 2] == "l") {
      newDealerSomme += 10;
      reduireAsDealer2();
      return newDealerSomme;
    } else if (mot[i] == "2") {
      newDealerSomme += 2;
      reduireAsDealer2();
      return newDealerSomme;
    } else if (mot[i] == "3") {
      newDealerSomme += 3;
      reduireAsDealer2();
      return newDealerSomme;
    } else if (mot[i] == "4") {
      newDealerSomme += 4;
      reduireAsDealer2();
      return newDealerSomme;
    } else if (mot[i] == "5") {
      newDealerSomme += 5;
      reduireAsDealer2();
      return newDealerSomme;
    } else if (mot[i] == "6") {
      newDealerSomme += 6;
      reduireAsDealer2();
      return newDealerSomme;
    } else if (mot[i] == "7") {
      newDealerSomme += 7;
      reduireAsDealer2();
      return newDealerSomme;
    } else if (mot[i] == "8") {
      newDealerSomme += 8;
      reduireAsDealer2();
      return newDealerSomme;
    } else if (mot[i] == "9") {
      newDealerSomme += 9;
      reduireAsDealer2();
      return newDealerSomme;
    } else if (mot[i] == "1" && mot[i + 1] == "0") {
      newDealerSomme += 10;
      reduireAsDealer2();
      return newDealerSomme;
    }
  }
}

function quelleCarteAfficherJoueur(carte) {
  // Affiche les carte sur le plateau de jeu du joueur 
  var carteValeur = "";
  var carteType = "";
  for (let a = 0; a < carte.length; a++) {
    if (carte[a] == "a" && carte[a + 1] == "s") {
      carteValeur = "as";
    } else if (carte[a] == "r" && carte[a + 1] == "o" && carte[a + 2] == "i") {
      carteValeur = "roi";
    } else if (carte[a] == "r" && carte[a + 1] == "e" && carte[a + 2] == "i") {
      carteValeur = "reine";
    } else if (carte[a] == "v" && carte[a + 1] == "a" && carte[a + 2] == "l") {
      carteValeur = "valet";
    } else if (carte[a] == "2") {
      carteValeur = "2";
    } else if (carte[a] == "3") {
      carteValeur = "3";
    } else if (carte[a] == "4") {
      carteValeur = "4";
    } else if (carte[a] == "5") {
      carteValeur = "5";
    } else if (carte[a] == "6") {
      carteValeur = "6";
    } else if (carte[a] == "7") {
      carteValeur = "7";
    } else if (carte[a] == "8") {
      carteValeur = "8";
    } else if (carte[a] == "9") {
      carteValeur = "9";
    } else if (carte[a] == "1" && carte[a + 1] == "0") {
      carteValeur = "10";
    }
  }

  let i = 0;

  if (
    carte[i] == "t" &&
    carte[i + 1] == "r" &&
    carte[i + 2] == "e" &&
    carte[i + 3] == "f" &&
    carte[i + 4] == "l" &&
    carte[i + 5] == "e"
  ) {
    carteType = "trefle";
  } else if (
    carte[i] == "c" &&
    carte[i + 1] == "a" &&
    carte[i + 2] == "r" &&
    carte[i + 3] == "r" &&
    carte[i + 4] == "e" &&
    carte[i + 5] == "a" &&
    carte[i + 6] == "u" &&
    carte[i + 7] == "x"
  ) {
    carteType = "carreaux";
  } else if (
    carte[i] == "p" &&
    carte[i + 1] == "i" &&
    carte[i + 2] == "q" &&
    carte[i + 3] == "u" &&
    carte[i + 4] == "e"
  ) {
    carteType = "pique";
  } else if (
    carte[i] == "c" &&
    carte[i + 1] == "o" &&
    carte[i + 2] == "e" &&
    carte[i + 3] == "u" &&
    carte[i + 4] == "r"
  ) {
    carteType = "coeur";
  }

  if (nombreCarteJoueurTirer == 1) {
    conteneurCarteJoueur1.setAttribute(
      "src",
      `images/cartes/${carteType}-${carteValeur}.svg`
    );
  } else if (nombreCarteJoueurTirer == 2) {
    conteneurCarteJoueur2.setAttribute(
      "src",
      `images/cartes/${carteType}-${carteValeur}.svg`
    );
  } else if (nombreCarteJoueurTirer == 3) {
    conteneurCarteJoueur3.setAttribute(
      "src",
      `images/cartes/${carteType}-${carteValeur}.svg`
    );
  } else if (nombreCarteJoueurTirer == 4) {
    conteneurCarteJoueur4.setAttribute(
      "src",
      `images/cartes/${carteType}-${carteValeur}.svg`
    );
  } else if (nombreCarteJoueurTirer == 5) {
    conteneurCarteJoueur5.setAttribute(
      "src",
      `images/cartes/${carteType}-${carteValeur}.svg`
    );
  } else if (nombreCarteJoueurTirer == 6) {
    conteneurCarteJoueur6.setAttribute(
      "src",
      `images/cartes/${carteType}-${carteValeur}.svg`
    );
  } else if (nombreCarteJoueurTirer == 7) {
    conteneurCarteJoueur7.setAttribute(
      "src",
      `images/cartes/${carteType}-${carteValeur}.svg`
    );
  } else if (nombreCarteJoueurTirer == 8) {
    conteneurCarteJoueur8.setAttribute(
      "src",
      `images/cartes/${carteType}-${carteValeur}.svg`
    );
  } else if (nombreCarteJoueurTirer == 9) {
    conteneurCarteJoueur9.setAttribute(
      "src",
      `images/cartes/${carteType}-${carteValeur}.svg`
    );
  } else if (nombreCarteJoueurTirer == 10) {
    conteneurCarteJoueur10.setAttribute(
      "src",
      `images/cartes/${carteType}-${carteValeur}.svg`
    );
  }

  return carteType + "-" + carteValeur + ".svg";
}

function quelleCarteAfficherDealer(carte) {
  // Affiche les carte sur le plateau de jeu du dealer 
  var carteValeur = "";
  var carteType = "";
  for (let a = 0; a < carte.length; a++) {
    if (carte[a] == "a" && carte[a + 1] == "s") {
      carteValeur = "as";
    } else if (carte[a] == "r" && carte[a + 1] == "o" && carte[a + 2] == "i") {
      carteValeur = "roi";
    } else if (carte[a] == "r" && carte[a + 1] == "e" && carte[a + 2] == "i") {
      carteValeur = "reine";
    } else if (carte[a] == "v" && carte[a + 1] == "a" && carte[a + 2] == "l") {
      carteValeur = "valet";
    } else if (carte[a] == "2") {
      carteValeur = "2";
    } else if (carte[a] == "3") {
      carteValeur = "3";
    } else if (carte[a] == "4") {
      carteValeur = "4";
    } else if (carte[a] == "5") {
      carteValeur = "5";
    } else if (carte[a] == "6") {
      carteValeur = "6";
    } else if (carte[a] == "7") {
      carteValeur = "7";
    } else if (carte[a] == "8") {
      carteValeur = "8";
    } else if (carte[a] == "9") {
      carteValeur = "9";
    } else if (carte[a] == "1" && carte[a + 1] == "0") {
      carteValeur = "10";
    }
  }

  let i = 0;

  if (
    carte[i] == "t" &&
    carte[i + 1] == "r" &&
    carte[i + 2] == "e" &&
    carte[i + 3] == "f" &&
    carte[i + 4] == "l" &&
    carte[i + 5] == "e"
  ) {
    carteType = "trefle";
  } else if (
    carte[i] == "c" &&
    carte[i + 1] == "a" &&
    carte[i + 2] == "r" &&
    carte[i + 3] == "r" &&
    carte[i + 4] == "e" &&
    carte[i + 5] == "a" &&
    carte[i + 6] == "u" &&
    carte[i + 7] == "x"
  ) {
    carteType = "carreaux";
  } else if (
    carte[i] == "p" &&
    carte[i + 1] == "i" &&
    carte[i + 2] == "q" &&
    carte[i + 3] == "u" &&
    carte[i + 4] == "e"
  ) {
    carteType = "pique";
  } else if (
    carte[i] == "c" &&
    carte[i + 1] == "o" &&
    carte[i + 2] == "e" &&
    carte[i + 3] == "u" &&
    carte[i + 4] == "r"
  ) {
    carteType = "coeur";
  }

  if (nombreCarteDealerTirer == 1) {
    conteneurCarteDealer1.setAttribute(
      "src",
      `images/cartes/${carteType}-${carteValeur}.svg`
    );
  } else if (nombreCarteDealerTirer == 2) {
    conteneurCarteDealer2.setAttribute(
      "src",
      `images/cartes/${carteType}-${carteValeur}.svg`
    );
  } else if (nombreCarteDealerTirer == 3) {
    conteneurCarteDealer3.setAttribute(
      "src",
      `images/cartes/${carteType}-${carteValeur}.svg`
    );
  } else if (nombreCarteDealerTirer == 4) {
    conteneurCarteDealer4.setAttribute(
      "src",
      `images/cartes/${carteType}-${carteValeur}.svg`
    );
  } else if (nombreCarteDealerTirer == 5) {
    conteneurCarteDealer5.setAttribute(
      "src",
      `images/cartes/${carteType}-${carteValeur}.svg`
    );
  } else if (nombreCarteDealerTirer == 6) {
    conteneurCarteDealer6.setAttribute(
      "src",
      `images/cartes/${carteType}-${carteValeur}.svg`
    );
  } else if (nombreCarteDealerTirer == 7) {
    conteneurCarteDealer7.setAttribute(
      "src",
      `images/cartes/${carteType}-${carteValeur}.svg`
    );
  } else if (nombreCarteDealerTirer == 8) {
    conteneurCarteDealer8.setAttribute(
      "src",
      `images/cartes/${carteType}-${carteValeur}.svg`
    );
  } else if (nombreCarteDealerTirer == 9) {
    conteneurCarteDealer9.setAttribute(
      "src",
      `images/cartes/${carteType}-${carteValeur}.svg`
    );
  } else if (nombreCarteDealerTirer == 10) {
    conteneurCarteDealer10.setAttribute(
      "src",
      `images/cartes/${carteType}-${carteValeur}.svg`
    );
  }
}

function retirerLesCartes() {
  // retire les carte du plateau de jeu
  conteneurCarteDealer1.setAttribute("src", "images/vide.png");
  conteneurCarteDealer2.setAttribute("src", "images/vide.png");
  conteneurCarteDealer3.setAttribute("src", "images/vide.png");
  conteneurCarteDealer4.setAttribute("src", "images/vide.png");
  conteneurCarteDealer5.setAttribute("src", "images/vide.png");
  conteneurCarteDealer6.setAttribute("src", "images/vide.png");
  conteneurCarteDealer7.setAttribute("src", "images/vide.png");

  conteneurCarteJoueur1.setAttribute("src", "images/vide.png");
  conteneurCarteJoueur2.setAttribute("src", "images/vide.png");
  conteneurCarteJoueur3.setAttribute("src", "images/vide.png");
  conteneurCarteJoueur4.setAttribute("src", "images/vide.png");
  conteneurCarteJoueur5.setAttribute("src", "images/vide.png");
  conteneurCarteJoueur6.setAttribute("src", "images/vide.png");
  conteneurCarteJoueur7.setAttribute("src", "images/vide.png");
}

var newDealerSomme = 0;

function partie() {
  // fonction qui commence la partie
  if (actualWallet < 0) {
    actualWallet = 0;
  }
  if (actualWallet <= 0) {
    info.textContent = "Plus de jetons ! La partie va recommencer.";
    actualWallet = defaultWallet;
    miseContener.textContent = defaultMise;
    walletContener.textContent = actualWallet;
    actualCase = 1;
    avancement.textContent = actualCase;
    changerLeBonhommeDeCase();
  }

  actualWallet -= actualMise;
  document.cookie = `wallet=${actualWallet};`;
  walletContener.textContent = actualWallet;
  valideMise.classList.add("unactive");
  affichageCarteJoueur.classList.remove("unactive");
  affichageCarteDealer.classList.remove("unactive");
  affichageCarteDealer.style.display = "grid";
  affichageCarteJoueur.style.display = "grid";
  blocker = true;
  dealerSomme = 0;
  joueurSomme = 0;
  for (let i = 0; i < 2; i++) {
    sommeCarteJoueur(distribueCarte());
    nombreCarteJoueurTirer += 1;
    infoSommeJoueur.textContent = joueurSomme;
    quelleCarteAfficherJoueur(derniereCarteTirer);
  }
  if (joueurSomme == 21) {
    actualWallet += actualMise * 2.5;
    walletContener.textContent = actualWallet;
    blocker = false;
    info.textContent = "BlackJack ! Vous avez gagn?? !";
    if (cookiesAccepte == true || cookiesAccepte == "true") {
      document.cookie = `wallet=${actualWallet};`;
    }
    bloquerLesBoutons();
    setTimeout(reinitialiser, 3000);
    return;
  }
  for (let i = 0; i < 1; i++) {
    sommeCarteDealer(distribueCarte());
    nombreCarteDealerTirer += 1;
    quelleCarteAfficherDealer(derniereCarteTirer);
    infoSommeDealer.textContent = dealerSomme;
    deuxiemeCarteTirerDealer = distribueCarte();
    nombreCarteDealerTirer += 1;
    newDealerSomme = sommeCarteDealer(deuxiemeCarteTirerDealer);
    conteneurCarteDealer2.setAttribute("src", "images/cartes/dos-carte.svg");
  }
  if (dealerSomme == 21) {
    blocker = false;
    infoSommeDealer.textContent = newDealerSomme;
    document.cookie = `wallet=${actualWallet};`;
    bloquerLesBoutons();
    setTimeout(reinitialiser, 3000);
    return;
  }
  info.textContent = "Doublez, Tirer ou rester ";
  boutonDouble.removeAttribute("disabled");
  boutonRester.removeAttribute("disabled");
  boutonTirer.removeAttribute("disabled");
  clavierBloquer = false;

  if (actualWallet <= actualMise * 2) {
    boutonDouble.setAttribute("disabled", "");
  }
}

function dealerGoTo17() {
  // fonction qui fait tirer le dealer. Coupl?? ?? une boucle while, le force ?? tirer tant qu'il n'a pas un score > 17
  newDealerSomme = newSommeCarteDealer(distribueCarte());
  infoSommeDealer.textContent = newDealerSomme;
  nombreCarteDealerTirer += 1;
  quelleCarteAfficherDealer(derniereCarteTirer);
}

function finPartie(joueurSomme, dealerSomme) {
  // fonction utlis?? lors de la deuxieme partie de la manche, lorsque le joueur ?? terminer de jouer
  if (joueurSomme > 21) {
    blocker = false;
    document.cookie = `wallet=${actualWallet};`;
    info.textContent = "Vous avez perdu cette manche";
    bloquerLesBoutons();
    if (aEteDouble == true) {
      actualMise = actualMise / 2;
      miseContener.textContent = actualCase;
    }
    setTimeout(reinitialiser, 3000);
    return;
  }
  info.textContent = "Le dealer tire";
  while (newDealerSomme < 17) {
    setTimeout(dealerGoTo17(), 1500);
  }

  if (newDealerSomme > 21) {
    actualWallet += actualMise * 2;
    walletContener.textContent = actualWallet;
    info.textContent = "Le dealer ?? d??passer, vous avez gagn?? !";
    blocker = false;
  } else if (joueurSomme > newDealerSomme) {
    actualWallet += actualMise * 2;
    walletContener.textContent = actualWallet;
    info.textContent = "Vous avez gagn?? !";
    blocker = false;
  } else if (joueurSomme < newDealerSomme) {
    blocker = false;
    info.textContent = "Vous avez perdu cette manche";
  } else if (joueurSomme == newDealerSomme) {
    actualWallet += actualMise;
    walletContener.textContent = actualWallet;
    blocker = false;
    info.textContent = "Egalit??, vos gain vous ont ??t?? rendu";
  }

  if (aEteDouble == true) {
    actualMise = actualMise / 2;
    miseContener.textContent = actualMise;
  }

  if (cookiesAccepte == true || cookiesAccepte == "true") {
    document.cookie = `wallet=${actualWallet};`;
  }

  bloquerLesBoutons();
  setTimeout(reinitialiser, 3000);
}

function reinitialiser() {
  // R??inistialise la manche, utlis?? lorsque la manche est termin??e
  valideMise.classList.remove("unactive");
  affichageCarteJoueur.classList.add("unactive");
  affichageCarteDealer.classList.add("unactive");
  affichageCarteDealer.style.display = "none";
  affichageCarteJoueur.style.display = "none";
  info.textContent = "Validez la mise pour commencer";
  dealerSomme = 0;
  newDealerSomme = 0;
  joueurSomme = 0;
  nombreCarteDealerTirer = 0;
  nombreCarteJoueurTirer = 0;
  dealerAs11 = false;
  joueurAs11 = false;
  aEteDouble = false;
  retirerLesCartes();
}

function bloquerLesBoutons() {
  // fonction qui desactive les boutons du jeu 
  boutonDouble.setAttribute("disabled", "");
  boutonRester.setAttribute("disabled", "");
  boutonTirer.setAttribute("disabled", "");
  clavierBloquer = true;
}

function double() {
  // Fonction appell?? lorsque la touche double est pr??ss??e, double la mise et tire une carte, fini le tour du joueur
  blocker == true;
  aEteDouble = true;
  actualMise += actualMise;
  actualWallet -= actualMise / 2;
  miseContener.textContent = actualMise;
  walletContener.textContent = actualWallet;
  sommeCarteJoueur(distribueCarte());
  nombreCarteJoueurTirer += 1;
  quelleCarteAfficherJoueur(derniereCarteTirer);
  infoSommeJoueur.textContent = joueurSomme;
  quelleCarteAfficherDealer(deuxiemeCarteTirerDealer);
  infoSommeDealer.textContent = newDealerSomme;
  bloquerLesBoutons();
  document.cookie = `wallet=${actualWallet};`;
  const finpartie = setTimeout(finPartie, 2000, joueurSomme, dealerSomme);
}

function hit() {
  // Fonction appell?? lorsque la touche hit est pr??ss??e, tire une carte
  sommeCarteJoueur(distribueCarte());
  nombreCarteJoueurTirer += 1;
  quelleCarteAfficherJoueur(derniereCarteTirer);
  infoSommeJoueur.textContent = joueurSomme;
  document.cookie = `wallet=${actualWallet};`;
  if (joueurSomme > 21) {
    infoSommeDealer.textContent = newDealerSomme;
    bloquerLesBoutons();
    quelleCarteAfficherDealer(deuxiemeCarteTirerDealer);
    const finpartie = setTimeout(finPartie, 2000, joueurSomme, dealerSomme);
  }
  return joueurSomme;
}

function stand() {
  // Fonction appell?? lorsque la touche stand est pr??ss??e, permet de finir le tour
  aEteDouble = false;
  quelleCarteAfficherDealer(deuxiemeCarteTirerDealer);
  infoSommeDealer.textContent = newDealerSomme;
  bloquerLesBoutons();
  document.cookie = `wallet=${actualWallet};`;
  const finpartie = setTimeout(finPartie, 2000, joueurSomme, dealerSomme);
}

window.addEventListener(
  // activ?? chaque appuie sur une touche du clavier, permet d'augmenter la mise ou de jouer uniquement avec le clavier
  "keydown",
  function (keyPressed) {
    switch (event.code) {
      case "ArrowDown":
        if (blocker == true) {
          break;
        } else if (actualMise == miseMin) {
          break;
        } else if (actualMise > 1000 && actualMise < 5000) {
          actualMise -= 100;
        } else if (actualMise >= 5000) {
          actualMise -= 1000;
        } else if (actualMise <= 1000) {
          actualMise -= 10;
        }
        break;
      case "ArrowUp":
        if (blocker == true) {
          break;
        } else if (actualMise == miseMax) {
          break;
        } else if (actualMise == actualWallet) {
          break;
        } else if (actualMise >= 1000 && actualMise < 5000) {
          if (actualMise + 100 < actualWallet) {
            actualMise += 100;
          } else {
            actualMise += actualWallet - actualMise;
          }
        } else if (actualMise >= 5000) {
          if (actualMise + 1000 < actualWallet) {
            actualMise += 1000;
          } else {
            actualMise += actualWallet - actualMise;
          }
        } else if (actualMise <= 1000) {
          if (actualMise + 10 < actualWallet) {
            actualMise += 10;
          } else {
            actualMise += actualWallet - actualMise;
          }
        }
        if (actualWallet < actualMise * 2) {
          boutonDouble.setAttribute("disabled", "");
        }
        break;
    }

    e = window.event;
    var code = e.keyCode;

    if (code == codeToucheA) {
      if (actualMise + 10 < actualWallet) {
        actualMise += 10;
      } else {
        actualMise += actualWallet - actualMise;
      }
    } else if (code == codeToucheSpace) {
      partie();
    } else if (code == codeToucheS && clavierBloquer == false) {
      hit();
    } else if (code == codeToucheD && clavierBloquer == false) {
      double();
    } else if (code == codeToucheEntree && clavierBloquer == false) {
      stand();
    }

    miseContener.textContent = actualMise;
  },
  true
);

function isWin() {
  // affiche l'??cran de fin de jeu lorsque la partie est termin??
  if (actualCase == 15) {
    bravo.style.display = "flex";
  }
}

function recommencer() {
  // Sert ?? remettre le jeu ?? 0 pour recommencer un nouvelle partie lorsque le jeu est termin?? 
  bravo.style.display = "none";
  actualWallet = defaultWallet;
  document.cookie = `wallet=${actualWallet};`;
  walletContener.textContent = actualWallet;
  actualCase = defaultCase;
  avancement.textContent = actualCase;
  document.cookie = `case=${actualCase};`;
  actualMise1 = 1000;
  coutContener.textContent = listCout[actualCase - 1];
}

function getCookie(name) {
  // fonction qui retourn la valeur d'un cookie 
  if (document.cookie.length == 0) return null;

  var regSepCookie = new RegExp("(; )", "g");
  var cookies = document.cookie.split(regSepCookie);

  for (var i = 0; i < cookies.length; i++) {
    var regInfo = new RegExp("=", "g");
    var infos = cookies[i].split(regInfo);
    if (infos[0] == name) {
      return unescape(infos[1]);
    }
  }
  return null;
}

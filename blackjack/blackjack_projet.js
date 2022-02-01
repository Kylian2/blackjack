let deck_entier = ['As_trefle', 'Roi_trefle', 'Dame_trefle', 'Valet_trefle',
  'Dix_trefle', 'Neuf_trefle', 'Huit_trefle', 'Sept_trefle', 'Six_trefle','Cinq_trefle', 'Quatre_trefle', 'Trois_trefle', 'Deux_trefle',
   'As_coeur', 'Roi_coeur', 'Dame_coeur', 'Valet_coeur','Dix_coeur', 'Neuf_coeur', 'Huit_coeur', 'Sept_coeur', 'Six_coeur','Cinq_coeur', 'Quatre_coeur', 'Trois_coeur', 'Deux_coeur',
   'As_pique', 'Roi_pique', 'Dame_pique', 'Valet_pique','Dix_pique', 'Neuf_pique', 'Huit_pique', 'Sept_pique', 'Six_pique','Cinq_pique', 'Quatre_pique', 'Trois_pique', 'Deux_pique',
   'As_carreau', 'Roi_carreau', 'Dame_carreau', 'Valet_carreau',
   'Dix_carreau', 'Neuf_carreau', 'Huit_carreau', 'Sept_carreau', 'Six_carreau','Cinq_carreau', 'Quatre_carreau', 'Trois_carreau', 'Deux_carreau'];





function melanger_paquet(paquet){
  let indice = paquet.lenght, valeur, indice_aleatoire;
  while (0 !== indice){
    indice_aleatoire = Math.floor(Math.random() * indice);
    indice -= 1;
    valeur = paquet[indice];
    paquet[indice] = paquet[indice_aleatoire];
    paquet[indice_aleatoire] = valeur;
  }
}

function distribue_carte(){
  return deck_entier.shift();
}

function valeur_carte(carte){
  for(let i=0; i<dealerCards.length; i++)
  if ((carte == 'As_trefle' ) || (carte == 'As_coeur' ) || (carte == 'As_pique' ) || (carte == 'As_carreau' )){
    return 11;
  }
  if ((carte == 'Roi_trefle' ) || (carte == 'Roi_coeur' ) || (carte == 'Roi_pique' ) || (carte == 'Roi_carreau' )){
    return 10;
  }
  if ((carte == 'Dame_trefle' ) || (carte == 'Dame_coeur' ) || (carte == 'Dame_pique' ) || (carte == 'Dame_carreau' )){
    return 10;
  }
  if ((carte == 'Valet_trefle' ) || (carte == 'Valet_coeur' ) || (carte == 'Valet_pique' ) || (carte == 'Valet_carreau' )){
    return 10;
  }
  if ((carte == 'Dix_trefle' ) || (carte == 'Dix_coeur' ) || (carte == 'Dix_pique' ) || (carte == 'Dix_carreau' )){
    return 10;
  }
  if ((carte == 'Neuf_trefle' ) || (carte == 'Neuf_coeur' ) || (carte == 'Neuf_pique' ) || (carte == 'Neuf_carreau' )){
    return 9;
  }
  if ((carte == 'Huit_trefle' ) || (carte == 'Huit_coeur' ) || (carte == 'Huit_pique' ) || (carte == 'Huit_carreau' )){
    return 8;
  }
  if ((carte == 'Sept_trefle' ) || (carte == 'Sept_coeur' ) || (carte == 'Sept_pique' ) || (carte == 'Sept_carreau' )){
    return 7;
  }
  if ((carte == 'Six_trefle' ) || (carte == 'Six_coeur' ) || (carte == 'Six_pique' ) || (carte == 'Six_carreau' )){
    return 6;
  }
  if ((carte == 'Cinq_trefle' ) || (carte == 'Cinq_coeur' ) || (carte == 'Cinq_pique' ) || (carte == 'Cinq_carreau' )){
    return 5;
  }
  if ((carte == 'Quatre_trefle' ) || (carte == 'Quatre_coeur' ) || (carte == 'Quatre_pique' ) || (carte == 'Quatre_carreau ' )){
    return 4;
  }
  if ((carte == 'Trois_trefle' ) || (carte == 'Trois_coeur' ) || (carte == 'Trois_pique' ) || (carte == 'Trois_carreau ' )){
    return 3;
  }
  if ((carte == 'Deux_trefle' ) || (carte == 'Deux_coeur' ) || (carte == 'Deux_pique' ) || (carte == 'Deux_carreau ' )){
    return 2;
  }
}



let score_joueur = 0;
let score_dealer = 0;

function valeur_as(valeur_carte,score){
  if ((score > 21) && (valeur_carte == 11)){
    valeur_carte = 1;
  }
  return valeur_carte;
}


function finDePartie(){
  if (score_dealer >= 21){
    return true;
  }
  if (score_joueur >=21){
    return true;
  }
  else{
    return false;
  }
}


function affiche_partie(){
  if(!finDePartie()){
    for(let i=0; i<deck_dealer.length; i++){
      score_dealer = valeur_as(valeur_carte(deck_dealer[i],score_dealer));
    }
    for(let i=0; i<deck_joueur.length; i++){
      score_joueur = valeur_as(valeur_carte(deck_joueur[i],score_joueur));
    }
    zone_texte.innerText = 'le dealer a:\n' + deck_dealer + '(score: ' + score_dealer + ')\n\n' + 'le joueur a \n' + deck_joueur + '(score: ' + score_joueur + ')\n\n';
  }
}
const hitButton =  document.getElementById('hit-button');
hitButton.style.display = 'none';
const staybouton =  document.getElementById('stay-button');
staybouton.style.display = 'none';
let zone_texte = document.getElementById('zoneDeTexte');
let bouton_newGame = document.getElementById('bouton_new_game');
let deck_dealer = [];
let deck_joueur = [];

bouton_newGame.onclick = function() {
  melanger_paquet(deck_entier);
  let deck_dealer = [distribue_carte(),distribue_carte()];
  let deck_joueur = [distribue_carte(),distribue_carte()];
  bouton_newGame.style.display = 'none';
  hitButton.style.display = 'inline';
  staybouton.style.display = 'inline';
  affiche_partie();
}

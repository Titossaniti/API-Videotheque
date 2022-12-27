const movies = [
    {
      "name" :"elden ring",
      "year":"2022",
      "image":"elden_ring",
      "type":"action-RPG",
      "mode":"solo",
      "support":"PC",
      "studio":"fromSoftware",
      "gameplay":"https://www.youtube.com/embed/zjhE3j4CpXc",
      "avis":"5",
      "desc":"Elden Ring se déroule dans le royaume de l'Entre-terre, quelque temps après la destruction du Cercle d’Elden et la dispersion de ses fragments, les runes majeures. Autrefois honoré par la présence du Cercle et de l'Arbre-Monde, le royaume est maintenant gouverné par les descendants demi-dieux de la reine Marika l'Éternelle, chacun possédant un éclat du Cercle d'Elden qui les corrompt et les empoisonne par leur pouvoir. Le joueur incarne un Sans-éclat, un exilé de l'Entre-terre qui a perdu la grâce du Cercle, rappelé après l'Éclatement, qui doit traverser le royaume pour trouver toutes les runes majeures, restaurer le Cercle d’Elden et devenir le Seigneur d'Elden."
    },
    {
      "name" :"hades",
      "year":"2020",
      "image":"hades",
      "type":"Action-RPG, roguelite",
      "mode":"solo",
      "support":"PC",
      "studio":"Supergiant Games",
      "gameplay":"https://www.youtube.com/embed/cbef5_XBzqU",
      "avis":"5",
      "desc":"Hades se déroule dans un univers de fantasy s'inspirant de la Grèce antique et de sa mythologie, et notamment des Enfers grecs. Le joueur visite ainsi plusieurs régions des Enfers, comme le Tartare, les Champs Élysées ou l'Asphodèle. Plusieurs évènements de la mythologie grecque sont mentionnés lors de l'aventure, comme la guerre de Troie, avec la présence aux Enfers d'Achille et Patrocle, ou la séparation d'Orphée et Eurydice. Le joueur incarne Zagreus, prince des Enfers, qui tente de fuir le royaume des morts pour découvrir ses origines et réunifier sa famille."
    },
    {
      "name" :"cyberpunk 2077",
      "year":"2020",
      "image":"cybeprunk_2077",
      "type":"Action-RPG",
      "mode":"solo",
      "support":"PC",
      "studio":"CD Projekt RED",
      "gameplay":"https://www.youtube.com/embed/xwWoQ2SxflE",
      "avis":"5",
      "desc":"Après un effondrement économique au début du XXIème siècle, les États-Unis sont forcés de compter sur les méga-corporations pour survivre. Ces corporations exercent leurs activités dans un large panel de domaines, tels que les armes, la robotique, la cybernétique, les produits pharmaceutiques, les communications et la biotechnologie, et bon nombre d'entre elles exercent leurs activités en dehors du cadre légal. Le jeu suit l'histoire de V - un(e) mercenaire en plein essor à Night City, la métropole la plus violente et la plus dangereuse dirigée par les entreprises de l'avenir. Un créateur de personnage dynamique permettra aux joueurs de choisir le sexe de V, l'apparence visuelle, ainsi que le contexte historique - tout cela peut influencer la configuration du jeu."
    },   
     {
      "name" :"just cause 2",
      "year":"2010",
      "image":"just_cause_2",
      "type":"Action, GTA-Like",
      "mode":"solo",
      "support":"ps3",
      "studio":"Avalanche Studios",
      "gameplay":"https://www.youtube.com/embed/FMuUUCZadbw",
      "avis":"4",
      "desc":"Sur l'archipel de Panao, le joeuur incarne Rico Rodriguez et a pour mission de trouver son mentor et ami afin de le tuer. Grâce à son grappin et à son parachute, Rico multiplie les base jumps, les vols de voiture et les cascades à des vitesses folles. Avec plus de 1000 km² de terrain accidenté et des centaines d'armes et de véhicules, Just Cause 2 défie les lois de la gravité et de l'entendement."
    }
];

/**
 * 
 * Model
 
{
    "name" :"",
    "year":"",
    "image":"",
    "type":"",
    "mode":"solo",
    "support":"",
    "studio":"",
    "gameplay":"",
    "avis":"",
    "desc":""
}
 */

exports.find = () => {
  return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(movies))));
}

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(movies)).find(movie =>
      movie._id == id)
    )
  );
}





const movies = [
    {
      "name" :"elden ring",
      "year":"2022",
      "image":"elden_ring",
      "type":"action-rpg",
      "mode":"solo",
      "support":"pc",
      "studio":"fromSoftware",
      "gameplay":"https://www.youtube-nocookie.com/embed/zjhE3j4CpXc",
      "avis":"6",
      "desc":"Elden Ring se déroule dans le royaume de l'Entre-terre, quelque temps après la destruction du Cercle d’Elden et la dispersion de ses fragments, les runes majeures. Autrefois honoré par la présence du Cercle et de l'Arbre-Monde, le royaume est maintenant gouverné par les descendants demi-dieux de la reine Marika l'Éternelle, chacun possédant un éclat du Cercle d'Elden qui les corrompt et les empoisonne par leur pouvoir. Le joueur incarne un Sans-éclat, un exilé de l'Entre-terre qui a perdu la grâce du Cercle, rappelé après l'Éclatement, qui doit traverser le royaume pour trouver toutes les runes majeures, restaurer le Cercle d’Elden et devenir le Seigneur d'Elden."
    },
    {
      "name" :"hades",
      "year":"2020",
      "image":"hades",
      "type":"roguelite, action",
      "mode":"solo",
      "support":"pc",
      "studio":"supergiant games",
      "gameplay":"https://www.youtube-nocookie.com/embed/cbef5_XBzqU",
      "avis":"6",
      "desc":"Hades se déroule dans un univers de fantasy s'inspirant de la Grèce antique et de sa mythologie, et notamment des Enfers grecs. Le joueur visite ainsi plusieurs régions des Enfers, comme le Tartare, les Champs Élysées ou l'Asphodèle. Plusieurs évènements de la mythologie grecque sont mentionnés lors de l'aventure, comme la guerre de Troie, avec la présence aux Enfers d'Achille et Patrocle, ou la séparation d'Orphée et Eurydice. Le joueur incarne Zagreus, prince des Enfers, qui tente de fuir le royaume des morts pour découvrir ses origines et réunifier sa famille."
    },
    {
      "name" :"cyberpunk 2077",
      "year":"2020",
      "image":"cybeprunk_2077",
      "type":"action-rpg",
      "mode":"solo",
      "support":"pc",
      "studio":"cd projekt red",
      "gameplay":"https://www.youtube-nocookie.com/embed/xwWoQ2SxflE",
      "avis":"5",
      "desc":"Après un effondrement économique au début du XXIème siècle, les États-Unis sont forcés de compter sur les méga-corporations pour survivre. Ces corporations exercent leurs activités dans un large panel de domaines, tels que les armes, la robotique, la cybernétique, les produits pharmaceutiques, les communications et la biotechnologie, et bon nombre d'entre elles exercent leurs activités en dehors du cadre légal. Le jeu suit l'histoire de V - un(e) mercenaire en plein essor à Night City, la métropole la plus violente et la plus dangereuse dirigée par les entreprises de l'avenir. Un créateur de personnage dynamique permettra aux joueurs de choisir le sexe de V, l'apparence visuelle, ainsi que le contexte historique - tout cela peut influencer la configuration du jeu."
    },   
     {
      "name" :"just cause 2",
      "year":"2010",
      "image":"just_cause_2",
      "type":"action, gta-like",
      "mode":"solo",
      "support":"ps3",
      "studio":"avalanche studios",
      "gameplay":"https://www.youtube-nocookie.com/embed/FMuUUCZadbw",
      "avis":"4",
      "desc":"Sur l'archipel de Panao, le joeuur incarne Rico Rodriguez et a pour mission de trouver son mentor et ami afin de le tuer. Grâce à son grappin et à son parachute, Rico multiplie les base jumps, les vols de voiture et les cascades à des vitesses folles. Avec plus de 1000 km² de terrain accidenté et des centaines d'armes et de véhicules, Just Cause 2 défie les lois de la gravité et de l'entendement."
    },
    {
      "name" :"re-volt",
      "year":"1999",
      "image":"re_volt",
      "type":"jeu de course",
      "mode":"solo",
      "support":"pc",
      "studio":"acclaim",
      "gameplay":"https://www.youtube-nocookie.com/embed/4qK6vlE-KiI",
      "avis":"5",
      "desc":"Le jeu propose 28 véhicules et 14 circuits. Les circuits sont également jouables en contresens, en miroir et en contresens-miroir. La particularité de ce jeu de course est de mettre à la disposition du joueur des voitures télécommandées pouvant récolter des bonus afin de mettre en difficulté les concurrents."
  },
  {
    "name" :"midnight club 3: dub edition",
    "year":"2005",
    "image":"midnight_club_3",
    "type":"jeu de course",
    "mode":"solo",
    "support":"ps2",
    "studio":"rockstar games",
    "gameplay":"https://www.youtube-nocookie.com/embed/zRvanrSS6p8",
    "avis":"4",
    "desc":"Midnight Club 3 : Dub Edition sur PS2 est un jeu de courses de voitures qui vous offre une gamme variée de plus de 50 véhicules tous customisables à souhait ! Faites la course contre les meilleurs pilotes dans les rues de trois grandes villes des Etats-Unis : Detroit, Atlanta et San Diego et découvrez leurs différents quartiers."
},
{
  "name" :"red dead redemption",
  "year":"2010",
  "image":"red_dead_redemption",
  "type":"action-aventure",
  "mode":"solo",
  "support":"ps3",
  "studio":"rockstar games",
  "gameplay":"https://www.youtube-nocookie.com/embed/Qq1E9qMsMQ8?controls=0",
  "avis":"6",
  "desc":"Après plusieurs années passées dans une dangereuse bande de hors-la-loi, John Marston a décidé de se ranger et de vivre paisiblement dans son ranch avec sa femme Abigail et son fils Jack. Malheureusement, l’agent Edgar Ross du FBI (ancien agent de l'Agence Pinkerton) ne l’entend pas de cette oreille. Il emprisonne Abigail et Jack et ne les rendra à John que s’il arrête mort ou vif tous les anciens membres de sa bande : Bill Williamson, Javier Escuella et son chef, Dutch van der Linde. John accepte à contrecœur."
},
{
  "name" :"rocket league",
  "year":"2015",
  "image":"rocket_league",
  "type":"compétitif, arcade",
  "mode":"multijoueur",
  "support":"pc",
  "studio":"psyonix",
  "gameplay":"https://www.youtube-nocookie.com/embed/pGAGSVe6Vlw?controls=0",
  "avis":"6",
  "desc":"Rocket League est un mélange de jeux de courses et de jeux de football. Par équipe ou en solo, le joueur contrôle un véhicule et peut alors frapper dans un ballon, avec pour objectif de marquer dans le but adverse. Le joueur peut utiliser une jauge de boost limitée à 100 pour accélérer et/ou se maintenir dans les airs, sauter pour réceptionner une balle et initier un envol pour atteindre des balles en l'air, s'incliner en l'air. Il peut aussi faire des dashs (une brusque accélération s'effectuant en appuyant rapidement deux fois sur le bouton de saut tout en appuyant dans une direction) sur les côtés et vers l'avant pour gagner de la vitesse ou se repositionner. Pour recharger sa jauge de boost, le joueur récupère des capsules (situées aux abords du terrain) ou sur des palettes éparpillées sur le terrain."
},
{
  "name" :"valorant",
  "year":"2020",
  "image":"valorant",
  "type":"compétitif, jeu de tir tactique",
  "mode":"multijoueur",
  "support":"pc",
  "studio":"riot games",
  "gameplay":"https://www.youtube-nocookie.com/embed/k5SS1VYol4A?controls=0",
  "avis":"4",
  "desc":"Dans Valorant, chaque joueur joue le rôle d'un « agent » aux compétences uniques. Dans le mode de jeu principal, deux équipes de cinq joueurs s'affrontent et les agents utilisent un système économique pour acheter des utilitaires et des armes. Une équipe est en attaque et une est en défense : l'équipe attaquante dispose d'une bombe qu'elle doit poser sur un site. Si elle est suffisamment protégée et qu'elle explose, les attaquants gagnent un point. En revanche, si l'équipe en défense réussit à désamorcer la bombe ou si le temps est écoulé, ce sont eux qui gagnent un point6. L'élimination de tous les membres de l'équipe adverse entraine également une victoire pour le tour. La première équipe qui obtient treize points gagne la partie."
},
{
  "name" :"the last of us",
  "year":"2013",
  "image":"the_last_of_us_part_I",
  "type":"action-aventure, survival-horror",
  "mode":"solo",
  "support":"ps3",
  "studio":"naughty dog",
  "gameplay":"https://www.youtube-nocookie.com/embed/p_c0forXrAk?controls=0",
  "avis":"6",
  "desc":"The Last of Us se passe dans un monde post-apocalyptique, après qu'une épidémie ayant échappé à tout contrôle a ravagé la civilisation humaine 20 ans plus tôt. Les deux personnages principaux, Joel et Ellie, doivent récupérer munitions et vivres pour avancer dans leur quête et triompher des infectés et des survivants hostiles qu'ils croisent. Le comic The Last of Us: American Dreams apprend au lecteur que l’épidémie s’est déclenchée six ans avant la naissance d'Ellie."
},
{
  "name" :"the last of us : part II",
  "year":"2020",
  "image":"the_last_of_us_part_II",
  "type":"action-aventure, survival-horror",
  "mode":"solo",
  "support":"ps4",
  "studio":"naughty dog",
  "gameplay":"https://www.youtube-nocookie.com/embed/z1OESz4zpLs?controls=0",
  "avis":"6",
  "desc":"Les évènements de The Last of Us Part II se déroulent peu de temps après ceux du prmeier opus et prennent place dans un monde post-apocalyptique, où une pandémie de cordyceps a tué une grande partie de l'humanité, le reste de la population subsistant tant bien que mal parmi les infectés. Le jeu se déroule en grande partie à Seattle, ainsi qu'à Jackson et à Santa Barbara. Dans le jeu, le joueur est amené à rencontrer plusieurs factions, chacune ayant des coutumes et une manière de fonctionner qui lui sont propres. Il sera également amené à se battre face aux infectés, des humains atteints et contrôlés par le cordyceps"
},
{
  "name" :"satisfactory",
  "year":"2019",
  "image":"satisfactory",
  "type":"Jeu de gestion, Jeu de construction",
  "mode":"solo et coop",
  "support":"pc",
  "studio":"coffee stain studios",
  "gameplay":"https://www.youtube-nocookie.com/embed/7lJEDZsMm-Y?controls=0",
  "avis":"4",
  "desc":"Le joueur incarne un ingénieur de la société FICSIT Inc qui est largué à bord d'une capsule sur une planète extraterrestre. Son objectif est de construire différents bâtiments et de les relier ensemble afin de créer une usine entièrement automatisée pour édifier un ascenseur spatial qui sert par la suite à envoyer à FICSIT Inc des bien de plus en plus sophistiqués qui sont produits des ressources extraites. Le joueur doit gérer sa production d’énergie, le transport, l’extraction minière pour parvenir à ses fins."
},
{
  "name" :"ghostrunner",
  "year":"2020",
  "image":"ghostrunner",
  "type":"jeu d'action, jeu de plates-formes, hack 'n' slash",
  "mode":"solo",
  "support":"pc",
  "studio":"one more level",
  "gameplay":"https://www.youtube-nocookie.com/embed/lI4SYEOsnco?controls=0",
  "avis":"5",
  "desc":"Ghostrunner se déroule dans le futur, après un cataclysme mondial. Une ville se trouvant dans une tour géante est le dernier bastion de l'humanité. Les implants déterminent l'appartenance à diverses castes qui divisent la communauté. La violence et la pauvreté mènent la rébellion. Les joueurs jouent le rôle d'un héros qui, de manière unique, peut combattre à la fois dans le monde physique et dans le cyberespace. Le but est de monter dans la tour et de vaincre son maître, le Keymaster. Une seule attaque suffit pour tuer un ennemi ou le héros. Au fur et à mesure de notre progression dans l’histoire, de nouveaux implants sont débloqués pour améliorer les compétences de notre personnage."
},
{
  "name" :"l.a. noire",
  "year":"2011",
  "image":"la_noire",
  "type":"action, enquêtes",
  "mode":"solo",
  "support":"ps3",
  "studio":"rockstar games",
  "gameplay":"https://www.youtube-nocookie.com/embed/eW-9zFhAyDM?controls=0",
  "avis":"4",
  "desc":"L.A. Noire est un jeu d'action-aventure. Le jeu vous place dans la peau d'un détective à Los Angeles à la fin des années 1940 dans un contexte d'après-guerre où se mêlent corruption et drogue. Le jeu croise action, enquête et narration complexe, tout en présentant une série de meurtres à élucider. Il s'agit d'un monde ouvert, il est donc possible en plus des enquêtes d'intervenir sur des évènements en temps réel dans la ville, comme des braquages, des agressions ou autres."
},
{
  "name" :"red dead redemption 2",
  "year":"2018",
  "image":"red_dead_redemption_2",
  "type":"action-aventure, Western",
  "mode":"solo",
  "support":"ps4",
  "studio":"rockstar games",
  "gameplay":"https://www.youtube-nocookie.com/embed/jTx5GetgC-M?controls=0",
  "avis":"6",
  "desc":"Les évènements se déroulent avant ceux du premier opus, en 1899. La bande de Dutch van der Linde, réalise un braquage d'envergure dans la ville de Blackwater. Volant $150 000 dans une banque et fuyant à bord d'un ferry, la situation tourne court lorsque les représentants de la loi, et principalement la Pinkerton National Detective Agency, sont tout près de capturer la bande de hors-la-loi. Dans la panique, Dutch tue une femme innocente et certains de leurs associés sont tués. D'autres membres de la bande sont capturés, voire exécutés. Les membres survivants de la bande parviennent à prendre la fuite. Dutch perd une partie de l'argent volé dans la fuite, mais parvient à cacher le reste dans un endroit secret à Blackwater. Pourchassés sans relâche par les fédéraux, la bande de Dutch s'exile vers les montagnes, à l'Est."
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
    "mode":"",
    "support":"",
    "studio":"",
    "gameplay":"https://www.youtube-nocookie.com/embed/",
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





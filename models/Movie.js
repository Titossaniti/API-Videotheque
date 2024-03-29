const movies = [
    {
      "name" :"elden ring",
      "year":"2022",
      "image":"elden_ring",
      "type":"action-rpg",
      "mode":"solo",
      "support":"pc",
      "studio":"fromSoftware",
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
  "avis":"6",
  "desc":"Les évènements se déroulent avant ceux du premier opus, en 1899. La bande de Dutch van der Linde, réalise un braquage d'envergure dans la ville de Blackwater. Volant $150 000 dans une banque et fuyant à bord d'un ferry, la situation tourne court lorsque les représentants de la loi, et principalement la Pinkerton National Detective Agency, sont tout près de capturer la bande de hors-la-loi. Dans la panique, Dutch tue une femme innocente et certains de leurs associés sont tués. D'autres membres de la bande sont capturés, voire exécutés. Les membres survivants de la bande parviennent à prendre la fuite. Dutch perd une partie de l'argent volé dans la fuite, mais parvient à cacher le reste dans un endroit secret à Blackwater. Pourchassés sans relâche par les fédéraux, la bande de Dutch s'exile vers les montagnes, à l'Est."
},
{
  "name": "uncharted 2",
  "year": "2009",
  "image": "uncharted_2",
  "type": "action-adventure",
  "mode": "solo",
  "support": "ps3",
  "studio": "naughty dog",
  "avis": "5",
  "desc": "Uncharted 2 suit les aventures de Nathan Drake, un chasseur de trésors charismatique et intrépide, dans sa quête pour découvrir la vérité derrière la flotte perdue de Marco Polo. Nathan est aidé par ses amis, le journaliste Elena Fisher et le mentor Victor Sullivan, alors qu'ils voyagent à travers le Népal, la ville de Shambhala et autres lieux exotiques pour retrouver le Cintamani Stone, une pierre légendaire qui serait la clé pour trouver la flotte de Marco Polo. Mais ils ne sont pas les seuls à chercher cette relique, car ils doivent faire face à un ennemi impitoyable et déterminé, l'ancien ami de Nathan, Harry Flynn, ainsi que l'infâme criminel Lazarevic. Le jeu est salué pour son histoire passionnante, ses personnages bien développés, son gameplay dynamique et ses graphismes impressionnants."
  },
  {
  "name": "pokemon ranger",
  "year": "2006",
  "image": "pokemon_ranger",
  "type": "action RPG",
  "mode": "solo",
  "support": "ds",
  "studio": "hal laboratory",
  "avis": "3",
  "desc": "Dans Pokemon Ranger, les joueurs incarnent un ranger Pokemon, qui a la capacité de contrôler les Pokemon sauvages en utilisant un appareil appelé Capture Styler. Le ranger est envoyé dans la région de Fiore pour protéger les Pokemon et résoudre les problèmes causés par la Team Go-Rock, un groupe criminel qui capture les Pokemon pour les transformer en machines de combat. Les joueurs doivent capturer les Pokemon sauvages pour aider à résoudre les énigmes et les obstacles qui se dressent sur leur chemin. Le jeu a été acclamé pour sa prise de risque dans la série Pokemon en abandonnant la traditionnelle bataille contre les Pokemon pour un système de capture unique, ainsi que pour son histoire captivante et son gameplay innovant."
  },
  {
  "name": "uncharted 3",
  "year": "2011",
  "image": "uncharted_3",
  "type": "action-adventure",
  "mode": "solo",
  "support": "ps3",
  "studio": "naughty dog",
  "avis": "6",
  "desc": "Dans Uncharted 3, Nathan Drake est de retour pour une nouvelle aventure palpitante qui le mènera des rues de Londres aux sables brûlants du désert de Rub al-Khali. Nathan et son mentor Victor Sullivan sont à la recherche de la cité perdue d'Iram, la Cité des Pilliers, et doivent faire face à de nombreux ennemis sur leur chemin, y compris un chef de guerre nomade impitoyable et un ancien ami de Nathan, Katherine Marlowe. Avec l'aide de ses amis fidèles, Elena Fisher et Charlie Cutter, Nathan doit résoudre les mystères de la cité perdue et découvrir le secret derrière l'anneau d'argent qu'il a trouvé sur une expédition précédente. Le jeu est salué pour ses graphismes époustouflants, son histoire captivante et ses scènes d'action cinématiques spectaculaires."
  },
  {
  "name": "ridge racer",
  "year": "1993",
  "image": "ridge_racer",
  "type": "course",
  "mode": "solo",
  "support": "ps1",
  "studio": "namco",
  "avis": "2",
  "desc": "Ridge Racer est un jeu de course sur Playstation 1, mettant en vedette des courses de voitures à haute vitesse sur des circuits routiers sinueux. Les joueurs peuvent choisir parmi une sélection de voitures et de pistes, et peuvent concourir en solo ou contre d'autres joueurs en mode multijoueur. Le jeu a été salué pour ses graphismes 3D avancés pour l'époque, sa musique électronique entraînante et son gameplay addictif, qui a inspiré de nombreuses suites et spin-offs de la série Ridge Racer."
  },
  {
  "name": "gran turismo",
  "year": "1997",
  "image": "gran_turismo",
  "type": "course",
  "mode": "solo, multijoueur",
  "support": "ps1",
  "studio": "polyphony digital",
  "avis": "4",
  "desc": "Gran Turismo est un jeu de course automobile développé par Polyphony Digital pour la Playstation 1. Les joueurs peuvent choisir parmi une variété de voitures et de circuits, et doivent remporter des courses pour débloquer de nouvelles voitures et progresser dans le jeu. Le jeu est connu pour son attention aux détails dans la modélisation de voitures et de circuits, ainsi que pour son système de physique réaliste qui permet aux joueurs de ressentir les sensations de conduite d'une vraie voiture. Gran Turismo a été salué pour ses graphismes de pointe pour l'époque, son gameplay addictif et sa bande-son dynamique."
  },
  {
  "name": "assassin creed 2",
  "year": "2009",
  "image": "assassin_creed_2",
  "type": "action-aventure",
  "mode": "solo",
  "support": "ps3",
  "studio": "ubisoft",
  "avis": "5",
  "desc": "Assassin's Creed 2 est un jeu d'action-aventure en monde ouvert développé par Ubisoft Montreal. Le jeu se déroule dans la Renaissance italienne et suit les aventures du personnage Ezio Auditore da Firenze, un assassin qui cherche à venger sa famille et à déjouer un complot contre la famille des Médicis. Les joueurs peuvent explorer librement les villes italiennes, grimper sur des bâtiments, assassiner des cibles, et améliorer les compétences et l'équipement d'Ezio. Assassin's Creed 2 est connu pour son histoire captivante, son gameplay fluide et son monde ouvert immersif."
  },
  {
  "name": "fifa 98",
  "year": "1997",
  "image": "fifa_98",
  "type": "sport",
  "mode": "solo, multijoueur",
  "support": "ps1",
  "studio": "ea sports",
  "avis": "3",
  "desc": "FIFA 98 est un jeu de simulation de football développé par EA Sports pour la Playstation 1. Les joueurs peuvent choisir parmi une variété d'équipes et participer à des matchs de football, avec des commentaires en temps réel et des graphismes avancés pour l'époque. Le jeu offre également des fonctionnalités de personnalisation, comme la possibilité de créer des joueurs personnalisés et de personnaliser les tactiques de l'équipe. FIFA 98 est considéré comme l'un des meilleurs jeux de football de son époque, avec un gameplay fluide et des fonctionnalités de personnalisation avancées."
  },
  {
  "name": "the witcher 3",
  "year": "2015",
  "image": "the_witcher_3",
  "type": "action-RPG",
  "mode": "solo",
  "support": "pc",
  "studio": "cd projekt red",
  "avis": "5",
  "desc": "The Witcher 3 est un jeu de rôle d'action en monde ouvert développé par CD Projekt RED. Les joueurs incarnent Geralt de Riv, un chasseur de monstres professionnel qui doit voyager à travers le monde pour retrouver sa fille adoptive, Ciri, et affronter une force mystérieuse appelée la Chasse Sauvage. Les joueurs peuvent explorer librement le monde, combattre des ennemis et améliorer leurs compétences et leur équipement. Le jeu est salué pour son histoire captivante, son monde ouvert immersif et son gameplay fluide et satisfaisant."
  },
  {"name" :"rayman 3 hoodlum havoc",
  "year":"2003",
  "image":"rayman_3",
  "type":"plateforme",
  "mode":"solo",
  "support":"ps2",
  "studio":"ubisoft",
  "avis":"3",
  "desc":"Rayman 3 est un jeu de plateforme en 3D dans lequel le joueur contrôle Rayman, un personnage sans bras ni jambes. Le jeu propose un scénario humoristique dans lequel Rayman doit sauver le monde de l'invasion de Dark Lums, des créatures maléfiques. Le jeu dispose de plusieurs mondes à explorer, chacun avec son propre thème et ses ennemis uniques. Rayman peut utiliser des pouvoirs spéciaux pour combattre les ennemis et résoudre les énigmes."
  },
  {"name":"gta v",
  "year":"2013",
  "image":"gta_v",
  "type":"action-adventure",
  "mode":"solo, multijoueur",
  "support":"ps3",
  "studio":"rockstar games",
  "avis":"5",
  "desc":"GTA V suit l'histoire de trois criminels, Michael De Santa, Franklin Clinton et Trevor Philips, qui cherchent à réaliser des braquages tout en évoluant dans un monde ouvert et dangereux. Le jeu offre une multitude de missions principales et secondaires, ainsi que des activités telles que la chasse, la plongée et les courses de voitures."
  },
  {"name":"scum",
  "year":"2018",
  "image":"scum",
  "type":"survival",
  "mode":"multiplayer",
  "support":"pc",
  "studio":"gamepires",
  "avis":"4",
  "desc":"Scum est un jeu de survie en ligne qui se déroule dans un monde ouvert rempli de zombies et de dangers. Les joueurs doivent chercher de la nourriture, de l'eau et des fournitures tout en évitant les ennemis et en combattant d'autres joueurs. Le jeu propose également un système de progression de personnage et des éléments de simulation tels que la gestion des calories et la formation de compétences."
  },
  {"name":"subnautica",
  "year":"2018",
  "image":"subnautica",
  "type":"survival",
  "mode":"solo",
  "support":"pc",
  "studio":"unknown worlds entertainment",
  "avis":"5",
  "desc":"Subnautica est un jeu de survie en monde ouvert se déroulant sous l'eau sur une planète extraterrestre. Les joueurs doivent gérer leur oxygène, leur nourriture et leur eau tout en explorant les profondeurs marines et en rassemblant des ressources pour construire des équipements et des bases. Le jeu propose également une histoire mystérieuse à découvrir au fil de l'aventure."
  },
  {"name":"brütal legend",
  "year":"2009",
  "image":"brutal_legend",
  "type":"action-adventure",
  "mode":"solo",
  "support":"ps3",
  "studio":"double fine productions",
  "avis":"3",
  "desc":"Brutal Legend est un jeu d'action-aventure qui suit Eddie Riggs, un roadie de heavy metal transporté dans un monde fantastique inspiré de l'univers du heavy metal. Le jeu mélange des éléments de hack-and-slash et de stratégie en temps réel, et propose une bande-son impressionnante avec des chansons de groupes de heavy metal célèbres."
  },
  {"name":"teardown",
  "year":"2020",
  "image":"teardown",
  "type":"action, simulation",
  "mode":"solo",
  "support":"pc",
  "studio":"tuxedo labs",
  "avis":"5",
  "desc":"Teardown est un jeu de destruction et de simulation de physique où le joueur incarne un cambrioleur professionnel. Le but est de planifier et d'exécuter des vols en détruisant des bâtiments et en créant des chemins d'accès. Le jeu propose également un mode sandbox où les joueurs peuvent créer et détruire des environnements à leur guise."
  },
  {"name":"the binding of isaac",
  "year":"2011",
  "image":"binding_of_isaac",
  "type":"roguelike",
  "mode":"solo",
  "support":"pc",
  "studio":"edmund mcMillen",
  "avis":"4",
  "desc":"The Binding of Isaac est un jeu de type roguelike qui suit Isaac, un jeune garçon qui tente d'échapper à sa mère fanatique religieuse en explorant des donjons générés aléatoirement. Le jeu propose des éléments de jeu de rôle et de tir en vue de dessus, ainsi qu'une grande variété d'objets et de capacités à collecter pour augmenter les chances de succès du joueur."
  },
  {"name":"horizon zero dawn",
  "year":"2017",
  "image":"horizon_zero_dawn",
  "type":"action-rpg",
  "mode":"solo",
  "support":"ps4",
  "studio":"guerrilla games",
  "avis":"5",
  "desc":"Horizon Zero Dawn est un jeu d'action-RPG en monde ouvert qui suit Aloy, une chasseuse et archère qui se bat contre des machines hostiles dans un futur post-apocalyptique. Le jeu propose des combats intenses, une histoire captivante et des graphismes époustouflants, ainsi qu'un monde ouvert riche en exploration et en quêtes secondaires."
  },
  {"name": "pokemon diamant",
  "year": "2006",
  "image": "pokemon_diamant",
  "type": "Jeu de rôle",
  "mode": "solo, multijoueur",
  "support": "ds",
  "studio": "game freak",
  "avis": "5",
  "desc": "Le joueur commence son aventure dans la région de Sinnoh, où il doit capturer des Pokémon et combattre des dresseurs pour devenir le meilleur dresseur de Pokémon de la région. En chemin, le joueur doit vaincre les membres de la Team Galaxie, une organisation criminelle qui veut exploiter les pouvoirs des Pokémon légendaires pour conquérir le monde."
  },
  {"name": "uncharted 4: a thief's end",
  "year": "2016",
  "image": "uncharted_4",
  "type": "action-aventure",
  "mode": "solo",
  "support": "ps4",
  "studio": "naughty dog",
  "avis": "5",
  "desc": "Le joueur incarne Nathan Drake, un chasseur de trésors à la retraite qui est rappelé pour une dernière mission : retrouver un trésor pirate légendaire. Nathan doit voyager à travers le monde pour trouver des indices et affronter des ennemis, tout en luttant avec les conflits familiaux et les dilemmes moraux."
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





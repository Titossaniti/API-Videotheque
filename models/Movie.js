const movies = [
    {
      "Title" : "How High",
      "Filmmaker" : "Jesse Dylan",
      "Description" : "Silas est un étudiant vivant dans un ghetto des États-Unis. Malgré son statut de petit voyou de son lycée, il est un génie de la botanique dont la marijuana et, par extension, un petit dealer dans son quartier. Son meilleur ami, Ivory, meurt à la suite d'un rendez-vous amoureux désastreux tout en ayant promis à Silas d'être toujours là pour lui auparavant. Celui-ci ayant été incinéré, Silas décide d'utiliser les cendres de son ami pour faire pousser un plant de cannabis. Au même moment, Jamal vit lui toujours chez sa mère et se fait régulièrement disputer pour des affaires de drogues et de petite délinquance. Au matin de leur examen final, Jamal et Silas se rencontrent par hasard et décident de fumer ensemble leur joint du matin, en essayant la marijuana issue de la culture de Silas avec les cendres d'Ivory.",
      "Duration" : 93,
      "TimeWatched" : 88,
      "imageURL" : "how-high.jpg",
      "Year" : "2001",
      "Actor" : "Method Man, Redman, Obba Babatundé, Anna Maria Horsford, Mike Epps",
      "Type" : "Comédie",
      "Trailer" : "https://www.youtube.com/embed/7qBazPSNvTc",
      "_id" : "79505335"
    },
    {
      "Title" : "Las Vegas Parano",
      "Filmmaker" : "Terry Gilliam",
      "Description" : "En 1971, le journaliste Raoul Duke, accompagné de son avocat, maître Gonzo, est en route pour Las Vegas car il a été chargé d'y couvrir un événement sportif majeur, les 400 miles de Las Vegas, une course de motos aux allures de kermesse populaire. Mais ce reportage n'est qu'un prétexte car Duke et Gonzo ont emmené avec eux toute une panoplie des drogues les plus diverses (mescaline, LSD, cocaïne, marijuana, poppers, et même de l'éther), et comptent bien s'adonner à leur consommation tout au long de leur séjour, cherchant à échapper à la cynique réalité des années 1970 et à retrouver le véritable esprit du « rêve américain » qui animait les années 1960. Ils prennent en route un auto-stoppeur mais celui-ci est rapidement effrayé par leur comportement irrationnel et prend la fuite. À leur arrivée à l'hôtel, Duke est en pleine montée d'acide et ses hallucinations attirent l'attention sur lui.",
      "Duration" : 118,
      "TimeWatched" : 118,
      "imageURL" : "las-vegas-parano.jpg",
      "Year" : "1998",
      "Actor" : "Johnny Depp, Benicio Del Toro, Christina Ricci",
      "Type" : "Comédie, Aventure",
      "Trailer" : "https://www.youtube.com/embed/XAd32LNBdeU",
      "_id" : "98471208"
    },
    {
      "Title" : "La Grande Vadrouille",
      "Filmmaker" : "Gérard Oury",
      "Description" : "Au retour d'un bombardement sur la Ruhr, un avion anglais de la R.A.F. se trouve pris dans le feu de la Flak allemande qui le descend au-dessus de Paris. Sir Reginald, avant de sauter en parachute sur la ville occupée, fixe à ses hommes un point de ralliement: le Hammam. Peter Cunningham tombe sur l'échafaudage d'Augustin, peintre en bâtiment, nettoyant la façade de la Kommandantur.",
      "Duration" : 132,
      "TimeWatched" : 132,
      "imageURL" : "la-grande-vadrouille.jpg",
      "Year" : "1966",
      "Actor" : "Bourvil, Louis de Funès, Terry-Thomas, Mike Marshall, Marie Dubois",
      "Type" : "Comédie",
      "Trailer" : "https://www.youtube.com/embed/CisE5TTyI3I",
      "_id" : "63706356"
    },
    {
      "Title" : "Avatar",
      "Filmmaker" : "James Cameron",
      "Description" : "Sur le monde extraterrestre luxuriant de Pandora vivent les Na'vi, des êtres qui semblent primitifs, mais qui sont très évolués. Jake Sully, un ancien Marine paralysé, redevient mobile grâce à un tel Avatar et tombe amoureux d'une femme Na'vi. Alors qu'un lien avec elle grandit, il est entraîné dans une bataille pour la survie de son monde.",
      "Duration" : 162,
      "TimeWatched" : 12,
      "imageURL" : "avatar.jpg",
      "Year" : "2009",
      "Actor" : "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang, Michelle Rodríguez",
      "Type" : "Science fiction, Aventure",
      "Trailer" : "https://www.youtube.com/embed/O1CzgULNRGs",
      "_id" : "02268087"
    },
    {
      "Title" : "Le Livre de la jungle",
      "Filmmaker" : "Wolfgang Reitherman",
      "Description" : "La panthère Baghéera découvre dans la jungle un jeune enfant abandonné. Elle décide de le confier à une famille de loups qui l'élève comme un louveteau. Alors que Mowgli a 10 ans, le tigre Shere Kahn approche du territoire des loups. Pour éviter à l'enfant une fin inévitable, les loups l'éloignent et décident de le confier aux hommes d'un village proche. C'est Baghéera qui le conduit. Pendant leur voyage, ils feront de nombreuses rencontres, parfois redoutables.",
      "Duration" : 195,
      "TimeWatched" : 124,
      "imageURL" : "livre-de-la-jungle.jpg",
      "Year" : "1967",
      "Actor" : "Pas d'acteur, mais les voix (VF) de : Pascal Bressy : Mowgli, Claude Bertrand : Baloo, Jean Stout : Baloo (chant), René Arrieu : Bagheera",
      "Type" : "Animation, Aventure",
      "Trailer" : "https://www.youtube.com/embed/MM8GOli-DIg",
      "_id" : "77883406"
    },
    {
      "Title" : "Les Visiteurs",
      "Filmmaker" : "Jean-Marie Poiré",
      "Description" : "En l'an de grâce 1112, le comte de Montmirail et son fidèle écuyer, Jacquouille la Fripouille, vont se retrouver propulsés en l'an 1993 après avoir bu une potion magique fabriquée par l'enchanteur Eusaebius. Ainsi, ils auront l'occasion de se défaire d'un terrible sort.",
      "Duration" : 107,
      "TimeWatched" : 107,
      "imageURL" : "les-visiteurs.jpg",
      "Year" : "1993",
      "Actor" : "Christian Clavier, Jean Reno, Valérie Lemercier, Marie-Anne Chazel",
      "Type" : "Comédie",
      "Trailer" : "https://www.youtube.com/embed/EFp7mBA5hIs",
      "_id" : "48348850"
    },
    {
      "Title" : "8 Mile",
      "Filmmaker" : "Curtis Hanson",
      "Description" : "A Detroit, en 1995, Jimmy Smith Jr. a des rêves plein la tête, mais il lui manque encore les mots pour les exprimer. En dépit de tous ses efforts, Jimmy n'a jamais franchi cette barrière symbolique et continue d'accumuler les déboires familiaux, professionnels et sentimentaux. Un jour, il participe à un clash - une joute oratoire de rappeurs - où il doit faire face à Papa Doc, le chef de la bande des `Leaders du Monde Libre`. Paralysé par le trac, il reste muet et doit quitter la scène sous les huées de la foule. Quelques jours plus tard, Jimmy se retrouve forcé de tenter un come-back...",
      "Duration" : 110,
      "TimeWatched" : 110,
      "imageURL" : "8miles.jpg",
      "Year" : "2002",
      "Actor" : "Eminem, Kim Basinger, Mekhi Phifer, Brittany Murphy",
      "Type" : "Drame, Musical",
      "Trailer" : "https://www.youtube.com/embed/LmRum7tpFsI",
      "_id" : "07360331"
    },
    {
      "Title" : "Les Onze Commandements",
      "Filmmaker" : "François Desagnat",
      "Description" : "Le monde va mal, les humains ne rigolent plus, la situation est grave. le dieu de la blague n'a plus qu'une solution : michaël youn et sa bande ! leur mission : accomplir les 11commandements de la blague pour remettre les peuples sur le droit cheminde la rigolade en repoussant les limites de la bêtise.",
      "Duration" : 85,
      "TimeWatched" : 85,
      "imageURL" : "Les-Onze-Commandements.jpg",
      "Year" : "2004",
      "Actor" : "Michaël Youn, Vincent Desagnat, Benjamin Morgaine",
      "Type" : "Comédie",
      "Trailer" : "https://www.youtube.com/embed/iG5mjZ3t5RQ",
      "_id" : "14761866"
    },
    {
      "Title" : "Je Suis Une Légende",
      "Filmmaker" : "Francis Lawrence",
      "Description" : "En 2009, la docteure Alice Krippin trouve ce qui semblerait être un vaccin contre le cancer parfaitement efficace. Cependant, la joie est de courte durée, car, à la suite d'une erreur humaine, le vaccin, en réalité corrompu, quitte le lieu clos du laboratoire et se diffuse sur la Terre (pandémie), tuant les humains les moins résistants et faisant muter les autres, les transformant en « infectés ». L'évacuation des survivants est un échec, personne ne trouvant de remède au nouveau virus qui décime l'humanité. Après l'apogée de la catastrophe, un dernier espoir subsiste néanmoins. Le docteur Robert Neville (Will Smith), officier de l'armée des États-Unis, doté de grandes connaissances en virologie et immunisé contre le « virus Krippin », occupe toujours la maison familiale située dans la zone où le virus a émergé la première fois à New York...",
      "Duration" : 104,
      "TimeWatched" : 104,
      "imageURL" : "je-suis-une-legende.jpg",
      "Year" : "2007",
      "Actor" : "Will Smith, Salli Richardson-Whitfield, Alice Braga, Willow Smith",
      "Type" : "Science-fiction post-apocalyptique",
      "Trailer" : "https://www.youtube.com/embed/yTNKbLhVAQA",
      "_id" : "79935530"
    }
];

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





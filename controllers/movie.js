const uuid = require('uuid/v1');
const Game = require('../models/Game');

exports.getAllGames = (req, res, next) => {
  Game.find().then(
    (games) => {
      const mappedGames = games.map((game) => {
        game.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + game.imageUrl;
        return game;
      });
      res.status(200).json(mappedGames);
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Database error!'));
    }
  );
};

exports.getOneGame = (req, res, next) => {
  Game.findById(req.params.id).then(
    (game) => {
      if (!game) {
        return res.status(404).send(new Error('Game not found!'));
      }
      game.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + game.imageUrl;
      res.status(200).json(game);
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Database error!'));
    }
  )
};

/**
 *
 * Si temps nécessaire pour validation formulaire :
 * contact: {
 *   firstName: string,
 *   lastName: string,
 *   address: string,
 *   city: string,
 *   email: string
 * }
 * games: [string] <-- array of game _id
 *
 */
exports.orderGames = (req, res, next) => {
  if (!req.body.contact ||
      !req.body.contact.firstName ||
      !req.body.contact.lastName ||
      !req.body.contact.address ||
      !req.body.contact.city ||
      !req.body.contact.email ||
      !req.body.games) {
    return res.status(400).send(new Error('Bad request!'));
  }
  let queries = [];
  for (let gameId of req.body.games) {
    const queryPromise = new Promise((resolve, reject) => {
      Game.findById(gameId).then(
        (game) => {
          if (!game) {
            reject('Game not found: ' + gameId);
          }
          game.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + game.imageUrl;
          resolve(game);
        }
      ).catch(
        () => {
          reject('Database error!');
        }
      )
    });
    queries.push(queryPromise);
  }
  Promise.all(queries).then(
    (games) => {
      const orderId = uuid();
      return res.status(201).json({
        contact: req.body.contact,
        games: games,
        orderId: orderId
      })
    }
  ).catch(
    (error) => {
      return res.status(500).json(new Error(error));
    }
  );
};

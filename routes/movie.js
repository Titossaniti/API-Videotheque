const express = require('express');
const router = express.Router();

const gameCtrl = require('../controllers/game');

router.get('/', gameCtrl.getAllGames);
router.get('/:id', gameCtrl.getOneGame);
router.post('/order', gameCtrl.orderGames);

module.exports = router;
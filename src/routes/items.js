const express = require("express");
const router = express.Router();
const itemController = require('../controllers/itemController')

router.get('/lists/:listId/items', itemController.index);

module.exports = router;

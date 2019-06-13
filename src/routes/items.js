const express = require("express");
const router = express.Router();
const itemController = require('../controllers/itemController')

router.post('/lists/:listId/create', itemController.create);

module.exports = router;

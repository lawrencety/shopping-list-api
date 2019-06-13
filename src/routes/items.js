const express = require("express");
const router = express.Router();
const itemController = require('../controllers/itemController')

router.post('/lists/:listId/create', itemController.create);
router.post('/lists/:listId/items/:id/update', itemController.update);

module.exports = router;

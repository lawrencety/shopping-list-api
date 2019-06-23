const express = require("express");
const router = express.Router();
const itemController = require('../controllers/itemController')

router.post('/lists/:listId/items/create', itemController.create);
router.post('/lists/:listId/items/:id/update', itemController.update);
router.post('/lists/:listId/items/:id/purchaseStatusTrue', itemController.setPurchaseStatusTrue);
router.post('/lists/:listId/items/:id/purchaseStatusFalse', itemController.setPurchaseStatusFalse);
router.post('/lists/:listId/items/:id/destroy', itemController.destroy);

module.exports = router;

const express = require("express");
const router = express.Router();
const listController = require('../controllers/listController')

router.get('/lists', listController.index);
router.post('/lists/create', listController.create);
router.get('/lists/:id', listController.show);
router.post('/lists/:id/update', listController.update);
router.post('/lists/:id/destroy', listController.destroy);

module.exports = router;

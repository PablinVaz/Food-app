const { Router } = require ('express');
const router = Router();
const cartController = require('../controllers/cart.controller');


router.post('/add_to_cart/:id', cartController.add);
router.get('/cart_list', cartController.list);

module.exports = router;
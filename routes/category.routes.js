const { Router } = require ('express')
const router = Router()
const categoryController = require('../controllers/category.controller');


router.get('/', categoryController.list);
router.get('/find/:name', categoryController.list_meals);

module.exports = router;
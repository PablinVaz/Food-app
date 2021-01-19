const { Router } = require ('express')
const router = Router()
const mealController = require('../controllers/meal.controller');

router.get('/list',mealController.list);
router.post('/create',mealController.create);
router.get('/show/:id',mealController.show);
router.get('/delete/:id',mealController.delete);
router.post('/edit/:id',mealController.edit);

module.exports = router;
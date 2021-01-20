const Category = require('../models/Category');
const Meal = require('../models/Meal');

const categoryController = {}

categoryController.list = async (req,res)=>{

    const categories = await Category.find({});
    res.render('index',{categories:categories});

}

categoryController.list_meals = async (req,res)=>{

    const meals = await Meal.find({category:req.params.name});
    res.render('index',{meals:meals});

}

module.exports = categoryController;
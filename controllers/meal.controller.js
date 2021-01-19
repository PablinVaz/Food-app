const Meal = require('../models/Meal');

const mealController = {}

// mealController.renderMeal = (req,res)=>{

    

// }
mealController.list = async (req,res)=>{

    const meals = await Meal.find({});

}
mealController.show = async (req,res)=>{

    const meal = await Meal.findOne({_id:req.params.id});

}

mealController.save = async(req,res)=>{

    const {img_url,img_alt,name,description,qty,category} = req.body;
    const meal = new Meal ({img_url,img_alt,name,description,qty,category});
    await meal.save();
    res.send('Plato guardado');

}

mealController.edit = async(req,res)=>{

    const {img_url,img_alt,name,description,qty,category} = req.body; 
    const meal = await Meal.findOneAndUpdate(req.params.id,{img_url,img_alt,name,description,qty,category});
    res.send('Plato editado');
}
mealController.delete = async(req,res)=>{

    await Meal.deleteOne({_id:req.params.id});
    res.send('Plato borrado');
}


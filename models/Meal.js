const{Schema,model} = require('mongoose');

const mealSchema = new Schema({

    img_url:String,
    img_alt:String,
    name:String,
    description:String,
    qty:Number,
    category:String



})

module.exports = model('Meal',mealSchema,'meals');
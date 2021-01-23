const Meal = require('../models/Meal');
const CartItem = require('../models/CartItem')
const cartController = {}

cartController.add = async function(req,res){

    const qty = req.body.qty
    console.log(qty)
    const {img_url,img_alt,price,name,description} = await Meal.findOne({_id:req.params.id});
    const cartItem = new CartItem({img_url,img_alt,price,name,description,qty});
    await cartItem.save();
    
}

cartController.list = async (req,res)=>{

    const cartList = await CartItem.find({});
    res.render('cart',{cartList:cartList});

}

module.exports = cartController;
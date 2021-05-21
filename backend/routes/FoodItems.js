const express = require("express");
const router = express.Router();
const CartModel = require("../models/cart")
router.post("/add", function(req, res){
   console.log(req.body);
   const CartItem = new CartModel(req.body);
   CartItem.save(function(err){
      if(err) {
         console.log("err", err);
         res.status(400).send({
            message: err,
         });
      } else {
         res.send("Food items add successfully");
      }
   });
});

router.get("/getAll", function(req, res){
   CartModel.find({}, {__v:0}, function(err, data){
        if(err) {
           console.log("err", err);
           res.status(400).send({
              message: err,
           });
        } else {
           res.send({results: data});
        }
   });
});

router.delete("/removeItems", function(req, res){
   console.log("Removing item");
   const foodItemId = req.body._id
   console.log(req.body);
   CartModel.findOneAndRemove({_id: foodItemId },function(err){
       if(err) {
           console.log("err", err);
           res.status(400).send({
            message: err,
         });
       } else {
           res.send({result: "foodItem removed successfully"});
       }
   });
});

router.delete("/clearCartData", function(req, res){
     console.log(req.body);
     CartModel.deleteMany({}, function(err){
        if(err) {
           console.log("err", err);
           res.status(400).send({
            message: err,
         });
        } else {
            res.send("All data deleted successfully");
        }
     });
});

module.exports = router;
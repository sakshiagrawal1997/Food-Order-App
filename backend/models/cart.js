const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema(
    {
    name: String,
    image: String,
    price: Number,
    description: String
   }, 
{
    collection: "CartItems",
}
);

module.exports = mongoose.model("CartItems", CartSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create List Schema and Model
const ListSchema = new Schema({
    itemName: {
        type: String,
        required: [true, "Item Name is Required"]
    },
    itemDescription: {
        type: String,
        required: [true, "Item Description is Required"]
    },
    itemCategory: {
        type: String,
        required: [true, "Item Category is Required"]
    },
    itemPrice: {
        type: Number,
        required: [true, "Item Price is Required"]
    },
    itemPic: {
        type: String,
        required: [true, "Item Pic URL is Required"]
    }
});

const List = mongoose.model('list', ListSchema);

module.exports = List;
const express = require('express');
const router = express.Router();
const List = require("../Item");

// Get a List of Users from DB
router.get("/Lists/:_id", function (req, res, next) {
    List.findOne({ _id: req.params._id }).then(function (item) {
        res.send(item);
    });
});

router.get("/Lists", function (req, res, next) {
    List.find({}).then(function(users){
        res.send( users );
    });
});

// Add a List from DB
router.post("/Lists", function (req, res, next) {
    List.create(req.body).then(function (user) {
        res.send(user);
    }).catch(next);
});


// Update a User from DB
router.put("/Lists/:_id", function (req, res, next) {
    List.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function (user) {
        List.findOne({ _id: req.params.id }).then(function (user) {
            res.send(user);
        });
    });
});

// Delete User/s from DB
router.delete("/Items/:_id", function (req, res, next) {
    List.findByIdAndRemove({ _id: req.params.id }).then(function (user) {
        res.send(user);
    });
});

module.exports = router;
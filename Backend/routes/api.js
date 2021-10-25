const express = require('express');
const router = express.Router();
const User = require("../User");

// Get a List of Users from DB
// router.get("/Users/:id", function (req, res, next) {
//     User.findOne({ _id: req.params.id }).then(function (user) {
//         res.send(users);
//     });
// });

router.get("/Users", function (req, res, next) {
    User.findOne({}).then(function(users){
        res.send( users );
    });
});

// Add a User from DB
router.post("/Users", function (req, res, next) {
    /* var user = new User(req.body);
    // user.save();
    // res.send( {
    //     type: "POST",
    //     name: req.body.name,
    //     rank: req.body.rank
    }); different method */
    User.create(req.body).then(function (user) {
        res.send(user);
    }).catch(next);
});

// Update a User from DB
router.put("/Users/:id", function (req, res, next) {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function (user) {
        User.findOne({ _id: req.params.id }).then(function (user) {
            res.send(user);
        });
    });
});

// Delete User/s from DB
router.delete("/Users/:id", function (req, res, next) {
    User.findByIdAndRemove({ _id: req.params.id }).then(function (user) {
        res.send(user);
    });
});

module.exports = router;
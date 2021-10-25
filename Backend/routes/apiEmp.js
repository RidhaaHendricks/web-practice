const express = require('express');
const router = express.Router();
const Emp = require("../Emp");

// Get a List of Users from DB
// router.get("/Users/:name", function (req, res, next) {
//     User.findOne({ name: req.params.name }).then(function (users) {
//         res.send(users);
//     });
// });

router.get("/Emps", function (req, res, next) {
    Emp.find({}).then(function(emps){
        res.send( emps );
    });
});

// Add a Emp from DB
router.post("/Emps", function (req, res, next) {
    /* var user = new User(req.body);
    // user.save();
    // res.send( {
    //     type: "POST",
    //     name: req.body.name,
    //     rank: req.body.rank
    }); different method */
    Emp.create(req.body).then(function (emp) {
        res.send(emp);
    }).catch(next);
});

// Update a Emp from DB
router.put("/Emps/:id", function (req, res, next) {
    Emp.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function (user) {
        Emp.findOne({ _id: req.params.id }).then(function (user) {
            res.send(user);
        });
    });
});

// Delete Emp/s from DB
router.delete("/Emps/:id", function (req, res, next) {
    Emp.findByIdAndRemove({ _id: req.params.id }).then(function (emp) {
        res.send(emp);
    });
});

module.exports = router;
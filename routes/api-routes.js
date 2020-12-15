
const Workout = require("../models/workout");
// const Workout = require("../models/workout")

module.exports = (app) => {


app.get("/api/workout", (req, res) => {
    Workout.find({})
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.json(err);
    });
});


app.post("/api/workout", (req, res) => {
    console.log(req.body)
    Workout.create(req.body)
        .then((response) => {
            res.json(response)
        })
        .catch((err) => {
            res.json(err);
        })
})
};

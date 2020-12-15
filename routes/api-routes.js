
const Exercise = require("../models/exercise");
// const Workout = require("../models/workout")

module.exports = (app) => {


app.get("/api/exercise", (req, res) => {
    Exercise.find({})
    .then(exercise => {
        res.json(exercise);
    })
    .catch(err => {
        res.json(err);
    });
});


app.post("/api/exercise", (req, res) => {
    console.log(req.body)
    Exercise.create(req.body)
        .then((response) => {
            res.json(response)
        })
        .catch((err) => {
            res.json(err);
        })
})
};

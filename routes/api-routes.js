
// const app = require("express").Router();
const Workout = require("../models/workout.js");


module.exports = (app) =>{
app.get("/api/workouts", (req, res)=>{
  Workout.find()
  .then( results=> res.json(results))
  .catch(err=> res.json(err))
})
app.post("/api/workouts", (req, res)=>{
  Workout.create({})
  .then( results=> res.json(results))
  .catch(err=> res.json(err))
})

app.put("/api/workouts/:id", (req, res)=>{
  Workout.findByIdAndUpdate(
      req.params.id,
      {$push : {exercises: req.body}}
  )
  .then( results=> res.json(results))
  .catch(err=> res.json(err))
})

app.get("/api/workouts/range", (req, res) =>{
  Workout.find()
  .then(results=> res.json(results))
  .catch(err=> res.json(err))
})
};
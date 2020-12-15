const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Exercise type required."
            },

            name: {
                type: String,
                trim: true,
                required: "Name required."
            },

            duration: {
                type: Number,
                required: "Length required."
            },

            distance: {
                type: Number
            },

            weight: {
                type: Number
            },

            sets: {
                type: Number
            },

            reps: {
                type: Number
            }
        }
    ]
},
    {
        toJSON: {
            virtuals: true
        }
    });

workoutSchema.virtual("totalDuration")
.get(function(){
    return this.exercises.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.duration
      }, 0);
    
})

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercise: [
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

exerciseSchema.virtual("totalDuration")
.get(function(){
    return this.exercise.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.duration
      }, 0);
    
})

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
const mongoose = require("mongoose");
const validator = require("validator");

const planSchema = new mongoose.Schema({
    hotelId: {
        type: String,
        required: [true, 'Invalid data!']
    }, 
    name: {
        type: String,
        minLength: [6, 'Invalid name!'],
        maxLength: [100, 'Invalid name!'],
        validate(value) {
            if (value === "" || value === null) {
                throw new Error("Name require!");
            }
       }
    }, 
    description: {
        type: String,
        minLength: [3, 'Invalid description!'],
        maxLength: [1020, 'Invalid description!'],
        validate(value) {
            if (value ===  "" || value ===  null) {
                throw new Error("Name require!");
            }
       }
    }, 
    updatedDate: { 
        type: Date, 
        default: Date.now 
    },
    isEnable: {
        type: Boolean,
        default: true
    }
})

const Plan = new mongoose.model('Plan', planSchema);

module.exports = Plan;
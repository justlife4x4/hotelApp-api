const mongoose = require("mongoose");
const validator = require("validator");

const roomCategorySchema = new mongoose.Schema({
    hotelId: {
        type: String,
        required: [true, 'Invalid data!']
    }, 
    name: {
        type: String,
        minLength: [3, 'Invalid name!'],
        maxLength: [100, 'Invalid name!'],
        validate(value) {
            if (value === "" || value === null) {
                throw new Error("Name require!");
            }

            // if (hotelId + name === this.hotelId + value ) {
            //     throw new Error("This data already exists!");
            // }
       }
    }, 
    tariff: {
        type: Number,
        default: 0,
        required: [true, 'Ttariff require!'],
        min: [1, 'Invalid tariff!'],
    },
    maxDiscount: {
        type: Number,
        default: 0,
        min: [0, 'Invalid discount!'],
        validate(value) {
            if (this.tariff < value) {
                throw new Error("Incorrect discount!");
            }
        }
    },
    extraBedTariff: {
        type: Number,
        default: 0,
        min: [0, 'Invalid extra bed charge!'],
        validate(value) {
            if (this.tariff < value) {
                throw new Error("Incorrect extra bed charge!");
            }
        }
    },
    extraPersonTariff: {
        type: Number,
        default: 0,
        min: [0, 'Invalid extra person charge!'],
        validate(value) {
            if (this.tariff < value) {
                throw new Error("Incorrect extra person charge!");
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

const RoomCategory = new mongoose.model('RoomCategory', roomCategorySchema);

module.exports = RoomCategory;
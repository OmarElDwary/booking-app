const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: [String],
    location: String,
    perks: [String],
    extraInfo: String,
    price: Number,
    checkIn: Number,
    checkOut: Number,
    maxGuests: Number,
    host: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    bookings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking'
    }]
});

const PlaceModel = mongoose.model('Place', PlaceSchema);

module.exports = PlaceModel;

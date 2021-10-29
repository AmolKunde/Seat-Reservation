const mongoose = require('mongoose');

// Ticket collection Schema
const ticketSchema = new mongoose.Schema({
    
    ticketsAvailable: Number, //Number of tickets available
    ticketsBooked: Number, //Number of tickets booked
    ticketList: Array, //All tickets
});

const Ticket = mongoose.model("Ticket", ticketSchema); 

module.exports = Ticket;
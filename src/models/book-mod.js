const express = require('express');
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    NameOfBook: {
        type: String,
        required: true
    },

    Description: {
        type: String,
        required: true
    },

    Author: {
        type: String,
        required: true
    },
})

module.exports = new mongoose.model("Book", bookSchema)
// (4) Buat Schema Dosen
const mongoose = require('mongoose')

const DosenSchema = mongoose.Schema({
    // Buat Schema data
    nama: {
        type: String,
        required: true
    },
    umur: {
        type: Number,
        required: false,
        default: null
    },
    alamat: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false,
        unique: true,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Dosen', DosenSchema)
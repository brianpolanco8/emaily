const mongoose = require('mongoose');
const { Schema } = mongoose;
const Recipientschema = require('./Recipient')

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [Recipientschema],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    dateSent: Date,
    lastResponded: Date
})

const Survey = mongoose.model('surveys', surveySchema)
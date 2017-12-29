const mongoose = require('mongoose');

// Define contact schema
const contactSchema = mongoose.Schema({
    clientName: { type: String },
    clientAliases: { type: String },
    address: { type: String },
    contactNb: { type: String },
    Id1Img: { name: String, contentType: String },
    Id2Img: { name: String, contentType: String }
});

// Define contact model
const Contact = module.exports = mongoose.model('Contact', contactSchema);

module.exports.listAllContacts = function (callback) {
    Contact.find({}, callback);
};

module.exports.getContactByID = function (id, callback) {
    Contact.findById(id, callback);
};

module.exports.addContact = function (newContact, callback) {
    newContact.save(callback);
};

module.exports.removeContact = function (id, callback) {
    Contact.findOneAndRemove({_id: id},callback);
};

module.exports.updateContact = function (id, updatedContact, callback) {
    Contact.findOneAndUpdate({_id: id}, updatedContact, {new: false}, callback)
};

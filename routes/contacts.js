const express = require('express');
const multer = require('multer');
const router = express.Router();
const fs = require('fs');
const Contact = require('../models/contact');
const upload = multer({dest: "./uploads"});
const app = require('../app');


const cpUpload = upload.fields([{name: 'avatar', maxCount: 1}, {name: 'gallery', maxCount: 1}]);


// Check Connection to db

// Add Contact
router.post('/', cpUpload, (req, res, next) => {

    console.log('req.files => ' + JSON.stringify(req.files));
    let newContact = new Contact();
    newContact.clientName = req.body.clientName;
    newContact.clientAliases = req.body.clientAliases;
    newContact.address = req.body.address;
    newContact.contactNb = req.body.contactNb;


    if (req.files['avatar']) {
        newContact.Id1Img.name = req.files['avatar'][0].filename;
    }
    if (req.files['gallery']) {
        newContact.Id2Img.name = req.files['gallery'][0].filename;
    }

    Contact.addContact(newContact, (err) => {
        if (err) {
            res.json({success: false, msg: 'Failed to add the contact.'});
        } else {
            // add files to db
            if (req.files['avatar']) {
                console.log('Id1 files input');
                saveFileToDB(req.files['avatar'][0], (err) => {
                    if (err) {
                        handleError(res, err.message, "Failed to upload Id1 Image");
                    } else {
                        console.log('Id1 Image Uploaded');
                    }

                })
            }
            if (req.files['gallery']) {
                console.log('Id2 files input');
                saveFileToDB(req.files['gallery'][0], (err) => {
                    if (err) {
                        handleError(res, err.message, "Failed to upload Id2 Image");
                    } else {
                        console.log('Id2 Image Uploaded');
                    }
                })

            }
            res.json({success: true, msg: 'Contact info added.'});
        }
    })
});


// Upload File to the DB
function saveFileToDB(file, cb) {
    const gfs = app.gfs;

    const writestream = gfs.createWriteStream({
        filename: file.filename
    });
    //pipe multer's temp file /uploads/filename into the stream we created above. On end deletes the temporary file.
    fs.createReadStream(file.path)
        .on("end", function () {
            fs.unlink(file.path, cb)
        })
        .on("err", function () {
            fs.unlink(file.path, cb)
        })
        .pipe(writestream);

}

// Delete Image from the DB


function getOIDByFilename(filename) {
    const gfs = app.gfs;
    gfs.files.find({filename: filename}).toArray(function (err, files) {
        if (err) {
            console.log(err)
        } else {
            console.log(files);
        }
    })

}

// Get all contacts
router.get('/', (req, res, next) => {
    Contact.listAllContacts((err, contacts) => {
        if (err) {
            res.json({success: false, msg: 'Cannot list all contacts'});
        } else {
            res.json({success: true, msg: 'Load all contacts successfully', data: contacts});
        }
    })
});


// Get A Contact
router.get('/:contactID', (req, res, next) => {
    Contact.getContactByID(req.params.contactID, (err, contact) => {
        if (err) {
            res.json({success: false, msg: 'Cannot get a contact'});
        } else {
            res.json({success: true, msg: 'load a contact successfully', data: contact});
        }
    })
});


//Remove A Contact
router.delete('/:contactID', (req, res, next) => {
    const gfs = app.gfs;
    Contact.removeContact(req.params.contactID, (err, contact) => {
        if (err) {
            res.json({success: false, msg: 'The contact is not removed'});
        } else {

            // Check If the contact has Id1 stored
            if (contact.Id1Img.name) {
                gfs.remove({filename: contact.Id1Img.name}, (err) => {
                    if (err) {
                        return handleError(res, err.message, "Failed to remove Id1 Image");
                    }
                    console.log('Id1 Img Removed');
                });
            }

            // Check If the contact has Id2 stored
            if (contact.Id2Img.name) {
                gfs.remove({filename: contact.Id2Img.name}, (err) => {
                    if (err) {
                        return handleError(res, err.message, "Failed to remove Id2 Image");
                    }
                    console.log('Id2 Img Removed');
                });
            }


            res.json({success: true, msg: 'The contact is removed', data: contact});
        }
    })
});


// Update A Contact
router.put('/:contactID', cpUpload, (req, res, next) => {
    const gfs = app.gfs;
    let updatedContact = req.body;

    // Check If update the image files
    if (req.files['avatar']) {
        updatedContact.Id1Img = {
            "name" : req.files['avatar'][0].filename
        }
    }
    if (req.files['gallery']) {
        updatedContact.Id2Img = {
            "name" : req.files['gallery'][0].filename
        }
    }

    console.log('req.files => ' + JSON.stringify(req.files, null, 4));

    //console.log('newContact => ' + JSON.stringify(updatedContact, null, 4));


    Contact.updateContact(req.params.contactID, updatedContact, (err, contact) => {
        if (err) {
            return handleError(res, err.message, "Failed to update the contact");
        } else {
            //res.json({success: true, msg: 'Update the contact succeed', data: contact});

            // Delete the old image file before uploading the new one

            // add files to db
            if (req.files['avatar']) {

                // Check If the contact has Id1 stored and then delete it
                if (contact.Id1Img.name) {
                    gfs.remove({filename: contact.Id1Img.name}, (err) => {
                        if (err) {
                            return handleError(res, err.message, "Failed to remove Id1 Image");
                        }
                        console.log('Old Id1 Img Removed');
                    });
                }
                console.log('Id1 files input');
                saveFileToDB(req.files['avatar'][0], (err) => {
                    if (err) {
                        handleError(res, err.message, "Failed to upload Id1 Image");
                    } else {
                        console.log('Id1 Image Uploaded');
                    }

                })
            }
            if (req.files['gallery']) {
                // Check If the contact has Id2 stored and then delete it
                if (contact.Id2Img.name) {
                    gfs.remove({filename: contact.Id2Img.name}, (err) => {
                        if (err) {
                            return handleError(res, err.message, "Failed to remove Id2 Image");
                        }
                        console.log('Id2 Img Removed');
                    });
                }

                console.log('Id2 files input');
                saveFileToDB(req.files['gallery'][0], (err) => {
                    if (err) {
                        handleError(res, err.message, "Failed to upload Id2 Image");
                    } else {
                        console.log('Id2 Image Uploaded');
                    }
                })

            }

            res.json({success: true, msg: 'Update the contact succeed'});
        }
    })
})
;


// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}


module.exports = router;
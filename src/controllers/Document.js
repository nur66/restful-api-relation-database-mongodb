const mongoose = require('mongoose')
const Docs = require("../models/Document")

exports.createDocs = (req, res, next) => {
    console.log('Adding new Docs');

    var docsObj = {
        "_id": new mongoose.Types.ObjectId(),
        "title": req.body.title,
        "description": req.body.description,
        // "user": "6367f107249ae36ff8aac448"
        "user": req.body.user_id
    }

    var newDocs = new Docs(docsObj)
    newDocs.save((err, doc) => {
        if(err)
            res.status(400).send("There is an error while adding new docs")
        else
            res.status(201).json(doc)
    })
}

exports.showDocs = (req, res, next) => {
    console.log("Getting All Documents")
    Docs.find({}).populate("user").exec((err, docs) => {
        if(err)
            res.status(400).send(err)
        else
            res.status(200).json(docs)
    })
}

exports.showDocswhere = (req, res, next) => {
    const title = req.query.title
    const limit = req.query.limit
    // const arrFilter = []

    let length = 10
    const arrDoc = []
    for(i = 1; i <= length; i++ ){
        arrDoc.push('Doc ' + i)
    }
    // console.log(arrDoc);
    
    console.log("Getting Documents Using Where Clause")
    Docs.find({})
    // .where('title').equals(title)
    .where('title').in(arrDoc)
    .limit(limit)
    .select('title description')
    .populate("user").exec((err, docs) => {
        // docs.forEach(filterFunction)

        // function filterFunction(doc){
        //     // console.log(doc.title);
        //     if(doc.title === title){
        //         arrFilter.push(doc.title + ' update')
        //     }
        // }
        // console.log(arrFilter)

        if(err)
            res.status(400).send(err)
        else
            res.status(200).json(docs)
    })
}

exports.showDocsById = (req, res, next) => {
    console.log("Getting Documents by Id")
    // Docs.findById(req.params.id, 'title').populate("user", "name").exec((err, doc) => {  // work
    Docs.findById(req.params.id, 'title').populate({ path: 'user', select: 'firstName lastName' }).exec((err, doc) => {
        if(err)
            res.status(400).send(err)
        else
            res.status(200).json(doc)
    })
}

exports.editDocs = (req, res, next) => {
    console.log("Editing a document")
    var docObj = {
        "title": req.body.title,
        "description": req.body.description
    }

    Docs.findByIdAndUpdate(req.params.id, docObj, {new: true}).exec((err, doc) => {
        if(err)
            res.status(400).send(err)
        else
            res.status(200).json(doc)
    })
}

exports.deleteDocs = (req, res, next) => {
    console.log("Deleting a document")
    Docs.findOneAndDelete(req.params.id).exec((err, doc) => {
        if(err)
            res.status(400).send(err)
        else
            res.status(200).json(doc)
    })
}


// PATCh
exports.patchDocs = (req, res, next) => {
    console.log("Updating a document")
    var docObj = {
        "title": req.body.title,
        "description": req.body.description
    }

    Docs.findByIdAndUpdate(req.params.id, docObj, {new: true}).exec((err, doc) => {
        if(err)
            res.status(400).send(err)
        else
            res.status(200).json(doc)
    })
}
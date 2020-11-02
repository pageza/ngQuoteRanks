const mongoose = require('mongoose')

const Quote = mongoose.model('Quote')

module.exports = {
    allQuotes: (req,res) => {
        Quote.find()
            .then( author => res.json(author))
            .catch(err => res.json(err))
    },
    oneQuote: (req,res) => {
        Quote.findById({_id: req.params.id})
            .then( author => res.json(author))
            .catch( err => res.json(err))
    },
    createQuote: (req,res) => {
        Quote.findByIdAndUpdate({_id: req.params.id}, {
            quote: req.body.quote
        }, {runValidators: true})
            .then( data => res.json(data))
            .catch(err => res.json(err))
    },
    addAuthor: (req,res)=> {
        const newQuote = new Quote()
        newQuote.author = req.body.author;
        newQuote.save()
            .then( newQuote => res.json(newQuote))
            .catch( err => res.json(err))
    },
    addQuote: (req,res) => {
        Quote.findByIdAndUpdate( {_id: req.body.id}, {
            $push: {'quotes': {'quote' : req.body.quote}}
        }, {safe: true, upsert: true, new: true,runValidators: true})
            .then( data => res.json(data))
            .catch(err => res.json(err))
    },
    editQuote: (req,res) => {
        Quote.findByIdAndUpdate({_id: req.params.id}, {
            author: req.body.author
        }, {runValidators: true})
            .then( data => res.json(data))
            .catch(err => res.json(err))
    },
    voteUp: (req,res) => {
        //TODO: increment vote count for specific quote in quotes array
        // Quote.find({_id:})
    },
    voteDown: (req,res) => {
        //TODO: decrement vote count for specific quote in quotes array
    },
    destroyQuote: (req,res) => {
        //TODO: find author by and use $pull to remove quote from quotes array by quote id
    }

}

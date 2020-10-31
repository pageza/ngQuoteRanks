const mongoose = require('mongoose')

const Quote = mongoose.model('Quote')

module.exports = {
    allQuotes: (req,res) => {
        Quote.find()
            .then( author => res.json(author))
            .catch(err => res.json(err))
    },
    oneQuote: (req,res) => {
        Quote.findOne({_id: req.params.id})
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
    editQuote: (req,res) => {
        Quote.findByIdAndUpdate({_id: req.params.id}, {
            author: req.body.author
        }, {runValidators: true})
            .then( data => res.json(data))
            .catch(err => res.json(err))
    },
    destroyQuote: (req,res) => {
        Quote.deleteOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }

}

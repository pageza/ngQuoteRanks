// Requiring mongoose for funcationality
// const mongoose = require('mongoose');
// require the the controllers from "../controller/<file names>"
const quote = require('../controllers/Quotes');
const path = require('path')


module.exports = (app) => {
    // This is where all the routes go, calling on functions from the controllers
    app.get('/quotes', (req, res) => {
        quote.allQuotes(req,res)
    });

    app.get('/quotes/:id', (req, res) => {
        quote.oneQuote(req,res)
    });
    app.post('/quotes/author', (req,res) => {
        quote.addAuthor(req,res)
    })
    app.post('/quotes', (req, res) => {
        quote.createQuote(req,res)
    });

    app.put('/quotes/:id', (req, res) => {
        quote.editQuote(req,res)
    });

    app.delete('/quotes/:id', (req, res) => {
        quote.destroyQuote(req,res)
    });
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    })
}

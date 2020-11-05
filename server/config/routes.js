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
    app.put('/vote/:id', (req,res) => {
        quote.vote(req,res)
    })
    app.put('/quotes/author/:id', (req, res) => {
        quote.editQuote(req,res)
    });
    app.put('/author/quote/:id', (req,res) => {
        quote.addQuote(req,res)
    })
    app.patch('/quotes/:id', (req, res) => {
        quote.destroyQuote(req,res)
    });
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    })
}

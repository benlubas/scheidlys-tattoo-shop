const router = require('express').Router(); 
let Quote = require('../models/quote.model'); 

router.route('/').get( (req, res) => {
  Quote.find()
  .then(quotes => res.json(quotes))
  .catch(err => res.status(400).json('Error: ' + err)); 
});

router.route('/add').post((req, res) => {
  const num = Number(req.body.num); 
  const title = req.body.title; 
  const context = req.body.context; 
  const date = Date.parse(req.body.date); 
  const quote = req.body.quote; 

  const newQuote = new Quote({
    num, title, context, quote, date
  });
  
  newQuote.save()
  .then( () => res.json('Quote Added!'))
  .catch(err => res.status(400).json('Error: ' + err)); 
});

router.route('/:id').get((req, res) => {
  Quote.findById(req.params.id)
    .then(() => res.json('Quote Deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Quote.findByIdAndDelete(req.params.id)
  .then(() => res.json('Quote Deleted'))
  .catch( err => res.status(400).json('Error: ' + err)); 
});
router.route('/update/:id').delete((req, res) => {
  Quote.findById(req.params.id)
    .then( quote => {
      quote.num = Number(req.body.num);
      quote.context = req.body.context;
      quote.title = req.body.title;
      quote.quote = req.body.quote;
      quote.date = Date.parse(req.body.date);

      quote.save()
      .then(() => res.json('Quote updated!'))
      .catch(err => res.status(400).json('Error' + err)); 
    })
    .catch(err => res.status(400).json('Error: ' + err));
})
module.exports = router; 
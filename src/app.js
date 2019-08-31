const express = require('express');
const morgan = require('morgan');
const books = require('./playbook.js');
const app = express();

app.use(morgan('common')); 


app.get('/apps', (req, res) => {
  const { genre = "", sort } = req.query;

  if(sort) {
    if(!['Rating', 'App'].includes(sort)) {
      return res
        .status(400)
        .send('Sort must be one of title or rank');
    }
  }

  let results = books
        .filter(book => 
            book
              .Genres
              .toLowerCase()
              .includes(genre.toLowerCase()));

  if(sort) {
    results
      .sort((a, b) => {
        return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
    }); 
  }  

  res
    .json(results);
});
app.listen(8000, () => {
  console.log('Server started on PORT 8000');
});

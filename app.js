const express = require('express')
const bodyParser = require('body-parser')

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const port = 3000

var data = {
  "books": [
    {
      "title": "Learn Git in a Month of Lunches",
      "isbn": "1617292419",
      "pageCount": 0,
      "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
      "status": "MEAP",
      "authors": ["Rick Umali"],
      "categories": []
    },
    {
      "title": "MongoDB in Action, Second Edition",
      "isbn": "1617291609",
      "pageCount": 0,
      "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
      "status": "MEAP",
      "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
      ],
      "categories": []
    },
    {
      "title": "Getting MEAN with Mongo, Express, Angular, and Node",
      "isbn": "1617292036",
      "pageCount": 0,
      "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
      "status": "MEAP",
      "authors": ["Simon Holmes"],
      "categories": []
    }
  ]
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/datarep', (req, res) => {
  console.log(req.path);
  res.send('Welcome to Data Representation and Querying');
})

app.get('/name', (req, res)=>{
  res.send('Hello ' + req.query.fname + ' ' + req.query.lname);
})
app.post('/name', (req, res)=>{
  res.send('Hello ' + req.body.fname + ' ' + req.body.lname);
 console.log(req.body);
 res.send('Hello from post');
})

//app.get('/*', (req, res)=>{
// res.send(req.path.substring(req.path.lastIndexOf('/') + 1));
//})

app.get('/hello/:name', (req, res) => {
  res.send('Hello ' + req.params.name);
})

app.get('/api/books', (req, res) => {
  res.json({mybooks:data});
})

app.get('/test', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`)
})
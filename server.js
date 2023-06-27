// Require modules
const express = require('express');
const path = require('path');
// Create the Express app
const app = express();

// require the To Do "database"
const todoDb = require('./data/todo-db');
// require the students "database"
const studentDb = require('./data/student-db');
  
// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Mount middleware (app.use)
  
  
// Mount routes
// app.get('/', function (req, res) {
//   res.send('<h1>Hello Express!</h1>');
// });
app.get('/', function(req, res) {
    res.redirect('/home');
  });
  
app.get('/home', function(req, res) {
    res.render('home')
})

app.get('/todos', function(req, res) {
    res.render('todos/index', {
      todos: todoDb.getAll()
    });
  });  

app.get('/students', function(req, res) {
    res.render('students/index', {
      students: studentDb.getAll()
    });
}); 

app.get('/students/:id', function(req, res) {
    console.log(`The value for the :id route parameter is: ${req.params.id}`);
    res.render('students/show', {
        student: studentDb.getOne(req.params.id)
    });
});
  


// app.get('/cars', function(req, res) {
//     res.send("Here's a list of my cars...");
//   });
  
//   app.post('/cars', function(req, res) {
//     res.send('Thanks for the new car!');
//   });
  
  
// Tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
});

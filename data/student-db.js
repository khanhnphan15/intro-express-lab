// data/student-db.js

const students = [{
  id: 1,
  name: 'Chris',
  age: 17,
  score: 80
},
{
  id: 2,
  name: 'James',
  age: 18,
  score: 59
},
{
  id: 3,
  name: 'Alex',
  age: 19,
  score: 38
},
{
  id: 4,
  name: 'Mary',
  age: 18,
  score: 71
},
{
  id: 5,
  name: 'Robert',
  age: 17,
  score: 96
}
];

module.exports = {
  getAll: function () {
    return students;
  },
  getOne: function(id) {
    return students[id - 1];
  }
};

  // const path = require('path');

// // require the To Do "database"
// const studentDb = require('./data/student-db');

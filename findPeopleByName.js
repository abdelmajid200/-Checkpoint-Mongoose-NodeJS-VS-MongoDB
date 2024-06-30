const mongoose = require('mongoose');
const Person = require('./person');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const nameToFind = 'John Doe';

    Person.find({ name: nameToFind }, (err, data) => {
      if (err) {
        console.error('Error finding people:', err);
      } else {
        console.log('People found:', data);
      }
      mongoose.connection.close();
    });
  })
  .catch(err => console.error('Database connection error:', err));

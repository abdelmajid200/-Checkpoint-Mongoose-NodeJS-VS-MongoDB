const mongoose = require('mongoose');
const Person = require('./person');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const foodToFind = 'Pizza';

    Person.findOne({ favoriteFoods: foodToFind }, (err, data) => {
      if (err) {
        console.error('Error finding person:', err);
      } else {
        console.log('Person found:', data);
      }
      mongoose.connection.close();
    });
  })
  .catch(err => console.error('Database connection error:', err));

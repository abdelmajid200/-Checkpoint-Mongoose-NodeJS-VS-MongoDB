const mongoose = require('mongoose');
const Person = require('./person');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const personId = 'somePersonId';

    Person.findById(personId, (err, data) => {
      if (err) {
        console.error('Error finding person by ID:', err);
      } else {
        console.log('Person found by ID:', data);
      }
      mongoose.connection.close();
    });
  })
  .catch(err => console.error('Database connection error:', err));

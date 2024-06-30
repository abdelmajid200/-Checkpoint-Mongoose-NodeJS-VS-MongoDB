const mongoose = require('mongoose');
const Person = require('./person');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const nameToRemove = 'Mary';

    Person.remove({ name: nameToRemove }, (err, result) => {
      if (err) {
        console.error('Error removing people:', err);
      } else {
        console.log('People removed successfully:', result);
      }
      mongoose.connection.close();
    });
  })
  .catch(err => console.error('Database connection error:', err));

const mongoose = require('mongoose');
const Person = require('./person');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const personId = 'somePersonId';

    Person.findByIdAndRemove(personId, (err, removedPerson) => {
      if (err) {
        console.error('Error removing person:', err);
      } else {
        console.log('Person removed successfully:', removedPerson);
      }
      mongoose.connection.close();
    });
  })
  .catch(err => console.error('Database connection error:', err));

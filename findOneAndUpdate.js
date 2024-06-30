const mongoose = require('mongoose');
const Person = require('./person');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const personName = 'John Doe';
    const update = { age: 20 };

    Person.findOneAndUpdate({ name: personName }, update, { new: true }, (err, updatedPerson) => {
      if (err) {
        console.error('Error updating person:', err);
      } else {
        console.log('Person updated successfully:', updatedPerson);
      }
      mongoose.connection.close();
    });
  })
  .catch(err => console.error('Database connection error:', err));

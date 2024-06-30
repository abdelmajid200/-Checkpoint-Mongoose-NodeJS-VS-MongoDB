const mongoose = require('mongoose');
const Person = require('./person');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const personId = 'somePersonId';

    Person.findById(personId, (err, person) => {
      if (err) {
        console.error('Error finding person by ID:', err);
      } else {
        person.favoriteFoods.push('hamburger');

        person.save((err, updatedPerson) => {
          if (err) {
            console.error('Error saving updated person:', err);
          } else {
            console.log('Person updated successfully:', updatedPerson);
          }
          mongoose.connection.close();
        });
      }
    });
  })
  .catch(err => console.error('Database connection error:', err));

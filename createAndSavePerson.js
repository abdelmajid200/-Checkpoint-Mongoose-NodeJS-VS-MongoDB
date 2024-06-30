const mongoose = require('mongoose');
const Person = require('./person');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
   
    const newPerson = new Person({
      name: 'John Doe',
      age: 30,
      favoriteFoods: ['Pizza', 'Burger']
    });


    newPerson.save((err, data) => {
      if (err) {
        console.error('Error saving person:', err);
      } else {
        console.log('Person saved successfully:', data);
      }
      mongoose.connection.close();
    });
  })
  .catch(err => console.error('Database connection error:', err));

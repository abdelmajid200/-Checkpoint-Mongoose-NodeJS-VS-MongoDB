const mongoose = require('mongoose');
const Person = require('./person');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const arrayOfPeople = [
      { name: 'Alice', age: 25, favoriteFoods: ['Salad', 'Sandwich'] },
      { name: 'Bob', age: 22, favoriteFoods: ['Steak', 'Fries'] },
      { name: 'Charlie', age: 28, favoriteFoods: ['Pasta', 'Pizza'] }
    ];

    Person.create(arrayOfPeople, (err, data) => {
      if (err) {
        console.error('Error creating people:', err);
      } else {
        console.log('People created successfully:', data);
      }
      mongoose.connection.close();
    });
  })
  .catch(err => console.error('Database connection error:', err));

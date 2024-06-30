const mongoose = require('mongoose');
const Person = require('./person');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const foodToSearch = 'burritos';

    Person.find({ favoriteFoods: foodToSearch })
      .sort('name')
      .limit(2)
      .select('-age')
      .exec((err, data) => {
        if (err) {
          console.error('Error finding people:', err);
        } else {
          console.log('People found:', data);
        }
        mongoose.connection.close();
      });
  })
  .catch(err => console.error('Database connection error:', err));

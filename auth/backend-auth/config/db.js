const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://ich_editor:verystrongpassword@mongo.itcareerhub.de/?readPreference=primary&ssl=false&authMechanism=DEFAULT&authSource=ich_edit', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

module.exports = connectDB;
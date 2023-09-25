var mongoose = require('mongoose'); 
require('dotenv').config();
const PORT = process.env.PORT || 3000;
var gracefulShutdown;
var dbURI = "mongodb://localhost:27017/CareerBuilder/"; 
if(process.env.NODE_ENV==='production'){
    dbURI = process.env.MONGODB_URI;
}
mongoose.connect(dbURI); 
mongoose.connection.on('connected', function () { 
    console.log('Mongoose connected to ' + dbURI); 
});
mongoose.connection.on('error', function (err) { 
    console.log('Mongoose connection error: ' + err); 
});
mongoose.connection.on('disconnected', function () { 
    console.log('Mongoose disconnected'); 
}); 


// Create a route to handle signup
app.post('/signup', async (req, res) => {
    try {
      // Create a new instance of the Signup model with data from the request
      const newSignup = new Signup({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
  
      // Save the new signup document to the database
      await newSignup.save();
  
      // Respond with a success message
      res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
      console.error('Error during signup:', error);
      res.status(500).json({ message: 'Signup failed' });
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  

require('./locations');

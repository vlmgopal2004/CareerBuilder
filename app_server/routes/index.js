require('dotenv').config();
const express = require('express');
const router = express.Router();
const featuresController = require('../controllers/features'); // Assuming it's 'featuresController' instead of 'featuresRoutes'
const aboutController = require('../controllers/about');
const contactController = require('../controllers/contact');
const pagesController = require('../controllers/pages');

router.get('/features', featuresController.getFeaturesPage);
router.get('/about', aboutController.getAboutPage);
router.get('/contact', contactController.getContactPage);

router.get('/login',pagesController.getLogin );
  
// Route for the registration 
router.get('/signup', pagesController.getRegistration);




module.exports = router;

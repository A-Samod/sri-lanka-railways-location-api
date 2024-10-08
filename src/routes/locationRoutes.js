const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

router.post('/location', locationController.createLocation);
router.get('/location/:trainId', locationController.getCurrentLocation);
router.get('/locations', locationController.getLocations);

// Fetch location history logs
router.get('/location-history', locationController.getLocationHistory);

module.exports = router;
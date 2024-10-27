const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'shophome.html'));
});

router.get('/shopabout', function(req, res) {
    res.sendFile(path.join(__dirname, 'shopabout.html'));
});

router.get('/shophome', function(req, res) {
    res.sendFile(path.join(__dirname, 'shophome.html'));
});

router.get('/products', function(req, res) {
    res.sendFile(path.join(__dirname, 'products.html'));
});

router.get('/shopgallery', function(req, res) {
    res.sendFile(path.join(__dirname, 'shopgallery.html'));
});

router.get('/shopcontact', function(req, res) {
    res.sendFile(path.join(__dirname, 'shopcontact.html'));
});

module.exports = router;
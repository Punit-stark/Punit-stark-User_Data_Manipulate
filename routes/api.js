const express = require('express');
const router = express.Router();
const { addUser, addButton, getUser } = require('../controllers/userController');

router.post('/addUser', addUser);
router.post('/addButton', addButton);
router.get('/getUser', getUser); 

module.exports = router;

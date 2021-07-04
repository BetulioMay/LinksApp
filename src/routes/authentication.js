const express = require('express');
const router = express.Router();

const passport = require('passport');
require('../lib/passport');

router.get('/signin', (req, res) =>{
	res.render('auth/signin');
});

router.post('/signin', (req, res, next) => {
	passport.authenticate('local.signin', {
		successRedirect : '/profile',
		failureRedirect : '/signin',
		failureFlash : true
	})(req, res, next);
});

router.get('/signup', (req, res) => {
	res.render('auth/signup');
});

// router.post('/signup', async (req, res) => {
// 	passport.authenticate('local.signup', {
// 		successRedirect : '/profile',
// 		failureRedirect : '/signup',
// 		failureFlash : true
// 	});
// 	res.send('New user added to db!');
// });
router.post('/signup', passport.authenticate('local.signup' , {
		successRedirect : '/profile',
		failureRedirect : '/signup',
		failureFlash : true
}));

router.get('/profile', (req, res) => {
	res.send('This is your profile');
});

module.exports = router;
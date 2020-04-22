	import { Router } from 'express';
import passport from 'passport';
import User from '../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import auth from '../lib/auth';

const router = Router();

//login
router.post('/login', (req, res) => {
	const { email, password } = req.body;

	//simple validation
	if(!email || !password) {
		return res.status(400).json({msg: 'Please enter all fields'});
	}

	//email is valid
	const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const emailValid = regexp.test(email);
	if(!emailValid) {
		return res.status(400).json({msg: 'Please enter a valid email address'});
	}

	User.findOne({ email })
		.then(user => {
			if(!user) return res.status(400).json({ msg: 'User does not exist' }); 
		
			//validate password
			bcrypt.compare(password, user.password)
				.then(isMatch => {
					if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
					
					jwt.sign(
						{ id: user.id },
						process.env.JWT_SECRET,
						{ expiresIn: 3600 },
						(err, token) => {
							if(err) throw err;
							
							res.json({
								token,
								user: {
									id: user.id,
									username: user.username,
									email: user.email
								}
							})
					})
			})	
	});
})
//logout
router.get('/logout', (req, res) => {
	req.logout();
	return res.redirect('/');
});

router.get('/auth', auth, (req, res) => {
	User.findById(req.user.id)
		.select('-password')
		.then(user => res.json(user));
});



router.get('/registration', async (req, res) => {
    const userSuccess = await req.context.models.User.find();
      return res.send(userSuccess);
	});
	

//for user registration
router.post('/registration', (req, res, next) => {
	const { username, email, password, passwordConfirmation } = req.body;
	//simple validation
	if(!username || !email || !password || !passwordConfirmation) {
		return res.status(400).json({msg: 'Please enter all fields'});
	}
	//username is at least 3 char long
	if( username.length < 3) {
		return res.status(400).json({msg: 'Username must be at least 3 characters long'})
	}

	//email is valid
	const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const emailValid = regexp.test(email);
	if(!emailValid) {
		return res.status(400).json({msg: 'Please enter a valid email address'});
	}

	//password is long enough
	if( password.length < 8 ) {
		return res.status(400).json({ msg: 'The password must be at least 8 characters long' })
	}

	//password and password confirmation are the same
	const passwordValid = password === passwordConfirmation;
	if(!passwordValid) {
		return res.status(400).json({msg: 'Password and password confirmation do not match'})
	}


	//check for existing user
	User.findOne({ email })
		.then(user => {
			if(user) return res.status(400).json({ msg: 'User already exists' }); 
		
			const newUser = new User({
				username,
				email,
				password
			});

			//create salt & hash
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if(err) throw err;
					newUser.password = hash;
					newUser.save()
						.then(user => {

							jwt.sign(
								{ id: user.id },
								process.env.JWT_SECRET,
								{ expiresIn: 3600 },
								(err, token) => {
									if(err) throw err;
									
									res.json({
										token,
										user: {
											id: user.id,
											username: user.username,
											email: user.email
										}
									})
								}
							)
						})
				})
			})
		})
	});


export default router;
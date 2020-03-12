import { Router } from 'express';
import passport from 'passport';
import User from '../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const router = Router();

//login
router.post('/login', passport.authenticate('local',{
	successRedirect: '/',
	failureRedirect: '/users/login?error=true',
}));

//logout
router.get('/logout', (req, res) => {
	req.logout();
	return res.redirect('/');
});



router.get('/registration', async (req, res) => {
    const userSuccess = await req.context.models.User.find();
      return res.send(userSuccess);
	});
	

//for user registration
//missing validation if the user is already in database
router.post('/registration', (req, res, next) => {
	const { username, email, password } = req.body;
	//simple validation
	if(!username || !email || !password) {
		return res.status(400).json({msg: 'Please enter all fields'});
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
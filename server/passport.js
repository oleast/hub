
const LocalStrategy = require('passport-local').Strategy

module.exports = function(passport) {

	////////////////////////////////////////////////////////////
	// PASSPORT SESSION SETUP
	// required in order to keep persistent sessions
	// Passport also needs ability to serialize and deserialize users from session
	////////////////////////////////////////////////////////////

	// used to serialize the user for the session
	passport.serializeUser(function(user, done) {
		console.log('serializeUser')
		done(null, user.id)
	})

	// used to deserialize the user
	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			done(err, user)
		})
	})
	
	////////////////////////////////////////////////////////////
	// LOCAL SIGNUP
	// we are using named strategies since we have one for login and one for signup
	// by default, if there was no name, it would just be called 'local'
	////////////////////////////////////////////////////////////

	passport.use('local-signup', new LocalStrategy({
		usernameField : 'username',
		passwordField : 'password',
		passReqToCallback : true // allows us to pass back the entire request to the callback
	},
	function(req, username, password, done) {

		console.log('passport-local-signup-function')

		// find a user whose username is the same as the forms username
		// we are checking to see if the user trying to login already exists
		User.findOne({ 'local.username' :  username }, function(err, user) {
			// if there are any errors, return the error
			console.log('Username: ' + username)
			console.log('passport-local-signup-function-findone')
			if (err) {
				console.log('passport-local-signup-function-findone-error')
				console.log(err)
				return done(err)
			}

			// check to see if theres already a user with that username
			if (user) {
                console.log('Signup attempt, username in use')
                return done(null, false, null)
                
			} else {

				console.log('passport-local-signup-function-findone-else')
				// if there is no user with that username
				// create the user
				var newUser = new User()

				// set the user's local credentials
				newUser.local.username = username
				newUser.local.password = newUser.generateHash(password) // use the generateHash function in our user model

				// save the user
				newUser.save()
				    done(null, newUser)	
				}

		})

	}))

	////////////////////////////////////////////////////////////
	// LOCAL LOGIN
	////////////////////////////////////////////////////////////

	passport.use('local-login', new LocalStrategy({

		usernameField : 'username',
		passwordField : 'password',
		passReqToCallback : true // allows us to pass back the entire request to the callback
	},
	function(req, username, password, done) { // callback with username and password from our form
		console.log('Username: ' + username)
		console.log('passport-local-login-function')
		// find a user whose email is the same as the forms email
		// we are checking to see if the user trying to login already exists
		User.findOne({ 'local.username' :  username }, (err, user) => {
			// if there are any errors, return the error before anything else
			console.log(username + ' :|: ' + user)
			console.log('passport-local-login-function-findone')
			if (err) {
				console.log('passport-local-login-function-findone-error')
				//console.error(err)
				return done(err)
			}
			// if no user is found, return the message
            if (!user) {
                console.log('Login attempt, user not found')
				return done(null, false, { message: 'Unknown user ' + username })
			}
			// if the user is found but the password is wrong
            if (!user.validPassword(password)) {
                console.log('Login attempt, wrong password')
				return done(null, false, { message: 'Password doesn\'t match for user ' + username })
			}
			// all is well, return successful user
			console.log('passport-local-login-function-findone-y')
			return done(null, user)
		})
	}))
}
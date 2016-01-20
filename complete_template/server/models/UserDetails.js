

var mongoose = require('mongoose');

var UserDetailsSchema = {

	_id : String,  // unique uuid
	name: String,
	email: String,
	userName: String,
	password: String,

	content : [   // an array of Squares
		{
			id: String,
			title: String,  // Square title
			image: String,
			link : String
		}
	]
};

var UserDetails = mongoose.model("UserDetails", UserDetailsSchema, "userDetails");

module.exports = UserDetails;



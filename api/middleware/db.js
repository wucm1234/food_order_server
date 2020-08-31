const mongoose = require('mongoose');

const db = () => {
	mongoose
		//.connect('mongodb://mongo:27017/hobbycorn-node-mongo', {
		.connect('mongodb+srv://flora:WSXwUWNJ72i2vs9@cluster0.mgcku.mongodb.net/meal_app?retryWrites=true&w=majority', {
			userNewUrlParser: true,
			useUnifiedTopology: true,
			useNewUrlParser: true
		})
		.then(() => console.log('Mongodb Connection'))
		.catch(err => console.log(err));

	mongoose.Promise = global.Promise;
};

module.exports = { db };

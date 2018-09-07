var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
var formSchema = new Schema({ 
 fullname: {type: String, required: true}, 
 email: {type: String, required: true}, 
 message: {type: String, required: true}
}); 

module.exports = mongoose.model('ContactForm', formSchema);
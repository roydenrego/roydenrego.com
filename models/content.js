var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
var projectSchema = new Schema({ 
 title: {type: String, required: true}, 
 description: {type: String, required: true}, 
 image_url: {type: String, required: true},
 content: {type: String, required: true}
}); 

module.exports = mongoose.model('Project', projectSchema);
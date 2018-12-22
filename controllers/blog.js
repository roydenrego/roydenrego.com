module.exports.set = function(app) {
    
    var blogRouter = require('../routes/blog.js');
    app.use('/blog', blogRouter);
}
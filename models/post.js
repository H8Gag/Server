var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: String,
    image: String,
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
})

var Post = mongoose.model('Post', postSchema);
module.exports = Post
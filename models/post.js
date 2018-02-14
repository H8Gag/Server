var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var postSchema = new Schema({
    title: String,
    image: String,
    score: Number,
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    votersArray:[
        {type: Schema.Types.ObjectId, ref: 'User'}

    ]
})

var Post = mongoose.model('Post', postSchema);
module.exports = Post
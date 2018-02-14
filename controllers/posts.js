var Post = require('../models/post')

const findAll = (req,res)=>{
    Post.find()
     .then(docs=>{
         res.status(200).send({message:'post data ',data:docs})
     })
}

const createPost = (req,res)=>{
    console.log(',asik')
    let post = new Post({
        title:req.body.title,
        image: req.body.image,
        userId:req.body.userId
    })
    post.save()
     .then(doc=>{
         res.send(doc)
     })
     .catch(err=>{
         res.send(err)
     })
}







module.exports = {
    findAll,
    createPost
}
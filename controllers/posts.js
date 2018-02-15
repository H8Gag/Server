var Post = require('../models/post')


const findAll = (req,res)=>{
    Post.find()
     .then(docs=>{
         res.status(200).send({message:'post data ',data:docs.reverse()})
     })
}

const createTestImaageInput = (req,res)=>{
    console.log('masuk ke image nih')
    console.log(req.file)
    let post = new Post({
        title: req.body.title,
        image: req.file.path,
        userId: req.headers.userid
    })
    post.save()
        .then(doc => {
            res.send(doc)
        })
        .catch(err => {
            res.send(err)
        })
}

const createPostWithUploadGcs = (req,res)=>{
    console.log(req.headers)
    let post = new Post({
        title: req.body.title,
        image: req.file.cloudStoragePublicUrl,
        userId: req.headers.userid
    })
    post.save()
        .then(doc => {
            res.send(doc)
        })
        .catch(err => {
            res.send(err)
        })

}

const updateScore = (req,res)=>{
    // id meme // id user
    console.log('update score',req.body)
    let condition = req.body.status
     if(condition == 'up'){
         Post.findOne({
             "_id": req.params.id
         }).then(doc => {
            
             if ((doc.votersArray.indexOf(req.headers.userid)) == -1){
                 doc.score += 1
                 doc.votersArray.push(req.headers.userid)
                 doc.save()
                     .then(doc => {
                         res.send({add:true,doc})
                     })
             }else{
                 res.send({add: false, message:'u have already voted',data:doc})
             }
               
         })
             .catch(err => { err })

     }else if(condition == 'down'){
         Post.findOne({
             "_id": req.params.id
         }).then(doc => {
             if ((doc.votersArray.indexOf(req.headers.userid)) == -1) {
                 doc.score -= 1
                 doc.votersArray.push(req.headers.userid)
                 doc.save()
                     .then(doc => {
                         res.send({add:true, doc})
                     })
             } else {
                 res.send({ add:false,message: 'u have already voted' })
             }
         })
             .catch(err => { err })
     }
  
}

const createPost = (req,res)=>{
    
    let post = new Post({
        title:req.body.title,
        image: req.file,
        userId:req.headers.userid
    })
    post.save()
     .then(doc=>{
         res.send(doc)
     })
     .catch(err=>{
         res.send(err)
     })
}

const findOne =(req,res)=>{
    Post.findOne({"_id":req.params.id})
     .then(doc=>{
         res.status(200).send({message:'heres your post ',data:doc})
     })
     .catch(err=>{res.send(err)})
}

const editPost = (req,res)=>{
    Post.update({'_id':req.params.id},{$set:req.body})
     .then(doc=>{
         res.status(200).send({message:'updated',data:doc})
     })
     .catch(err=>{res.send(err)})
}

const deletePost = (req,res)=>{
    Post.remove({'_id':req.params.id})
     .then(doc=>{
         res.status(200).send({message:'data has been deleted',data:doc})
     })
     .catch(err=>{res.send(err)})
}


module.exports = {
    findAll,
    createPost,
    editPost,
    findOne,
    deletePost,
    createTestImaageInput,
    createPostWithUploadGcs,
    updateScore
}
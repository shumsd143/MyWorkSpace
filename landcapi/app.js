const express = require('express')
const mongodb = require('mongodb')
const app = express()
const HOSTNAME =process.env.HOSTNAME || '127.0.0.1'
const PORT = process.env.PORT || 2222
const DB_URI ='mongodb+srv://todos:shubham@cluster0-vh32b.mongodb.net/test?retryWrites=true&w=majority'
const cors=require('cors')


app.use(express.json())
app.use(cors())


console.log('checking connection with the DB...')
mongodb.MongoClient.connect(DB_URI, (error, dbClient) => {
    if (error) {
        console.log('error connecting to dbClient', error)
        return
    }
    console.log('successfully connected to the dbClient.')
    const database = dbClient.db('imager')
    app.get('/get/',(req,res)=>{
        const collection=database.collection('imager')
        collection.find({}).toArray().then(data => {
          // console.log(data)
          res.send({
              message: 'success',
              data: data
          })
        })
    })
    app.post('/add/',(req,res)=>{
        console.log(req.body)
            let obj={
                imgname:req.body.imgname,
                comment:req.body.comment
            }
            database.collection('imager').insertOne(obj,(err,response)=>{
            if(err){
                console.log('some error in post',err)
                return
            }
            res.send(obj)
        })
    })
    app.get('/geturl/',(req,res)=>{
        const collection=database.collection('imgurl')
        collection.find({}).toArray().then(data => {
          // console.log(data)
          res.send({
              message: 'success',
              data: data
          })
        })
    })
    app.post('/addurl/',(req,res)=>{
        console.log(req.body)
            let obj={
                imgurl:req.body.imgurl,
                lbut:0
            }
            database.collection('imgurl').insertOne(obj,(err,response)=>{
            if(err){
                console.log('some error in post',err)
                return
            }
            res.send(obj)
        })
    })
    app.listen(PORT, () => {
    console.log(`The server is running at http://${HOSTNAME}:${PORT}/`)
    })
})
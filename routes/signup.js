var express = require('express');
var router = express.Router();
let mongoClient= require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('signup');
});


router.post('/',function(req,res){
    let myname=req.body.name;
    let username=req.body.uname;
    let email=req.body.email;
    let password=req.body.pass;
    let mobile=req.body.phno;

    console.log(myname);

    let url='mongodb://localhost:27017';

    mongoClient.connect(url, function (err,client) {
        if(err){
            console.log('database connection error'+ err)
        }
        else{

            let myDb=client.db('mysample');

            if(myDb){
                console.log('connected')
            }

            myDb.collection('person').insertOne({name:myname,username:username,email:email,password:password,mobile:mobile},
                function (err,result) {
                if(err)
                {
                    console.log('error'+ err)
                }
                else{
                    console.log('Successfully inserted:'+ result)
                }
            })
        }
    })


})


module.exports = router;

var express = require('express');
var router = express.Router();

let mongoclient=require('mongodb').MongoClient;

/* GET home page. */
router.post('/', function(req, res, next) {
    let username=req.body.uname;
    let password=req.body.pass;

    console.log(username);

    let url='mongodb://localhost:27017';

    mongoclient.connect(url,function (error,client) {
        if (error){
            console.log('database connection Error'+ error);
        }
        else {
            let Mydb=client.db('mysample');

            if(Mydb){
                console.log('connected');
            }

            Mydb.collection('person').findOne({username:username,password:password},function (error,result) {
                if(error)
                {
                    console.log("error found"+ error)
                }
                else{
                    if(result){
                        console.log("Login Success");
                    }
                    else{
                        console.log("Login failed");
                    }
                }
            })
        }

    })
});

module.exports = router;

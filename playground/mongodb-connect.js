const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/TodoApp';

//const dbName='Todos';

MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log("unable to connect to database");
    }
    console.log("Connected to mongodb server");
    const db = client.db('TodoApp');
    //add to db
    // db.collection('Todos').insertOne({
    //     text:'smth to do',
    //     completed:false
    // },(err,result)=>{
    // if (err){
    //     return console,log('unable to inser todo',err);
    // }
    // console.log(JSON.stringify(result.ops,undefined,2));
    // })
    db.collection('Users').insertOne(
        {
            name: 'hayouni',
            age: 25,
            location: 'calgary'
        }, (err, result) => {
            if (err) { return console.log('unable to insert to db'); }
            console.log(JSON.stringify(result.ops, undefined, 2));
        }
    );
    client.close();
});
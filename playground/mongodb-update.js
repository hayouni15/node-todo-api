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
db.collection('Todos').findOneAndUpdate({text:'smth'},{$set:{completed:true}},{returnOriginal:false},(err,result)=>
{
if(err){
    return console.log('unable to update');
}
console.log(result);
})

db.collection('Users').findOneAndUpdate({name:'hayouni'},{$set:{name:'abdessattar'},$inc:{age:5}},{returnOriginal:false},(err,result)=>{
    if(err){
        return console.log('unable to update');
    }
    console.log(result);
})

});
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

    // db.collection('Todos').find().toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    //     client.close();
    // }, (err) => {
    //     console.log("unable to fetch");
    // })
db.collection('Todos').deleteMany({text:'todo 2'},(err,result)=>
{
if(err){
    return console.log('unable to delete');
}
console.log(result);
})

});
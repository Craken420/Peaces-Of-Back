var csvjson = require('csvjson'),
    fs = require('fs'),
    mongodb = require('mongodb'),
    MongoClient = mongodb.MongoClient,
    mongoDSN = 'mongodb://localhost:27017/test',
    collection;

    const path = 'Achivos/orders_sample.csv'

uploadcsvModule(path);

function uploadcsvModule(path){
    var data = fs.readFileSync( 'Achivos/orders_sample.csv', { encoding : 'utf8'});
    var importOptions = {
        delimiter : ',', // optional 
        quote     : '"' // optional 
    },ExportOptions = {
        delimiter   : ",",
        wrap        : false
    }
    var myobj = csvjson.toSchemaObject(data, importOptions)
    var exportArr = [], importArr = [];
    myobj.forEach(d=>{
        if(d.orderId==undefined || d.orderId=='') {
            exportArr.push(d)
        } else {
            importArr.push(d)
        }
    })
    var csv = csvjson.toCSV(exportArr, ExportOptions);
    MongoClient.connect(mongoDSN, function(error, db) {
        collection = db.collection("orders")
        collection.insertMany(importArr, function(err,result){
            fs.writeFile(path, csv, { encoding : 'utf8'});
            db.close();
        });
    })
}
var filemanager = require('easy-file-manager')
var path = "/public"
var filename = "test.jpg"
var data; // buffered image

filemanager.upload(path,filename,data,function(err){
    if (err) console.log(err);
});

filemanager.remove(path,"aa",filename,function(isSuccess){
    if (err) console.log(err);
})
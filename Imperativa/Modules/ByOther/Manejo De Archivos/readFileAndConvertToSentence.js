

var readMyFile = function(path, cb) {
    fs.readFile(path, 'utf8', function(err, content) {
      if (err) return cb(err, null);
      cb(null, content);
    });
  };
//Adding on you can write to file,

var createMyFile = (path, data, cb) => {
fs.writeFile(path, data, function(err) {
  if (err) return console.error(err);
  cb();
});
};
//and even chain it together

var readFileAndConvertToSentence = function(path, callback) {
readMyFile(path, function(err, content) {
  if (err) {
    callback(err, null);
  } else {
    var sentence = content.split('\n').join(' ');
    callback(null, sentence);
  }
});
};

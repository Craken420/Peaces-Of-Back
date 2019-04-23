var data = [{'test': '123', 'test2': 'Lorem Ipsem '}];        
fs.open(datapath + '/data/topplayers.json', 'wx', function(error, fileDescriptor){        
  if(!error && fileDescriptor){        
      var stringData = JSON.stringify(data);        
      fs.writeFile(fileDescriptor, stringData, function(error){        
          if(!error){        
              fs.close(fileDescriptor, function(error){        
                  if(!error){        
                      callback(false);        
                  }else{        
                      callback('Error in close file');
                  }        
              });        
          }else{        
              callback('Error in writing file.');
          }        
      });        
  }        
})    
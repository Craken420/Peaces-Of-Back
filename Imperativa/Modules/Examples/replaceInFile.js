// Basic usage
//Load the library and specify options
const replac = require('replace-in-file');

const options = {
    files: 'Archivos/Something Abou Us.txt',
    from: /Something About Us/g,
    to: 'Angelooooooooooooooooos',
}

// // Asynchronous replacement with async/await
async function replaceAsync (options) {
    try {
    const changes = await replac(options)
    console.log('Modified files:', changes.join(', '));
    }
    catch (error) {
    console.error('Error occurred:', error);
    }
}

replaceAsync(options)

// const options = {
//     ignore: 'path/to/ignored/file',
//   };

// // Asynchronous replacement with promises
// replace(options)
//   .then(changes => {
//     console.log('Modified files:', changes.join(', '));
//   })
//   .catch(error => {
//     console.error('Error occurred:', error);
//   });


// // Asynchronous replacement with callback
// replace(options, (error, changes) => {
//   if (error) {
//     return console.error('Error occurred:', error);
//   }
//   console.log('Modified files:', changes.join(', '));
// });



// // Synchronous replacement
// try {
//   const changes = replace.sync(options);
//   console.log('Modified files:', changes.join(', '));
// }
// catch (error) {
//   console.error('Error occurred:', error);
// }


// // Return value
// // The return value of the library is an array of file names of files that were modified (e.g. had some of the contents replaced). If no replacements were made, the return array will be empty.
// const changes = replace.sync({
//   files: 'path/to/files/*.html',
//   from: 'foo',
//   to: 'bar',
// });
 
// console.log(changes);



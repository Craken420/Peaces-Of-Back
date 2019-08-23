const path = require('path')
console.log(
    'root:', root,'\n',
    // '\ndirname:\n',path.dirname(root),
    // '\nformat:\n',path.format(root),
    // '\nisAbsolute:\n',path.isAbsolute(root),
    // '\njoin:\n',path.join(root),
    // '\nnormalize:\n',path.normalize(root),
    '\nparse:\n',path.parse(root),
    // '\nrelative:\n',path.relative(root),
    '\nresolve:\n',path.resolve(root),
)
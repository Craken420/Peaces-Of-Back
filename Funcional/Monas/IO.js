const ioLogger = message => IO(() => console.log(message))

ioLogger('some important message here')
.runIO() // Shows 'some importart message here'
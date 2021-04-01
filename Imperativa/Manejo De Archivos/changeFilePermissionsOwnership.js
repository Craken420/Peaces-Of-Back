// Change permission to 777
fs.chmodSync('test.txt', '777');

// Change ownership to root:root.
// It wants user and group Id number not username
// To actually run this you would need root privileges
var userId = 0;
var groupId = 0;
fs.chownSync('test.txt', userId, groupId);
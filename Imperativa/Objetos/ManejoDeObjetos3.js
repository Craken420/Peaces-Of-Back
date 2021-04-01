var o = {a: 7, get b() {return this.a + 1;}, set c(x) {this.a = x / 2}};

console.log( o.a)
console.log( o.b)
console.log(o.c = 50)
console.log(o.a)

var d = Date.prototype;

Object.defineProperty(d, "year", {
    get: function() {return this.getFullYear() },
    set: function(y) { this.setFullYear(y) }
});

var now = new Date;

print(now.year);

2000
now.year = 2001;
987617605170
print(now)
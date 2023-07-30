"use strict";

var _lib = require("./lib");
console.log(_lib.pi);
console.log((0, _lib.power)(3, 8));
var f = new _lib.Foo();
console.log(f.foo());
console.log(f.getPrivate());
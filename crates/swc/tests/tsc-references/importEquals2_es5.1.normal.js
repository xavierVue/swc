// @esModuleInterop: true
// @Filename: /a.ts
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var A = function A() {
    "use strict";
    _class_call_check(this, A);
};
// @Filename: /b.ts
import * as a from "./a";
// @Filename: /c.ts
var a = require("./b");
new a.A(); // Error
module.exports = a;
